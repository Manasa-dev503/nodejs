//process.stdout.write('Hello')
//console.log('Hello')

//var input = process.stdin.read()
//console.log(input)


process.stdin.on('readable',function(){
   var input = process.stdin.read()
   
   if(input!==null){
        process.stdout.write(input)
        //console.log(input)
       //console.log(input.toString())
    }
    
})

//process.stdin.setEncoding('utf-8')
//process.stdin.on('readable',function(){
//    var input1 = process.stdin.read()
//    var input2 = process.stdin.read()
//    if(input1!==null){
        
  //     process.stdout.write(input1)

  //  }
  //  if(input1!==null){
   //     process.stdout.write(input2)
   // }
    

//})
 
  






