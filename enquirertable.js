var enqu = require('enquirer')
var table = require('table')
table.table(
    {
        type:'table',
        name:'Details',
        message:'myDetails',
        columns:[
            {
                name:'firstname'
            },
            {
                name:'lastname'
            },
            {
                name:'address'
            }
        ],
        rows:[
            {
                name:'manasa'
            },
            {
                name:'bathina'
            },
            {
                name:'ongole'
            }
        ]

    }
)