import { isNegativeNumberInArr } from '../array_basic_methods/some-array-method';

it('check array has negative value', () => {
    expect(isNegativeNumberInArr([1, 5, -3, 8])).toBeTruthy();
});
