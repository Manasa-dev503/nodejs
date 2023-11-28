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
            message:'Enter Second Number'
        }
    ]
).then(function(res){console.log(parseInt(res.n1)+parseInt(res.n2),parseInt(res.n1)-parseInt(res.n2),parseInt(res.n1)*parseInt(res.n2),parseInt(res.n1)/parseInt(res.n2),parseInt(res.n1)%parseInt(res.n2))})