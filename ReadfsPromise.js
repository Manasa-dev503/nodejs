var fspromise = require('fs/promises')
//console.log(fspromise)
fspromise.readFile("employees.txt")
.then(function(data){
    console.log(data.toString())
})
.catch()