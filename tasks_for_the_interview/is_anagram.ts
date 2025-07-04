export function isAnagram(s: string, t: string): boolean {
    let firstString = s.split('').sort().join('');
    let secondString = t.split('').sort().join('');
    if (firstString === secondString) {
        return true;
    }
    return false;
}
