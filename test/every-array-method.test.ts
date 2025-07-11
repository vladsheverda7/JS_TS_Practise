import { isArrElementsOdd } from '../array_basic_methods/every-array-method';

describe('check array contains only odd numbers', () => {
    it('Array without even number', () => {
        expect(isArrElementsOdd([1, 3, 5])).toBeTruthy();
    });
    it('Array with even number', () => {
        expect(isArrElementsOdd([1, 2, 3])).toBeFalsy();
    });
});
