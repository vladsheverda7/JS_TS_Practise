import { frequencyCounter } from '../tasks_for_the_interview/frequency-counter-Map';

describe('frequencyCounter', () => {
    test('counts the frequency of numbers', () => {
        expect(frequencyCounter([1, 2, 2, 3, 3, 3])).toEqual(
            new Map([
                [1, 1],
                [2, 2],
                [3, 3],
            ]),
        );
    });

    test('array of identical numbers', () => {
        expect(frequencyCounter([5, 5, 5])).toEqual(new Map([[5, 3]]));
    });

    test('empty array', () => {
        expect(frequencyCounter([])).toEqual(new Map());
    });

    test('negative numbers', () => {
        expect(frequencyCounter([-1, -1, 0])).toEqual(
            new Map([
                [-1, 2],
                [0, 1],
            ]),
        );
    });
});
