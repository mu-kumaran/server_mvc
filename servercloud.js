const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mukumaran1991:6qVCApqhVwe0krs6@manojcluster.lykdy.mongodb.net/?retryWrites=true&w=majority&appName=manojCluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function insertfun(myinput) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
    var data = await client.db("manoj").collection("student").insertOne(myinput)
    return JSON.stringify(data)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
module.exports={insertfun}