var express = require('express')
var http = require('http');
var app = express();
var path = require('path');
const sqliteJSON = require('sqlite-json');
const exporter = sqliteJSON('./slaves.db');

app.use("/", express.static(__dirname));

app.get('/slave/:id', function(req, res) {
    var id = req.param('id');
    exporter.json('SELECT info FROM contacts WHERE rowid = id', function (err, json) {
    res.send(json);
});
});
app.get('/sum/:x/:y', function (req, res){
  var x = req.param('x');
  x = parseInt(x);
  var y = req.param('y');
  y = parseInt(y);
  var result = [x + y];
  res.send(result);
});
app.get('/minus/:x/:y', function (req, res){
  var x = req.param('x');
  x = parseInt(x);
  var y = req.param('y');
  y = parseInt(y);
  var result = [x - y];
  res.send(result);
});
app.get('/multiply/:x/:y', function (req, res){
  var x = req.param('x');
  x = parseInt(x);
  var y = req.param('y');
  y = parseInt(y);
  var result = [x * y];
  res.send(result);
});
app.get('/divide/:x/:y', function (req, res){
  var x = req.param('x');
  x = parseInt(x);
  var y = req.param('y');
  y = parseInt(y);
  var result = [x / y];
  res.send(result);
});
app.get('/location/:IP', function(req, res) {
  var options = {
  host: 'ip-api.com',
  path: '/json/'
  }
    var ip = req.param('IP');
    options.path = options.path + ip;
    callback = function(response) {
     var str = '';
     response.on('data', function (chunk) {
       str += chunk;
     });
     response.on('end', function () {
       res.send(str);
     });
   }

   http.request(options, callback).end();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

