var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('hello team 2B||!2B');
});

app.listen(8081, function(){
  console.log('listening on port 8081');
});