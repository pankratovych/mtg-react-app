import { Color } from "../types";

export function sumColors(colors: Color[]): number {
    return colors.reduce((a, b) => a + b*b);
}

