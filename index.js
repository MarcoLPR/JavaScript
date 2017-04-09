var express = require('express')
var http = require('http');
var app = express();
app.get('/yeyo', function (req, res) {
  res.send('Hello World!')
})
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

