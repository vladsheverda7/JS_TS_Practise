export function majorityElement(nums: number[]): number {
    let majorityElement = 0;
    for (let i = 0; i < nums.length; i++) {
        let counter = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                counter++;
            }
        }
        if (counter > nums.length / 2) {
            majorityElement = nums[i];
        }
    }
    return majorityElement;
}

export function majorityElement1(nums: number[]): number {
    const map = new Map<number, number>();
    for (let num of nums) {
        const count = (map.get(num) || 0) + 1;
        map.set(num, count);

        if (count > nums.length / 2) {
            return num;
        }
    }
    return 0;
}

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
