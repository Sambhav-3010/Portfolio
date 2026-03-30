/**
 * Returns a green-themed background color based on submission count.
 */
export function getLeetCodeLevelColor(count: number): string {
  if (count === 0) return "#ebe4d7"
  if (count <= 2) return "color-mix(in srgb, var(--primary) 30%, #f7f3eb)"
  if (count <= 5) return "color-mix(in srgb, var(--primary) 50%, #f7f3eb)"
  if (count <= 9) return "color-mix(in srgb, var(--primary) 70%, #f7f3eb)"
  return "color-mix(in srgb, var(--primary) 92%, #f7f3eb)"
}
