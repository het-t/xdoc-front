export const tagColorStringToRgbaRandom = function(): string {
    const colors = ["light gray", "gray", "brown", "orange", "yellow", "green", "blue", "purple", "pink", "red"]

    return colors[Math.floor(Math.random()*colors.length)];
}