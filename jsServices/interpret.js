/*==============================================================================
  We had to resort to using API LLM (Gemini) instead of Ollama because the free deployment can't locally host 
  even the tiniest model ollama there is. Therefore we are using a free tier API instead.

  If we are to plan this out for future endeavor, we can use the Ollama approach to make it fully independent. But for now, 
  for testing purposes, API LLM is enough.


  ------------------------------------------------------------------------------
  Old NLP interpretation backend was not using any LLm, Plan was a pure NLP approach (That was when we didnt fully understand 
  NLP yet an thought it was a type of model not a processing technique). 

  The old approach does make an interpretation but its a word swap approach, which makes stiff outputs not good for conversational use.

  [New Approach] LLM and NLP combined.
  We are utilizing the RAG approach, we have the dictionary Database and a backend that can retrieve and match, now to automate and give context to the
  LLM model (RAG wise) so even the cheapest, not so sophisticated LLM model can give a good output.



*/


/* =============================================================================
   HOW THE WHOLE THING WORKS
   ---------------------------------------
   1. RETRIEVE : find every slang term (and its variants) inside the user's text
    using the dictionary stored in MongoDB.
   2. SWAP     : build a "stiff" NLP translation by replacing each slang term with
    its short `plain` meaning (or its description if no `plain`).
    This is the always-available FALLBACK result.
   3. GENERATE : if USE_LLM=true, send the original text plus ONLY the matched
    dictionary entries (the "glossary") to a hosted LLM so it can
    rewrite the sentence naturally. (This is the RAG step.)
   4. GUARDRAIL: check the LLM output is sane. If it is not, or the API fails,
    we silently use the stiff NLP result from step 2 instead.

   The response includes `method` so you can see which path was used:
     'rag-llm' = LLM rewrite was used
     'nlp'     = stiff dictionary swap was used (fallback or LLM turned off)
   ============================================================================= */





// rewriteWithLLM : calls the hosted LLM (Gemini etc.) with the glossary
// passesGuardrail: sanity-checks the LLM output before we trust it
// Both live in ./rewrite.js

const { rewriteWithLLM, passesGuardrail } = require('./rewrite');

const express = require('express');
const nlp = require('compromise');          // NLP library: used here for verb inflection
const SlangTerm = require('./models/slangTerm'); // Mongoose model for the dictionary
const router = express.Router();

/**
 * escapeRegex
 * Makes a piece of text safe to put inside a regular expression by adding a
 * backslash before special characters like . * + ? ( ) [ ] etc.
 * Without this, a slang term like "w/e" or "(lol)" could break the regex.
 */
const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');


/* ---------------------------------------------------------------------------
   CACHING
   Loading and processing the whole dictionary on every request is very wasteful,
   so we keep the processed result in memory and reuse it for CACHE_MS.
   After that it reloads, so edits you make in MongoDB show up within a minute.
   (Restart the server to force an instant refresh.)
   --------------------------------------------------------------------------- */
let cache = { forms: null, loadedAt: 0 };
const CACHE_MS = 60 * 1000; // 60 seconds


/**
 * buildForms
 * Turns the list of dictionary entries into a fast lookup Map of every written
 * form we should recognise.
 *
 * Map shape:  "lowercase surface form" -> { entry, tense }
 *   - entry : the full dictionary document (term, description, plain, ...)
 *   - tense : which verb form this surface form is (used later to re-inflect
 *             the replacement so "cooked" becomes "defeated", not "defeat")
 *
 * Forms added per entry:
 *   1. the main `term`
 *   2. every alias (e.g. "bussing", "bussin'")
 *   3. for verbs only: auto-generated past / present / -ing forms
 *      ("cook" -> "cooked", "cooks", "cooking")
 *
 * `add` skips empty strings and never overwrites an existing key, so if two
 * entries share a form the first one wins.
 */
function buildForms(entries) {
  const forms = new Map(); // lowercase surface form -> { entry, tense }
  const add = (form, entry, tense = null) => {
    const key = (form || '').trim().toLowerCase();
    if (key && !forms.has(key)) forms.set(key, { entry, tense });
  };

  for (const entry of entries) {
    add(entry.term, entry, 'Infinitive');
    (entry.aliases || []).forEach((a) => add(a, entry, 'Infinitive'));

    // auto-generate inflections for verb slang ("cook" -> cooked, cooking)
    if (entry.partOfSpeech === 'verb') {
      const [c] = nlp(entry.term).verbs().conjugate();
      if (c) {
        ['PastTense', 'PresentTense', 'Gerund'].forEach((t) => add(c[t], entry, t));
      }
    }
  }
  return forms;
}

/**
 * getForms
 * Returns the lookup Map from buildForms, using the in-memory cache when it is
 * still fresh. Otherwise it reads the dictionary from MongoDB, drops unusable
 * entries (no term, or neither `plain` nor `description`), rebuilds the Map,
 * and refreshes the cache.
 */
async function getForms() {
  if (cache.forms && Date.now() - cache.loadedAt < CACHE_MS) return cache.forms;
  const all = await SlangTerm.find({}, 'term description example plain partOfSpeech aliases').lean();
  const usable = all.filter((s) => s.term && s.term.trim() && (s.plain || s.description));
  cache = { forms: buildForms(usable), loadedAt: Date.now() };
  return cache.forms;
}


/* ---------------------------------------------------------------------------
   GRAMMAR HELPERS  (used only by the stiff NLP swap / fallback path)
   --------------------------------------------------------------------------- */

/**
 * inflect
 * Puts a replacement word into the same verb form the slang was written in.
 * Example: plain = "defeat", tense = "PastTense"  ->  "defeated".
 * If there is no tense info, or compromise can't conjugate it, the word is
 * returned unchanged.
 */
