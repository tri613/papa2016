var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

//logging
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

//mount asset files
app.use('/assets',express.static( path.join( __dirname, './assets') ));

//index page
app.get('/', function(req, res){
	res.sendFile( path.join( __dirname, './index.html' ) );
});

app.listen(port, function () {
  console.log('Papa2016 on port '+ port || 3000 +'!');
});