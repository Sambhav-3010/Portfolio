export function getLevelColor(level: number) {
    const opacities = [0.05, 0.3, 0.5, 0.7, 1]
    if (level === 0) return 'rgb(0,0,0,0.25)'
    return `color-mix(in srgb, var(--primary) ${opacities[level] * 100}%, transparent)`
}