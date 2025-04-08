var {MongoClient} = require("mongodb")
var client = new MongoClient("mongodb://127.0.0.1:27017/")
client.connect()

async function insertdata(inputdata){
try
{
    var dataset = await client.db("manoj").collection("student").insertOne(inputdata)
    return JSON.stringify(dataset)
}
catch
{
    console.log("error")
    client.close()
}
}

module.exports={insertdata}