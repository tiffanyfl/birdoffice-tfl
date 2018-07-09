var express = require('express');
var app = express();
var path = require('path');

 app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/src', express.static(path.join(__dirname, 'src')));

app.get('/', function(req, res) {
    res.sendFile( __dirname + '/index.html');
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page not found !');
});




app.listen(3000);
