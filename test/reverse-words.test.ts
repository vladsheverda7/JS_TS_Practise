import { reverseWords } from '../tasks_for_the_interview/reverse-words';

describe('Sample Test Cases', function () {
    it('test case 1', () => {
        expect(reverseWords('The quick brown fox jumps over the lazy dog.')).toEqual('ehT kciuq nworb xof spmuj revo eht yzal .god');
    });

    it('test case 2', () => {
        expect(reverseWords('apple')).toEqual('elppa');
    });

    it('test case 3', () => {
        expect(reverseWords('a b c d')).toEqual('a b c d');
    });

    it('test case 4', () => {
        expect(reverseWords('  double  spaced  words  ')).toEqual('  elbuod  decaps  sdrow  ');
    });
});
