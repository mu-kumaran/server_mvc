const mongoose = require("mongoose")
const User = require("./userModel")

// mongoose connection
mongoose.connect("mongodb://127.0.0.1:27017/manojdb").then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log("db connection error",err)
})

// Insert operation using mongoose
async function insertdata(inputdata)
{
    try{  
        const dataset = await User.insertOne(inputdata)
        console.log("From mongoose:",dataset)
        return JSON.stringify(dataset)
    }
    catch(err){
        console.log("Error",err.tostring())
    }
}
module.exports = {insertdata}