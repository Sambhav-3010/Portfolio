import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const res = await fetch("https://leetcode.com/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Referer: "https://leetcode.com",
            },
            body: JSON.stringify(body),
        });

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("LeetCode API error:", error);
        return NextResponse.json(
            { error: "Failed to fetch LeetCode data" },
            { status: 500 }
        );
    }
}
