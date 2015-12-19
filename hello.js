console.log("hello");
var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'content-type':'text/plain'});
    res.end('hello');
}).listen(8080);


