export type ProjectStatus = "stable" | "warning" | "issues" | "update";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: {
    story: string;
    howItWorks: string;
    vision: string;
  };
  images: string[];
  videoId: string;
  tags: string[];
  github: string;
  demo: string;
  conclusion: string;
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
      story:
        "The inception of GhumoFiro came from a deeply personal frustration that every traveler knows too well. Picture this: you're planning a dream vacation, but your flight details are scattered across one booking site, hotel confirmations are buried in emails, attraction tickets are saved in browser tabs, and your itinerary notes are hastily scribbled in a messy notepad or forgotten in a notes app. The cognitive load of keeping track of everything often overshadows the excitement of the trip itself. I experienced this chaos firsthand while planning a multi-city tour, and that's when the idea struck — why isn't there a single platform that brings everything together intelligently? GhumoFiro was born from this vision: to unify the entire travel planning experience into one cohesive, intelligent, and delightful platform that actually understands how travelers think and plan.",
      howItWorks:
        "GhumoFiro employs a sophisticated hybrid approach that caters to different planning styles. For users who prefer automation, our Gemini-powered AI travel agent takes center stage. Simply describe your dream trip in natural language — 'A romantic week in Paris with a focus on art and fine dining' or 'Budget-friendly adventure trip to Thailand for solo backpacking' — and the AI generates a comprehensive, structured JSON itinerary including optimized flight routes, carefully selected hotels matching your preferences, and day-by-day activity schedules. This AI-generated plan is then hydrated with real-time data from SerpAPI, ensuring that flight prices, hotel availability, and attraction timings are accurate and bookable. For travelers who enjoy hands-on planning, the manual builder offers a beautiful drag-and-drop interface where you can curate every detail of your journey. As you build, our machine learning recommendation engine works behind the scenes, using collaborative filtering algorithms to analyze patterns from thousands of other travelers' trips. It suggests hidden gems, optimal routes, and experiences you might have missed, creating a planning experience that feels both personal and professionally curated.",
      vision:
        "GhumoFiro aspires to become the ultimate travel companion — not just a planning tool, but an intelligent partner that evolves with you. We envision a future where the platform doesn't just plan trips but actively adapts to them in real-time. Imagine receiving proactive suggestions when your flight is delayed, automatic rebooking of activities, weather-aware itinerary adjustments, and personalized recommendations based on your travel history and evolving preferences. The long-term goal is to create a travel ecosystem that learns from every journey you take, building a comprehensive understanding of your travel personality to offer hyper-personalized experiences that feel almost magical in their accuracy. Whether you're a meticulous planner or a spontaneous adventurer, GhumoFiro will know exactly how to serve you.",
    },
    conclusion:
      "GhumoFiro stands as a powerful testament to the transformative potential of integrating Generative AI with real-world data APIs. By successfully bridging the gap between inspiration and execution, it metamorphoses the traditionally daunting and fragmented task of travel planning into a seamless, enjoyable, and even delightful experience. This project not only highlights the immense potential of hybrid AI systems to solve complex, multi-step user problems but also demonstrates how thoughtful UX design combined with intelligent automation can create products that genuinely improve people's lives. The technical architecture — spanning Next.js for the frontend, Express for the backend, Python for ML services, and multiple API integrations — showcases full-stack development excellence while maintaining code quality and scalability.",
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
      story:
        "Real estate has long been plagued by systemic issues that erode trust and create barriers to property ownership. Property fraud, forged documents, opaque transaction histories, and unreliable intermediaries cost billions annually and leave countless individuals dispossessed of their rightful assets. In developing nations, unclear land titles affect nearly 70% of the population, preventing them from using their property as collateral for loans or passing it on securely to future generations. PropChain was conceived as a response to these fundamental challenges — a platform that brings the transparency, immutability, and trustlessness of blockchain technology to the centuries-old problem of property registration. By creating an unbreakable chain of ownership records on the Ethereum blockchain, PropChain eliminates the possibility of document tampering and provides an irrefutable proof of ownership that transcends national boundaries and institutional failures.",
      howItWorks:
        "At the core of PropChain lies a carefully architected smart contract system deployed on the Ethereum blockchain. Each property is tokenized as a unique Non-Fungible Token (NFT), with its metadata containing comprehensive details including geographic coordinates, legal descriptions, ownership history, and authenticated documents stored on IPFS for decentralized persistence. When a property transaction is initiated, the smart contract orchestrates a trustless escrow mechanism: the buyer's funds are locked in the contract, the seller initiates the title transfer, and only when both conditions are cryptographically verified does the atomic swap occur — ownership transfers to the buyer and funds release to the seller in a single, irreversible transaction. The platform integrates with government land registry APIs where available, and for regions without digital infrastructure, authorized registrars can verify and mint property tokens. The Next.js frontend provides an intuitive interface for searching properties, verifying ownership chains, initiating transactions, and connecting Web3 wallets like MetaMask for seamless blockchain interaction.",
      vision:
        "PropChain envisions a future where property ownership is as simple, secure, and universally accessible as sending an email. We aim to become the global standard for land registration, starting with pilot programs in regions where traditional land registry systems have failed their citizens. The long-term roadmap includes integration with decentralized identity systems for KYC compliance, fractional property ownership for democratized real estate investment, automated property tax collection through smart contract triggers, and a dispute resolution layer powered by decentralized arbitration. Ultimately, PropChain seeks to unlock trillions of dollars in 'dead capital' — property that exists but cannot be leveraged financially due to unclear ownership — transforming it into productive assets that can fuel economic growth and lift communities out of poverty.",
    },
    conclusion:
      "PropChain addresses one of the most persistent and consequential problems in asset management — the fundamental issue of trust in property ownership. By successfully implementing a fully decentralized land registry on the Ethereum blockchain, this project demonstrates the practical, real-world utility of blockchain technology far beyond cryptocurrency speculation. The smart contract architecture provides a robust blueprint for how automated, trustless systems can replace expensive, slow, and often corrupt intermediaries in high-value legal transactions. The technical implementation showcases expertise in Solidity smart contract development, Web3 integration, IPFS for decentralized storage, and full-stack application development, while the project's vision addresses pressing global challenges in property rights and financial inclusion.",
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
      story:
        "Splitting bills among friends, roommates, or travel companions shouldn't feel like solving a complex mathematical equation with social dynamics layered on top. Yet, anyone who has shared expenses knows the awkwardness of tracking who paid for dinner, remembering that someone covered the Uber three days ago, and figuring out the most efficient way to settle up without making ten different transactions. SettleMate was born from countless personal experiences of navigating these murky financial waters among friends. What started as a frustration with existing apps that were either too complicated or lacked essential features evolved into a mission to create the most intuitive, fair, and frictionless expense-sharing platform possible. The goal was simple: eliminate the mental load of shared expenses so that money never becomes a source of tension among friends, families, or colleagues sharing costs.",
      howItWorks:
        "SettleMate transforms the chaos of shared expenses into elegant simplicity through a carefully designed user experience and powerful algorithmic backend. Users create groups for any shared expense scenario — roommates, trips, events, or ongoing arrangements. Adding expenses is instantaneous: snap a receipt, enter the amount, select who was involved, and the app handles the rest. Behind the scenes, a sophisticated debt simplification algorithm continuously optimizes the group's financial graph, reducing what could be dozens of individual debts into the minimum possible transactions required to settle everyone up. Real-time Socket.io integration ensures that all group members see expense updates instantaneously, eliminating the confusion of outdated information. The visual analytics dashboard provides beautiful charts and insights into spending patterns — who tends to pay upfront, category breakdowns, monthly trends, and more. When it's time to settle, the integrated QR-based UPI payment system generates a scannable code pre-filled with the exact amount owed, making the actual money transfer a single-scan experience. All data is persisted through Prisma ORM connected to a NeonDB PostgreSQL database, ensuring reliability and data integrity.",
      vision:
        "SettleMate aspires to completely eliminate financial friction from shared experiences. The vision extends beyond simple expense splitting to becoming a comprehensive platform for collaborative finances. Future developments include recurring expense automation for rent and utilities, integrated bill scanning with OCR for automatic categorization, predictive analytics to forecast upcoming shared expenses, and smart reminders that balance urgency with social sensitivity. We envision group financial planning features where users can collaboratively budget for future events, travel, or purchases. The ultimate goal is to make managing shared money so seamless that it becomes invisible — allowing people to focus on the experiences and relationships that truly matter, rather than the financial logistics underlying them.",
    },
    conclusion:
      "SettleMate successfully transforms the complex social friction of money management among groups into a simple, visual, and even enjoyable interaction. By focusing on algorithmic efficiency for debt simplification, user-centered design principles, and seamless payment integration, it demonstrates how thoughtful software engineering can solve everyday interpersonal challenges that affect billions of people. The technical stack — featuring real-time updates via Socket.io, robust data management with Prisma and PostgreSQL, and a modern Next.js frontend — showcases full-stack development capabilities while prioritizing user experience. More importantly, SettleMate proves that financial technology doesn't have to be cold and transactional; it can be designed with social dynamics and human relationships at its core.",
    images: [
      "/assets/projects/SettleMate/1.png",
      "/assets/projects/SettleMate/1.png",
      "/assets/projects/SettleMate/1.png",
    ],
    videoId: "",
    tags: ["Next.js", "Express", "Socket.io", "PrismaDB", "NeonDB"],
    github: "https://github.com/Sambhav-3010/SettleMate",
    demo: "https://settle-mates.vercel.app",
    status: "warning",
    statusMessage:
      "Deployment has some issues - may not work properly or crash at runtime. Fix in progress.",
  },
  {
    slug: "quickweb-ai",
    title: "QuickWeb.ai",
    description:
      "An innovative AI-powered website generator that harnesses the capabilities of cutting-edge language models including Qwen and Gemini 2.5 to transform simple natural language prompts into fully structured, visually appealing, and production-ready websites within seconds. Perfect for rapid prototyping, landing pages, and quick web presence needs.",
    longDescription: {
      story:
        "The journey from an idea to a deployed website has traditionally been paved with numerous obstacles: learning HTML, CSS, and JavaScript, wrestling with design decisions, configuring hosting, and managing deployments. For non-developers with brilliant ideas, these technical barriers often mean their vision never sees the light of day. Even for experienced developers, prototyping a simple landing page or portfolio site can consume hours that could be better spent on core product development. QuickWeb.ai emerged from a simple yet powerful question: what if creating a website was as easy as describing what you want in plain English? Inspired by the rapid advancement of Large Language Models and their ability to understand and generate structured content, I set out to build a tool that would democratize web development. The goal was to reduce the time from concept to live website from days or weeks to mere seconds, empowering anyone with an idea to have a web presence without writing a single line of code.",
      howItWorks:
        "QuickWeb.ai operates through a sophisticated multi-stage AI pipeline designed to translate human intent into functional web code. When a user enters a prompt like 'Create a modern portfolio site for a photographer with a dark theme and gallery section,' the system first engages a prompt enhancement layer that expands the request with implied requirements and best practices. This enriched prompt is then processed by our LLM chain, which intelligently selects between Qwen and Gemini 2.5 based on the complexity and nature of the request. The AI generates structured output containing semantic HTML5 markup, modern CSS with responsive design patterns, and any necessary JavaScript for interactivity. A secondary validation agent reviews the generated code for syntax errors, accessibility issues, and mobile responsiveness, making corrections as needed. The final output is previewed in real-time in an embedded sandbox environment, allowing users to see exactly what their site looks like. With one click, the generated site can be exported as a complete project or deployed directly to Vercel for instant hosting. The entire process, from prompt to deployed website, typically takes between 10-30 seconds depending on complexity.",
      vision:
        "QuickWeb.ai envisions a future where the barrier between imagination and web reality is virtually non-existent. The roadmap includes expanding beyond static sites to generate interactive web applications, implementing a conversational refinement system where users can iterate on designs through dialogue ('make the header bigger,' 'change the color scheme to warmer tones'), and adding integration with popular design systems like Material UI and Tailwind. We're exploring multi-modal inputs where users can sketch rough layouts or upload inspiration images, and the AI will interpret and generate corresponding websites. The ultimate vision is a platform where anyone, regardless of technical background, can describe their digital vision and see it materialize instantly — democratizing web development and unlocking creativity for millions who currently lack the technical skills to build their own corner of the internet.",
    },
    conclusion:
      "QuickWeb.ai represents a significant step toward lowering the barriers to web creation, proving that natural language is rapidly becoming the ultimate programming interface. The project showcases the remarkable capability of modern Large Language Models to not only understand abstract design intent but to translate it into functional, aesthetically pleasing code that can be deployed in real-time. From a technical standpoint, the multi-model LLM architecture, real-time code generation and preview, and seamless deployment integration demonstrate advanced full-stack development capabilities combined with cutting-edge AI engineering. More broadly, QuickWeb.ai embodies the democratization of technology — making powerful tools accessible to everyone and accelerating the prototyping loop significantly for developers and non-developers alike.",
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
      story:
        "In an era of digital overwhelm, where the average professional juggles multiple projects, countless deadlines, and an ever-growing list of responsibilities, effective task management has become not just helpful but essential for survival. Yet, paradoxically, many task management tools have become so feature-laden that they add to the cognitive burden rather than reducing it. Taskify was born from a fundamental belief that productivity software should feel effortless — it should reduce mental load, not create new anxieties about learning complex systems. The project started as a personal tool to organize my own chaotic workflow during a particularly demanding semester filled with coursework, side projects, and extracurricular commitments. What began as a simple todo list evolved into a thoughtfully designed system that balances power with simplicity, providing all the features needed for serious productivity without the learning curve that makes many users abandon new tools within days.",
      howItWorks:
        "Taskify is built around the concept of project-based task organization, reflecting how most people naturally think about their work. Upon logging in, users are greeted by a clean, distraction-free dashboard displaying their active projects as visual cards. Creating a new project is instantaneous — just provide a name and optional description, and you're ready to populate it with tasks. Within each project, tasks can be added with rich details including titles, descriptions, due dates, priority levels, and custom labels for categorization. The drag-and-drop interface allows effortless reordering of tasks by priority, while keyboard shortcuts enable power users to navigate and manage tasks without touching the mouse. Each task can be marked complete with a satisfying animation, edited inline for quick corrections, or archived to maintain a clean workspace while preserving history. The ShadcnUI component library ensures a consistent, accessible, and visually appealing interface that feels native and professional. On the backend, an Express server handles all API operations with robust validation, while persistent storage ensures your tasks are always safe and synchronized across devices.",
      vision:
        "Taskify aims to evolve into the productivity hub that adapts to how you work, not the other way around. The roadmap includes collaborative features for team projects with shared task boards, real-time synchronization, and role-based permissions. We're developing intelligent features like smart due date suggestions based on task complexity and your historical completion patterns, automatic priority adjustments as deadlines approach, and integration with calendar applications for time-blocked task scheduling. A mobile companion app will ensure productivity isn't limited to desktop sessions, while API integrations with tools like Slack, Discord, and email will allow task creation and updates from wherever you already work. The end goal is a productivity ecosystem that feels like a natural extension of your thought process — capturing, organizing, and completing tasks with minimal friction and maximum satisfaction.",
    },
    conclusion:
      "Taskify demonstrates the power of combining modern frontend frameworks with a robust backend architecture to create tools that genuinely enhance human productivity. The project showcases clean architectural patterns including separation of concerns, reusable component design with ShadcnUI, and efficient state management for a seamless user experience. Beyond the technical implementation, Taskify embodies a design philosophy that prioritizes user experience over feature count — proving that the best software often isn't about having the most features, but about doing essential things exceptionally well. The positive feedback from users who have adopted Taskify for their daily workflows validates the approach of thoughtful simplicity combined with genuine utility.",
    images: [
      "/assets/projects/Taskify/1.png",
      "/assets/projects/Taskify/1.png",
      "/assets/projects/Taskify/1.png",
    ],
    videoId: "",
    tags: ["Next.js", "Express", "TypeScript", "ShadcnUI", "TailwindCSS"],
    github: "https://github.com/Sambhav-3010/Taskify",
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
      story:
        "This project emerged from a deeply meaningful collaboration during our college years, driven by the sobering reality that effective disaster response can mean the difference between life and death. When natural calamities strike — earthquakes, floods, cyclones, or any large-scale emergency — the most critical challenge isn't usually the lack of resources or willing helpers. It's the disconnect between those desperately needing help and those ready to provide it. Information silos, communication breakdowns, and coordination chaos often result in duplicated efforts in some areas while others remain completely neglected. As a group project, our diverse team brought together expertise in frontend development, backend architecture, real-time systems, and geospatial technologies to tackle this formidable challenge. We interviewed disaster relief volunteers, studied existing emergency response systems, and identified the key pain points that prevent efficient coordination. The result was a platform designed from the ground up to create a unified digital ecosystem where every stakeholder in a disaster scenario — survivors seeking help, NGOs managing relief operations, volunteers offering their time, and suppliers providing essential goods — could connect, communicate, and collaborate in real-time with minimal friction and maximum efficiency.",
      howItWorks:
        "The platform is architected around a sophisticated role-based access control system that recognizes the distinct needs and capabilities of four primary user types. Survivors are the platform's most critical users — they can register during an emergency, share their GPS location through intuitive map integration, and create detailed requests specifying their needs (food, water, medical supplies, shelter, evacuation assistance, etc.). Each request includes priority levels, number of people affected, and any special requirements like medical conditions or accessibility needs. NGOs serve as the organizational backbone of relief efforts. They undergo a verification process to ensure legitimacy, after which they gain access to a comprehensive dashboard showing all nearby requests, their associated volunteers and suppliers, and resource allocation tools. NGOs can claim requests, assign them to specific volunteers, coordinate with verified suppliers for resource procurement, and track the completion status of relief efforts in their zone. Volunteers register with their skills, availability, and location, getting matched with nearby NGOs or directly with urgent survivor requests. Suppliers — whether local shops, warehouses, or logistics companies — can list their available resources and receive requests from verified NGOs, creating a supply chain that responds dynamically to ground-level needs. The technical magic happens through our Socket.io integration: when a survivor creates a request, a dedicated communication channel is automatically created. All relevant parties (the survivor, assigned volunteers, coordinating NGO, and any involved suppliers) are added to this channel, enabling real-time messaging, status updates, and coordination without the delays of traditional communication. The Maps API integration provides every user with a contextual view — survivors see the nearest help, NGOs see all activity in their operational radius, and the system continuously optimizes resource allocation based on proximity, urgency, and availability.",
      vision:
        "Our vision extends far beyond the initial college project scope. We envision this platform evolving into a globally deployable disaster response infrastructure that can be rapidly activated in any emergency anywhere in the world. The roadmap includes integration with official disaster management authorities and emergency services, AI-powered request triage that can prioritize based on urgency indicators, predictive analytics that can anticipate resource needs based on disaster type and historical data, offline functionality for scenarios where internet infrastructure is compromised, and multi-language support for international deployment. We're also exploring integration with IoT sensors for automatic disaster detection and alert generation, drone coordination for unreachable areas, and blockchain-based donation tracking for transparent relief fund management. The ultimate goal is to create a platform so robust and well-designed that no disaster response effort has to struggle with coordination again — ensuring that help reaches those who need it, when they need it, every single time.",
    },
    conclusion:
      "The Disaster Management Platform represents one of the most meaningful applications of our technical skills — using real-time web technologies, geospatial services, and thoughtful system design to address critical humanitarian challenges that affect millions of people worldwide every year. The project showcases the power of Socket.io for real-time communication, Maps API for location-aware services, role-based access control for multi-stakeholder platforms, and MongoDB for flexible data management in dynamic scenarios. Beyond the technical implementation, this group project experience taught invaluable lessons about collaborative development, stakeholder empathy, and the responsibility that comes with building systems that could impact lives. It stands as a reminder that the best technology serves human needs, and that software engineering skills can be directed toward solving problems that genuinely matter to society.",
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

