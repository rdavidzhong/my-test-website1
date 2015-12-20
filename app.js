var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('<H1>Hello</H1> express');
} );

app.get('/me', function(req, res) {
    res.send('@planetoftheweb');
} );

app.get('/who/:name?', function(req, res) {
    var name = req.params.name;
    res.send(name + ' was here');
} );

// Example test URL: http://localhost:3000/who/david/theboss/
app.get('/who/:name?/:title?', function(req, res) {
    var name = req.params.name;
    var title = req.params.title;
    res.send('<p>name: ' + name + '<br>title: ' + title + '</p>');
} );

// Irrelevant web pages
app.get('*', function(req, res) {
    res.send('Bad Route');
} );

// Server listen port
var server = app.listen(3000, function() {
   console.log('Listening on port 3000');
});


