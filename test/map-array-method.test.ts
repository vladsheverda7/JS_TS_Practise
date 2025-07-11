import { doubleArrayElements, returnNameArray } from '../array_basic_methods/map-array-method';

describe('tests for map method', () => {
    test('Check doubling of each array element', () => {
        expect(doubleArrayElements([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
    });

    test('Check returning name arr', () => {
        expect(returnNameArray([{ name: 'Vlad' }, { name: 'Anna' }])).toEqual(['Vlad', 'Anna']);
    });
});
