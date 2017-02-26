var hello = "Welcome";
var chalk = require('chalk');
console.log(chalk.green(hello));
function Reversal(meow) {
  var backward = "";
  for (var i = meow.length-1; i > -1; i--) {
    backward += (meow[i]);
}  return backward; }
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question(chalk.blue('What is your name? '), (answer) => {
  console.log(chalk.red(`Welcome back: ${answer}`));
  console.log(chalk.green(Reversal(answer)));
  rl.close();
  var morning = "Have an awesome day!";
  var bye = "See you later " + (answer);
  console.log(chalk.red(morning));
  console.log(chalk.blue(bye));
});
