import { findIndex } from '../tasks_for_the_interview/equal-sides-of-an-array';

describe('check index', () => {
    it('first test case', () => {
        expect(findIndex([1, 2, 3, 4, 3, 2, 1])).toEqual(3);
    });
    it('second test case', () => {
        expect(findIndex([1, 100, 50, -51, 1, 1])).toEqual(1);
    });

    it('third test case', () => {
        expect(findIndex([1, 2, 3, 4, 5, 6])).toEqual(-1);
    });

    it('fourth test case', () => {
        expect(findIndex([20, 10, 30, 10, 10, 15, 35])).toEqual(3);
    });

    it('fifth test case', () => {
        expect(findIndex([20, 10, -80, 10, 10, 15, 35])).toEqual(-1);
    });
});
