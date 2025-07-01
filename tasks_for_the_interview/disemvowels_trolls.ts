export function disemvowel(str: string) {
    let listofVowel: string[] = ['a', 'i', 'e', 'o', 'u', 'A', 'I', 'E', 'O', 'U'];
    let strArr: string[] = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < listofVowel.length; j++) {
            if (strArr[i] === listofVowel[j]) {
                strArr.splice(i, 1);
            }
        }
    }
    return strArr.join('');
}

console.log(disemvowel('This website is for losers LOL!'));
console.log(disemvowel('moDnSTYptGgB memZrtYyfxfK dH'));
console.log(disemvowel('EgBMWiZiKXUFURkcNm NzEnzICN cUDwOooIAUihyA KBgkwapHHaUf jJidTdZ HoAf eXQieuGuOPxXnDAJdrTS'));
