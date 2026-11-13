const mongoose = require('mongoose');

const slangTermSchema = new mongoose.Schema({
  term: String,
  description: String,
  example: String,
  dateOfOrigin: String,
  plain: String, // optional: short plain-English replacement (see below)
});

module.exports = mongoose.model('slangTerm', slangTermSchema);