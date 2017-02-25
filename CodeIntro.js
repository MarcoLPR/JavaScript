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
rl.question('What is your name? ', (answer) => {
  console.log(`Welcome back: ${answer}`);
  console.log(Reversal(answer));
  rl.close();
});
