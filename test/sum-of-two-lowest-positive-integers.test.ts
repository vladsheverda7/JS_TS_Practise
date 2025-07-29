import { sumTwoSmallestNumbers } from '../tasks_for_the_interview/sum-of-two-lowest-positive-integers';

describe('Sum of lowest positive numbers', () => {
    it('test cast 1', () => {
        expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22, 5])).toEqual(10);
    });

    it('test cast 2', () => {
        expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).toEqual(6);
    });

    it('test cast 3', () => {
        expect(sumTwoSmallestNumbers([3, 87, 45, 12, 7])).toEqual(10);
    });

    it('test cast 4', () => {
        expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).toEqual(24);
    });

    it('test cast 5', () => {
        expect(sumTwoSmallestNumbers([52, 76, 14, 12, 4])).toEqual(16);
    });
});
