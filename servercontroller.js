var http = require("http")
var url = require("url")
// var sdb = require("./serverdatabase")
var sdb = require("./servermongoose")
//var sdb = require("./servercloud")    //connection to mongoatlas

http.createServer(async(req,res)=>{
    console.log("react view to server controller")

    res.setHeader('Access-Control-Allow-Origin', '*'); /* @dev First, read about security */
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,GET');
    res.setHeader('Access-Control-Max-Age', 2592000); // 30 days

    // Getting request data from react.js(view)
    var reactpath = url.parse(req.url,true)
    console.log(reactpath)
    var qry = reactpath.query
    console.log(qry)
    var finaldata = JSON.parse(JSON.stringify(qry))
    console.log(finaldata)
    console.log(finaldata.rno)
    console.log(typeof(finaldata.rno))
    console.log(finaldata.sname)
    console.log(finaldata.mark)

    try{

        // sending request data to the database
        var resdata = await sdb.insertdata(finaldata)
        console.log(resdata)
        console.log(JSON.stringify(resdata))
        var finalans = JSON.parse(JSON.stringify(resdata))
        console.log(finalans)

        // Sending back the response from database to the react.js (view)
        res.writeHead(200,{"content-type":"application/json"})
        res.write(finalans) // move to view react
    }
    catch{
        console.log("error from db")
    }
    finally{
        console.log("Program end")
        res.end()
    }
}).listen(1234)

console.log("port listening at 1234")