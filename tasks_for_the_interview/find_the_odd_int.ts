export function findOdd(arr: number[]): number {
    let oddNumber = 0;
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter++;
            }
        }
        if (counter % 2 != 0) {
            oddNumber = arr[i];
            break;
        }
    }
    return oddNumber;
}
