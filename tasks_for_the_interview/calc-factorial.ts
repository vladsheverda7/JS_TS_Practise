let initialNumber = 8;

let getFactorial = givenNumber => {
    let factorial = 1;
    let index = 1;
    for (let i = 1; i <= givenNumber; i++) {
        factorial *= i;
    }
    return factorial;
};

console.log(getFactorial(initialNumber));
