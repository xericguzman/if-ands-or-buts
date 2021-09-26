const prompt = require('prompt-sync')();

const person1 = Number(prompt('How much did you pay? ')); 
const person2 = Number(prompt('How much did you pay? '));
const bill = person1 + person2;

const splitBill = bill / 2;

const owes2 = splitBill - person1;
const owes1 = splitBill - person2;

if (person1 === person2) {
    console.log('The bill was split evenly');
} else if (person1 < splitBill) {
    console.log ('person 2 owes $', owes2);
} else if (person2 < splitBill) {
    console.log('person 1 owes $', owes1);
} else {
    console.log ('error');
}

