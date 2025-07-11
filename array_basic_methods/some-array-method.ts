//some checks if at least one element of the array matches the given condition. Returns true if at least one element is found - otherwise false.

export function isNegativeNumberInArr(arr: number[]): boolean {
    const result = arr.some(x => x < 0);
    return result;
}
