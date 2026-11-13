const nlp = require('./jsServices/nlpService');

const text = "The building is on fire.";

const doc = nlp.readDoc(text);

//cost tokens = doc.tokens().out(), grabs the tokens themselves...

const dictionary =[
    { term: "fire", description: "Excellent or amazing" },
    { term: "on fire", description: "Burning or ablaze" },
    {term: "rizz", description: "Charisma"}
];

const tokens = doc.tokens().out();
