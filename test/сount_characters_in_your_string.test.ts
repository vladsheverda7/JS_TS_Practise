import { count } from '../tasks_for_the_interview/сount_characters_in_your_string';

test('Count characters', () => {
    // expect(count('a')).toEqual({ a: 1 });
    // expect(count('ab')).toEqual({ a: 1, b: 1 });
    expect(count('aba')).toEqual({ a: 2, b: 1 });
    // expect(count('ABC')).toEqual({ A: 1, B: 1, C: 1 });
    // expect(count('')).toEqual({});
});
