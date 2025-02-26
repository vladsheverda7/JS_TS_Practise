// option 1
let initialNumber: number = 7984;
let exepctedSum = 28;

let calcTheSumOfDigits = (givenNumber: number) => {
    let sum: number = 0;
    for (let i = 0; i < givenNumber.toString().length; i++) {
        sum += Number(givenNumber.toString()[i]);
    }
    return sum;
};

let compareNumbers = (num1: number, num2: number): boolean => num1 === num2;
console.log(calcTheSumOfDigits(initialNumber));
console.log(compareNumbers(exepctedSum, calcTheSumOfDigits(initialNumber)));

//option 2
let calcTheSumOfDigits1 = (givenNumber: number): number =>
    givenNumber
        .toString()
        .split('')
        .reduce((sum, digit) => sum + Number(digit), 0);

console.log(compareNumbers(exepctedSum, calcTheSumOfDigits1(initialNumber)));
