var enqu = require('enquirer')
enqu.prompt({
    type:'checkbox',
    name:'colour',
    message:'which colour do you like?',
    choices:['pink','blue','red','yellow']

}).then(function(res){console.log(res.colour)})