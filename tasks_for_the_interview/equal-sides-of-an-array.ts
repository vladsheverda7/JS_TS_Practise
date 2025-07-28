export function findIndex(arr: number[]): number {
    for (let i = 1; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        let leftArr = arr.slice(0, i);
        let rightArr = arr.slice(i + 1);

        for (const leftElement of leftArr) {
            leftSum += leftElement;
        }
        for (const rightElement of rightArr) {
            rightSum += rightElement;
        }

        if (leftSum == rightSum) {
            return i;
        }
    }
    return -1;
}
