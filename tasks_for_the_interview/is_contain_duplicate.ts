export function containsDuplicate(nums: number[]): boolean {
    let newArr = nums.sort();
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === newArr[i - 1] || newArr[i] === newArr[i + 1]) {
            return true;
        }
    }

    return false;
}
