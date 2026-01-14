export interface CodeSnippet {
  title: string;
  language: string;
  explanation: string;
  code: string;
}

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
  codeSnippet?: string;
  codeSnippetPosition?: "top" | "bottom";
  codeSnippets?: CodeSnippet[];
  conclusion: string;
  status?: ProjectStatus;
  statusMessage?: string;
}

export const projects: Project[] = [
  {
    slug: "ghumofiro",
    title: "GhumoFiro",
    description:
      "A travel itinerary web app featuring both manual and AI-powered trip planning, integrating SerpAI to fetch real flights, attractions, and activities for personalized travel recommendations.",
    longDescription: {
      story:
        "The idea stemmed from the frustration of scattered travel planning. Flight details on one site, hotels on another, and itinerary notes in a messy notepad. GhumoFiro solves this by unifying the entire experience into a cohesive, intelligent platform.",
      howItWorks:
        "GhumoFiro employs a hybrid approach. Users can request a complete itinerary from our Gemini-powered AI agent, which generates a structured JSON plan including flights, hotels, and activities. This plan is then hydrated with real-time data from SerpAPI. Alternatively, users can manually build their trip using the drag-and-drop builder, with the ML engine suggesting destinations based on collaborative filtering of other users' trips.",
      vision:
        "To become the ultimate travel companion that doesn't just plan trips but adapts to them in real-time, learning from your preferences to offer hyper-personalized experiences.",
    },
    conclusion:
      "GhumoFiro stands as a testament to the power of integrating Generative AI with real-world data APIs. By bridging the gap between inspiration and execution, it transforms the daunting task of travel planning into a seamless, enjoyable experience. This project highlights the potential of hybrid AI systems to solve complex, multi-step user problems.",
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
    codeSnippets: [
      {
        title: "ML Recommendation Logic",
        language: "python",
        explanation:
          "This function implements a collaborative filtering algorithm to suggest travel destinations. It aggregates places visited by a group of similar users, filters out places the target user has already visited, and calculates a score for each potential destination. The score is boosted by the recency of the visits, ensuring that trending or seasonally relevant destinations are prioritized. Finally, it sorts the places by score and returns the top N recommendations.",
        code: `for _, row in group_trips.iterrows():
    place = row["place_norm"]
    # Score = Base + Recency Boost (newer trips matter more)
    if place and place not in all_excluded:
        place_scores[place] += 1.0 + row.get("recency", 0.5)

# Return top N recommendations sorted by score
ranked_places = sorted(place_scores.items(), key=lambda x: x[1], reverse=True)
return [place for place, score in ranked_places[:top_n] if place]`,
      },
      {
        title: "AI Itinerary Generation",
        language: "javascript",
        explanation:
          "This snippet demonstrates the backend logic for generating travel itineraries using Google's Gemini AI. It initializes the generative model with a specific JSON schema to enforce structured output and constructs a prompt with the user's input to generate a detailed day-by-day plan.",
        code: `// Initialize Gemini with strict JSON schema for itineraries
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  generationConfig: { responseMimeType: "application/json", responseSchema: ITINERARY_SCHEMA },
});

// Generate structured itinerary based on user prompt
const result = await model.generateContent(\`Create a detailed itinerary for: "\${userInput}"\`);
const itineraryJson = JSON.parse(result.response.text());
return res.status(200).json(itineraryJson);`,
      },
      {
        title: "Manual Itinerary & Real-time Booking",
        language: "typescript",
        explanation:
          "This snippet enables the 'See More' functionality for manually added travel items. When a user wants to book a flight, hotel, or activity found via SerpAPI, this function constructs the appropriate external URL (e.g., Google Flights, Booking.com) based on the item's metadata and redirects the user to a pre-filled search page for seamless booking.",
        code: `const handleSeeMore = (item: TravelItem) => {
  let redirectUrl = "";
  if (item.type === "flight") {
    redirectUrl = \`https://www.google.com/travel/flights?q=Flights+from+\${item.origin}+to+\${item.destination}+on+\${item.date}\`;
  } else if (item.type === "hotel") {
    redirectUrl = \`https://www.booking.com/searchresults.html?ss=\${encodeURIComponent(item.name)}\`;
  }
  
  if (redirectUrl) window.open(redirectUrl, "_blank");
};`,
      },
      {
        title: "Frontend State Management",
        language: "typescript",
        explanation:
          "This snippet shows the core Reducer structure for adjusting the itinerary state. It specifically highlights how adding travel items updates the state and how the total cost is instantly recalculated after every action to provide real-time budget feedback.",
        code: `const itineraryReducer = (state: ItineraryState, action: ItineraryAction): ItineraryState => {
  switch (action.type) {
    case "ADD_TRAVEL":
      // Auto-update progress and unique IDs
      return { ...state, travelSelections: [...state.travelSelections, { ...action.payload, id: generateId() }] };

    case "CALCULATE_TOTAL":
      // Recalculate dynamic costs instantly
      return { ...state, totalCost: calculateTotalCost(state) };

    default: return state;
  }
}`,
      },
    ],
    status: "stable",
  },
  {
    slug: "propchain",
    title: "PropChain",
    description:
      "A decentralized land registry platform using smart contracts for secure property transactions. Integrated Web3 with Next for blockchain-based ownership verification and transfers.",
    longDescription: {
      story:
        "Property fraud and opaque transactions are major issues in real estate. PropChain was built to bring transparency and trust back into the system using the immutability of blockchain.",
      howItWorks:
        "Properties are tokenized as NFTs. Smart contracts handle the transfer of ownership, ensuring that funds are only released when the title is successfully transferred.",
      vision:
        "A world where property ownership is as seamless and secure as sending an email.",
    },
    conclusion:
      "PropChain addresses one of the most persistent problems in asset management—trust. By successfully implementing a decentralized land registry, this project demonstrates the practical utility of blockchain beyond currency. It provides a blueprint for how smart contracts can automate and secure high-value legal transactions.",
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
    codeSnippet: `contract LandRegistry {
    struct Property {
        uint256 id;
        string location;
        address owner;
        bool forSale;
        uint256 price;
    }
    
    mapping(uint256 => Property) public properties;
    
    function transferOwnership(uint256 _id, address _newOwner) public {
        require(msg.sender == properties[_id].owner, "Only owner can transfer");
        properties[_id].owner = _newOwner;
    }
}`,
  },
  {
    slug: "settlemate",
    title: "SettleMate",
    description:
      "Expense splitting application with a visual analytics dashboard and QR-based UPI payments, enabling users to track expenses, analyze spending patterns, and settle dues instantly via scannable payment codes.",
    longDescription: {
      story:
        "Splitting bills with roomates should not be a math homework. SettleMate makes it instant, visual, and fair.",
      howItWorks:
        "Groups are created, expenses are added, and the optimal settlement strategy is calculated to minimize the number of transactions required.",
      vision: "Frictionless financial interactions between friends.",
    },
    conclusion:
      "SettleMate turns the complex social friction of money management into a simple, visual interaction. By focusing on algorithmic efficiency for debt simplification and user-friendly payment integration, it shows how thoughtful software design can solve everyday interpersonal challenges.",
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
    codeSnippet: `io.on('connection', (socket) => {
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
  });

  socket.on('add-expense', (data) => {
    // Process expense logic
    io.to(data.roomId).emit('expense-added', data);
  });
});`,
  },
  {
    slug: "quickweb-ai",
    title: "QuickWeb.ai",
    description:
      "An AI powered website generator using Qwen and Gemini 2.5 to transform simple prompts into fully structured, production-ready websites within seconds.",
    longDescription: {
      story:
        "Prototyping takes too long. QuickWeb.ai was created to go from idea to deployed website in seconds.",
      howItWorks:
        "An LLM chain analyzes the user prompt, generates the HTML/CSS/JS structure, and a secondary agent deploys it to a sandbox environment.",
      vision: "Democratizing web development for everyone.",
    },
    conclusion:
      "QuickWeb.ai lowers the barrier to entry for web creation, proving that natural language is the ultimate programming interface. It showcases the capability of modern LLMs to understand design intent and produce functional, deployed code in near real-time, accelerating the prototyping loop significantly.",
    images: [
      "/assets/projects/QuickWeb.ai/1.png",
      "/assets/projects/QuickWeb.ai/1.png",
      "/assets/projects/QuickWeb.ai/1.png",
    ],
    videoId: "",
    tags: ["Next.js", "Express", "Node", "TypeScript"],
    github: "https://github.com/Sambhav-3010/QuickWeb.ai",
    demo: "https://quickwebai.vercel.app",
    codeSnippet: `async function generateWebsite(prompt) {
  const llmResponse = await llm.generate(
    "Create a website based on: " + prompt + ". Return JSON with html, css, and js fields."
  );
  
  const parsed = JSON.parse(llmResponse);
  return await deployToVercel(parsed);
}`,
    status: "stable",
  },
  {
    slug: "taskify",
    title: "Taskify",
    description:
      "A full-featured task management system with project grouping, allowing users to organize multiple tasks under different projects for better productivity and workflow management.",
    longDescription: {
      story:
        "Managing tasks across multiple projects can quickly become overwhelming. Taskify was built to bring clarity and structure to task management by allowing users to group related tasks under projects, making it easier to track progress and stay organized.",
      howItWorks:
        "Users can create projects and add multiple tasks within each project. Each task can be marked complete, edited, or deleted. The clean UI built with ShadcnUI components provides an intuitive experience, while the Express backend handles data persistence and API operations.",
      vision:
        "To be a simple yet powerful productivity tool that helps individuals and teams manage their work efficiently without the complexity of enterprise solutions.",
    },
    conclusion:
      "Taskify demonstrates the power of combining modern frontend frameworks with a robust backend. The project showcases clean architecture patterns, reusable UI components with ShadcnUI, and efficient state management for a seamless task management experience.",
    images: [
      "/assets/projects/Taskify/1.png",
      "/assets/projects/Taskify/1.png",
      "/assets/projects/Taskify/1.png",
    ],
    videoId: "",
    tags: ["Next.js", "Express", "TypeScript", "ShadcnUI", "TailwindCSS"],
    github: "https://github.com/Sambhav-3010/Taskify",
    demo: "https://taskify-event.vercel.app",
    codeSnippet: `// Project-based task grouping
const createTask = async (projectId: string, task: Task) => {
  const project = await Project.findById(projectId);
  project.tasks.push(task);
  await project.save();
  return project;
};`,
    status: "update",
    statusMessage:
      "New updates dropping soon! Stay tuned for exciting features and improvements.",
  },
];
