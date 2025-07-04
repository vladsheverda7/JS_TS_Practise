import { findOdd } from '../tasks_for_the_interview/find_the_odd_int';

test('Find Odd test', () => {
    expect(findOdd([7])).toEqual(7);
    expect(findOdd([0])).toEqual(0);
    expect(findOdd([1, 1, 2])).toEqual(2);
    expect(findOdd([0, 1, 0, 1, 0])).toEqual(0);
    expect(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toEqual(4);
    expect(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])).toEqual(5);
    expect(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])).toEqual(-1);
    expect(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])).toEqual(5);
    expect(findOdd([10])).toEqual(10);
    expect(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])).toEqual(10);
    expect(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])).toEqual(1);
});
