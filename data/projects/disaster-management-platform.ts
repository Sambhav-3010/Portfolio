import { Project } from "../projects";

export const disasterManagementPlatform: Project = {
    slug: "disaster-management-platform",
    title: "Disaster Management Platform",
    description:
        "A comprehensive disaster response coordination platform developed as a collaborative college group project. The system enables real-time communication and coordination between survivors, NGOs, volunteers, and suppliers through an intelligent role-based access system, WebSocket integration for instant messaging, and interactive map-based location services for proximity-aware resource allocation.",
    longDescription: {
        story: [
            "Collaborative college project driven by reality: effective disaster response means the difference between life and death.",
            "Critical challenge isn't lack of resources — it's disconnect between those needing help and those ready to provide it.",
            "Information silos cause duplicated efforts in some areas while others remain neglected.",
            "Built unified ecosystem where all stakeholders connect, communicate, and collaborate in real-time.",
        ],
        howItWorks: [
            "Survivors: register, share GPS location, create priority requests with needs (food, water, medical, shelter, evacuation).",
            "NGOs: verified dashboard showing nearby requests, volunteers, suppliers; claim requests, assign volunteers, track completion.",
            "Volunteers: register skills, availability, location; get matched with nearby NGOs or urgent survivor requests.",
            "Socket.io creates dedicated channels for real-time messaging; Maps API provides proximity-aware contextual views for optimized resource allocation.",
        ],
        vision: [
            "Evolve into globally deployable disaster response infrastructure activated anywhere in the world.",
            "Integration with official authorities, AI-powered request triage by urgency, predictive analytics for resource needs.",
            "Offline functionality for compromised networks, multi-language support, drone coordination for unreachable areas.",
            "Blockchain-based donation tracking for transparent relief fund management.",
        ],
    },
    conclusion: [
        "Most meaningful application of technical skills — real-time technologies addressing critical humanitarian challenges.",
        "Showcases Socket.io for communication, Maps API for location services, role-based access for multi-stakeholder platforms.",
        "Group project taught lessons about collaborative development, stakeholder empathy, and building systems that impact lives.",
        "Reminder that best technology serves human needs — software engineering directed toward problems that matter.",
    ],
    images: [
        "/assets/projects/Disaster/1.png",
        "/assets/projects/Disaster/1.png",
        "/assets/projects/Disaster/1.png",
    ],
    videoId: "",
    tags: ["React", "Node.js", "Socket.io", "Maps API", "MongoDB", "Express"],
    github: "https://github.com/noughtsad/Disaster-relief-coordination-platform",
    demo: "https://disaster-relief-coordination-platfo-three.vercel.app",
    status: "stable",
};
