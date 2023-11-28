var enqu = require('enquirer')
//console.log(enqu)
enqu.prompt(
    {
        type:'input',
        name:'n1',
        message:'Enter First Number'
    }
).then(function(res){console.log("Entered Number::",res)})