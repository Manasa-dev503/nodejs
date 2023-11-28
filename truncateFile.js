var fs = require('fs')
fs.truncate("employees8.txt",1,function(a){
    console.log("a::",a)
    
})