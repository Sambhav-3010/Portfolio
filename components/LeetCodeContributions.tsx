"use client"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import type { HeatMapDetail, LeetCodeStats } from "@/utils/leetcode"
import { fetchHeatMap, fetchStats } from "@/utils/leetcode"
import { DifficultyBar } from "@/components/leetcode/DifficultyBar"
import { LeetCodeHeatmapGraph } from "@/components/leetcode/LeetCodeHeatmapGraph"

const LEETCODE_USERNAME = "user5119TK"

export function LeetCodeContributions() {
    const [heatmap, setHeatmap] = useState<HeatMapDetail[] | null>(null)
    const [stats, setStats] = useState<LeetCodeStats | null>(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        Promise.all([fetchHeatMap(LEETCODE_USERNAME), fetchStats(LEETCODE_USERNAME)])
            .then(([hm, st]) => {
                setHeatmap(hm)
                setStats(st)
            })
            .catch((err) => {
                console.error("LeetCode fetch error:", err)
                setError(true)
            })
    }, [])

    const totalSubmissions =
        heatmap?.reduce((sum, d) => sum + d.submissionCount, 0) ?? 0

    return (
        <div className="hidden md:block w-full max-w-6xl mx-auto p-3 sm:p-6">
            <div className="mb-4 sm:mb-8 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">LeetCode Activity</h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                    My LeetCode problem solving journey
                </p>
            </div>

            {/* Stats cards row */}
            {stats && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <StatCard value={stats.totalSolved} label="Problems Solved" />
                    <StatCard value={stats.ranking.toLocaleString()} label="Global Ranking" />
                    <StatCard value={totalSubmissions} label="Submissions (Year)" />
                    <StatCard
                        value={heatmap?.filter((d) => d.submissionCount > 0).length ?? 0}
                        label="Active Days"
                    />
                </div>
            )}

            {/* Main heatmap card */}
            <Card className="border-none bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pt-6 sm:pt-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <CardTitle className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
                            <LeetCodeIcon />
                            Submission Heatmap
                        </CardTitle>
                        {stats && (
                            <CardDescription className="text-lg sm:text-xl font-medium text-primary">
                                {totalSubmissions} submissions this year
                            </CardDescription>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="pb-6 sm:pb-8 overflow-hidden">
                    {error ? (
                        <div className="flex items-center justify-center p-12">
                            <div className="text-muted-foreground text-sm">
                                Failed to load LeetCode data
                            </div>
                        </div>
                    ) : heatmap ? (
                        <LeetCodeHeatmapGraph heatmap={heatmap} />
                    ) : (
                        <div className="flex items-center justify-center p-12">
                            <div className="text-muted-foreground text-sm animate-pulse">
                                Loading LeetCode activity...
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

function StatCard({ value, label }: { value: string | number; label: string }) {
    return (
        <Card className="border-none bg-card/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-4 text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{value}</div>
                <div className="text-[11px] sm:text-xs text-muted-foreground mt-1">{label}</div>
            </CardContent>
        </Card>
    )
}

function LeetCodeIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary" fill="currentColor">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
    )
}
