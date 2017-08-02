var chalk = require('chalk');
module.exports = {
  sumNumbers: function(x, y) {
  var result = (x + y);
  console.log(chalk.red(result));
  },
  minusNumbers: function(x, y) {
    var result = (x - y);
    console.log(chalk.blue(result));
  },
  multiplicateNumbers: function(x, y) {
    var result = (x * y);
    console.log(chalk.green(result));
  },
  divideNumbers: function(x, y) {
    var result = (x / y);
    console.log(chalk.yellow (result));
  }
};
