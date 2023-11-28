var fs = require('fs')
fs.stat("employee.txt",function(a,b){
    console.log("a::",a)
    console.log("b::",b)
})