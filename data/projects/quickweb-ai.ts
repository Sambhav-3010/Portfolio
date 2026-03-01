import { Project } from "../projects";

export const quickWebAi: Project = {
    slug: "quickweb-ai",
    title: "QuickWeb.ai",
    description:
        "An innovative AI-powered website generator that harnesses the capabilities of cutting-edge language models including Qwen and Gemini 2.5 to transform simple natural language prompts into fully structured, visually appealing, and production-ready websites within seconds. Perfect for rapid prototyping, landing pages, and quick web presence needs.",
    longDescription: {
        story: [
            "Traditional web development has high barriers: HTML, CSS, JavaScript, design decisions, hosting configuration.",
            "Non-developers with brilliant ideas often can't bring their vision to life; even developers spend hours on simple landing pages.",
            "QuickWeb.ai emerged from a powerful question: what if creating a website was as easy as describing it in plain English?",
            "Goal: reduce time from concept to live website from days to seconds, empowering anyone to have a web presence.",
        ],
        howItWorks: [
            "Enter natural language prompt like 'Create a modern portfolio for a photographer with dark theme and gallery section.'",
            "Prompt enhancement layer expands request with implied requirements and best practices before LLM processing.",
            "LLM chain intelligently selects between Qwen and Gemini 2.5; generates semantic HTML5, modern CSS, and JavaScript.",
            "Validation agent checks syntax, accessibility, and mobile responsiveness; real-time preview in embedded sandbox with one-click Vercel deployment.",
        ],
        vision: [
            "Eliminate the barrier between imagination and web reality entirely.",
            "Expand beyond static sites to generate interactive web applications with conversational refinement.",
            "Multi-modal inputs: users can sketch layouts or upload inspiration images for AI interpretation.",
            "Democratize web development and unlock creativity for millions lacking technical skills.",
        ],
    },
    conclusion: [
        "Significant step toward lowering barriers to web creation — natural language as the ultimate programming interface.",
        "Showcases LLM capability to understand abstract design intent and translate it into functional, aesthetic code.",
        "Multi-model architecture, real-time code generation, and seamless deployment demonstrate advanced AI engineering.",
        "Embodies technology democratization — making powerful tools accessible to everyone.",
    ],
    images: [
        "/assets/projects/QuickWeb.ai/1.png",
        "/assets/projects/QuickWeb.ai/1.png",
        "/assets/projects/QuickWeb.ai/1.png",
    ],
    videoId: "",
    tags: ["Next.js", "Express", "Node", "TypeScript", "Gemini AI", "Qwen"],
    github: "https://github.com/Sambhav-3010/QuickWeb.ai",
    demo: "https://quickwebai.vercel.app",
    status: "stable",
};
