process.stdin.on('readable',function(){
    var n = process.stdin.read()
    for(i=0;i<=n;i++){
        //if(n!==null){
            //console.log(i)
            process.stdout.write(i)

        //}
        
    }
})

 