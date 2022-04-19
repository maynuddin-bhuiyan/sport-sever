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
        const userCollection = database.collection('users');
        const cricketplayersCollection = database.collection('cricketplayers');
        const hockeyPuckPlayersCollection = database.collection('hockeyPuckPlayers');
        const volleyBallPlayersCollection = database.collection('volleyBall');
        const basketBallPlayersCollection = database.collection('basketBall');
        const baseBallPlayersCollection = database.collection('baseBall');
        const tableTennisPlayersCollection = database.collection('tableTennis');
        
        const playersReviewCollection = database.collection('review');


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



          app.get('/cricketplayers', async(req , res) => {
            const cursor = cricketplayersCollection.find({});
            const getcricketr = await cursor.toArray();
            res.send(getcricketr);
          
          })



          app.get('/hockeyPuckPlayers', async(req , res) => {
            const cursor = hockeyPuckPlayersCollection.find({});
            const gethockey = await cursor.toArray();
            res.send(gethockey);
          
          })




          app.get('/tableTennis', async(req , res) => {
            const cursor = tableTennisPlayersCollection.find({});
            const getTableTennis = await cursor.toArray();
            res.send(getTableTennis);
          
          })



          app.get('/baseBall', async(req , res) => {
            const cursor = baseBallPlayersCollection.find({});
            const getBaseBall = await cursor.toArray();
            res.send(getBaseBall);
          
          })



          app.get('/basketBall', async(req , res) => {
            const cursor = basketBallPlayersCollection.find({});
            const getBasketBall = await cursor.toArray();
            res.send(getBasketBall);
          
          })



          app.get('/volleyBall', async(req , res) => {
            const cursor = volleyBallPlayersCollection.find({});
            const getVolleyBall = await cursor.toArray();
            res.send(getVolleyBall);
          
          })


          
          // user post data 


    app.post('/users', async(req , res) =>{
      const user = req.body
      const result = await userCollection.insertOne(user)
      console.log(result)
      res.json(result)
  })

  app.put('/users', async (req, res) => {
    const user = req.body;
    const filter = {email: user.email};
    const options = { upsert: true };
    const updateDoc = {$set: user};
    const result = await userCollection.updateOne( filter, updateDoc, options)
    res.json(result) 
  })
  






  app.post('/review', async(req , res) =>{
    const user = req.body
    const result = await playersReviewCollection.insertOne(user)
    console.log(result)
    res.json(result)
})
      


app.get('/review', async(req , res) => {
  const cursor = playersReviewCollection.find({});
  const getreview = await cursor.toArray();
  res.send(getreview);

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