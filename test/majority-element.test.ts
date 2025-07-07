import { majorityElement1 } from '../tasks_for_the_interview/majority-element';

test('Find majority test', () => {
    expect(majorityElement1([3, 2, 3])).toEqual(3);
    expect(majorityElement1([2, 2, 1, 1, 1, 2, 2])).toEqual(2);
});
