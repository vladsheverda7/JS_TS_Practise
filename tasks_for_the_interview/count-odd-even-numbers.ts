let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let countOddCount = (givenArray: Array<number>): number => {
    let oddCount: number = 0;

    for (let i = 0; i < givenArray.length; i++) {
        if (givenArray[i] % 2 != 0) {
            oddCount++;
        }
    }
    return oddCount;
};

let countEvenCount = (givenArray: Array<number>): number => {
    let evenCount: number = 0;

    givenArray.forEach(element => {
        if (element % 2 == 0) {
            evenCount++;
        }
    });

    return evenCount;
};

let countOddAndEven = (givenArray: Array<number>): Array<number> => {
    let arrWithCount: Array<number> = [0, 0];
    for (let i = 0; i < givenArray.length; i++) {
        if (givenArray[i] % 2 != 0) {
            arrWithCount[0]++;
        } else {
            arrWithCount[1]++;
        }
    }
    return arrWithCount;
};

console.log(`Count of odd numbers in the array is ${countOddCount(arr)}`);
console.log(`Count of even numbers in the array is ${countEvenCount(arr)}`);

console.log(`Count of odd numbers in the array is ${countOddAndEven(arr)[0]}`);
console.log(`Count of even numbers in the array is ${countOddAndEven(arr)[1]}`);
