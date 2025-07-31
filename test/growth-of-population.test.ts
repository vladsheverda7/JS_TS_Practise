import { nbYear } from '../tasks_for_the_interview/growth-of-population';

describe('Test cases', () => {
    it('test case 1', () => {
        expect(nbYear(1500, 5, 100, 5000)).toEqual(15);
    });

    it('test case 2', () => {
        expect(nbYear(1500000, 2.5, 10000, 2000000)).toEqual(10);
    });

    it('test case 3', () => {
        expect(nbYear(1500000, 0.25, 1000, 2000000)).toEqual(94);
    });

    it('test case 4', () => {
        expect(nbYear(1500000, 0.25, -1000, 2000000)).toEqual(151);
    });
});
