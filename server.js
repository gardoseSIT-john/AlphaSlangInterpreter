require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

app.listen(3000,() =>{
    console.log("Server is running on port 3000");
})

const slangTerm = mongoose.model('slangTerm', new mongoose.Schema({
    term:String,
    description:String,
    example:String,
    dateOfOrigin:String
}));

app.post('/api/slangterm', async (req,res) =>{
    const slangterm = new slangTerm(req.body);
    await slangterm.save();
    res.send(slangterm);console.log("Added a new slang term", slangterm);
})

app.get('/api/slangterm', async (req,res) =>{
    const slangterms = await slangTerm.find({});
    res.send(slangterms);console.log("Fetched all slang terms", slangterms);
})
