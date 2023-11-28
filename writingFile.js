var fs = require('fs')
fs.writeFile("employees.txt","Nani Kavya Vishnu",function(err){
    console.log("err::",err)
})