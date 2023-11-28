var enqu = require('enquirer')
enqu.prompt(
    [
        {
            type:'input',
            name:'n1',
            message:'Enter First Number'
        },
        {
            type:'input',
            name:'n2',
            message:'Enter second Number'
        }
    ]
).then(function(res){console.log("multiplication of two numbers is::",res.n1*res.n2)})