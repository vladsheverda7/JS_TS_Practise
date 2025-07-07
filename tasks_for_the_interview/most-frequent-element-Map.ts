export function mostFrequentElement(nums: number[]): number {
    let map = new Map<number, number>();
    for (let num of nums) {
        let count = map.get(num) || 0;
        map.set(num, count + 1);
    }

    let maxValue = Number.MIN_VALUE;

    for (let [key, value] of map.entries()) {
        if (maxValue < value) {
            maxValue = value;
        }
    }

    for (let [key, value] of map.entries()) {
        if (value == maxValue) {
            return key;
        }
    }
    return 0;
}

export function mostFrequentElement1(nums: number[]): number {
    const map = new Map<number, number>();
    let maxCount = 0;
    let result = Number.MAX_VALUE;

    for (let num of nums) {
        const count = (map.get(num) || 0) + 1;
        map.set(num, count);

        if (count > maxCount) {
            maxCount = count;
            result = num;
        }
    }

    return result;
}
