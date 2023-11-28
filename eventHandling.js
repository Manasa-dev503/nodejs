/*var EventEmitter = require('events').EventEmitter

var channel = new EventEmitter()

channel.on('newvideoEvent',function(a,b){
    console.log("a::",a)
    console.log("b::",b)
})

channel.on('newoffer',function(a,b){
    console.log("a::",a)
    console.log("b::",b)
})


channel.emit('newoffer',99,123)
channel.emit('newvideoEvent',12,23)



var EventEmitter = require('events').EventEmitter

var channel = new EventEmitter()

channel.on('newvideoEvent',function(a,b){
    console.log("a::",a)
    console.log("b::",b)
})

channel.on('newoffer',function(a,b){
    console.log("a::",a)
    console.log("b::",b)
})


setTimeout(function(){
    channel.emit('newoffer',99,123)
},5000)
channel.emit('newvideoEvent',12,23)
*/


/*var EventEmitter = require('events').EventEmitter

var channel = new EventEmitter()

channel.on('newvideoEvent',function(a,b){
    console.log("a::",a)
    console.log("b::",b)
})

channel.on('newoffer',function(a,b){
    console.log("a::",a)
    console.log("b::",b)
})


setTimeout(function(){
    channel.emit('newvideoEvent',12,23)
},5000)
channel.emit('newoffer',99,123)*/


var EventEmitter = require('events').EventEmitter

var gmail = new EventEmitter()

gmail.on('receivingMail',function(mail){
    console.log("ReceivedMail::",mail)
})
gmail.emit('receivingMail',"Hi")




