'use strict'

var express = require('express');

var app = module.exports = express()

app.get('/', function(req, res){
  res.send('Hello World');
});

/* istanbul ignore next */
if (!module.parent) {
  // We will keep it at 3000. Opening port 80 as a normal user is not allowed.
  // Let's keep it simple
  app.listen(3000);
  console.log('Express started on port 3000');
}
