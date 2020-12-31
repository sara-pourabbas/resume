var data =require ('./data/data.json');
// load the things we need
var express = require('express');
const http = require('http');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/fonts', express.static(__dirname + 'public/fonts'))


// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index',data);
});


// app.listen(8880);


http.createServer(app).listen(8880);
console.log('8880 is the magic port');