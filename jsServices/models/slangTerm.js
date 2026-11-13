const mongoose = require('mongoose');

//New Addition: Added 'plain', 'partOfSpeech', and 'aliases' fields to the schema for better slang term representation.
const slangTermSchema = new mongoose.Schema({
  term: String,
  description: String,
  example: String,
  dateOfOrigin: String,
  plain: String,          // short replacement. For verbs, store the infinitive ("impress")
  partOfSpeech: String,   // 'noun' | 'verb' | 'adjective' | 'interjection' | 'phrase'
  aliases: [String],      // variants: ["bussing", "bussin'"]
});

//We wont need to update the old entries, but we probably should...

module.exports = mongoose.model('slangTerm', slangTermSchema);