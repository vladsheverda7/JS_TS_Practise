export function doubleArrayElements(initailArr: number[]): number[] {
    const actualArray: number[] = initailArr.map(x => x * 2);
    return actualArray;
}

export function returnNameArray(objectNameArr: Person[]): string[] {
    const namesArr = objectNameArr.map(obj => obj.name);
    return namesArr;
}

interface Person {
    name: string;
}
