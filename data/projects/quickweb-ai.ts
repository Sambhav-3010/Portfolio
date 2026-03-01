import { Project } from "../projects";

export const quickWebAi: Project = {
    slug: "quickweb-ai",
    title: "QuickWeb.ai",
    description:
        "An AI powered website and frontend generator that transforms natural language prompts into fully functional React applications. Leveraging multiple advanced language models including Gemini, Claude, Qwen, and other cloud hosted LLMs, QuickWeb.ai generates structured React code, modern CSS, and JavaScript automatically, then executes the project instantly using WebContainers for a real in browser development and preview environment.",

    longDescription: {
        story: [
            "Building modern websites typically requires knowledge of React, styling systems, project setup, and deployment workflows.",
            "Many creators and founders struggle to convert ideas into working interfaces, while developers spend significant time scaffolding repetitive frontend structures.",
            "QuickWeb.ai was created around a simple idea: generating a working web application should be as easy as describing it.",
            "The platform focuses on reducing the gap between idea and execution by automatically producing runnable React applications directly from natural language prompts.",
        ],
        howItWorks: [
            "Users describe their website or interface using natural language prompts such as 'Create a SaaS landing page with pricing and testimonials.'",
            "A prompt enhancement layer refines the request by adding layout structure, component hierarchy, and frontend best practices.",
            "A multi model AI pipeline dynamically utilizes models such as Gemini, Claude, Qwen, and other cloud LLMs to generate production ready React code along with CSS and JavaScript.",
            "Generated projects run instantly inside browser based WebContainers, allowing real time execution, editing, and preview without local setup or installation.",
        ],
        vision: [
            "Make frontend development accessible by turning natural language into executable React applications.",
            "Move beyond static generation toward full application building with iterative AI collaboration.",
            "Enable rapid prototyping where users can continuously refine UI and features conversationally.",
            "Democratize software creation by removing environment setup, tooling complexity, and technical barriers.",
        ],
    },

    conclusion: [
        "Demonstrates how multi model AI systems can generate complete React based web experiences from simple prompts.",
        "Combines AI code generation with WebContainer execution to simulate a real development environment directly in the browser.",
        "Highlights the power of integrating models like Gemini, Claude, and Qwen for reliable and adaptive frontend generation.",
        "Represents a shift toward AI assisted software creation where ideas can instantly become running applications.",
    ],

    images: [
        "/assets/projects/QuickWeb.ai/1.png",
        "/assets/projects/QuickWeb.ai/2.png",
        "/assets/projects/QuickWeb.ai/3.png",
        "/assets/projects/QuickWeb.ai/4.png",
        "/assets/projects/QuickWeb.ai/5.png",
        "/assets/projects/QuickWeb.ai/6.png",
        "/assets/projects/QuickWeb.ai/7.png",
        "/assets/projects/QuickWeb.ai/8.png",
        "/assets/projects/QuickWeb.ai/9.png",
        "/assets/projects/QuickWeb.ai/10.png",
        "/assets/projects/QuickWeb.ai/11.png",
        "/assets/projects/QuickWeb.ai/12.png",
    ],
    videoId: "",
    tags: ["Next.js", "Express", "Node", "TypeScript", "Gemini AI", "Qwen"],
    github: "https://github.com/Sambhav 3010/QuickWeb.ai",
    demo: "https://quickwebai.vercel.app",
    status: "stable",
};