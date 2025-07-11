// every checks if each element of the array matches the condition. Returns true if all of them match - otherwise false.

export function isArrElementsOdd(arr: number[]): boolean {
    const result = arr.every(x => x % 2 !== 0);
    return result;
}
