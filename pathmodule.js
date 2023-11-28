// without using path module
/*var filelocation = "/Users/Documents/Pictures/budha.jpg"
console.log(filelocation.split('/'))
console.log(filelocation.split("/")[1])
console.log(filelocation.split("/")[2])
console.log(filelocation.split("/")[3])
console.log(filelocation.split("/")[4])*/


//with using path module
var path = require('path')
var filelocation = "/Users/Documents/Pictures/budha.jpg"
console.log(path.basename(filelocation))
console.log(path.extname(filelocation))
console.log(path.dirname(filelocation))
console.log(path.resolve(filelocation))
console.log(path.parse(filelocation))