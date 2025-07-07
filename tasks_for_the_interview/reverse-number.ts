let initialNumber = 791827;

// option 1

let reverseNumber = (givenNumber: number) => {
    let str: Array<string> = givenNumber.toString().split('').reverse();
    let newStr = str.join('');
    let returnedIntValue = +newStr;
    return returnedIntValue;
};

console.log(reverseNumber(initialNumber));

// option 2
let reverseNumber1 = (givenNumber: number): number => {
    return parseInt(givenNumber.toString().split('').reverse().join(''), 10);
};

console.log(reverseNumber1(initialNumber));
