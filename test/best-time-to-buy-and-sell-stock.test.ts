import { buySellStock } from '../tasks_for_the_interview/best-time-to-buy-and-sell-stock';

test('Check best profit', () => {
    expect(buySellStock([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(buySellStock([7, 6, 4, 3, 1])).toBe(0);
});
