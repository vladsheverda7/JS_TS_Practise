// option 1
let givenNumberRange: number = 4;

let getFiboSeries = (range: number): Array<number> => {
    let arr: number[] = [0, 1];
    for (let i = 2; i <= range; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
        if (arr[i] + arr[i - 1] > range) {
            break;
        } else {
            arr.push(arr[i]);
        }
    }
    return arr;
};

console.log(getFiboSeries(givenNumberRange).toString());

// option 2
let first = 0;
let second = 1;
let next = 0;
for (let i = 0; i <= givenNumberRange; i++) {
    console.log(first + ' ');
    next = first + second;
    first = second;
    second = next;
    if (first > givenNumberRange) {
        break;
    }
}

//option 3

let getFiboSeries1 = (range: number): number[] => {
    let arr: number[] = [0, 1];
    let next = arr[0] + arr[1];

    while (next <= range) {
        arr.push(next);
        next = arr[arr.length - 1] + arr[arr.length - 2];
    }

    return arr;
};

console.log(getFiboSeries1(givenNumberRange).toString());
