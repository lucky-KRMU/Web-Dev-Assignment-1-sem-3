// this file is to create file manager

const fs = require('fs');

// Creating the file
fs.writeFile('test.txt', 'File Created From FS module', (err)=>{
    if (err) console.error(err);
    console.log("File has been successfully created!");
})

// Reading the file
fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) console.error(err);
    console.log(data);
})

// Appending the file
fs.appendFile('test.txt', "\nNew Line Appended" ,(err, data) => {
    if (err) console.error(err);
    console.log(data);
})

// Deleting the file
// fs.unlink('test.txt', (err) => {
//     if (err) {
//         console.err(err); 
//         return;
//     }
//     console.log("file deleted successfully");
// })
