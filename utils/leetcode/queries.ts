export const heatMapQuery = `
query ($username: String!) {
    matchedUser(username: $username) {
        submissionCalendar
    }
}
`

export const solvedProblemsQuery = `
query ($username: String!) {
    allQuestionsCount {
        difficulty
        count
    }
    matchedUser(username: $username) {
        profile {
            ranking
        }
        submitStats {
            acSubmissionNum {
                difficulty
                count
                submissions
            }
        }
    }
}
`
