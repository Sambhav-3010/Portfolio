"use client"

import Link from "next/link"
import { ArrowRight, Cpu } from "lucide-react"
import {
  SiAmazonwebservices,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

const techIcons = [
  { icon: <SiJavascript className="h-6 w-6" />, name: "JavaScript" },
  { icon: <SiTypescript className="h-6 w-6" />, name: "TypeScript" },
  { icon: <SiReact className="h-6 w-6" />, name: "React" },
  { icon: <SiNextdotjs className="h-6 w-6" />, name: "Next.js" },
  { icon: <SiNodedotjs className="h-6 w-6" />, name: "Node.js" },
  { icon: <SiExpress className="h-6 w-6" />, name: "Express" },
  { icon: <SiMongodb className="h-6 w-6" />, name: "MongoDB" },
  { icon: <SiTailwindcss className="h-6 w-6" />, name: "Tailwind" },
  { icon: <SiFirebase className="h-6 w-6" />, name: "Firebase" },
  { icon: <SiPrisma className="h-6 w-6" />, name: "Prisma" },
  { icon: <SiAmazonwebservices className="h-6 w-6" />, name: "AWS" },
  { icon: <SiGithub className="h-6 w-6" />, name: "GitHub" },
]

export function TechStackCard() {
  return (
    <Link href="/tech-stack" className="group block h-full">
      <article className="cream-card h-full p-6">
        <div className="flex items-center justify-between mb-3">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary font-semibold">
            <Cpu className="h-3.5 w-3.5" />
            Tech Stack
          </p>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground/70 group-hover:text-primary">
            See all <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {techIcons.map((tech) => (
            <div
              key={tech.name}
              className="aspect-square rounded-xl border border-border bg-accent/35 text-primary flex items-center justify-center hover:-translate-y-0.5 transition-transform"
              title={tech.name}
            >
              {tech.icon}
            </div>
          ))}
        </div>
      </article>
    </Link>
  )
}
