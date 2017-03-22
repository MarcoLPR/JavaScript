// Setup requires
var chalk = require('chalk');
var reversal = require("./reversal");
var fs = require('fs');
var menu = require('node-menu');

var number =
 [
    {'name': 'x', 'type': 'numeric'},
    {'name': 'y', 'type': 'numeric'}
  ];
// Write handler to use with menu
function writeHandler(firstname, lastName) {
  // Create object, you don't need anything else. https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer
  var user = {
    Firstname: firstname,
    Lastname: lastName
  };

  // Create json string using the object user
  var jsonData = JSON.stringify(user);

  // Write json string to a file
  fs.writeFile('./user.json', jsonData, function(err){
    if (err) return console.error(err);
    console.log('done');
  });
}

// Read handler to use with menu
function readHandler() {
  fs.readFile('./user.json', 'utf8', function (err, data) {
    if (err) return console.log(err);
    console.log(data);
  });
}
function reverseInput(meow) {
  var input = {
    Input: input
  };
  console.log(reversal(meow))
 };
 function sumNumbers(x, y) {
   var result = (x + y);
   console.log( chalk.red(result));
 };
 function minusNumbers(x, y) {
   var result = (x - y);
   console.log( chalk.blue(result));
 };
 function multiplicateNumbers(x, y) {
   var result = (x * y);
   console.log( chalk.green(result));
 };
 function divideNumbers(x, y) {
   var result = (x / y);
   console.log( chalk.yellow (result));
 };
// Start menu
menu.disableDefaultHeader();
menu.addDelimiter('-', 40, 'User'),

// addItem API (title, handler, owner, args)
menu.addItem(
  (chalk.underline.red('Write')),        // title
  writeHandler,   // handler
  null,           // owner (we don't need this parameter so null it's enough)
  [               // args
    {'name': 'FirstName ', 'type': 'string'}, // FirstName maps to firstName argument in writeHandler
    {'name': 'LastName ', 'type': 'string'} // LastName maps to lastName argument in writeHandler
  ]);

// if you have to pass null in arguments (owner and args) you can omit it.
menu.addItem(
  (chalk.underline.blue('Read')),        // title
  readHandler   // handler
);
menu.addItem(
  (chalk.underline.green('Reverse')),
  reverseInput,
  null,
  [
    {'name': 'Input', 'type': 'string'}
  ]);

menu.addDelimiter('*', 40),

menu.disableDefaultHeader();
menu.addDelimiter('-', 40, 'Calculator'),

menu.addItem(
  (chalk.red('Sum')),
  sumNumbers,
  null,
  number
);
menu.addItem(
  (chalk.blue('Minus')),
  minusNumbers,
  null,
  number
);
menu.addItem(
  (chalk.green('Multiplication')),
  multiplicateNumbers,
  null,
  number
);
menu.addItem(
  (chalk.yellow('Divide')),
  divideNumbers,
  null,
  number
);

menu.addDelimiter('*', 40),
menu.start();
