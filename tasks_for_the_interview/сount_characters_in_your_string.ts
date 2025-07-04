export function count(string: string): object {
    const returnedObject: { [key: string]: number } = {};
    const arrFromString = string.split('');
    const uniqueArr = [...new Set(arrFromString)];

    for (let i = 0; i < uniqueArr.length; i++) {
        let charCounter = 0;
        for (let j = 0; j < arrFromString.length; j++) {
            if (uniqueArr[i] === arrFromString[j]) {
                charCounter++;
            }
        }
        returnedObject[uniqueArr[i]] = charCounter;
    }
    return returnedObject;
}
