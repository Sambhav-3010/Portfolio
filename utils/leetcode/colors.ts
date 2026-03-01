/**
 * Returns a green-themed background color based on submission count.
 * Uses the site's primary green color via CSS custom property `--primary`.
 */
export function getLeetCodeLevelColor(count: number): string {
    if (count === 0) return "rgb(0,0,0,0.25)"
    if (count <= 2) return "color-mix(in srgb, var(--primary) 30%, transparent)"
    if (count <= 5) return "color-mix(in srgb, var(--primary) 50%, transparent)"
    if (count <= 9) return "color-mix(in srgb, var(--primary) 70%, transparent)"
    return "color-mix(in srgb, var(--primary) 100%, transparent)"
}
