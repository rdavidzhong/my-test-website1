var express = require('express');
var app = express();


app.set('view engine','ejs');


app.get('/', function(req, res) {
    res.render('default', {
        title:'Home',
        classname:'home',
        users:['Ray', 'Morten', 'James']
    });
} );


app.get('/about', function(req, res) {
    res.render('default', {
        title:'About Us',
        classname:'about'
    });
} );


// Irrelevant web pages
app.get('*', function(req, res) {
    res.send('Bad Route');
} );

// Server listen port
var server = app.listen(3000, function() {
   console.log('Listening on port 3000');
});


