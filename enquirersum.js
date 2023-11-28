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
            message:'Enter Second number'

        }
    ]
).then(function(res){console.log("Addition of two numbers::",parseInt(res.n1)+parseInt(res.n2))})