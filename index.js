var chalk = require('chalk');
var reversal = require("./reversal");
var fs = require('fs');
var menu = require('node-menu');
menu.disableDefaultHeader();
menu.addDelimiter('-', 40, 'Main Menu'),
menu.addItem(
       'Write userfile',
       function(firstName, lastName) {
        console.log('What is your name? '), firstName => {
        console.log('What is your lastname?  '), lastName => {
            var firstName = firstName;
            var lastName = lastName;
              var user = new Object();
                 user.firstName = firstName;
                 user.lastName = lastName;
                  var myString = JSON.stringify(user);
                  fs.writeFile('./user.json', myString, function(err){
          if (err) return console.error(err);
            console.log ('done')
          },
null,
[
  {'name': 'firstName', 'type': 'string'},
  {'name': 'lastName', 'type': 'string'}
]);
}}})
menu.addItem(
        "Read userfile",
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
