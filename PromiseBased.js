function div(a,b){
    if(b===0){
        return Promise.reject("denominator must not be zero")
    }
else{
        return Promise.resolve(a/b)
    }
}
div(10,4).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})

//command line arguments
function div(a,b){       
    if(b===0){
        return Promise.reject("denominator must not be zero")
    }
    else{
        return Promise.resolve(a/b)
    }
}
div(+process.argv[2],+process.argv[3]).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})

//another way
 
function div(a,b){
    var p = new Promise((reject,resolve)=>{
        if(b===0){
            reject("Denominator cannot be zero")
        }
        else{
            resolve(a/b)
        }

    })
    return p;
}
div(+process.argv[2],+process.argv[3]).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})