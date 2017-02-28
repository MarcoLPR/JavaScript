var hello = "Welcome";
var chalk = require('chalk');
var reversal = require("./reversal");
var fs = require('fs');
var menu = require('node-menu');
console.log(chalk.green(hello));  
menu.addDelimiter('-', 40, 'Main Menu')
  .addItem(
        'Write userfile',
        function() {
          const readline = require('readline');
          const rl = readline.createInterface({
              input: process.stdin,
              output: process.stdout
              });
        rl.question(chalk.blue('What is your name? '), (answer1) => {
            rl.question(chalk.red('What is your lastname?  '), (answer2) => {
                var firstName = answer1;
                var lastName = answer2;
                var result = (firstName) + " " + (lastName);
                rl.close();
                console.log(reversal(`${result}`));
                var morning = "Have an awesome day!";
                var bye = `See you later ${result}`;
                console.log(chalk.green(morning));
                console.log(chalk.blue(bye));
                  var user = new Object();
                  user.firstName = firstName;
                  user.lastName = lastName;
                  var myString = JSON.stringify(user);
                  fs.writeFile('./user.json', myString, function(err){
          if (err) return console.error(err);
            console.log ('done')
        });
            });
        })
  })
  .addItem(
        "Read userfile",
        function() {
        fs.readFile('./user.json', 'utf8', function (err,data) {
          if (err) {
            return console.log(err);
            }
            console.log(data);
})
})
.addDelimiter('-', 40)
.start();
