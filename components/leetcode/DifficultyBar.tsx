"use client"

export function DifficultyBar({
    label,
    solved,
    total,
    color,
}: {
    label: string
    solved: number
    total: number
    color: string
}) {
    const pct = total > 0 ? (solved / total) * 100 : 0
    return (
        <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
                <span className="font-medium" style={{ color }}>
                    {label}
                </span>
                <span className="text-muted-foreground">
                    {solved} / {total}
                </span>
            </div>
            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                        width: `${pct}%`,
                        background: `linear-gradient(90deg, ${color}, ${color}cc)`,
                    }}
                />
            </div>
        </div>
    )
}
