import { findArraySum, charCount } from '../array_basic_methods/reduce-array-method';

describe('tests for reduce method', () => {
    it('check sum', () => {
        expect(findArraySum([10, 20, 30])).toEqual(60);
    });

    it('check obj count', () => {
        expect(charCount(['a', 'b', 'a', 'c', 'b', 'a'])).toEqual({ a: 3, b: 2, c: 1 });
    });
});
