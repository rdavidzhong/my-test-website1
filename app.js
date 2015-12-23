var express = require('express');
var app = express();
var routes = require('./routes')

app.set('view engine','ejs');

app.locals.pagetitle = "Awesome Web ";

// Routes
app.get('/', routes.index);
app.get('/about', routes.about);

// Irrelevant web pages
app.get('*', function(req, res) {
    res.send('Bad Route');
} );

// Server listen port
var server = app.listen(3000, function() {
   console.log('Listening on port 3000');
});


