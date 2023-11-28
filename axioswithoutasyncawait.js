var axios = require('axios')

//axios.get("https://restcountries.com/v3/all")
//.then(function(res){
 //   console.log(res.data)
//})




/*function abc(){
    axios.get("https://restcountries.com/v3/all")
    .then(function(res){
        //console.log(res.data)
        var d = res.data.map((a)=>{
            return {name:a.name.common,population:a.population}
        })
        return d;
    })
    .catch(function(){})

}
abc()
.then(function(data){console.log(data)})
.catch()*/


function abc(){
    var p = new Promise((resolve,reject)=>{
        axios.get("https://restcountries.com/v3/all").then((res)=>{
            console.log(res)
            var d = res.data.map((a)=>{
                return {name:a.name.common,population:a.population}
            })
            resolve(d) 
        })

    })
    return p;
}
abc()
.then(function(filteredData){
    console.log("FilteredData::",filteredData)
    
})
.catch()
console.log("Last Line")
