const nlp = require('./jsServices/nlpService');

const text = "The building is on fire.";

const doc = nlp.readDoc(text);

//cost tokens = doc.tokens().out(), grabs the tokens themselves...

const tokens = doc.tokens().out();

var grams = [];
var bigrams = [];
var trigrams = [];

for (let i = 0; i < tokens.length; i++) {
    //console.log(tokens[i]);
    //Check if we have two words remaining
    console.log(i);
    if (tokens.length - i >= 3){
        console.log("We have three words remaining");
        var currentGram = tokens[i] + " " + tokens[i+1] + " " + tokens[i+2];
        trigrams.push(currentGram);
    }
    if (tokens.length - i >=2){
        console.log("We have two words remaining");
        var currentGram = tokens[i] + " " + tokens[i+1];
        bigrams.push(currentGram);
    }
    
    else{
        console.log("We have less than 2 or 3 words remaining.");
    }
}
console.log("Bigrams: " );
console.log(bigrams);
console.log("Trigrams: " );
console.log(trigrams);

console.log("Does the text contain 'on fire' as a bigram?");
console.log(bigrams.includes("on fire"));
console.log("Does the text contain 'is on fire' as a trigram?");
console.log(trigrams.includes("is on fire"));