const chalk = require('chalk');
// console.log(chalk.greenBright.italic.inverse('hello'));
const validator=require('validator');
const res=validator.isEmail('Sahil@mal.com');
console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));
//ctrl+c to exit nodemon