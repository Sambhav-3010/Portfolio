export type ProjectStatus = "stable" | "warning" | "issues" | "update";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: {
    story: string[];
    howItWorks: string[];
    vision: string[];
  };
  images: string[];
  videoId: string;
  tags: string[];
  github: string;
  demo: string;
  conclusion: string[];
  status?: ProjectStatus;
  statusMessage?: string;
}

export const projects: Project[] = [
  {
    slug: "ghumofiro",
    title: "GhumoFiro",
    description:
      "A comprehensive travel itinerary web application featuring both manual and AI-powered trip planning capabilities. The platform integrates SerpAPI to fetch real-time flight information, hotel bookings, local attractions, and curated activities for highly personalized travel recommendations tailored to each user's preferences and budget.",
    longDescription: {
      story: [
        "Born from the frustration every traveler knows — flight details scattered across booking sites, hotel confirmations buried in emails, attraction tickets saved in browser tabs.",
        "The cognitive load of tracking everything often overshadows the excitement of the trip itself.",
        "Experienced this chaos firsthand while planning a multi-city tour, sparking the idea for a unified platform.",
        "GhumoFiro's vision: unify the entire travel planning experience into one cohesive, intelligent platform that understands how travelers think and plan.",
      ],
      howItWorks: [
        "AI Mode: Describe your trip in natural language — the Gemini-powered AI generates a complete structured JSON itinerary with optimized routes, hotels, and day-by-day schedules.",
        "AI-generated plans are hydrated with real-time SerpAPI data for accurate flight prices, hotel availability, and attraction timings.",
        "Manual Mode: Beautiful drag-and-drop interface to curate every journey detail hands-on.",
        "ML recommendation engine uses collaborative filtering to suggest hidden gems, optimal routes, and experiences from thousands of traveler patterns.",
      ],
      vision: [
        "Evolve into an intelligent travel companion that actively adapts to trips in real-time.",
        "Proactive suggestions for flight delays, automatic rebooking, and weather-aware itinerary adjustments.",
        "Build comprehensive understanding of travel personality for hyper-personalized experiences.",
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
      "/assets/projects/GhumoFiro/15.png",
      "/assets/projects/GhumoFiro/16.png",
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
  },
  {
    slug: "propchain",
    title: "PropChain",
    description:
      "A revolutionary decentralized land registry platform leveraging Ethereum smart contracts for secure, transparent, and tamper-proof property transactions. The application seamlessly integrates Web3 technologies with a modern Next.js frontend to enable blockchain-based ownership verification, automated escrow services, and trustless property transfers without intermediaries.",
    longDescription: {
      story: [
        "Real estate plagued by property fraud, forged documents, and unreliable intermediaries — costing billions annually.",
        "In developing nations, unclear land titles affect nearly 70% of the population, blocking loans and secure inheritance.",
        "PropChain brings blockchain transparency and immutability to centuries-old property registration problems.",
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
        "Unlock trillions in 'dead capital' — property that cannot be leveraged due to unclear ownership.",
      ],
    },
    conclusion: [
      "Addresses the fundamental trust problem in property ownership through fully decentralized Ethereum registry.",
      "Demonstrates practical, real-world blockchain utility beyond cryptocurrency speculation.",
      "Smart contract architecture provides blueprint for trustless systems replacing expensive intermediaries.",
      "Showcases Solidity development, Web3 integration, IPFS storage, and full-stack application skills.",
    ],
    images: [
      "/assets/projects/PropChain/1.png",
      "/assets/projects/PropChain/1.png",
      "/assets/projects/PropChain/1.png",
    ],
    videoId: "",
    tags: ["Next.js", "Express", "MongoDB", "Firebase", "Ethereum", "Solidity"],
    github: "https://github.com/Sambhav-3010/PropChain",
    demo: "https://nfc-prop-chain.vercel.app",
    status: "issues",
    statusMessage:
      "Deployment has some issues - may not work properly or crash at runtime. Fix in progress.",
  },
  {
    slug: "settlemate",
    title: "SettleMate",
    description:
      "A comprehensive expense splitting application designed for modern shared living and group activities. Features include a sophisticated visual analytics dashboard for spending insights, intelligent debt simplification algorithms, and seamless QR-based UPI payment integration, enabling users to track expenses, analyze spending patterns, and settle dues instantly via scannable payment codes.",
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
        "Real-time Socket.io ensures all members see updates instantaneously; visual analytics dashboard shows spending patterns and trends.",
        "QR-based UPI payment generates scannable code pre-filled with exact amount; Prisma ORM with NeonDB PostgreSQL ensures data integrity.",
      ],
      vision: [
        "Completely eliminate financial friction from shared experiences.",
        "Add recurring expense automation for rent/utilities, OCR bill scanning for auto-categorization.",
        "Predictive analytics to forecast upcoming expenses, smart reminders balancing urgency with social sensitivity.",
        "Collaborative budgeting for future events — making shared money management invisible.",
      ],
    },
    conclusion: [
      "Transforms complex social friction of money management into simple, visual interactions.",
      "Demonstrates thoughtful software engineering solving everyday interpersonal challenges affecting billions.",
      "Tech stack: real-time Socket.io updates, Prisma/PostgreSQL data management, modern Next.js frontend.",
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];
