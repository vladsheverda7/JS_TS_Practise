export function findUniq(arr: number[]): number {
    let uniqueValue = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] != arr[j]) {
                uniqueValue = arr[i];
            } else {
                break;
            }
        }
    }
    return uniqueValue;
}
