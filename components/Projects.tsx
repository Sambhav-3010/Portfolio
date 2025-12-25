"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "GhumoFiro",
    description:
      "A travel itinerary web app featuring both manual and AI-powered trip planning, integrating SerpAI to fetch real flights, attractions, and activities for personalized travel recommendations.",
    images: ["/assets/projects/GhumoFiro/1.png"],
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["Next.js", "Express", "Node", "MongoDB", "Firebase"],
    github: "https://github.com/Sambhav-3010/GhumoFiro",
    demo: "https://ghumofiro.vercel.app",
  },
  {
    title: "PropChain",
    description:
      "A decentralized land registry platform using smart contracts for secure property transactions. Integrated Web3 with Next for blockchain-based ownership verification and transfers.",
    images: ["/assets/projects/PropChain/1.png"],
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["Next.js", "Express", "MongoDB", "Firebase", "Ethereum", "Solidity"],
    github: "https://github.com/Sambhav-3010/PropChain",
    demo: "https://nfc-prop-chain.vercel.app",
  },
  {
    title: "SettleMate",
    description:
      "Expense splitting application with a visual analytics dashboard and QR-based UPI payments, enabling users to track expenses, analyze spending patterns, and settle dues instantly via scannable payment codes.",
    images: ["/assets/projects/SettleMate/1.png"],
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["Next.js", "Express", "Socket.io", "PrismaDB", "NeonDB"],
    github: "https://github.com/Sambhav-3010/SettleMate",
    demo: "https://settle-mates.vercel.app",
  },
  {
    title: "QuickWeb.ai",
    description: "An AI powered website generator using Qwen and Gemini 2.5 to transform simple prompts into fully structured, production-ready websites within seconds.",
    images: ["/assets/projects/QuickWeb.ai/1.png"],
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["Next.js", "Express", "Node", "TypeScript"],
    github: "https://github.com/Sambhav-3010/QuickWeb.ai",
    demo: "https://quickwebai.vercel.app",
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Selected Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            A collection of my recent work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-video bg-muted border-b border-border">
                {project.images.map((image) => (
                  <Image
                    key={image}
                    src={image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    fill={true}
                  />
                ))}
                
                <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader className="space-y-3">
                <CardTitle className="text-2xl text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="leading-relaxed text-muted-foreground text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline"
                      className="bg-primary/10 border-primary/30 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="bg-transparent border-border text-foreground hover:bg-accent hover:text-accent-foreground hover:border-primary/50 transition-all"
                  >
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

                  <Button 
                    size="sm" 
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all"
                  >
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
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      asChild 
                      className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    >
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <Play className="h-4 w-4" />
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