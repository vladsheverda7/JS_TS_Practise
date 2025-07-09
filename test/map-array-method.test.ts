import { doubleArrayElements, returnNameArray } from '../tasks_for_the_interview/map-array-method';

describe('tests for map method', () => {
    test('Check doubling of each array element', () => {
        expect(doubleArrayElements([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
    });

    test('Check returning name arr', () => {
        expect(returnNameArray([{ name: 'Vlad' }, { name: 'Anna' }])).toEqual(['Vlad', 'Anna']);
    });
});
