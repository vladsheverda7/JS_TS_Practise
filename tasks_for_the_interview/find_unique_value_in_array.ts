export function findUniq(arr: number[]): number {
    let uniqueValue = 0;
    let newArr = arr.sort();
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] !== newArr[i - 1] && newArr[i] !== newArr[i + 1]) {
            uniqueValue = newArr[i];
        }
    }
    return uniqueValue;
}
