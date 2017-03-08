var chalk = require('chalk');
var reversal = require("./reversal");
var fs = require('fs');
var menu = require('node-menu');
var askLast = 'What is your lastname?';
menu.disableDefaultHeader();
menu.addDelimiter('-', 40, 'Main Menu'),
menu.addItem(
      'Write userfile',
       function question1(askName, firstName) {
        var askName = 'What is your name?';
        console.log(askName), firstName;
         var firstName = firstName;
          function question2(askLast, lastName) {
            var askLast = 'What is your lastname?';
            console.log(askLast), lastName;
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
  {'name': 'firstName', 'type': "string"},
  {'name': 'lastName', 'type': "string"}
]);
}})
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
