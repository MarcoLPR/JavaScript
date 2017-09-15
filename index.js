var express = require('express')
var bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
var http = require('http');
var app = express();
var tubular = require('tubular-nodejs')('knex');
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./slaves.db"
  }
});
var path = require('path');
var db = new sqlite3.Database('./slaves.db');

app.use(bodyParser.json());
app.use("/", express.static('wwwroot'));

//Slave Table AJAX
app.get('/slave/:id', function (req, res) {
  var id = req.param('id'); // TODO: Change to req.
  knex.select().from('contacts').where('id', id).first()
    .then(data => res.send(data));
});
app.get('/slave', function (req, res) {
  knex.select().from('contacts')
    .then(function (data) {
      res.send(data);
    })
});
app.post('/slave', function (req, res) {
  knex.insert(req.body).into('contacts').then(function (data) {
    res.send("Contact added succesfully")
  })
});
//Create table Tubular
app.post('/slave', function (req, res) {
  let knexQuery = knex.select('id', 'name', 'number', 'email', 'city').from('contacts');
  res.send(tubular.createGridResponse(req, knexQuery))
});

app.delete('/slave/:id', function (req, res) {
  var id = req.param('id');
  knex('contacts').where('id', id).del()
    .then(res.send("Ok"))
});
app.put('/slave/:id', function (req, res) {
  var id = req.param('id');
  var name = req.param('name');
  var number = req.param('number');
  var email = req.param('email');
  var city = req.param('city'); //Check this
  var success = "The operation has been done successfully";
  knex('contacts').where('id', id).update(req.body)
    .then(function (data) {
      res.send(success)
    })
});
// Login Table
app.get('/login', function (req, res) {
  knex.select().from('login')
    .then(function (data) {
      res.send(data);
    })
});
app.post('/register', function (req, res) {
  knex.insert(req.body).into('login')
    .then(function (data) {
      res.send("User registered")
    })
});
// Calculator
app.get('/:op/:x/:y', function (req, res) {
  var x = req.param('x');
  x = parseInt(x);
  var y = req.param('y');
  y = parseInt(y);
  var op = req.param('op');
  if (op == "sum") {
    var result = [x + y];
    res.send(result)
  } else if (op == "minus") {
    var result = [x - y];
    res.send(result)
  } else if (op == "multiply") {
    var result = [x * y];
    res.send(result)
  } else if (op == "divide") {
    var result = [x / y];
    res.send(result)
  } else {
    res.send('Error')
  }
});
//Location
app.get('/location/:IP', function (req, res) {
  var options = {
    host: 'ip-api.com',
    path: '/json/'
  }
  var ip = req.param('IP');
  options.path = options.path + ip;
  callback = function (response) {
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
  console.log('Hosted in port 3000')
})

