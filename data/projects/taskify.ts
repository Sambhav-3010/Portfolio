import { Project } from "../projects";

export const taskify: Project = {
    slug: "taskify",
    title: "Taskify",
    description:
        "A comprehensive, full-featured task management system designed for modern productivity workflows. Featuring intuitive project-based task grouping, users can seamlessly organize multiple tasks under different projects, track progress with visual indicators, and manage their entire workflow for enhanced productivity and better time management.",
    longDescription: {
        story: [
            "Digital overwhelm makes effective task management essential — yet many tools add cognitive burden with too many features.",
            "Taskify born from belief that productivity software should feel effortless, reducing mental load not creating anxiety.",
            "Started as personal tool during a demanding semester with coursework, side projects, and extracurriculars.",
            "Evolved into thoughtfully designed system balancing power with simplicity — serious productivity without the learning curve.",
        ],
        howItWorks: [
            "Project-based organization reflecting natural workflow thinking; clean dashboard displays active projects as visual cards.",
            "Tasks with rich details: titles, descriptions, due dates, priority levels, custom labels; drag-and-drop reordering and keyboard shortcuts.",
            "Satisfying completion animations, inline editing, archiving to preserve history while maintaining clean workspace.",
            "ShadcnUI ensures consistent, accessible interface; Express backend with robust validation and persistent cross-device storage.",
        ],
        vision: [
            "Evolve into productivity hub that adapts to how you work, not the other way around.",
            "Collaborative team features with shared boards, real-time sync, and role-based permissions.",
            "Smart due date suggestions based on complexity and completion patterns; calendar integration for time-blocked scheduling.",
            "Mobile companion app and API integrations with Slack, Discord, and email for task management from anywhere.",
        ],
    },
    conclusion: [
        "Demonstrates combining modern frontend with robust backend for tools that genuinely enhance productivity.",
        "Clean architectural patterns: separation of concerns, reusable ShadcnUI components, efficient state management.",
        "Prioritizes user experience over feature count — best software does essential things exceptionally well.",
        "Positive user feedback validates thoughtful simplicity combined with genuine utility.",
    ],
    images: [
        "/assets/projects/Taskify/1.png",
        "/assets/projects/Taskify/1.png",
        "/assets/projects/Taskify/1.png",
    ],
    videoId: "",
    tags: ["Next.js", "Express", "TypeScript", "ShadcnUI", "TailwindCSS", "GraphQL", "MongoDB"],
    github: "https://github.com/Sambhav-3010/Project-Management-System",
    demo: "https://taskify-event.vercel.app",
    status: "stable",
    statusMessage: "Project is stable, deployed and working.",
};
