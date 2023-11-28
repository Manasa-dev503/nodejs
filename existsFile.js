var fs = require('fs')
var fileexists = fs.existsSync("employees.txt")
console.log(fileexists)

var fs = require('fs')
fs.exists("employees.txt",function(a){
    console.log("a::",a)
})