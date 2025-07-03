export function count(string: string): object {
    const returnedObject: { [key: string]: number } = {};
    const arrFromString = string.split('');
    const uniqueArr = [...new Set(arrFromString)];
    let charCounter = 1;

    for (let i = 0; i < uniqueArr.length; i++) {
        console.log(`arr[i] = ${uniqueArr[i]}`);
        for (let j = 0; j < arrFromString.length; j++) {
            console.log(`arr[j] = ${arrFromString[j]}`);
            if (uniqueArr[i] === arrFromString[j]) {
                charCounter++;
            }
        }
        returnedObject[uniqueArr[i]] = charCounter;
    }
    return returnedObject;
}
