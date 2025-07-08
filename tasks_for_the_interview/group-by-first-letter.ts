export function groupByFirstLetter(stringArray: string[]): Map<string, string[]> {
    const map = new Map();

    for (let value of stringArray) {
        const firstLetter = value[0];

        if (!map.has(firstLetter)) {
            map.set(firstLetter, []);
        }

        map.get(firstLetter)!.push(value);
    }

    return map;
}
