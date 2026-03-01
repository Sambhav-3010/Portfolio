import { Project } from "../projects";

export const settleMate: Project = {
    slug: "settlemate",
    title: "SettleMate",
    description:
        "A comprehensive expense splitting application designed for modern shared living and group activities. Features include a sophisticated visual analytics dashboard for spending insights, intelligent debt simplification algorithms, and seamless QR based UPI payment integration, enabling users to track expenses, analyze spending patterns, and settle dues instantly via scannable payment codes.",
    longDescription: {
        story: [
            "Splitting bills shouldn't feel like solving complex math with social dynamics layered on top.",
            "Born from frustration with tracking who paid for dinner, remembering who covered Uber, and figuring out efficient settlement.",
            "Existing apps were either too complicated or lacked essential features.",
            "Goal: eliminate mental load from shared expenses so money never becomes a source of tension.",
        ],
        howItWorks: [
            "Create groups for roommates, trips, events, or any shared scenario; add expenses instantly with receipt capture.",
            "Sophisticated debt simplification algorithm continuously optimizes the financial graph, reducing dozens of debts to minimum transactions.",
            "Real time Socket.io ensures all members see updates instantaneously; visual analytics dashboard shows spending patterns and trends.",
            "QR based UPI payment generates scannable code pre filled with exact amount; Prisma ORM with NeonDB PostgreSQL ensures data integrity.",
        ],
        vision: [
            "Completely eliminate financial friction from shared experiences.",
            "Add recurring expense automation for rent/utilities, OCR bill scanning for auto categorization.",
            "Predictive analytics to forecast upcoming expenses, smart reminders balancing urgency with social sensitivity.",
            "Collaborative budgeting for future events making shared money management invisible.",
        ],
    },
    conclusion: [
        "Transforms complex social friction of money management into simple, visual interactions.",
        "Demonstrates thoughtful software engineering solving everyday interpersonal challenges affecting billions.",
        "Tech stack: real time Socket.io updates, Prisma/PostgreSQL data management, modern Next.js frontend.",
        "Proves fintech can be designed with social dynamics and human relationships at its core.",
    ],
    images: [
        "/assets/projects/SettleMate/1.png",
        "/assets/projects/SettleMate/1.png",
        "/assets/projects/SettleMate/1.png",
    ],
    videoId: "",
    tags: ["Next.js", "Express", "Socket.io", "PrismaDB", "NeonDB"],
    github: "https://github.com/Sambhav-3010/SettleMate",
    demo: "https://settle-mates.vercel.app",
    status: "stable",
};
