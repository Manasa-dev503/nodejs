var enqu = require('enquirer')
enqu.list(
    {
        type:'input',
        name:'keywords',
        message:'Type comma separated keywors'

        
    }
).then((res)=>{console.log("Output:",res)})