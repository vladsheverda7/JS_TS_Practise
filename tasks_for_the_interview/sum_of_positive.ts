let positiveSum = (arr: Array<number>) => {
    let sum: number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
};

let arr = [1, 2, 4, 6, -2, -5];

console.log(`positive sum is ${positiveSum(arr)}`);
