// this file will import the self created module and use it
let isEven = require('./modules/isEven'); // importing the module

let number = 15; // the actual number

const answer = isEven.checkEven(number); // checking the number


// Using this syntax for educational exploration purposes
if (answer) console.log(number, "is an Even Number");
else console.log(number, "is an Odd Number");