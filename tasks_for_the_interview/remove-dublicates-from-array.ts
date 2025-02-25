// fist option

let initialArray: number[] = [1, 2, 3, 4, 5, 3, 2, 7];
let expectedArray: number[] = [1, 2, 3, 4, 5, 7];

function removeDuplicatesFromArray(arrayWithDuplicates: number[]): number[] {
    for (let i = 0; i < arrayWithDuplicates.length; i++) {
        for (let j = i + 1; j < arrayWithDuplicates.length; j++) {
            if (arrayWithDuplicates[i] == arrayWithDuplicates[j]) {
                arrayWithDuplicates.splice(j, 1);
            }
        }
    }
    return arrayWithDuplicates;
}

const compareArrays = (arr1: number[], arr2: number[]) => {
    return arr1.toString() === arr2.toString();
};

let actualArray: number[] = removeDuplicatesFromArray(initialArray);

console.log(`Are duplicates removed? ${compareArrays(expectedArray, actualArray)}`);

// second option

let initialArray1: number[] = [1, 2, 3, 4, 5, 3, 2, 7];
let expectedArray1: number[] = [1, 2, 3, 4, 5, 7];

function removeDuplicatesFromArray1(arrayWithDuplicates: number[]): number[] {
    return [...new Set(arrayWithDuplicates)];
}

const compareArrays1 = (arr1: number[], arr2: number[]) => {
    return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
};

let actualArray1: number[] = removeDuplicatesFromArray1(initialArray);

console.log(`Are duplicates removed? ${compareArrays1(expectedArray, actualArray)}`);
