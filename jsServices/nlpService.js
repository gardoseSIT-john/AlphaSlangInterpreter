const text = "That fit is absolute fire..."

const winkNLP = require('wink-nlp');
const model = require('wink-eng-lite-web-model');

const nlp = winkNLP(model);

module.exports = nlp;