const express = require('express');
const nlp = require('compromise');
const SlangTerm = require('./models/slangTerm');
const router = express.Router();

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Caching part
let cache = { forms: null, loadedAt: 0 };
const CACHE_MS = 60 * 1000;

// Form building: create a map of all slang terms and their inflections for quick lookup
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

async function getForms() {
  if (cache.forms && Date.now() - cache.loadedAt < CACHE_MS) return cache.forms;
  const all = await SlangTerm.find({}, 'term description example plain partOfSpeech aliases').lean();
  const usable = all.filter((s) => s.term && s.term.trim() && (s.plain || s.description));
  cache = { forms: buildForms(usable), loadedAt: Date.now() };
  return cache.forms;
}

// Grammar Helpers
function inflect(plain, tense) {
  if (!tense || tense === 'Infinitive') return plain;
  const [c] = nlp(plain).verbs().conjugate();
  return (c && c[tense]) || plain;
}

function matchCase(original, replacement) {
  if (original === original.toUpperCase() && original.length > 1) return replacement.toUpperCase();
  if (original[0] === original[0].toUpperCase()) {
    return replacement[0].toUpperCase() + replacement.slice(1);
  }
  return replacement;
}

function fixArticles(text) {
  return text.replace(/\b(a|an)(\s+)([a-z]\w*)/gi, (m, art, space, word) => {
    const vowelSound = /^[aeiou]/i.test(word) && !/^(uni|use|usu|eu|one)/i.test(word);
    let fixed = vowelSound ? 'an' : 'a';
    if (art[0] === art[0].toUpperCase()) fixed = fixed[0].toUpperCase() + fixed.slice(1);
    return fixed + space + word;
  });
}

// Main Stuff
async function interpretText(text) {
  console.log("InterpretText called with:", text);
  const forms = await getForms();
  if (!forms.size) return { translation: text, matches: [] };

  // longest forms first so "no cap" beats "cap"
  const keys = [...forms.keys()].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`(?<!\\w)(${keys.map(escapeRegex).join('|')})(?!\\w)`, 'gi');

  const matches = [];
  let translation = text.replace(pattern, (found) => {
    const { entry, tense } = forms.get(found.toLowerCase());
    if (!matches.includes(entry.term)) matches.push(entry.term);

    const base = entry.plain || entry.description;
    const swapped = entry.plain ? inflect(base, tense) : base;
    console.log(`Matched: "${found}" -> "${swapped}" (tense: ${tense})`);
    return matchCase(found, swapped);
  });

  if (matches.length) translation = fixArticles(translation);
  return { translation, matches };
}

router.post('/interpret', async (req, res) => {
  try {
    const { text } = req.body;
    if (typeof text !== 'string' || !text.trim()) {
      return res.status(400).json({ error: 'Text is required' });
    }
    if (text.length > 2000) {
      return res.status(400).json({ error: 'Text too long (max 2000 chars)' });
    }
    const { translation, matches } = await interpretText(text);
    res.json({ original: text, translation, matches, method: 'nlp' });
  } catch (err) {
    console.error('Interpret failed:', err);
    res.status(500).json({ error: 'Interpretation failed' });
  }
});

module.exports = router;
module.exports.interpretText = interpretText;