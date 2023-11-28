var fs = require('fs')
try{
    fs.readFile("students3.txt",function(err,data){
        console.log(err)
        console.log(data)
    })

}
catch(exp){
    console.log("Exp::",exp)
    console.log("please check the syntax")
}
console.log("Last Line")

