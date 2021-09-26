const prompt = require('prompt-sync')();

const pinCode = '1234';
const enterPin = prompt('Please enter passcode: ')
if (enterPin === pinCode) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}