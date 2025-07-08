import { groupByFirstLetter } from '../tasks_for_the_interview/group-by-first-letter';

describe('groupByFirstLetter', () => {
    test('group by first letter', () => {
        expect(groupByFirstLetter(['apple', 'banana', 'avocado', 'cherry'])).toEqual(
            new Map([
                ['a', ['apple', 'avocado']],
                ['b', ['banana']],
                ['c', ['cherry']],
            ]),
        );
    });

    test('one row', () => {
        expect(groupByFirstLetter(['zebra'])).toEqual(new Map([['z', ['zebra']]]));
    });

    test('small and capital letters', () => {
        expect(groupByFirstLetter(['Apple', 'apple'])).toEqual(
            new Map([
                ['A', ['Apple']],
                ['a', ['apple']],
            ]),
        );
    });

    test('empty array', () => {
        expect(groupByFirstLetter([])).toEqual(new Map());
    });
});
