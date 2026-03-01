import { Project } from "../projects";

export const propChain: Project = {
    slug: "propchain",
    title: "PropChain",
    description:
        "A revolutionary decentralized land registry platform leveraging Ethereum smart contracts for secure, transparent, and tamper proof property transactions. The application seamlessly integrates Web3 technologies with a modern Next.js frontend to enable blockchain based ownership verification, automated escrow services, and trustless property transfers without intermediaries.",
    longDescription: {
        story: [
            "Real estate plagued by property fraud, forged documents, and unreliable intermediaries costing billions annually.",
            "In developing nations, unclear land titles affect nearly 70% of the population, blocking loans and secure inheritance.",
            "PropChain brings blockchain transparency and immutability to centuries old property registration problems.",
            "Creates unbreakable ownership records on Ethereum, eliminating document tampering and providing irrefutable proof.",
        ],
        howItWorks: [
            "Each property tokenized as unique NFT with metadata: coordinates, legal descriptions, ownership history, and authenticated documents on IPFS.",
            "Smart contract orchestrates trustless escrow: buyer funds locked, seller initiates transfer, atomic swap on cryptographic verification.",
            "Platform integrates with government land registry APIs; authorized registrars can verify and mint tokens in regions without digital infrastructure.",
            "Next.js frontend for property search, ownership chain verification, transactions, and MetaMask wallet connection.",
        ],
        vision: [
            "Make property ownership as simple, secure, and accessible as sending an email.",
            "Become global standard for land registration, starting with pilot programs in regions where traditional systems have failed.",
            "Integrate decentralized identity for KYC, fractional ownership for democratized investment, automated tax collection.",
            "Unlock trillions in 'dead capital' property that cannot be leveraged due to unclear ownership.",
        ],
    },
    conclusion: [
        "Addresses the fundamental trust problem in property ownership through fully decentralized Ethereum registry.",
        "Demonstrates practical, real world blockchain utility beyond cryptocurrency speculation.",
        "Smart contract architecture provides blueprint for trustless systems replacing expensive intermediaries.",
        "Showcases Solidity development, Web3 integration, IPFS storage, and full stack application skills.",
    ],
    images: [
        "/assets/projects/PropChain/1.png",
        "/assets/projects/PropChain/2.png",
        "/assets/projects/PropChain/3.png",
        "/assets/projects/PropChain/4.png",
        "/assets/projects/PropChain/5.png",
        "/assets/projects/PropChain/6.png",
        "/assets/projects/PropChain/7.png",
        "/assets/projects/PropChain/8.png",
        "/assets/projects/PropChain/9.png",
        "/assets/projects/PropChain/10.png",
        "/assets/projects/PropChain/11.png",
    ],
    videoId: "",
    tags: ["Next.js", "Express", "MongoDB", "Firebase", "Ethereum", "Solidity"],
    github: "https://github.com/Sambhav-3010/PropChain",
    demo: "https://prop-chain-lemon.vercel.app",
    status: "stable",
    statusMessage:
        "Deployment has some issues - may not work properly or crash at runtime. Fix in progress.",
};
