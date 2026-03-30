"use client"
import { useEffect, useMemo, useState } from "react"
import type { HeatMapDetail } from "@/utils/leetcode"
import { getLeetCodeLevelColor } from "@/utils/leetcode"

export function LeetCodeHeatmapGraph({ heatmap }: { heatmap: HeatMapDetail[] }) {
  const [width, setWidth] = useState(1200)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const { viewWeeks, labels } = useMemo(() => {
    const firstDate = new Date(heatmap[0].date)
    const padded = [...Array(firstDate.getDay()).fill(null), ...heatmap]

    const allWeeks: (HeatMapDetail | null)[][] = []
    for (let index = 0; index < padded.length; index += 7) {
      allWeeks.push(padded.slice(index, index + 7))
    }

    const weeksToShow = width < 768 ? 22 : width < 1024 ? 38 : allWeeks.length
    const visibleWeeks = allWeeks.slice(-weeksToShow)

    const monthLabels = visibleWeeks.map((week, weekIndex) => {
      const firstDay = week.find((entry) => entry !== null)
      if (!firstDay) return null
      const currentDate = new Date(firstDay.date)

      const previousWeek = visibleWeeks[weekIndex - 1]
      const previousDay = previousWeek ? previousWeek.find((entry) => entry !== null) : null
      const previousDate = previousDay ? new Date(previousDay.date) : null

      return !previousDate || currentDate.getMonth() !== previousDate.getMonth()
        ? currentDate.toLocaleString("default", { month: "short" })
        : null
    })

    return { viewWeeks: visibleWeeks, labels: monthLabels }
  }, [heatmap, width])

  return (
    <div className="w-full">
      <div className="w-full overflow-x-auto py-2">
        <div className="inline-block min-w-full">
          <div className="flex mb-3">
            <div className="w-10 shrink-0" />
            <div className="flex gap-1 flex-1 justify-between">
              {viewWeeks.map((_, index) => (
                <div key={index} className="flex-1 min-w-[10px] text-[10px] text-muted-foreground font-semibold">
                  {labels[index]}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex flex-col justify-around text-[10px] text-muted-foreground w-10 shrink-0 py-1">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            <div className="flex gap-1 flex-1">
              {viewWeeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1 flex-1">
                  {week.map((day, dayIndex) => {
                    if (!day) return <div key={dayIndex} className="aspect-square w-full" />
                    return (
                      <div key={dayIndex} className="group relative w-full">
                        <div
                          className="aspect-square w-full rounded-[3px] transition-all group-hover:ring-2 group-hover:ring-primary/45"
                          style={{ backgroundColor: getLeetCodeLevelColor(day.submissionCount) }}
                        />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-card border border-border text-[11px] rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-20">
                          <strong>{day.submissionCount}</strong> on {new Date(day.date).toLocaleDateString("en-US")}
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

      <div className="flex items-center justify-between mt-5 text-[11px] text-muted-foreground">
        <span>Submission activity - last 52 weeks</span>
        <div className="flex items-center gap-2">
          <span>Less</span>
          <div className="flex gap-[3px]">
            {[0, 1, 3, 6, 10].map((count) => (
              <div key={count} className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: getLeetCodeLevelColor(count) }} />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  )
}
