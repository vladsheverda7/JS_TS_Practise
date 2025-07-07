export function frequencyCounter(arr: number[]): Map<number, number> {
    const nums = new Map();
    for (let num of arr) {
        const count = nums.get(num) || 0;
        nums.set(num, count + 1);
    }
    return nums;
}
