var http = require('http')
var fs = require('fs')
var url = require('url')
const querystring = require('node:querystring');
const table = require('table').table;


http.createServer(function(req,res){
    console.log("request received",req.url)
    var reqroute = url.parse(req.url)
    console.log(reqroute)
    if(reqroute.pathname==="/"){
        //res.write("OK almost ready")
        var filedata = fs.readFileSync("myapplication.html")
        res.write(filedata.toString())
    }
    if(reqroute.pathname==="/aboutus.html"){
        var aboutus = fs.readFileSync("aboutus.html")
        res.write(aboutus.toString())
    }
    if(reqroute.pathname==="/contactus.html"){
        var contactus = fs.readFileSync("contactus.html")
        res.write(contactus.toString())
    }
    if(reqroute.pathname==="/addcontact"){
        //res.write("Alomost Done")
        var x = querystring.parse(reqroute.query)
        console.log(x)
        var contacts = fs.readFileSync('contacts.txt')
        contacts=JSON.parse(contacts.toString())
        contacts.push(x)
        console.log(contacts)
        fs.writeFileSync("contacts.txt",JSON.stringify(contacts))
        res.write("Almost there")
    }
    if(reqroute.pathname==="/allcontacts"){
       /*res.setHeader("Content-Type","text/html")
       var contactsdata = JSON.parse(fs.readFileSync("contacts.txt").toString());
       //res.write("<h4>ok</h4>")
       console.log(Array.isArray(contactsdata))
       var contactstable = `
            <table border="2">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Mobile Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        ${
                            contactsdata.map((c)=>{
                                return `<tr>
                                    <td>${c.fullname}</td>
                                    <td>${c.mobilenumber}</td>
                                    </tr>
                                    `
                            })
                        }
                    </tr>
                </tbody>
            </table>
       
       `
       res.write(contactstable)*/
       res.write(fs.readFileSync("contactslist.html").toString())

    }
    if(reqroute.pathname==="/getallcontacts"){
        res.setHeader("Content-Type","text/json")
        var contactsdata = fs.readFileSync("contacts.txt").toString();
        res.write(contactsdata)
    }
   
    
    res.end()



}).listen(4000,function(){console.log("server running on 4000")})