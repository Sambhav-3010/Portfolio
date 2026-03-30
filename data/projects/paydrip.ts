import { Project } from "../projects";

export const paydrip: Project = {
    slug: "paydrip",
    title: "Paydrip",
    description:
        "A decentralized salary streaming application built with a Solidity payroll contract and a Next.js frontend. Employers can create and manage salary streams, while employees can monitor accrual in real time and withdraw available salary from active streams.",
    longDescription: {
        story: [
            "Inspired by the need for more efficient and transparent payroll solutions in the decentralized space, Paydrip addresses the friction often found in traditional and early Web3 payments.",
            "The project was born out of the idea that salary should be as fluid as time itself, allowing for real-time monitoring and withdrawal as work progresses.",
            "The primary goal was to combine the reliability of smart contracts with the sub-second responsiveness of modern real-time data streaming.",
        ],
        howItWorks: [
            "Employers create and fund streams upfront on the Sepolia network, which handles the secure state and logic for each payroll agreement.",
            "A Kafka-backed live snapshot pipeline generates signed snapshots of current accrued salary, which are delivered to the frontend via Server-Sent Events (SSE).",
            "This hybrid architecture ensures that the UI updates in real-time while remaining backed by the on-chain truth via a fallback direct-chain mechanism.",
        ],
        vision: [
            "To become the gold standard for decentralized streaming payments and recurring payroll in the Web3 ecosystem.",
            "Integrating with automated compliance and tax calculation protocols to create a comprehensive financial suite for remote teams.",
            "Expanding the platform to support multi-chain operations, allowing for payroll flexibility across various Layer 2 solutions.",
        ],
    },
    conclusion: [
        "A robust demonstration of integrating complex smart contract logic with high-performance real-time data pipelines.",
        "Proves that Web3 applications can offer a user experience as smooth and responsive as traditional fintech platforms.",
        "Showcases a full-stack architecture that accounts for real-time needs and decentralized reliability.",
    ],
    images: [
        "/assets/projects/Paydrip/1.png",
        "/assets/projects/Paydrip/2.png",
        "/assets/projects/Paydrip/3.png",
        "/assets/projects/Paydrip/4.png",
        "/assets/projects/Paydrip/5.png",
        "/assets/projects/Paydrip/6.png",
        "/assets/projects/Paydrip/7.png",
        "/assets/projects/Paydrip/8.png",
        "/assets/projects/Paydrip/9.png",
        "/assets/projects/Paydrip/10.png",
        "/assets/projects/Paydrip/11.png",
        "/assets/projects/Paydrip/12.png",
        "/assets/projects/Paydrip/13.png"
    ],
    videoId: "",
    tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Ethers v6",
        "Solidity",
        "Kafka",
        "Sepolia",
    ],
    github: "https://github.com/Sambhav-3010/Paydrip",
    demo: "https://paydrip.xyz",
    status: "stable",
};
