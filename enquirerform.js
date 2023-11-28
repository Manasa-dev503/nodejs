var enqu = require('enquirer')
enqu.form(
    {
        type:'input',
        name:'user',
        message:'please provide your details',
        choices:[
            {
                name:'firstname',message:'Enter firstname',initial:'manasa'
            },
            {
                name:'lastname',message:'Enter lastname',initial:'bathina'
            },
            {
                name:'email',message:'Enter email',initial:'manasa@gmail.com'
            }
            
        ]
    }
).then(function(res){console.log("Data:",res)})