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
        <div className="w-full max-w-7xl mx-auto p-3 sm:p-6">
            <div className="mb-4 sm:mb-8">
                <h1 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">Contributions</h1>
                <p className="text-sm sm:text-base text-muted-foreground">My github activity over the last year</p>
            </div>

            <Card>
                <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <CardTitle className="text-lg sm:text-xl">GitHub Activity</CardTitle>
                        {data && (
                            <CardDescription className="text-base sm:text-lg font-semibold">
                                {data.total.lastYear} contributions
                            </CardDescription>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                    {data ? (
                        <ContributionGraph contributions={data.contributions} />
                    ) : (
                        <div className="flex items-center justify-center p-8">
                            <div className="text-muted-foreground text-sm">Loading contribution data...</div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

function ContributionGraph({ contributions }: { contributions: ContributionHelper[] }) {
    const firstDate = new Date(contributions[0].date)
    const dayOfWeek = firstDate.getDay()
    const paddedContributions = [...Array(dayOfWeek).fill(null), ...contributions]

    const weeks: (ContributionHelper | null)[][] = []
    for (let i = 0; i < paddedContributions.length; i += 7) {
        weeks.push(paddedContributions.slice(i, i + 7))
    }

    const monthLabels = weeks.map((week, index) => {
        const firstDay = week.find(d => d !== null)
        if (!firstDay) return null

        const date = new Date(firstDay.date)
        const prevWeek = weeks[index - 1]
        const prevDay = prevWeek ? prevWeek.find(d => d !== null) : null
        const prevDate = prevDay ? new Date(prevDay.date) : null

        if (!prevDate || date.getMonth() !== prevDate.getMonth()) {
            return date.toLocaleString('default', { month: 'short' })
        }
        return null
    })

    return (
        <div className="w-full">
            <div className="hidden sm:block w-full">
                <div className="flex mb-3">
                    <div className="w-12 shrink-0" />
                    <div className="flex gap-[3px] flex-1">
                        {weeks.map((_, i) => (
                            <div key={i} className="flex-1 min-w-[10px] text-[11px] text-muted-foreground font-medium">
                                {monthLabels[i]}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="flex flex-col justify-around text-[11px] text-muted-foreground w-12 shrink-0 pr-2 py-1">
                        <div>Mon</div>
                        <div>Wed</div>
                        <div>Fri</div>
                    </div>

                    <div className="flex gap-[3px] flex-1">
                        {weeks.map((week, weekIndex) => (
                            <div key={weekIndex} className="flex flex-col gap-[3px] flex-1 min-w-[10px]">
                                {week.map((day, dayIndex) => {
                                    if (!day) {
                                        return <div key={dayIndex} className="w-full aspect-square" />
                                    }

                                    return (
                                        <motion.div
                                            key={dayIndex}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: weekIndex * 0.005 }}
                                            className="group relative w-full"
                                        >
                                            <div
                                                className="w-full aspect-square rounded-[7px] cursor-pointer transition-all hover:ring-2 hover:ring-offset-1 hover:ring-primary"
                                                style={{ backgroundColor: getLevelColor(day.level) }}
                                            />
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-popover text-popover-foreground text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-10 border">
                                                <div className="font-semibold">{day.count} contributions</div>
                                                <div className="text-muted-foreground mt-0.5">{new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-end gap-2 mt-6 text-xs text-muted-foreground">
                    <span>Less</span>
                    <div className="flex gap-[3px]">
                        {[0, 1, 2, 3, 4].map(l => (
                            <div
                                key={l}
                                className="w-3 h-3 rounded-[2px]"
                                style={{ backgroundColor: getLevelColor(l) }}
                            />
                        ))}
                    </div>
                    <span>More</span>
                </div>
            </div>

            {/* Mobile View - Scrollable */}
            <div className="block sm:hidden w-full">
                <div className="overflow-x-auto -mx-4 px-4">
                    <div className="inline-block min-w-full">
                        <div className="flex mb-2">
                            <div className="w-8 shrink-0" />
                            <div className="flex gap-[2px]" style={{ minWidth: 'max-content' }}>
                                {weeks.map((_, i) => (
                                    <div key={i} className="w-[11px] text-[9px] text-muted-foreground font-medium">
                                        {monthLabels[i]}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <div className="flex flex-col justify-around text-[9px] text-muted-foreground w-8 shrink-0 pr-1">
                                <div>Mon</div>
                                <div>Wed</div>
                                <div>Fri</div>
                            </div>

                            <div className="flex gap-[2px]" style={{ minWidth: 'max-content' }}>
                                {weeks.map((week, weekIndex) => (
                                    <div key={weekIndex} className="flex flex-col gap-[2px]">
                                        {week.map((day, dayIndex) => {
                                            if (!day) {
                                                return <div key={dayIndex} className="w-[11px] h-[11px]" />
                                            }

                                            return (
                                                <motion.div
                                                    key={dayIndex}
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: weekIndex * 0.003 }}
                                                    className="group relative"
                                                >
                                                    <div
                                                        className="w-[11px] h-[11px] rounded-[2px] active:ring-2 active:ring-primary"
                                                        style={{ backgroundColor: getLevelColor(day.level) }}
                                                    />
                                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1.5 bg-popover text-popover-foreground text-[10px] rounded-md shadow-lg opacity-0 group-active:opacity-100 pointer-events-none whitespace-nowrap z-10 border">
                                                        <div className="font-semibold">{day.count} contributions</div>
                                                        <div className="text-muted-foreground mt-0.5">{new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
                                                    </div>
                                                </motion.div>
                                            )
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-1.5 mt-4 text-[10px] text-muted-foreground">
                            <span>Less</span>
                            <div className="flex gap-[2px]">
                                {[0, 1, 2, 3, 4].map(l => (
                                    <div
                                        key={l}
                                        className="w-2.5 h-2.5 rounded-[2px]"
                                        style={{ backgroundColor: getLevelColor(l) }}
                                    />
                                ))}
                            </div>
                            <span>More</span>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-3 text-[10px] text-muted-foreground">
                    ← Swipe to see more →
                </div>
            </div>
        </div>
    )
}

