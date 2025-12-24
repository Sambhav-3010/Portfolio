"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Youtube } from "lucide-react"

const projects = [
  {
    title: "GhumoFiro",
    description:
      "A travel itinerary web app featuring both manual and AI-powered trip planning, integrating SerpAI to fetch real flights, attractions, and activities for personalized travel recommendations.",
    image: "/assets/projects/GhumoFiro/1.jpg",
    images: ["/assets/projects/GhumoFiro/1.jpg", "/assets/projects/GhumoFiro/2.jpg"],
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["Next.js", "Express", "Node", "MongoDB", "Firebase"],
    github: "https://github.com/Sambhav-3010/GhumoFiro",
    demo: "https://ghumofiro.vercel.app",
  },
  {
    title: "PropChain",
    description:
      "A decentralized land registry platform using smart contracts for secure property transactions. Integrated Web3 with Next for blockchain-based ownership verification and transfers.",
    image: "/assets/projects/PropChain/1.jpg",
    images: ["/assets/projects/PropChain/1.jpg", "/assets/projects/PropChain/2.jpg"],
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["Next.js", "Express", "MongoDB", "Firebase", "Ethereum", "Solidity"],
    github: "https://github.com/Sambhav-3010/PropChain",
    demo: "https://nfc-prop-chain.vercel.app",
  },
  {
    title: "SettleMate",
    description:
      "Expense splitting application with a visual analytics dashboard and QR-based UPI payments, enabling users to track expenses, analyze spending patterns, and settle dues instantly via scannable payment codes.",
    image: "/assets/projects/SettleMate/1.jpg",
    images: ["/assets/projects/SettleMate/1.jpg", "/assets/projects/SettleMate/2.jpg"],
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["Next.js", "Express", "Socket.io", "PrismaDB", "NeonDB"],
    github: "https://github.com/Sambhav-3010/SettleMate",
    demo: "https://settle-mates.vercel.app",
  },
  {
    title: "QuickWeb.ai",
    description: "An AI powered website generator using Qwen and Gemini 2.5 to transform simple prompts into fully structured, production-ready websites within seconds.",
    image: "/assets/projects/QuickWeb.ai/1.jpg",
    images: ["/assets/projects/QuickWeb.ai/1.jpg", "/assets/projects/QuickWeb.ai/2.jpg"],
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["Next.js", "Express", "Node", "TypeScript"],
    github: "https://github.com/Sambhav-3010/QuickWeb.ai",
    demo: "https://quickwebai.vercel.app",
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-6 py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-balance">Selected Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
              <div className="relative overflow-hidden aspect-video bg-muted border-b">
                {/* Fallback image logic if needed, but assuming user will provide 1.jpg */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg?height=400&width=600";
                    e.currentTarget.onerror = null;
                  }}
                />
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  {project.video && (
                    <Button variant="ghost" size="sm" asChild className="text-red-600 hover:text-red-700 hover:bg-red-50">
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        Demo Video
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
