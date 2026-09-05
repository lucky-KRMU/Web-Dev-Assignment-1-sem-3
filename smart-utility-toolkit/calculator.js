// This is the file to create a simple CLI based Calculator using pure In-built methods

let operation = process.argv[2];
let num1 = Number(process.argv[3]);
let num2 = Number(process.argv[4]);

let output = 'Invalid Operation'; // initial condition for the output

// checking and applying different operations
if (operation.toLowerCase() === 'add') {
    output = num1 + num2;
} else if (operation.toLowerCase() === 'sub') {
    output = num1 - num2;
} else if (operation.toLowerCase() === 'mul') {
    output = num1 * num2;
} else if (operation.toLowerCase() === 'div') {
    if (num2 == 0) {
        console.error("Zero Division Error!"); 
        return;
    }
    output = num1 / num2;
} 

console.log(output);