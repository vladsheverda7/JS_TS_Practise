let initialString = 'hello';
let expectedString = 'olleh';

// first option
let compareStrings = (a: string, b: string): boolean => {
    return a == b;
};

let reverseString = (givenString: string): string => {
    let newString: Array<string> = givenString.split('');

    for (let i = 0; i < newString.length / 2; i++) {
        let tempVar: string = '';
        tempVar = newString[i];
        newString[i] = newString[newString.length - 1 - i];
        newString[newString.length - 1 - i] = tempVar;
    }

    return newString.join('');
};

console.log(compareStrings(reverseString(initialString), expectedString));

// second option
let reverseString1 = (s: string): string => {
    let arr = s.split('');
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr.join('');
};
