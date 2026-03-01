import { Project } from "../projects";

export const ghumoFiro: Project = {
    slug: "ghumofiro",
    title: "GhumoFiro",
    description:
        "A comprehensive travel itinerary web application featuring both manual and AI-powered trip planning capabilities. The platform integrates SerpAPI to fetch real time flight information, hotel bookings, local attractions, and curated activities for highly personalized travel recommendations tailored to each user's preferences and budget.",
    longDescription: {
        story: [
            "Born from the frustration every traveler knows flight details scattered across booking sites, hotel confirmations buried in emails, attraction tickets saved in browser tabs.",
            "The cognitive load of tracking everything often overshadows the excitement of the trip itself.",
            "Experienced this chaos firsthand while planning a multi city tour, sparking the idea for a unified platform.",
            "GhumoFiro's vision: unify the entire travel planning experience into one cohesive, intelligent platform that understands how travelers think and plan.",
        ],
        howItWorks: [
            "AI Mode: Describe your trip in natural language the Gemini powered AI generates a complete structured JSON itinerary with optimized routes, hotels, and day by day schedules.",
            "AI generated plans are hydrated with real time SerpAPI data for accurate flight prices, hotel availability, and attraction timings.",
            "ML recommendation engine uses collaborative filtering to suggest experiences and travels from thousands of travelers.",
        ],
        vision: [
            "Evolve into an intelligent travel companion that actively adapts to trips in real time.",
            "Proactive suggestions for flight delays, automatic rebooking, and weather-aware itinerary adjustments.",
            "Build comprehensive understanding of travel personality for hyper personalized experiences.",
            "Serve both meticulous planners and spontaneous adventurers with equal precision.",
        ],
    },
    conclusion: [
        "Powerful testament to integrating Generative AI with real-world data APIs.",
        "Transforms traditionally fragmented travel planning into a seamless, delightful experience.",
        "Demonstrates hybrid AI systems solving complex, multi-step user problems.",
        "Full-stack architecture: Next.js frontend, Express backend, Python ML services, multiple API integrations.",
    ],
    images: [
        "/assets/projects/GhumoFiro/1.png",
        "/assets/projects/GhumoFiro/2.png",
        "/assets/projects/GhumoFiro/3.png",
        "/assets/projects/GhumoFiro/4.png",
        "/assets/projects/GhumoFiro/5.png",
        "/assets/projects/GhumoFiro/6.png",
        "/assets/projects/GhumoFiro/7.png",
        "/assets/projects/GhumoFiro/8.png",
        "/assets/projects/GhumoFiro/9.png",
        "/assets/projects/GhumoFiro/10.png",
        "/assets/projects/GhumoFiro/11.png",
        "/assets/projects/GhumoFiro/12.png",
        "/assets/projects/GhumoFiro/13.png",
        "/assets/projects/GhumoFiro/14.png",
    ],
    videoId: "",
    tags: [
        "Next.js",
        "Express",
        "Python",
        "MongoDB",
        "Firebase",
        "Gemini AI",
        "SerpAPI",
    ],
    github: "https://github.com/Sambhav-3010/GhumoFiro",
    demo: "https://ghumofiro.vercel.app",
    status: "stable",
}