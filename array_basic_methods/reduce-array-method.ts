export function findArraySum(arr: number[]): number {
    const sum = arr.reduce((acc, value) => acc + value, 0);
    return sum;
}

export function charCount(arr: string[]): object {
    const finalObj = arr.reduce((acc, value) => {
        if (acc[value]) {
            acc[value] = acc[value] + 1;
        } else {
            acc[value] = 1;
        }
        return acc;
    }, {});
    return finalObj;
}
