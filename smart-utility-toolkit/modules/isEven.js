// This is the file to check whether any given number is even or not

function checkEven(num) {
    if (num%2 == 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = {checkEven}