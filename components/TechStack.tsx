import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Server, Wrench } from "lucide-react"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiPrisma, SiFirebase, SiSupabase, SiGit, SiGithub, SiLeetcode, SiCodeforces, SiOracle } from "react-icons/si"
import { HiUserGroup } from "react-icons/hi"
import { MdDataObject } from "react-icons/md"

const techStack = {
  frontend: [
    { name: "React.js", icon: <SiReact className="w-5 h-5" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
    { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" /> }
  ],
  backend: [
    { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
    { name: "Express", icon: <SiExpress className="w-5 h-5" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" /> },
    { name: "PrismaDB", icon: <SiPrisma className="w-5 h-5" /> },
    { name: "Firebase", icon: <SiFirebase className="w-5 h-5" /> },
    { name: "NeonDB", icon: <SiSupabase className="w-5 h-5" /> },
    { name: "Java", icon: <SiOracle className="w-5 h-5" /> }
  ],
  tools: [
    { name: "Git", icon: <SiGit className="w-5 h-5" /> },
    { name: "GitHub", icon: <SiGithub className="w-5 h-5" /> },
    { name: "Team Collaboration", icon: <HiUserGroup className="w-5 h-5" /> },
    { name: "Data Structures & Algorithms", icon: <MdDataObject className="w-5 h-5" /> },
    { name: "Leetcode", icon: <SiLeetcode className="w-5 h-5" /> },
    { name: "CodeForces", icon: <SiCodeforces className="w-5 h-5" /> }
  ],
}

export function TechStack() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3 text-foreground">
          Tech Stack
        </h2>
        <p className="text-muted-foreground">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl text-card-foreground">Frontend</CardTitle>
            </div>
            <CardDescription className="text-muted-foreground">
              Building responsive and interactive user interfaces
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {techStack.frontend.map((tech) => (
                <div
                  key={tech.name}
                  className="px-4 py-2 bg-muted border border-border hover:border-primary/50 rounded-lg text-sm font-medium hover:scale-105 transition-all cursor-default flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <span className="text-primary">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl text-card-foreground">Backend</CardTitle>
            </div>
            <CardDescription className="text-muted-foreground">
              Creating scalable and secure server-side solutions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {techStack.backend.map((tech) => (
                <div
                  key={tech.name}
                  className="px-4 py-2 bg-muted border border-border hover:border-primary/50 rounded-lg text-sm font-medium hover:scale-105 transition-all cursor-default flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <span className="text-primary">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group md:col-span-2 lg:col-span-1">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl text-card-foreground">Tools & Others</CardTitle>
            </div>
            <CardDescription className="text-muted-foreground">
              Development tools and deployment platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {techStack.tools.map((tech) => (
                <div
                  key={tech.name}
                  className="px-4 py-2 bg-muted border border-border hover:border-primary/50 rounded-lg text-sm font-medium hover:scale-105 transition-all cursor-default flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                  <span className="text-primary">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}