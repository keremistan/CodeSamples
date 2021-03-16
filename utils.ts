export function get10RandomColors(): string[] {
    return Array.from({ length: 10 }, () => getRandomColor());
}

function getRandomColor(): string {
    // source: https://stackoverflow.com/a/5365036/6656967
    return "#" + ((1 << 24) * Math.random() | 0).toString(16);
}
