var enqu = require('enquirer')
enqu.prompt(
    {
        type:'list',
        name:'l1',
        message:'which colour do you like',

    }
).then(function(res){console.log("List::",res.l1)})