import { findUniq } from '../tasks_for_the_interview/find_unique_value_in_array';

test('Test unique value', () => {
    expect(findUniq([1, 0, 0])).toEqual(1);
    expect(findUniq([0, 1, 0])).toEqual(1);
    expect(findUniq([0, 0, 1])).toEqual(1);
    expect(findUniq([1, 1, 1, 2, 1, 1])).toEqual(2);
    expect(findUniq([1, 1, 2, 1, 1])).toEqual(2);
    expect(findUniq([3, 10, 3, 3, 3])).toEqual(10);
});
