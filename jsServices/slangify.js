const express = require('express');
const SlangTerm = require('./models/slangTerm');
const router = express.Router();

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

router.post('/slangify', async (req, res) => {
  try {
    const { text } = req.body;
    if (typeof text !== 'string' || !text.trim()) {
      return res.status(400).json({ error: 'Text is required' });
    }
    if (text.length > 2000) {
      return res.status(400).json({ error: 'Text too long (max 2000 chars)' });
    }

    const all = await SlangTerm.find(
      { plain: { $exists: true, $ne: '' } },
      'term plain'
    ).lean();

    // plain word/phrase (lowercase) -> slang term; first entry wins on duplicates
    const lookup = new Map();
    for (const s of all) {
      const key = s.plain.trim().toLowerCase();
      if (key && s.term && !lookup.has(key)) lookup.set(key, s.term);
    }
    if (!lookup.size) {
      return res.json({ original: text, translation: text, matches: [], method: 'nlp' });
    }

    const keys = [...lookup.keys()].sort((a, b) => b.length - a.length);
    const pattern = new RegExp(`(?<!\\w)(${keys.map(escapeRegex).join('|')})(?!\\w)`, 'gi');

    const matches = [];
    const translation = text.replace(pattern, (found) => {
      const term = lookup.get(found.toLowerCase());
      if (!matches.includes(term)) matches.push(term);
      // keep a capital first letter if the original had one
      return found[0] === found[0].toUpperCase()
        ? term[0].toUpperCase() + term.slice(1)
        : term;
    });

    res.json({ original: text, translation, matches, method: 'nlp' });
  } catch (err) {
    console.error('Slangify failed:', err);
    res.status(500).json({ error: 'Slangify failed' });
  }
});

module.exports = router;