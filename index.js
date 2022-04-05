// Basic Working,

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const { MongoClient } = require('mongodb');


const port = process.env.PORT || 7000;


//Middleware Work,

app.use(cors());
app.use(express.json());



// Functionally Working,


// Calling User and password with .env,

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.l2npz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


// creating a client in MongoClient,

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });





console.log(uri);


// Work on Async Function used in data,
async function runerw() {


    // try Mothed,

    try {
        await client.connect();
        const database = client.db('sports');
        const playersCollection = database.collection('players');
        const footballCollection = database.collection('football');
        const cricketCollection = database.collection('cricket');
        const otherCollection = database.collection('other');



        app.get('/players', async(req , res) => {
            const cursor = playersCollection.find({});
            const getplayers = await cursor.toArray();
            res.send(getplayers);
          
          })


          app.get('/football', async(req , res) => {
            const cursor = footballCollection.find({});
            const getfootball = await cursor.toArray();
            res.send(getfootball);
          
          })




          app.get('/cricket', async(req , res) => {
            const cursor = cricketCollection.find({});
            const getcricket = await cursor.toArray();
            res.send(getcricket);
          
          })


          app.get('/other', async(req , res) => {
            const cursor = otherCollection.find({});
            const getother = await cursor.toArray();
            res.send(getother);
          
          })

          


    }
    finally {
        //  await client.close();
    }
}




runerw().catch(console.dir);





app.get('/', (req, res) => {
    res.send('SportClub.com')
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})