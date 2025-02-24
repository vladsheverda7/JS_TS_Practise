// functions

// Declarative function

function helloOne() {
    console.log('Hello one');
}
helloOne();

// Function Expression funstions
let hellowTwo = function () {
    console.log('Hello two');
};
hellowTwo();

// Arrow  function
let helloThree = () => {
    console.log('Hello three');
};
helloThree();

// Function with arguments
function printName(name, lastname) {
    console.log(`Hello ${name} ${lastname}`);
}
printName('John', 'Doe');

// Function with return

function multiplyByTwo(number) {
    let result = number * 2;
    return result;
}
let result = multiplyByTwo(5);
console.log(result);

// import function
import { printAge } from '../helpers/printHelper.js';
console.log(`my age is ${printAge(28)}`);

// import everything
import * as helper from '../helpers/printHelper.js';
console.log(`my age is ${helper.printAge(29)}`);
