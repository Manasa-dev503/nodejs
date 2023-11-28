/*var http = require('http')
http.createServer(function(req,res){
    console.log("Hello request received")
    res.write("Please Wait!!!")
    res.end()

}).listen(8090)*/



/*var http = require('http')
var fs = require('fs')
http.createServer(function(req,res){
    var respfile = fs.readFileSync("mypage.html")
    res.write(respfile.toString())
    res.end()

}).listen(8090)*/


/*var http = require('http')
var fs = require('fs')
var c=0
http.createServer(function(req,res){
   // console.log("Hello request received",++c)
   console.log("Hello request received",req.url)
    var respfile = fs.readFileSync("mypage.html")
    res.setHeader("Content-Type","text/html")
    res.writeHead(200,"ok")
    res.write(respfile.toString())
    res.end()
}).listen(8090)*/


var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require('path')
http.createServer(function(req,res){
   console.log("Hello request received",req.url)
   var fileobj = url.parse(req.url)
   console.log("FileObj::",fileobj)
    if(fileobj.ext){
        var respfile = fs.readFileSync(fileobj.pathname)
        res.setHeader("Content-Type","text/html")
        res.writeHead(200,"ok")
        res.write(respfile.toString())
    }
    else{
        res.write("sorry")
    }
    
    res.end()

}).listen(8090)