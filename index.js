var hello = "Welcome";
var chalk = require('chalk');
var reversal = require("./reversal");
console.log(chalk.green(hello));
function name(nombre){
};
function lastname(apellido){
  console.log(chalk.red(`Welcome back: ${nombre}`));
  console.log(chalk.green(reversal(nombre) + reversal(apellido)));
  rl.close();
  var morning = "Have an awesome day!";
  var bye = `See you later ${nombre} ${apellido}`;
  console.log(chalk.red(morning));
  console.log(chalk.blue(bye));
};
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question(chalk.blue('What is your name? '), name);
rl.question(chalk.red('What is your lastname? '), lastname);
