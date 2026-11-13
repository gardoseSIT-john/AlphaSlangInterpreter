const nlp = require('./jsServices/nlpService');

const text = "The building is on fire.";

const doc = nlp.readDoc(text);

//cost tokens = doc.tokens().out(), grabs the tokens themselves...

const dictionary =[
    { term: "fire", description: "Excellent or amazing" },
    { term: "on fire", description: "Burning or ablaze" },
    {term: "rizz", description: "Charisma"},
    { term: "is on fire", description: "Currently burning" }
];

const tokens = doc.tokens().out();

//Stores the Grams for interpretation
var unigrams = []; 
var bigrams = [];
var trigrams = [];

//Used to detecting matches, Priority is Trigrams > Bigrams > Unigrams
var dictionaryMatch_Trigrams = [];
var dictionaryMatch_Bigrams = [];
var dictionaryMatch_Unigrams = [];
var tokensUsed = [];


//[Gram Generation] Iterate through the tokens and create bigrams and trigrams 
for (let i = 0; i < tokens.length; i++) {
    //console.log(tokens[i]);
    //Check if we have two words remaining
    console.log(i);
    if (tokens.length - i >= 3){ //Trigrams
        console.log("We have three words remaining");
        var currentGram = tokens[i] + " " + tokens[i+1] + " " + tokens[i+2];
        trigrams.push(currentGram);
    }
    if (tokens.length - i >=2){ //Bigrams
        console.log("We have two words remaining");
        var currentGram = tokens[i] + " " + tokens[i+1];
        bigrams.push(currentGram);
    }
    
    else{//Unigrams
        console.log("We have less than 2 or 3 words remaining.");
        unigrams.push(tokens[i]);
    }
}

//[Dictionary Matching] Check if any of the generated grams match the dictionary terms
//Priority is Trigrams > Bigrams > Unigrams
//Checking Trigrams first
for (let gram = 0; gram < trigrams.length; gram++){
    for(let term = 0; term < dictionary.length; term++){
        if(trigrams[gram] === dictionary[term].term){
            console.log(
              `Found: ${dictionary[term].term} - ${dictionary[term].description}`
            );
            dictionaryMatch_Trigrams.push(dictionary[term]);
            var tokenizedTriGram = nlp.readDoc(trigrams[gram]).tokens().out();
            for (let tGram = 0; tGram < tokenizedTriGram.length; tGram++){
                tokensUsed.push(tokenizedTriGram[tGram]);
            }
        }
    }
}
//Checking if dictionary terms are detected in the Bigrams
for (let gram = 0; gram < bigrams.length; gram++){
    for(let term = 0; term < dictionary.length; term++){
        //We need to check if the the tokens used in the bigram is already used by the trigram... If yes, break the loop and continue.
        var tokenizedBiGram = nlp.readDoc(bigrams[gram]).tokens().out();
        for(let tGram = 0; tGram < tokenizedBiGram.length; tGram++){
            if(tokensUsed.includes(tokenizedBiGram[tGram])){
            console.log('The tokens used in this bigram are already used by a trigram. Skipping this bigram.');
            break;
            }
        }

        if(bigrams[gram] === dictionary[term].term){
            console.log(
              `Found: ${dictionary[term].term} - ${dictionary[term].description}`
            );
        }
    }
}
//Checking each tokens itself for dictionary terms
for (let token = 0; token < tokens.length; token++){
    for(let term = 0; term < dictionary.length; term++){
        if (tokensUsed.includes(tokens[token])){
            console.log('The token used in this unigram is already used by a trigram or bigram. Skipping this unigram.');
            break;
        }

        if(tokens[token] === dictionary[term].term){
            console.log(
              `Found: ${dictionary[term].term} - ${dictionary[term].description}`
              
            );
            unigrams.push(dictionary[term]);
        }
    }
}


console.log("Bigrams: " );
console.log(bigrams);
console.log("Trigrams: " );
console.log(trigrams);
console.log("Unigrams: " );
console.log(unigrams);

console.log("Does the text contain 'on fire' as a bigram?");
console.log(bigrams.includes("on fire"));
console.log("Does the text contain 'is on fire' as a trigram?");
console.log(trigrams.includes("is on fire"));

console.log("Tokens used in the detected Used Grams: ");
console.log(tokensUsed);

console.log("Dictionary Match, Trigrams: ");
console.log(dictionaryMatch_Trigrams);
console.log("Dictionary Match, Bigrams: "); 
console.log(dictionaryMatch_Bigrams);
console.log("Dictionary Match, Unigrams: ");
console.log(dictionaryMatch_Unigrams);