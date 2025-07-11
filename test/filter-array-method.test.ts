import { filterStrings, filterEvenNumber } from '../array_basic_methods/filter-array-method';

describe('tests for filter method', () => {
    it('Check that only words with length > 3 are in array', () => {
        expect(filterStrings(['a', 'hello', 'ok', 'world'])).toEqual(['hello', 'world']);
    });
    it('Check that only even numbers are in array', () => {
        expect(filterEvenNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
    });
});
