"use client"

import { useEffect, useMemo, useState } from "react"
import { getLevelColor } from "@/lib/levelColor"

type ContributionHelper = {
  date: string
  count: number
  level: number
}

type ContributionData = {
  total: {
    lastYear: number
  }
  contributions: ContributionHelper[]
}

export function Contributions() {
  const [data, setData] = useState<ContributionData | null>(null)

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/Sambhav-3010?y=last")
      .then((res) => res.json())
      .then((payload) => setData(payload))
      .catch((error) => console.error(error))
  }, [])

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-6">
      <div className="cream-card p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-2">Contribution</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold">People talk about consistency</h2>
          </div>
          <p className="text-lg sm:text-xl font-bold text-secondary">
            {data ? `${data.total.lastYear} contributions` : "Loading activity..."}
          </p>
        </div>

        {data ? (
          <ContributionGraph contributions={data.contributions} />
        ) : (
          <div className="h-44 rounded-2xl bg-accent/50 border border-border animate-pulse" />
        )}
      </div>
    </section>
  )
}

function ContributionGraph({ contributions }: { contributions: ContributionHelper[] }) {
  const [width, setWidth] = useState(1200)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const { viewWeeks, labels } = useMemo(() => {
    const firstDate = new Date(contributions[0].date)
    const paddedContributions = [...Array(firstDate.getDay()).fill(null), ...contributions]

    const allWeeks: (ContributionHelper | null)[][] = []
    for (let index = 0; index < paddedContributions.length; index += 7) {
      allWeeks.push(paddedContributions.slice(index, index + 7))
    }

    const weeksToShow = width < 768 ? 22 : width < 1024 ? 38 : allWeeks.length
    const visibleWeeks = allWeeks.slice(-weeksToShow)

    const monthLabels = visibleWeeks.map((week, weekIndex) => {
      const firstDay = week.find((day) => day !== null)
      if (!firstDay) return null

      const date = new Date(firstDay.date)
      const previousWeek = visibleWeeks[weekIndex - 1]
      const previousDay = previousWeek ? previousWeek.find((day) => day !== null) : null
      const previousDate = previousDay ? new Date(previousDay.date) : null

      if (!previousDate || date.getMonth() !== previousDate.getMonth()) {
        return date.toLocaleString("default", { month: "short" })
      }
      return null
    })

    return { viewWeeks: visibleWeeks, labels: monthLabels }
  }, [contributions, width])

  return (
    <div className="w-full">
      <div className="w-full overflow-x-auto md:overflow-visible py-2">
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
                          className="aspect-square w-full rounded-[3px] transition-all group-hover:ring-2 group-hover:ring-primary/40"
                          style={{ backgroundColor: getLevelColor(day.level) }}
                        />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-card border border-border text-[11px] rounded-lg shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-20">
                          <strong>{day.count}</strong> on {new Date(day.date).toLocaleDateString("en-US")}
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
        <span>{width < 768 ? "Showing recent activity" : "Activity from the past year"}</span>
        <div className="flex items-center gap-2">
          <span>Less</span>
          <div className="flex gap-[3px]">
            {[0, 1, 2, 3, 4].map((level) => (
              <div key={level} className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: getLevelColor(level) }} />
            ))}
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  )
}
