/**
 * Returns Tailwind classes for LeetCode-style activity levels.
 */
export function getLeetCodeLevelClass(count: number): string {
  if (count === 0) return "bg-[#ebe4d7]"
  if (count <= 2) return "bg-primary/30"
  if (count <= 5) return "bg-primary/50"
  if (count <= 9) return "bg-primary/70"
  return "bg-primary/90"
}
