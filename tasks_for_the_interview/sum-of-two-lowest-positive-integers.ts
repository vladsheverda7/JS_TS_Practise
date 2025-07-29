export function sumTwoSmallestNumbers(arr: number[]): number {
    let positiveArr = arr.filter(x => x > 0);
    let firstMinIndex = 0;
    let firstMinPositive = Number.MAX_VALUE;
    let secondMinPositive = Number.MAX_VALUE;

    for (let i = 0; i < positiveArr.length; i++) {
        if (positiveArr[i] < firstMinPositive) {
            firstMinPositive = positiveArr[i];
            firstMinIndex = i;
        }
    }

    for (let i = 0; i < positiveArr.length; i++) {
        if (positiveArr[i] < secondMinPositive && i != firstMinIndex) {
            secondMinPositive = positiveArr[i];
        }
    }
    return firstMinPositive + secondMinPositive;
}

export function sumTwoSmallestNumbers1(arr: number[]): number {
    let positiveArr = arr.filter(x => x > 0).sort((a, b) => a - b);
    return positiveArr[0] + positiveArr[1];
}

export function sumTwoSmallestNumbers2(arr: number[]): number {
    let min1 = Number.MAX_VALUE;
    let min2 = Number.MAX_VALUE;

    for (const x of arr) {
        if (x <= 0) continue;
        if (x < min1) {
            min2 = min1;
            min1 = x;
        } else if (x < min2) {
            min2 = x;
        }
    }

    return min1 + min2;
}
