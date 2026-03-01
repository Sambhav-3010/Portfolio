"use client"
import { useEffect, useState } from "react"
import type { HeatMapDetail } from "@/utils/leetcode"
import { getLeetCodeLevelColor } from "@/utils/leetcode"

/**
 * Renders the LeetCode heatmap grid with responsive week columns,
 * month labels, day-of-week labels, and a legend.
 */
export function LeetCodeHeatmapGraph({ heatmap }: { heatmap: HeatMapDetail[] }) {
    const [viewWeeks, setViewWeeks] = useState<(HeatMapDetail | null)[][]>([])
    const [labels, setLabels] = useState<(string | null)[]>([])

    // Organise flat array into weeks (Sun = col start)
    const firstDate = new Date(heatmap[0].date)
    const dayOfWeek = firstDate.getDay()
    const padded = [...Array(dayOfWeek).fill(null), ...heatmap]

    const allWeeks: (HeatMapDetail | null)[][] = []
    for (let i = 0; i < padded.length; i += 7) {
        allWeeks.push(padded.slice(i, i + 7))
    }

    useEffect(() => {
        const updateLayout = () => {
            const width = window.innerWidth
            let weeksToShow = allWeeks.length

            if (width < 768) weeksToShow = 22
            else if (width < 1024) weeksToShow = 38
            else weeksToShow = allWeeks.length

            const slicedWeeks = allWeeks.slice(-weeksToShow)
            setViewWeeks(slicedWeeks)

            const monthLabels = slicedWeeks.map((week, index) => {
                const firstDay = week.find((d) => d !== null)
                if (!firstDay) return null
                const date = new Date(firstDay.date)
                const prevWeek = slicedWeeks[index - 1]
                const prevDay = prevWeek ? prevWeek.find((d) => d !== null) : null
                const prevDate = prevDay ? new Date(prevDay.date) : null
                if (!prevDate || date.getMonth() !== prevDate.getMonth()) {
                    return date.toLocaleString("default", { month: "short" })
                }
                return null
            })
            setLabels(monthLabels)
        }

        updateLayout()
        window.addEventListener("resize", updateLayout)
        return () => window.removeEventListener("resize", updateLayout)
    }, [heatmap])

    return (
        <div className="w-full">
            <div className="w-full overflow-x-auto md:overflow-visible scrollbar-hide py-2">
                <div className="inline-block min-w-full">
                    {/* Month labels */}
                    <div className="flex mb-3">
                        <div className="w-8 md:w-10 shrink-0" />
                        <div className="flex gap-[3px] md:gap-[4px] flex-1 justify-between">
                            {viewWeeks.map((_, i) => (
                                <div
                                    key={i}
                                    className="flex-1 min-w-[10px] text-[10px] text-muted-foreground font-medium"
                                >
                                    {labels[i]}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="flex gap-3">
                        <div className="flex flex-col justify-around text-[10px] text-muted-foreground w-8 md:w-10 shrink-0 py-1">
                            <span>Mon</span>
                            <span>Wed</span>
                            <span>Fri</span>
                        </div>

                        <div className="flex gap-[3px] md:gap-[4px] flex-1">
                            {viewWeeks.map((week, weekIndex) => (
                                <div
                                    key={weekIndex}
                                    className="flex flex-col gap-[3px] md:gap-[4px] flex-1"
                                >
                                    {week.map((day, dayIndex) => {
                                        if (!day)
                                            return (
                                                <div
                                                    key={dayIndex}
                                                    className="aspect-square w-full"
                                                />
                                            )
                                        return (
                                            <div key={dayIndex} className="group relative w-full">
                                                <div
                                                    className="aspect-square w-full rounded-[2px] transition-all hover:ring-2 hover:ring-primary/50"
                                                    style={{
                                                        backgroundColor: getLeetCodeLevelColor(
                                                            day.submissionCount
                                                        ),
                                                    }}
                                                />
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-popover text-popover-foreground text-[11px] rounded shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 border border-border">
                                                    <div className="font-bold">
                                                        {day.submissionCount} submission
                                                        {day.submissionCount !== 1 ? "s" : ""}
                                                    </div>
                                                    <div className="opacity-70">
                                                        {new Date(day.date).toLocaleDateString(
                                                            "en-US",
                                                            {
                                                                month: "short",
                                                                day: "numeric",
                                                                year: "numeric",
                                                            }
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-between mt-6">
                <p className="text-[11px] text-muted-foreground italic md:not-italic">
                    Submission activity — last 52 weeks
                </p>
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                    <span>Less</span>
                    <div className="flex gap-[3px]">
                        {[0, 1, 3, 6, 10].map((count, i) => (
                            <div
                                key={i}
                                className="w-3 h-3 rounded-[2px]"
                                style={{
                                    backgroundColor: getLeetCodeLevelColor(count),
                                }}
                            />
                        ))}
                    </div>
                    <span>More</span>
                </div>
            </div>
        </div>
    )
}
