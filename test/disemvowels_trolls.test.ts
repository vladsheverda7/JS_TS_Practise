import { disemvowel } from '../tasks_for_the_interview/disemvowels_trolls';

test('Testing for fixed tests', () => {
    expect(disemvowel('This website is for losers LOL!')).toBe('Ths wbst s fr lsrs LL!');
    expect(disemvowel("No offense but,\nYour writing is among the worst I've ever read")).toBe("N ffns bt,\nYr wrtng s mng th wrst 'v vr rd");
    expect(disemvowel('Hello')).toBe('Hll');
    expect(disemvowel('Heello')).toBe('Hll');
});
