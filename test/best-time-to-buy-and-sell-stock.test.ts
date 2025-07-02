import { buySellStock } from '../tasks_for_the_interview/best-time-to-buy-and-sell-stock';

test('Check best profit', () => {
    expect(buySellStock([7, 1, 5, 3, 6, 4])).toEqual(5);
    expect(buySellStock([7, 6, 4, 3, 1])).toEqual(0);
    expect(buySellStock([2, 4, 1])).toEqual(2);
});
