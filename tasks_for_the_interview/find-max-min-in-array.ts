// first option
let initialArray: Array<number> = [2, 6, 3, 7, 9, 0, -5];
let minValue: number = -5;
let maxValue: number = 9;

let findMinValue = function (givenArray: Array<number>): number {
    let temp = Number.MAX_VALUE;
    givenArray.forEach(item => {
        if (item < temp) {
            temp = item;
        }
    });
    return temp;
};

let findMaxValue = (givenArray: Array<number>): number => {
    let temp: number = Number.MIN_VALUE;
    givenArray.forEach(item => {
        if (item > temp) {
            temp = item;
        }
    });
    return temp;
};

let compareTwoNumbers = function (a: number, b: number): boolean {
    return a == b;
};

console.log(`is min value is expected: ${compareTwoNumbers(minValue, findMinValue(initialArray))}`);
console.log(`is max value is expected: ${compareTwoNumbers(maxValue, findMaxValue(initialArray))}`);

// second option

let findMinValue1 = (givenArray: Array<number>): number => Math.min(...givenArray);
let findMaxValue1 = (givenArray: Array<number>): number => Math.max(...givenArray);

console.log(`is min value is expected: ${compareTwoNumbers(minValue, findMinValue1(initialArray))}`);
console.log(`is max value is expected: ${compareTwoNumbers(maxValue, findMaxValue1(initialArray))}`);
