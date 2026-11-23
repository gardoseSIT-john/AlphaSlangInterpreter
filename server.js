require('dotenv').config(); //First line for deployment
const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const cors = require('cors'); //Most likely will be moved later...

const app = express();
app.set('trust proxy', 1); // needed on hosts that sit behind a proxy
app.use(express.json());

//Rate limit Before the interpreter route.
app.use('/api/interpret', rateLimit({ windowMs: 60 * 1000, max: 10 }));


//API Routes:
    //Interpreter Part
app.use('/api', require('./jsServices/interpret'));
    //Slangify Part
app.use('/api', require('./jsServices/slangify'));
    //Slang term get route
app.get('/api/slangterm', async (req,res) =>{
    const slangterms = await slangTerm.find({});
    res.send(slangterms);console.log("Fetched all slang terms", slangterms);
})

//Data base connection
mongoose.connect(process.env.MONGODB_URI)//Conects to MongoDB
 .then(() => console.log("MongoDB connected  "))//Feedback message for successful connection
 .catch((err) => console.error('MongoDB connection failed: ', err.message)); //Feedback message for failed connection


app.use(cors());

//Angular Build: This was told to be last:
const dist = path.join(__dirname, 'dist','AlphaSlangInterpreter', 'browser');
app.use(express.static(dist));
app.use((req,res)=> res.sendFile(path.join(dist,'indext.html')));

const PORT = process.env.port || 3000; //The port, the host picks it.
app.listen(PORT,()=> console.log('Server is running on port ${PORT}'));



//Not sure where these would be


app.listen(3000,() =>{
    console.log("Server is running on port 3000");
})

const slangTerm = require('./jsServices/models/slangTerm');

//Add terms removed since it is redundant at this point. The data is now in the database and will be fetched from there.