function inflect(plain, tense) {
  if (!tense || tense === 'Infinitive') return plain;
  const [c] = nlp(plain).verbs().conjugate();
  return (c && c[tense]) || plain;
}

/**
 * matchCase
 * Copies the capitalisation style of the original text onto the replacement:
 *   "FIRE" -> "IMPRESSIVE",  "Fire" -> "Impressive",  "fire" -> "impressive".
 */
function matchCase(original, replacement) {
  if (original === original.toUpperCase() && original.length > 1) return replacement.toUpperCase();
  if (original[0] === original[0].toUpperCase()) {
    return replacement[0].toUpperCase() + replacement.slice(1);
  }
  return replacement;
}

/**
 * fixArticles
 * Repairs "a" / "an" after replacements, since swapping a word can change
 * whether the next word starts with a vowel sound ("a impressive" -> "an
 * impressive"). Has a small exception list for words like "unicorn" / "one"
 * that start with a vowel letter but a consonant sound. Keeps capital "A".
 */
function fixArticles(text) {
  return text.replace(/\b(a|an)(\s+)([a-z]\w*)/gi, (m, art, space, word) => {
    const vowelSound = /^[aeiou]/i.test(word) && !/^(uni|use|usu|eu|one)/i.test(word);
    let fixed = vowelSound ? 'an' : 'a';
    if (art[0] === art[0].toUpperCase()) fixed = fixed[0].toUpperCase() + fixed.slice(1);
    return fixed + space + word;
  });
}


/* ---------------------------------------------------------------------------
   MAIN LOGIC
   --------------------------------------------------------------------------- */

/**
 * interpretText
 * The RETRIEVE + SWAP part of the pipeline.
 *
 *  - Finds every slang form in `text` with one combined regex (longest forms
 *    first, so "no cap" is matched before "cap", and a single pass means
 *    replaced text is never re-scanned).
 *  - Builds the stiff NLP translation by swapping each match for its `plain`
 *    value (inflected + case-matched), or its `description` if no `plain`.
 *  - Collects `matches` (term names, for display) and `entries` (the full
 *    dictionary documents, used as the LLM glossary).
 *
 * Returns: { translation, matches, entries }
 *   translation : stiff NLP result (also our fallback)
 *   matches     : array of matched term names
 *   entries     : array of matched dictionary entries (for the LLM)
 */
async function interpretText(text) {
  console.log("InterpretText called with:", text);
  const forms = await getForms();
  if (!forms.size) return { translation: text, matches: [], entries: [] }; // empty dictionary

  // longest forms first so "no cap" beats "cap"
  const keys = [...forms.keys()].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`(?<!\\w)(${keys.map(escapeRegex).join('|')})(?!\\w)`, 'gi');

  const matches = [];
  const entries = []; // NEW: matched dictionary entries, passed to the LLM as the glossary
  let translation = text.replace(pattern, (found) => {
    const { entry, tense } = forms.get(found.toLowerCase());

    // record each distinct term once
    if (!matches.includes(entry.term)) {
      matches.push(entry.term);
      entries.push(entry);
    }

    const base = entry.plain || entry.description;
    const swapped = entry.plain ? inflect(base, tense) : base;
    console.log(`Matched: "${found}" -> "${swapped}" (tense: ${tense})`);
    return matchCase(found, swapped);
  });

  if (matches.length) translation = fixArticles(translation);
  return { translation, matches, entries };
}

/**
 * POST /api/interpret   (mounted under /api in server.js)
 * Body: { text: "..." }
 *
 * 1. Validates the input (must be a non-empty string, max 2000 chars).
 * 2. Runs interpretText to get the stiff NLP result + matched entries.
 * 3. If USE_LLM=true AND at least one slang term matched, asks the LLM to
 *    rewrite the sentence naturally using only those entries as the glossary.
 *    - Output passes the guardrail  -> use it, method = 'rag-llm'
 *    - Guardrail rejects / API error -> keep the NLP result, method = 'nlp'
 * 4. Responds with { original, translation, matches, method }.
 *
 * Text with no slang skips the LLM entirely (saves quota and time).
 */
router.post('/interpret', async (req, res) => {
  try {
    const { text } = req.body;
    if (typeof text !== 'string' || !text.trim()) {
      return res.status(400).json({ error: 'Text is required' });
    }
    if (text.length > 2000) {
      return res.status(400).json({ error: 'Text too long (max 2000 chars)' });
    }

    // Step 1+2: retrieve slang + build the stiff fallback translation
    const { translation: nlpResult, matches, entries } = await interpretText(text);

    let translation = nlpResult; // start with the fallback
    let method = 'nlp';

    // Step 3+4: optional LLM rewrite, protected by the guardrail
    if (process.env.USE_LLM === 'true' && entries.length) {
      try {
        const out = await rewriteWithLLM(text, entries);
        if (passesGuardrail(text, out, entries)) {
          translation = out;
          method = 'rag-llm';
        } else {
          console.warn('Guardrail rejected LLM output:', out);
        }
      } catch (err) {
        // quota hit, bad key, timeout, etc. -> user still gets the NLP result
        console.error('LLM unavailable, using NLP fallback:', err.message);
      }
    }
        // This grabs the details of the matched entries to send to our Angular again for display.
        const details = entries.map((e) => ({
        term: e.term,
        description: e.description,
        example: e.example,
        }));
    res.json({ original: text, translation, matches, details, method });
  } catch (err) {
    console.error('Interpret failed:', err);
    res.status(500).json({ error: 'Interpretation failed' });
  }
});

module.exports = router;
module.exports.interpretText = interpretText; // exported so other routes (e.g. voice) can reuse it