var router = require("./router.js")
//Problem: We need a simple way to look at a user's badge count and JavaScipt point from a web browser
//Solution: Use Node.js to perform the profile look ups and server our template via HTTP

// Create a web server
var htttp = require('http');
htttp.createServer(function (request, response)
{
    router.home(request, response);
    router.user(request, response);
}).listen(5500, '127.0.0.1');
console.log('Server running at http://127.0.0.1:5500/');


