"use client"

import { useEffect, useState } from "react"
import { LeetCodeHeatmapGraph } from "@/components/leetcode/LeetCodeHeatmapGraph"
import type { HeatMapDetail, LeetCodeStats } from "@/utils/leetcode"
import { fetchHeatMap, fetchStats } from "@/utils/leetcode"

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
      .catch((fetchError) => {
        console.error("LeetCode fetch error:", fetchError)
        setError(true)
      })
  }, [])

  const totalSubmissions = heatmap?.reduce((sum, day) => sum + day.submissionCount, 0) ?? 0

  return (
    <section className="hidden md:block w-full max-w-6xl mx-auto px-4 sm:px-6 pt-2 pb-8 sm:pb-14">
      <div className="cream-card p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-2">Competitive Coding</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold">LeetCode Activity</h2>
          </div>
          {stats && <p className="text-lg sm:text-xl font-bold text-secondary">{totalSubmissions} submissions this year</p>}
        </div>

        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <StatCard value={stats.totalSolved} label="Problems Solved" />
            <StatCard value={stats.ranking.toLocaleString()} label="Global Ranking" />
            <StatCard value={totalSubmissions} label="Submissions" />
            <StatCard value={heatmap?.filter((day) => day.submissionCount > 0).length ?? 0} label="Active Days" />
          </div>
        )}

        {error ? (
          <div className="h-44 rounded-2xl bg-red-50 border border-red-200 text-red-700 grid place-items-center text-sm">
            Failed to load LeetCode data
          </div>
        ) : heatmap ? (
          <LeetCodeHeatmapGraph heatmap={heatmap} />
        ) : (
          <div className="h-44 rounded-2xl bg-accent/50 border border-border animate-pulse" />
        )}
      </div>
    </section>
  )
}

function StatCard({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="rounded-2xl border border-border bg-accent/35 p-4 text-center">
      <p className="text-2xl sm:text-3xl font-extrabold text-foreground">{value}</p>
      <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground mt-1">{label}</p>
    </div>
  )
}
