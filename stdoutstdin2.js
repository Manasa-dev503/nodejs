process.stdin.on('readable',function(){
    var n = process.stdin.read()
    for(i=0;i<=n;i++){
        if(n%2===0){
            console.log(i)

        }
        
    }
})

 