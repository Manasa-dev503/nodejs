var axios = require('axios')
async function abc(){
    var res =  await axios.get("https://restcountries.com/v3/all")
    //console.log(res.data)
    var fdata = res.data.map((a)=>{
        return {
            name:a.name.common,population:a.population
        }
    })
    return fdata
}
abc()
.then(function(filteredData){
    console.log("FilteredData::",filteredData)
})
.catch()