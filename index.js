var express = require('express')
var http = require('http');
var app = express();
var options = {
host: 'ip-api.com',
path: '/json/'
};

app.get('/yeyo', function (req, res) {
  res.send('Hello World!')
})
app.get('/sum', function (req, res) {
  var x = '';
  x = parseInt(x);
  x = req.params;
  var y = '';
  y = parseInt(y);
  y = req.params;

  function sumNumbers(x, y) {
  var sum = (x + y);
  res.send(sum);
}})
// /sum/numer0/numer1
app.get('/location', function(req, res) {
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
