var fs = require('fs')
//synchronous way
var filedata = fs.readFileSync("students.txt")
console.log(filedata.toString())
console.log("Last Line")

//asynchronous way
fs.readFile("students.txt",function(a,b){
    console.log("a::",a)
    console.log("b::",b.toString())
})
console.log("Ending Line")


fs.readFile("students8.txt",function(a,b){
    if(a===null){
        console.log("b::",b)
    }
    else{
        console.log("a::",a)
    }
})
console.log("Final Line")