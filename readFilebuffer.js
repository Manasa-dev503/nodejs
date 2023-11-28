var fs = require('fs')
var filedata = fs.statSync("employees.txt")
console.log(filedata)
console.log(filedata.size)
var file = filedata.size
var buf1 = new Buffer.alloc(50)




/*fs.open("employees.txt","r",function(err,fd){
    for(var i=0;i<=50;i++){
        var buf1 = new Buffer.alloc(50);
        fs.read(fd,buf1,0,50,i*50,function(err,data,y){
        console.log("y::",y.toString())
       // console.log("data::",data)
    })


    }
    
})*/
