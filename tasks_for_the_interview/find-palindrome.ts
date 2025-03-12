let firstString = 'level';
let secondString = 'racecar';
let thirdString = 'abccab';

// first option
let isPalindrome = (givenString: string): boolean => {
    let result: boolean = false;

    if (givenString.length == 0) {
        return false;
    }

    for (let i = 0, j = givenString.length - 1; i < givenString.length / 2 && j > givenString.length / 2; i++, j--) {
        if (givenString[i] == givenString[j]) {
            result = true;
        } else {
            result = false;
        }
    }
    return result;
};

console.log(isPalindrome(thirdString));

// second option

let isPalindrome1 = (givenString: string): boolean => {
    let length = givenString.length;

    for (let i = 0; i < length / 2; i++) {
        if (givenString[i] !== givenString[length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(thirdString));

// palindrom with number

let firstNumber = 123321;
let secondNumber = 12344321;
let thirdNumber = 12332;

let isNumberPalindrome = (givenNumber: number): boolean => {
    let str = givenNumber.toString();

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

console.log(`is number palindrome: ${isNumberPalindrome(thirdNumber)}`);
