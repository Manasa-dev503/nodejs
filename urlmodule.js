//parsing URL
var url = require('url')
var url1 = "http://localhost:3000/pathname?search=test#hash";
console.log(url.parse(url1))



//constructing URL
var u1 = require('url')
var u2 = {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'localhost:3000',
    port: '3000',
    hostname: 'localhost',
    hash: '#hash',
    search: '?search=test',
    query: 'search=test',
    pathname: '/pathname',
    path: '/pathname?search=test',
    href: 'http://localhost:3000/pathname?search=test#hash'
  }
  console.log(u1.format(u2))



  var u3 = {
    protocol:'http:',
    host: 'localhost:4000',
    port:'4000',
    hostname:'localhost',
    pathname:'/products',
    href:'http://localhost:4000/products'
  }
  console.log(u1.format(u3))
