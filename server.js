var express = require('express');
var path = require('path');
var app = express();

//logging
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

//mount asset files
app.use(express.static( path.join( __dirname, './assets') ));

//index page
app.get('/', function(req, res){
	res.sendFile( path.join( __dirname, './index.html' ) );
});

app.listen(80, function () {
  console.log('Papa2016 on port 80!');
});