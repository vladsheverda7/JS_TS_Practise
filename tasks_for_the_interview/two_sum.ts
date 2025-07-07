function twoSum(nums: number[], target: number): number[] {
    let indexArr: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let sum: number = nums[i] + nums[j];
            console.log(`i = ${i} and nums[i] = ${nums[i]}`);
            console.log(`j = ${j} and nums[j] = ${nums[j]}`);
            if (nums[i] + nums[j] === target) {
                indexArr.push(i);
                indexArr.push(j);
            }
        }
    }

    return indexArr;
}

console.log(twoSum([2, 7, 11, 15], 9));

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//second option

function twoSum_1(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
