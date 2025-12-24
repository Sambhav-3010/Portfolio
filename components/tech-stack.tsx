import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const techStack = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
  backend: ["Node.js", "Express", "MongoDB", "PrismaDB", "Firebase", "NeonDB", "Java"],
  tools: ["Git", "GitHub", "Team Collaboration", "Data Structures & Algorithms"],
}

export function TechStack() {
  return (
    <section id="tech-stack" className="px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-balance">Tech Stack</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Frontend</CardTitle>
              <CardDescription>Building responsive and interactive user interfaces</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {techStack.frontend.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-secondary/20 text-secondary rounded-md text-sm font-medium hover:bg-secondary/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Backend</CardTitle>
              <CardDescription>Creating scalable and secure server-side solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {techStack.backend.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-secondary/20 text-secondary rounded-md text-sm font-medium hover:bg-secondary/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tools & Others</CardTitle>
              <CardDescription>Development tools and deployment platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {techStack.tools.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-secondary/20 text-secondary rounded-md text-sm font-medium hover:bg-secondary/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
