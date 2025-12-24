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
    company: "Somaiya Machine Learning Research Association (SMLRA)",
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
        skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Full StackDevelopment"],
      },
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-6 pb-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-balance">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative border-l-3 border-border pl-6 pb-12"
            >
              <div className="absolute left-0 top-3 -translate-x-[9px] w-4 h-4 rounded-full bg-primary" />

              <div className="space-y-6">
                <div>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl font-bold text-primary hover:underline inline-flex items-center gap-2"
                  >
                    {exp.company}
                  </a>
                  <p className="text-muted-foreground text-lg">
                    {exp.location}
                  </p>
                </div>

                <div className="space-y-8">
                  {exp.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="space-y-3">
                      <p className="text-sm text-muted-foreground">
                        {role.period}
                      </p>
                      <h4 className="text-2xl font-semibold">
                        {role.title}
                      </h4>

                      <ol className="list-disc list-inside space-y-2 text-muted-foreground text-lg">
                        {role.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ol>

                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
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