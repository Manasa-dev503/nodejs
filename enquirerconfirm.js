var enqu = require('enquirer')
console.log(enqu)
enqu.prompt(
    {
        type:'confirm',
        name:'ans',
        message:'Did you like me?'
    }
).then(function(answer){console.log("Answer:",answer)})


var enqu = require('enquirer')
console.log(enqu)
enqu.confirm(
    {
        type:'confirm',
        name:'ans',
        message:'Did you like me?'
    }
).then(function(answer){console.log("Answer:",answer)})

var enqu = require('enquirer')
console.log(enqu)
enqu.confirm(
    {
        type:'question',
        name:'ans',
        message:'Did you like me?'
    }
).then(function(answer){console.log("Answer:",answer)})