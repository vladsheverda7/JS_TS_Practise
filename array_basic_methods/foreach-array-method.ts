export function getIndexAndElement(arr: string[]) {
    arr.forEach(el => {
        console.log(`${el}: ${arr.indexOf(el)}`);
    });
}

export function getNewString(arr: string[]): string {
    let finalString = '';
    arr.forEach(el => {
        finalString = `${finalString} ` + el;
    });
    return finalString.trim();
}
