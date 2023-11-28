var enqu = require('enquirer')
enqu.prompt(
    {
        type:'password',
        name:'password',
        message:'Enter your password'
    }
).then(function(res){console.log(res)})