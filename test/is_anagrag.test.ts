import { isAnagram } from '../tasks_for_the_interview/is_anagram';

test('Check anagram', () => {
    expect(isAnagram('anagram', 'nagaram')).toBeTruthy();
    expect(isAnagram('rat', 'car')).toBeFalsy();
});
