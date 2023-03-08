const path = require('path')
var express = require('express');
var app = express();

console.log("server is running")
app.use('/', express.static(path.join(__dirname, '/static')));
var server = app.listen(80)
console.log(path.join(__dirname, 'static'))

