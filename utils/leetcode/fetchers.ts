import type { HeatMapDetail, LeetCodeStats } from "./types"
import { heatMapQuery, solvedProblemsQuery } from "./queries"

async function fetchLeetCodeData(query: string, username: string) {
    const res = await fetch("/api/leetcode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query,
            variables: { username },
        }),
    })
    return res.json()
}

export async function fetchHeatMap(username: string): Promise<HeatMapDetail[]> {
    const { data } = await fetchLeetCodeData(heatMapQuery, username)
    const jsonString = data.matchedUser.submissionCalendar
    const submissionCalendar = JSON.parse(jsonString)

    const heatMap: HeatMapDetail[] = []
    const today = Math.floor(Date.now() / 86400_000) * 86400

    for (let i = 363; i >= 0; i--) {
        const timestamp = today - i * 86400
        const count = submissionCalendar[timestamp] || 0
        const newDate = new Date(timestamp * 1000).toISOString().split("T")[0]
        heatMap.push({ date: newDate, submissionCount: count })
    }

    return heatMap
}

export async function fetchStats(username: string): Promise<LeetCodeStats> {
    const { data } = await fetchLeetCodeData(solvedProblemsQuery, username)

    const allQuestions = data.allQuestionsCount as { difficulty: string; count: number }[]
    const acSubmission = data.matchedUser.submitStats.acSubmissionNum as { difficulty: string; count: number }[]

    const getCount = (arr: { difficulty: string; count: number }[], diff: string) =>
        arr.find((d) => d.difficulty === diff)?.count || 0

    return {
        totalSolved: getCount(acSubmission, "All"),
        easySolved: getCount(acSubmission, "Easy"),
        mediumSolved: getCount(acSubmission, "Medium"),
        hardSolved: getCount(acSubmission, "Hard"),
        easyTotal: getCount(allQuestions, "Easy"),
        mediumTotal: getCount(allQuestions, "Medium"),
        hardTotal: getCount(allQuestions, "Hard"),
        ranking: data.matchedUser.profile.ranking,
    }
}
