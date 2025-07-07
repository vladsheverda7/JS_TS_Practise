// option 1
let initialNumber: number = 6;

let isOddOrEven = (givenNumber: number): string => {
    if (givenNumber % 2 == 0) {
        return `${givenNumber} is even`;
    } else {
        return `${givenNumber} is odd`;
    }
};

console.log(isOddOrEven(initialNumber));

// option 2

let isOddOrEven1 = (givenNumber: number): string => `${givenNumber} is ${givenNumber % 2 === 0 ? 'even' : 'odd'}`;

console.log(isOddOrEven1(initialNumber));
