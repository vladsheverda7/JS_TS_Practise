export function disemvowel(str: string) {
    let listofVowel: string[] = ['a', 'i', 'e', 'o', 'u', 'A', 'I', 'E', 'O', 'U'];
    let strArr: string[] = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < listofVowel.length; j++) {
            if (strArr[i] === listofVowel[j]) {
                strArr.splice(i, 1);
                i--;
                break;
            }
        }
    }
    return strArr.join('');
}
