var hello = "Welcome";
var chalk = require('chalk');
var reversal = require("./reversal");
console.log(chalk.green(hello));
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(chalk.blue('What is your name? '), (answer1) => {
    rl.question(chalk.red('What is your lastname?  '), (answer2) => {
        var result = (answer1) + " " + (answer2);
        rl.close();
        console.log(reversal(`${result}`));
        var morning = "Have an awesome day!";
        var bye = `See you later ${result}`;
        console.log(chalk.green(morning));
        console.log(chalk.blue(bye));
    });
});
