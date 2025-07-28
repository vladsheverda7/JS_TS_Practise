export function reverseWords(str: string): string {
    let stringArray = str.split(' ');

    for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] = stringArray[i].split('').reverse().join('');
    }
    return stringArray.join(' ');
}

reverseWords('The quick ');
