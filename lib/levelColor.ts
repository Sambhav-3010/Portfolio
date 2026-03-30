export function getLevelColor(level: number) {
  const opacities = [0.12, 0.32, 0.52, 0.72, 0.95]
  return `color-mix(in srgb, var(--primary) ${opacities[Math.min(level, 4)] * 100}%, #f7f3eb)`
}
