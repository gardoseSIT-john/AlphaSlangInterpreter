const express = require('express');
const SlangTerm = require('./models/slangTerm');
const router = express.Router();

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Cache so we don't hit MongoDB on every request
let cache = { slangs: [], loadedAt: 0 };
const CACHE_MS = 60 * 1000;

async function getSlangs() {
  if (Date.now() - cache.loadedAt < CACHE_MS && cache.slangs.length) {
    return cache.slangs;
  }
  const all = await SlangTerm.find({}, 'term description example plain').lean();
  // skip any entries missing a term or a usable replacement
  const slangs = all.filter(
    (s) => s.term && s.term.trim() && (s.plain || s.description)
  );
  cache = { slangs, loadedAt: Date.now() };
  return slangs;
}

async function interpretText(text) {
  const slangs = await getSlangs();
  if (!slangs.length) return { translation: text, matches: [] };

  const lookup = new Map(slangs.map((s) => [s.term.trim().toLowerCase(), s]));

  // longest terms first so "no cap" wins over "cap"; single pass avoids re-scanning replaced text
  const terms = [...lookup.keys()].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(
    `(?<!\\w)(${terms.map(escapeRegex).join('|')})(?!\\w)`,
    'gi'
  );

  const matches = [];
  const translation = text.replace(pattern, (found) => {
    const entry = lookup.get(found.toLowerCase());
    if (!matches.includes(entry.term)) matches.push(entry.term);
    return entry.plain || entry.description;
  });

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
    res.json({ original: text, translation, matches });
  } catch (err) {
    console.error('Interpret failed:', err);
    res.status(500).json({ error: 'Interpretation failed' });
  }
});

module.exports = router;
module.exports.interpretText = interpretText;