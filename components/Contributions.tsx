"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
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
            .then((data) => setData(data))
            .catch((err) => console.error(err))
    }, [])

    return (
        <div className="hidden md:block w-full max-w-6xl mx-auto p-3 sm:p-6">
            <div className="mb-4 sm:mb-8 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">Contributions</h1>
                <p className="text-sm sm:text-base text-muted-foreground">My github activity over the last year</p>
            </div>

            <Card className="border-none bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pt-6 sm:pt-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <CardTitle className="text-xl sm:text-2xl font-semibold">GitHub Activity</CardTitle>
                        {data && (
                            <CardDescription className="text-lg sm:text-xl font-medium text-primary">
                                {data.total.lastYear} contributions
                            </CardDescription>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="pb-6 sm:pb-8 overflow-hidden">
                    {data ? (
                        <ContributionGraph contributions={data.contributions} />
                    ) : (
                        <div className="flex items-center justify-center p-12">
                            <div className="text-muted-foreground text-sm animate-pulse">Loading activity data...</div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

function ContributionGraph({ contributions }: { contributions: ContributionHelper[] }) {
    const [viewWeeks, setViewWeeks] = useState<(ContributionHelper | null)[][]>([])
    const [labels, setLabels] = useState<(string | null)[]>([])

    const firstDate = new Date(contributions[0].date)
    const dayOfWeek = firstDate.getDay()
    const paddedContributions = [...Array(dayOfWeek).fill(null), ...contributions]

    const allWeeks: (ContributionHelper | null)[][] = []
    for (let i = 0; i < paddedContributions.length; i += 7) {
        allWeeks.push(paddedContributions.slice(i, i + 7))
    }

    useEffect(() => {
        const updateLayout = () => {
            const width = window.innerWidth
            let weeksToShow = allWeeks.length

            if (width < 768) weeksToShow = 22 // Mobile/Small Tablet: Show ~5 months
            else if (width < 1024) weeksToShow = 38 // Large Tablet: Show ~9 months
            else weeksToShow = allWeeks.length // Desktop: Show full year

            const slicedWeeks = allWeeks.slice(-weeksToShow)
            setViewWeeks(slicedWeeks)

            const monthLabels = slicedWeeks.map((week, index) => {
                const firstDay = week.find(d => d !== null)
                if (!firstDay) return null
                const date = new Date(firstDay.date)
                const prevWeek = slicedWeeks[index - 1]
                const prevDay = prevWeek ? prevWeek.find(d => d !== null) : null
                const prevDate = prevDay ? new Date(prevDay.date) : null
                if (!prevDate || date.getMonth() !== prevDate.getMonth()) {
                    return date.toLocaleString('default', { month: 'short' })
                }
                return null
            })
            setLabels(monthLabels)
        }

        updateLayout()
        window.addEventListener('resize', updateLayout)
        return () => window.removeEventListener('resize', updateLayout)
    }, [contributions])

    return (
        <div className="w-full">
            <div className="w-full overflow-x-auto md:overflow-visible scrollbar-hide py-2">
                <div className="inline-block min-w-full">
                    <div className="flex mb-3">
                        <div className="w-8 md:w-10 shrink-0" />
                        <div className="flex gap-[3px] md:gap-[4px] flex-1 justify-between">
                            {viewWeeks.map((_, i) => (
                                <div key={i} className="flex-1 min-w-[10px] text-[10px] text-muted-foreground font-medium">
                                    {labels[i]}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="flex flex-col justify-around text-[10px] text-muted-foreground w-8 md:w-10 shrink-0 py-1">
                            <span>Mon</span>
                            <span>Wed</span>
                            <span>Fri</span>
                        </div>

                        <div className="flex gap-[3px] md:gap-[4px] flex-1">
                            {viewWeeks.map((week, weekIndex) => (
                                <div key={weekIndex} className="flex flex-col gap-[3px] md:gap-[4px] flex-1">
                                    {week.map((day, dayIndex) => {
                                        if (!day) return <div key={dayIndex} className="aspect-square w-full" />
                                        return (
                                            <div key={dayIndex} className="group relative w-full">
                                                <div
                                                    className="aspect-square w-full rounded-[2px] transition-all hover:ring-2 hover:ring-primary/50"
                                                    style={{ backgroundColor: getLevelColor(day.level) }}
                                                />
                                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-popover text-popover-foreground text-[11px] rounded shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 border border-border">
                                                    <div className="font-bold">{day.count} contributions</div>
                                                    <div className="opacity-70">{new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
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

            <div className="flex items-center justify-between mt-6">
                <p className="text-[11px] text-muted-foreground italic md:not-italic">
                    {window.innerWidth < 768 ? "Showing recent activity" : "Activity from the past year"}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                    <span>Less</span>
                    <div className="flex gap-[3px]">
                        {[0, 1, 2, 3, 4].map(l => (
                            <div key={l} className="w-3 h-3 rounded-[2px]" style={{ backgroundColor: getLevelColor(l) }} />
                        ))}
                    </div>
                    <span>More</span>
                </div>
            </div>
        </div>
    )
}