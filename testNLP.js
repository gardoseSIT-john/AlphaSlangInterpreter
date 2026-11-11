const { default: wo } = require('@angular/common/locales/wo');
const nlp = require('./jsServices/nlpService');

const text = "The building is on fire.";

const doc = nlp.readDoc(text);

//cost tokens = doc.tokens().out(), grabs the tokens themselves...

const tokens = doc.tokens().out();
var tokensStatusCheck=[]

for (let word = 0; word <tokens.length; word++){
    tokensStatusCheck.push(
        {token:tokens[word], isUsed:false}
    )
}
console.log("Token Statis Check:");
console.log(tokensStatusCheck)

//Gram generation

var unigrams =[]
var bigrams = [];
var trigrams = [];

for (let i = 0; i < tokens.length; i++) {
    //console.log(tokens[i]);
    //Check if we have two words remaining
    console.log(i);
    if (tokens.length - i >= 3){
        //console.log("We have three words remaining");
        var currentGram = tokens[i] + " " + tokens[i+1] + " " + tokens[i+2];
        trigrams.push(currentGram);
    }
    if (tokens.length - i >=2){
        //console.log("We have two words remaining");
        var currentGram = tokens[i] + " " + tokens[i+1];
        bigrams.push(currentGram);
    }
    
    else{
        console.log("We have less than 2 or 3 words remaining.");
    }
    unigrams.push(tokens[i])
}

console.log("The thingy, POS and Lemma");
doc.tokens().each((token) =>{
    console.log({
        word: token.out(),
        pos:token.out(nlp.its.pos),
        lemma:token.out(nlp.its.lemma)
    });
});

//Dictionary Matching

/*
We need to see if theres a match between the grams and the dictionary. 
Prioritizing Trigram first, then Bigram then Unigram.

We have the tokens of the word. We can only match again if and only if the tokens arent already matched
Sample:
Input
    "This is a test sentence"
Dictionary:[
{"Test Sentence"},
{"This is"},
{"is a test"}
]




*/ 

tGramMatch =[]
bGramMatch = []
uGramMatch = []


console.log("======[Dictionary Log]=====");
for (let gram=0; gram < trigrams.length; gram ++){
    console.log("Current Gram: " + trigrams[gram])
    var currentGTokens = nlp.readDoc(trigrams[gram]).tokens().out();
    //Check first if the gram's token hasnt been used yet. If one is used, Go to the next gram
    console.log("Checking: ", currentGTokens[gram])
    //Token availability Check: If even one token isnt available, skip to the next gram...
    var matchable = true
    for (let gram=0;gram < currentGTokens.length;gram++){
        console.log(checkTokenAvailability(currentGTokens[gram]))
        var status = checkTokenAvailability(currentGTokens[gram])
        if (status == true){
            console.log("Pinetree")
        }
        else{
            console.log("Cone")
            console.log("Cannot be matched")
            matchable = false
        }
    }
    //This means we can make the match: we now need to do the following
    //Add the gram to matches
    // Update tokenAvailability, set to false for all tokens of the matched gram
    if (matchable){
        tGramMatch.push(trigrams[gram])
        matchedGramTokens = nlp.readDoc(trigrams[gram]).tokens().out()
        for (let word =0; word < matchedGramTokens.length;word++ ){
            for (let token = 0; token < tokensStatusCheck.length;token++){
                if (matchedGramTokens[word] === tokensStatusCheck[token].token){
                    tokensStatusCheck[token].isUsed = true;
                }
            }
        }
    }
    

}

function checkTokenAvailability(token){
   // console.log("[CheckTokenCalled]");
    //console.log("TokensStatusCheck length: " + tokensStatusCheck.length)
    for (let word=0; word <tokensStatusCheck.length; word++){
        //console.log("Comparing: "+ token  + " with: " + tokensStatusCheck[word].token)
        if (token  === tokensStatusCheck[word].token){//Match found
            //console.log("TokenThingy: "+ tokensStatusCheck[word].isUsed)
            if (!tokensStatusCheck[word].isUsed){
                //console.log("Match found for " + token)
                return true
            }
        }
    }
    return false
}


console.log("Bigrams: " );
console.log(bigrams);
console.log("Trigrams: " );
console.log(trigrams);
console.log("Unigrams: ");
console.log(unigrams)

console.log("===[Dictionary Matches]===")
console.log(tGramMatch)


console.log("Does the text contain 'on fire' as a bigram?");
console.log(bigrams.includes("on fire"));
console.log("Does the text contain 'is on fire' as a trigram?");
console.log(trigrams.includes("is on fire"));



