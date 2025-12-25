import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

const experiences = [
  {
    company: "Explified",
    link: "https://explified.com",
    location: "Remote",
    roles: [
      {
        period: "October 2025 - Present",
        title: "SDE Intern",
        description: [
          "Developing applications for online platforms like Slack and Trello using multiple frameworks.",
          "Developed full-stack Shopify applications using Shopify Remix in React with the Polaris component library for embedded admin interfaces.",
        ],
        skills: ["Shopify", "Slack", "Trello", "Shopify Remix", "Polaris", "Atlassian Marketplace"],
      },
    ],
  },
  {
    company: "Somaiya Machine Learning Research Association",
    link: "https://smlra-website.vercel.app",
    location: "Mumbai, India (On-Site)",
    roles: [
      {
        period: "July 2025 - Present",
        title: "Co Lead",
        description: [
          "Organized and managed council events, representing the council through public speaking and coordination.",
          "Head of the Tech Team, leading development and maintenance of the council website.",
        ],
        skills: ["Leadership", "MERN Stack", "Web Development", "Git & GitHub", "Next.js", "Docker", "CI/CD"],
      },
      {
        period: "August 2024 - July 2025",
        title: "Associate Mentor",
        description: [
          "Delivered lectures during symposium events on Machine Learning concepts.",
          "Conducted sessions on Git, GitHub, and Web Development.",
        ],
        skills: ["Mentoring", "Machine Learning", "Public Speaking"],
      },
    ],
  },
  {
    company: "Naareecollections",
    link: "https://naareecollections.com",
    location: "Delhi, India (Remote)",
    roles: [
      {
        period: "September 2025 - December 2025",
        title: "Freelance Web Developer",
        description: [
          "Handled regular maintenance, bug fixes, and performance improvements.",
          "Implemented feature enhancements for the live e-commerce platform.",
        ],
        skills: ["MERN Stack", "Hostinger", "Performance Optimization"],
      },
      {
        period: "June 2025 - August 2025",
        title: "Full-stack Developer Intern",
        description: [
          "Built a complete e-commerce website with an admin dashboard.",
          "Deployed both the website and dashboard on Hostinger.",
        ],
        skills: ["MERN Stack", "E-commerce", "Deployment", "Git & GitHub"],
      },
    ],
  },
  {
    company: "ZecBay",
    link: "https://zecbay.com",
    location: "Mumbai, India (On-Site)",
    roles: [
      {
        period: "October 2024 - January 2025",
        title: "Web Developer Intern",
        description: [
          "Developed the ZecBay portal with a complex online reverse auction system.",
          "Built features for global importers and exporters with scalable architecture.",
        ],
        skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Full Stack Development"],
      },
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            My professional journey and contributions
          </p>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative border-l-2 border-border pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-3 -translate-x-[9px] w-4 h-4 rounded-full bg-primary ring-4 ring-background group-hover:scale-125 transition-transform duration-300" />
              <div className="space-y-6">
                <div>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl md:text-3xl font-bold text-primary hover:text-primary/80 inline-flex items-center gap-2 group/link transition-colors"
                  >
                    {exp.company}
                    <ArrowUpRight className="h-5 w-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                  <p className="text-muted-foreground text-base mt-1">
                    {exp.location}
                  </p>
                </div>
                <div className="space-y-8">
                  {exp.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="space-y-4 bg-transparent">
                      <div className="flex items-center gap-3">
                        <p className="text-sm text-primary/80 font-medium">
                          {role.period}
                        </p>
                        <div className="h-px flex-1 bg-border" />
                      </div>
                      
                      <h4 className="text-xl md:text-2xl font-semibold text-foreground">
                        {role.title}
                      </h4>
                      <ul className="space-y-3">
                        {role.description.map((point, i) => (
                          <li key={i} className="text-muted-foreground text-base leading-relaxed flex gap-3">
                            <span className="text-primary mt-1.5 shrink-0">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {role.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary"
                            className="bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}