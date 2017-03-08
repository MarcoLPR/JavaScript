var chalk = require('chalk');
var reversal = require("./reversal");
var fs = require('fs');
var menu = require('node-menu');
var user = new Object();
var TestObject = function() {
    var self = this;
    self.name = 'Name ';
}

TestObject.prototype.printName = function(arg) {
    console.log(this.name + arg);
}

var testObject = new TestObject();
menu.disableDefaultHeader();
menu.addDelimiter('-', 40, 'Main Menu'),
menu.addItem(
  'Write',
    testObject.printName,
    testObject,
    [{'name': 'Name ', 'type': 'string'}])
    function saveChanges() {
      user.name = Name;
      var myString = JSON.stringify(user);
      fs.writeFile('./user.json', myString, function(err){
if (err) return console.error(err);
console.log ('done');
})}
menu.addItem(
  "Read",
   function(read) {
     fs.readFile('./user.json', 'utf8', function (err,data) {
          if (err) {
            return console.log(err);
            }
            console.log(data);
})
})
menu.addDelimiter('*', 40),
menu.start();

menu.addDelimiter('*', 40),
menu.start();
