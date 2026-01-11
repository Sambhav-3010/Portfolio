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
  codeSnippetPosition?: 'top' | 'bottom';
}

export const projects: Project[] = [
  {
    slug: "ghumofiro",
    title: "GhumoFiro",
    description:
      "A travel itinerary web app featuring both manual and AI-powered trip planning, integrating SerpAI to fetch real flights, attractions, and activities for personalized travel recommendations.",
    longDescription: {
      story: "The idea stemmed from the frustration of scattered travel planning. Flight details on one site, hotels on another, and itinerary notes in a messy notepad. GhumoFiro solves this by unifying the entire experience into a cohesive, intelligent platform.",
      howItWorks: "GhumoFiro employs a hybrid approach. Users can request a complete itinerary from our Gemini-powered AI agent, which generates a structured JSON plan including flights, hotels, and activities. This plan is then hydrated with real-time data from SerpAPI. Alternatively, users can manually build their trip using the drag-and-drop builder, with the ML engine suggesting destinations based on collaborative filtering of other users' trips.",
      vision: "To become the ultimate travel companion that doesn't just plan trips but adapts to them in real-time, learning from your preferences to offer hyper-personalized experiences."
    },
    images: [
      "/assets/projects/GhumoFiro/1.png",
      "/assets/projects/GhumoFiro/2.png",
      "/assets/projects/GhumoFiro/3.png",
    ],
    videoId: "",
    tags: ["Next.js", "Express", "Python", "MongoDB", "Firebase", "Gemini AI", "SerpAPI"],
    github: "https://github.com/Sambhav-3010/GhumoFiro",
    demo: "https://ghumofiro.vercel.app",
    codeSnippets: [
      {
        title: "ML Recommendation Logic",
        language: "python",
        explanation: "This function implements a collaborative filtering algorithm to suggest travel destinations. It aggregates places visited by a group of similar users, filters out places the target user has already visited, and calculates a score for each potential destination. The score is boosted by the recency of the visits, ensuring that trending or seasonally relevant destinations are prioritized. Finally, it sorts the places by score and returns the top N recommendations.",
        code: `def get_recommendations_from_group(target_user_id, group_user_ids, trips_df, top_n=7, exclude_places=None):
    if exclude_places is None:
        exclude_places = []

    if not group_user_ids:
        print(f"No group users found for recommendations")
        return []

    print(f"Getting recommendations from {len(group_user_ids)} users")

    target_user = get_user_by_id(target_user_id)
    target_visited = set()
    if target_user:
        target_visited = get_all_user_places(target_user)
    
    exclude_places_norm = set(normalize_place(place) for place in exclude_places)
    all_excluded = target_visited.union(exclude_places_norm)

    place_scores = defaultdict(float)
    
    user_place_scores, _ = extract_places_from_users(group_user_ids)
    
    for place, score in user_place_scores.items():
        if place and place not in all_excluded:
            place_scores[place] += score

    if not trips_df.empty:
        group_trips = trips_df[trips_df['user_id'].isin(group_user_ids)].copy()
        
        if not group_trips.empty:
            place_field = None
            possible_place_fields = ['destination', 'place', 'city', 'location', 'to', 'place_name', 'trip_destination']
            
            for field in possible_place_fields:
                if field in group_trips.columns:
                    place_field = field
                    break
            
            if place_field:
                print(f"Found place field '{place_field}' in trips data")
                group_trips["place_norm"] = group_trips[place_field].apply(normalize_place)
                
                date_field = None
                possible_date_fields = ['updatedAt', 'createdAt', 'trip_date', 'date']
                
                for field in possible_date_fields:
                    if field in group_trips.columns:
                        date_field = field
                        break
                
                if date_field:
                    group_trips["trip_date"] = pd.to_datetime(group_trips[date_field], errors='coerce')
                    min_date = group_trips["trip_date"].min()
                    max_date = group_trips["trip_date"].max()
                    
                    if pd.notna(min_date) and pd.notna(max_date):
                        group_trips["recency"] = group_trips["trip_date"].apply(
                            lambda d: recency_weight(d, min_date, max_date)
                        )
                    else:
                        group_trips["recency"] = 0.5
                else:
                    group_trips["recency"] = 0.5

                for _, row in group_trips.iterrows():
                    place = row["place_norm"]
                    if place and place not in all_excluded:
                        place_scores[place] += 1.0 + row.get("recency", 0.5)

    if not place_scores:
        print("No places found from primary methods, trying broader approach...")
        
        all_users_places = defaultdict(int)
        try:
            all_users = get_all_users()
            for user_doc in all_users:
                user_id = str(user_doc['_id']).strip().lower()
                if user_id in group_user_ids:
                    places = get_all_user_places(user_doc)
                    for place in places:
                        if place and place not in all_excluded:
                            all_users_places[place] += 1
        except Exception as e:
            print(f"Error in broader approach: {e}")
        
        for place, count in all_users_places.items():
            place_scores[place] += count

    if place_scores:
        ranked_places = sorted(place_scores.items(), key=lambda x: x[1], reverse=True)
        recommendations = [place for place, score in ranked_places[:top_n] if place]
        print(f"Generated {len(recommendations)} recommendations from data")
        return recommendations
    
    print("No data-driven recommendations found")
    return []`
      },
      {
        title: "AI Itinerary Generation",
        language: "javascript",
        explanation: "This snippet demonstrates the backend logic for generating travel itineraries using Google's Gemini AI. It defines a strict JSON schema (ITINERARY_SCHEMA) that enforces the structure of the AI's output, ensuring consistent data for the frontend. The schema covers detailed aspects like daily activities, flights, hotels, and dining. The controller function initializes the generative model, constructs a prompt with the user's input, and returns the parsed JSON response.",
        code: `const ITINERARY_SCHEMA = {
  type: "OBJECT",
  properties: {
    id: { 
        type: "STRING", 
        description: "A unique ID for the itinerary. Generate a new UUID for each plan." 
    },
    title: { 
        type: "STRING", 
        description: "A catchy and descriptive title for the trip, e.g., 'A Week of Wonders in Kyoto'." 
    },
    destination: { 
        type: "STRING", 
        description: "The primary destination city and country, e.g., 'Kyoto, Japan'." 
    },
    duration: { 
        type: "STRING", 
        description: "The total duration of the trip as a string, e.g., '7 Days'." 
    },
    budget: { 
        type: "STRING", 
        description: "The estimated budget per person, including currency symbol/code, e.g., 'INR2500'." 
    },
    days: {
      type: "ARRAY",
      description: "A day-by-day breakdown of the travel plan.",
      items: {
        type: "OBJECT",
        properties: {
          day: { 
              type: "INTEGER",
              description: "The day number of the itinerary (e.g., 1, 2, 3)."
          },
          title: { 
              type: "STRING",
              description: "A short, thematic title for the day's plan, e.g., 'Ancient Temples and Geishas'."
          },
          activities: {
            type: "ARRAY",
            description: "A list of 3-4 key activities planned for the day.",
            items: { type: "STRING" }
          },
          meals: {
            type: "ARRAY",
            description: "A list of 2-3 meal suggestions for the day, can include restaurant names or types of food.",
            items: { type: "STRING" }
          },
          accommodation: { 
              type: "STRING", 
              description: "A suggestion for the night's accommodation, e.g., 'Ryokan in Gion District'." 
          }
        },
        required: ["day", "title", "activities", "meals"]
      }
    },
    flights: {
      type: "ARRAY",
      description: "A list of suggested flight options for the main travel legs of the trip.",
      items: {
        type: "OBJECT",
        properties: {
          departure: { 
              type: "STRING", 
              description: "Departure city and airport code, e.g., 'San Francisco (SFO)'." 
          },
          arrival: { 
              type: "STRING", 
              description: "Arrival city and airport code, e.g., 'Osaka (KIX)'." 
          },
          price: { 
              type: "STRING", 
              description: "Estimated price of a round-trip or one-way ticket, e.g., 'Rs1200 INR'." 
          }
        },
        required: ["departure", "arrival", "price"]
      }
    },
    places: {
      type: "ARRAY",
      description: "A summary list of 5-7 notable places, landmarks, or attractions to visit during the trip.",
      items: { type: "STRING" }
    },
    activities: {
      type: "ARRAY",
      description: "A summary list of 5-7 general types of activities available on the trip (e.g., 'Temple Hopping', 'Food Tours').",
      items: { type: "STRING" }
    },
    dining: {
      type: "ARRAY",
      description: "A summary list of 5-7 recommended restaurants or unique dining experiences.",
      items: { type: "STRING" }
    }
  },
  required: ["id", "title", "destination", "duration", "budget", "days", "flights", "places", "activities", "dining"]
};

exports.generateItinerary = asyncHandler(async (req, res) => {
  const { prompt: userInput } = req.body;

  if (!userInput) {
    res.status(400);
    throw new Error("User prompt is required.");
  }

  const API_KEY = process.env.GOOGLE_API_KEY;
  if (!API_KEY) {
    console.error("GOOGLE_API_KEY not found in environment.");
    res.status(500);
    throw new Error("Server configuration error.");
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: ITINERARY_SCHEMA,
    },
  });

  const fullPrompt = \`You are an expert travel planner AI. Your task is to create a detailed, day-by-day travel itinerary based on the user's request.
    Analyze the user's prompt to understand their destination, dates/duration, budget, and trip type.
    Then, populate every single field defined in the provided JSON schema to create a complete and logical travel plan.
    Generate a unique UUID for the 'id' field.

    User's Request: "\${userInput}"
    \`;

  const result = await model.generateContent(fullPrompt);
  const responseText = result.response.text();
  const itineraryJson = JSON.parse(responseText);

  res.status(200).json(itineraryJson);
});`
      },
      {
        title: "Frontend State Management",
        language: "typescript",
        explanation: "This snippet shows the complete Reducer for managing the complex state of a travel itinerary on the frontend. It handles various actions such as adding/removing travel options, hotels, activities, and dining. Crucially, it tracks completed planning steps (to update progress bars or UI guides) and automatically recalculates the total trip cost after every state change, providing instant feedback on budget adherence.",
        code: `const itineraryReducer = (state: ItineraryState, action: ItineraryAction): ItineraryState => {
  let newState: ItineraryState

  switch (action.type) {
    case "SET_TRIP_SETUP":
      newState = { ...state, tripSetup: action.payload }
      break

    case "ADD_TRAVEL":
      newState = {
        ...state,
        travelSelections: [...state.travelSelections, { ...action.payload, id: \`${action.payload.id}-${Date.now()}\` }],
      }
      if (!state.completedSteps.includes("travel")) {
        newState.completedSteps = [...state.completedSteps, "travel"]
      }
      break

    case "REMOVE_TRAVEL":
      newState = {
        ...state,
        travelSelections: state.travelSelections.filter((item) => item.id !== action.payload),
      }
      if (newState.travelSelections.length === 0) {
        newState.completedSteps = state.completedSteps.filter((step) => step !== "travel")
      }
      break

    case "ADD_HOTEL":
      newState = {
        ...state,
        hotelSelections: [...state.hotelSelections, { ...action.payload, id: \`${action.payload.id}-${Date.now()}\` }],
      }
      if (!state.completedSteps.includes("hotels")) {
        newState.completedSteps = [...state.completedSteps, "hotels"]
      }
      break

    case "REMOVE_HOTEL":
      newState = {
        ...state,
        hotelSelections: state.hotelSelections.filter((item) => item.id !== action.payload),
      }
      if (newState.hotelSelections.length === 0) {
        newState.completedSteps = state.completedSteps.filter((step) => step !== "hotels")
      }
      break

    case "ADD_ACTIVITY":
      newState = {
        ...state,
        activitySelections: [
          ...state.activitySelections,
          { ...action.payload, id: \`${action.payload.id}-${Date.now()}\` },
        ],
      }
      if (!state.completedSteps.includes("activities")) {
        newState.completedSteps = [...state.completedSteps, "activities"]
      }
      break

    case "REMOVE_ACTIVITY":
      newState = {
        ...state,
        activitySelections: state.activitySelections.filter((item) => item.id !== action.payload),
      }
      if (newState.activitySelections.length === 0) {
        newState.completedSteps = state.completedSteps.filter((step) => step !== "activities")
      }
      break

    case "ADD_DINING":
      newState = {
        ...state,
        diningSelections: [...state.diningSelections, { ...action.payload, id: ${action.payload.id}-${Date.now()} }],
      }
      if (!state.completedSteps.includes("dining")) {
        newState.completedSteps = [...state.completedSteps, "dining"]
      }
      break

    case "REMOVE_DINING":
      newState = {
        ...state,
        diningSelections: state.diningSelections.filter((item) => item.id !== action.payload),
      }
      if (newState.diningSelections.length === 0) {
        newState.completedSteps = state.completedSteps.filter((step) => step !== "dining")
      }
      break

    case "MARK_STEP_COMPLETE":
      newState = {
        ...state,
        completedSteps: state.completedSteps.includes(action.payload)
          ? state.completedSteps
          : [...state.completedSteps, action.payload],
      }
      break

    case "UNMARK_STEP_COMPLETE":
      newState = {
        ...state,
        completedSteps: state.completedSteps.filter((step) => step !== action.payload),
      }
      break

    case "CALCULATE_TOTAL":
      newState = { ...state, totalCost: calculateTotalCost(state) }
      break

    case "RESET_ITINERARY":
      newState = initialState
      break

    case "LOAD_FROM_STORAGE":
      newState = action.payload
      break

    default:
      return state
  }

  newState.totalCost = calculateTotalCost(newState)
  return newState
}`
      }
    ]
  },
  {
    slug: "propchain",
    title: "PropChain",
    description:
      "A decentralized land registry platform using smart contracts for secure property transactions. Integrated Web3 with Next for blockchain-based ownership verification and transfers.",
    longDescription: {
      story: "Property fraud and opaque transactions are major issues in real estate. PropChain was built to bring transparency and trust back into the system using the immutability of blockchain.",
      howItWorks: "Properties are tokenized as NFTs. Smart contracts handle the transfer of ownership, ensuring that funds are only released when the title is successfully transferred.",
      vision: "A world where property ownership is as seamless and secure as sending an email."
    },
    images: [
      "/assets/projects/PropChain/1.png",
      "/assets/projects/PropChain/1.png",
      "/assets/projects/PropChain/1.png",
    ],
    videoId: "",
    tags: ["Next.js", "Express", "MongoDB", "Firebase", "Ethereum", "Solidity"],
    github: "https://github.com/Sambhav-3010/PropChain",
    demo: "https://nfc-prop-chain.vercel.app",
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
      story: "Splitting bills with roomates should not be a math homework. SettleMate makes it instant, visual, and fair.",
      howItWorks: "Groups are created, expenses are added, and the optimal settlement strategy is calculated to minimize the number of transactions required.",
      vision: "Frictionless financial interactions between friends."
    },
    images: [
      "/assets/projects/SettleMate/1.png",
      "/assets/projects/SettleMate/1.png",
      "/assets/projects/SettleMate/1.png",
    ],
    videoId: "",
    tags: ["Next.js", "Express", "Socket.io", "PrismaDB", "NeonDB"],
    github: "https://github.com/Sambhav-3010/SettleMate",
    demo: "https://settle-mates.vercel.app",
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
    description: "An AI powered website generator using Qwen and Gemini 2.5 to transform simple prompts into fully structured, production-ready websites within seconds.",
    longDescription: {
      story: "Prototyping takes too long. QuickWeb.ai was created to go from idea to deployed website in seconds.",
      howItWorks: "An LLM chain analyzes the user prompt, generates the HTML/CSS/JS structure, and a secondary agent deploys it to a sandbox environment.",
      vision: "Democratizing web development for everyone."
    },
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
  },
]
