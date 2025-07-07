import { mostFrequentElement } from '../tasks_for_the_interview/most-frequent-element-Map';

describe('mostFrequentElement', () => {
    test('finds the most frequent item', () => {
        expect(mostFrequentElement([1, 2, 2, 3, 3, 3])).toBe(3);
    });

    test('all the elements are the same', () => {
        expect(mostFrequentElement([7, 7, 7, 7])).toBe(7);
    });

    test('two equally frequent, returns the first one in terms of occurrence', () => {
        expect(mostFrequentElement([4, 5, 4, 5])).toBe(4);
    });

    test('single element in the array', () => {
        expect(mostFrequentElement([42])).toBe(42);
    });
});
