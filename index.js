var express = require('express')
var sqlite3 = require('sqlite3').verbose();
var http = require('http');
var app = express();
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./slaves.db"
  }
});
var path = require('path');
var db = new sqlite3.Database('./slaves.db');

app.use("/", express.static('wwwroot'));

//Slave Table AJAX
app.get('/slave/:id', function (req, res) {
  var id = req.param('id');
  async function getUser() {
  return await knex.select().from('contacts').where('RowId', id);}
  (async function(){
  var data = await getUser();
  res.send(data)
})()});
app.get('/slave', function (req, res) {
  knex.select().from('contacts')
    .then(function (data) {
      res.send(data);
    })
});
app.post('/slave', function (req, res) {
  var name = req.param('name');
  var number = req.param('number');
  var email = req.param('email');
  var city = req.param('city');
  knex.insert([{ name: name, number: number, email: email, city: city }]).into('contacts').then(function (data) {
    res.send("Contact added succesfully")
  })
});
app.delete('/slave/:id', function (req, res) {
  var id = req.param('id');
  var success = "The operation has been done successfully";
  async function deleteUser() {
  return await knex('contacts').where('RowId', id).del();}
  (async function(){
  var data = await deleteUser();
  res.send(data)
  })
});
app.put('/slave/:id', function (req, res) {
  var id = req.param('id');
  var name = req.param('name');
  var number = req.param('number');
  var email = req.param('email');
  var city = req.param('city');
  var success = "The operation has been done successfully";
  knex('contacts').where('RowId', id).update({ name: name, number: number, email: email, city: city })
    .then(function (data) {
      res.send(success)
    })
});
// Login Table
app.get('/login', function (req, res) {
  knex.select().from('login')
  .then(function(data){
    res.send(data);
  })});
app.post('/register', function (req, res) {
  var username = req.param('username');
  var password = req.param('password');
  knex.insert([{ username: username, password: password }]).into('login')
  .then(function (data) {
    res.send("User registered")
  })});
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
  console.log('Example app listening on port 3000!')
})

