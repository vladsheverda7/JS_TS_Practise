export function filterStrings(str: string[]): string[] {
    const actualResultArr = str.filter(x => x.length > 3);
    return actualResultArr;
}

export function filterEvenNumber(arr: number[]): number[] {
    const actualArr = arr.filter(x => x % 2 == 0);
    return actualArr;
}
