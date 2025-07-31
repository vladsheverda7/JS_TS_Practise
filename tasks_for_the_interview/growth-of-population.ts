export function nbYear(p0: number, percent: number, aug: number, p: number): number {
    let population = 0;
    let count = 0;
    while (p > population) {
        population = Math.floor(p0 + (p0 * percent) / 100 + aug);
        p0 = population;
        count++;
    }
    return count;
}
