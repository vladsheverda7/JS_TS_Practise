let initialString: string = 'aabbbcdddd';
let expectedString: string = 'a2b3c1d4';

let calculateSymbolsInString = (givenString: string) => {
    let actualString: string = '';

    for (let i = 0; i < givenString.length; i++) {
        let symbolCount: number = 1;
        for (let j = i + 1; j < givenString.length; j++) {
            if (givenString[i] == givenString[j]) {
                symbolCount++;
                i++;
            }
        }
        actualString += givenString[i] + symbolCount;
    }
    return actualString;
};

let compareStrings = (str1: string, str2: string): boolean => {
    return str1 == str2;
};

console.log(compareStrings(expectedString, calculateSymbolsInString(initialString)));

// second option
let calculateSymbolsInString1 = (givenString: string): string => {
    let actualString = '';
    let count = 1;

    for (let i = 0; i < givenString.length; i++) {
        if (givenString[i] === givenString[i + 1]) {
            count++;
        } else {
            actualString += givenString[i] + count;
            count = 1;
        }
    }

    return actualString;
};

console.log(compareStrings(expectedString, calculateSymbolsInString1(initialString)));
