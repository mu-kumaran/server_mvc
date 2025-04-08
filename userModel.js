const mongoose = require("mongoose")


// required:true option is used to make the field compulsory
const userSchema = new mongoose.Schema({
    rno: {
        type:Number,
        required: true
    },
    sname: {
        type:String,
        required:true,
        lowercase: true
    },
    mark:{
        min:0,
        max:100,
        type: Number,
        required: true
    }
})

// Exporting schema to the required database
const usermdl = mongoose.model("student",userSchema)
module.exports = usermdl