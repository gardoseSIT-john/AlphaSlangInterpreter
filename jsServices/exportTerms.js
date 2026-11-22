require('dotenv').config();
const fs = require('fs');
const mongoose = require('mongoose');
const SlangTerm = require('./models/slangTerm');

(async () => {
  await mongoose.connect(process.env.MONGODB_URI); // match your .env variable name
  const all = await SlangTerm.find({}, 'term description example -_id').lean();

  // one entry per term, case-insensitive; keep the longer description
  const seen = new Map();
  for (const t of all) {
    if (!t.term || !t.term.trim() || !t.description) continue;
    const key = t.term.trim().toLowerCase();
    const prev = seen.get(key);
    if (!prev || t.description.length > prev.description.length) {
      seen.set(key, { ...t, term: t.term.trim() });
    }
  }
  const terms = [...seen.values()];

  fs.mkdirSync('training/raw', { recursive: true });
  fs.writeFileSync('training/terms.json', JSON.stringify(terms, null, 2));
  console.log(`Exported ${terms.length} terms (${all.length - terms.length} duplicates or empty dropped)`);
  await mongoose.disconnect();
})();