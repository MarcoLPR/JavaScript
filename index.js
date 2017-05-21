var express = require('express')
var sqlite3 = require('sqlite3').verbose();
var http = require('http');
var bodyParser = require('body-parser')
bodyParser = require('body-parser').json();
var app = express();
var path = require('path');
const sqliteJSON = require('sqlite-json');
const exporter = sqliteJSON('./slaves.db');
var db = new sqlite3.Database('./slaves.db');


app.use("/", express.static('wwwroot'));

//Slave Table AJAX

app.get('/slave/:id', function(req, res) {
    var id = req.param('id');
    exporter.json('SELECT * FROM contacts WHERE RowId =' + id, function (err, json) {
  res.send(json);
});
});
app.get('/slave', function(req,res) {
  exporter.json('SELECT RowId, name, number, email, city FROM contacts', function (err, json) {
  res.send(json);
});
});

app.post('/slave', bodyParser, function(req, res) {
  var name = req.body.name;
  var number = req.body.number;
  var email = req.body.email;
  var city = req.body.city;
  db.serialize(function() {
  db.run("INSERT INTO contacts(name, number, email, city) VALUES ('" + name +"', '"+ number +"', '" + email +"', '" + city + "')");
});
db.close();
  res.status(200).send("Contact added succesfully");
});

app.delete('/slave/:id', function(req, res) {
    var id = req.param('id');
    var success = "The operation has been done successfully";
    db.serialize(function() {
    db.run('DELETE FROM contacts WHERE RowId =' + id, function (err, json) {
          if (err) {
      res.send(err);
      } else{
      res.send(success);
    }
})
})
});

app.put('/slave/:id', bodyParser, function(req, res) {
  var id = req.param('id');
  var name = req.body.name;
  var number = req.body.number;
  var email = req.body.email;
  var city = req.body.city;
  var success = "The operation has been done successfully";
  db.serialize(function() {
    db.run("UPDATE contacts SET name = '" + name + "', number = '" + number + "', email = '" + email + "', city = '" + city + "' WHERE RowId =" + id, function(err,json) {
      if (err) {
        res.send(err);
       } else {
         res.send(success);
       }
    })
  })
});
// Login Table
app.get('/login', function(req,res) {
  exporter.json('SELECT username, password FROM login', function (err, json) {
  res.send(json);
});
});
app.post('/register', bodyParser, function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  db.serialize(function() {
  db.run("INSERT INTO login(username, password) VALUES ('" + username +"', '"+ password +"')");
});
db.close();
  res.status(200).send("Contact added succesfully");
});
// Calculator
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

//Location
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

