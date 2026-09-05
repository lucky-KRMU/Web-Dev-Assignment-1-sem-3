// this file is to create a dice

const crypto = require('crypto'); // importing the crypto module

let number = crypto.randomInt(1,7); // generating random number

console.log("Dice Rolled: ", number); // printing random number