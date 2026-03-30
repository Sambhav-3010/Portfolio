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
  { icon: <SiJavascript className="w-5 h-5" />, name: "JavaScript" },
  { icon: <SiTypescript className="w-5 h-5" />, name: "TypeScript" },
  { icon: <SiReact className="w-5 h-5" />, name: "React" },
  { icon: <SiNextdotjs className="w-5 h-5" />, name: "Next.js" },
  { icon: <SiNodedotjs className="w-5 h-5" />, name: "Node.js" },
  { icon: <SiExpress className="w-5 h-5" />, name: "Express" },
  { icon: <SiMongodb className="w-5 h-5" />, name: "MongoDB" },
  { icon: <SiTailwindcss className="w-5 h-5" />, name: "Tailwind" },
  { icon: <SiFirebase className="w-5 h-5" />, name: "Firebase" },
  { icon: <SiPrisma className="w-5 h-5" />, name: "Prisma" },
  { icon: <SiAmazonwebservices className="w-5 h-5" />, name: "AWS" },
  { icon: <SiGithub className="w-5 h-5" />, name: "GitHub" },
]

export function TechStackCard() {
  return (
    <Link href="/tech-stack" className="group block">
      <article className="cream-card p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-primary font-semibold">
            <Cpu className="w-4 h-4" />
            Tech Stack
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground/70 group-hover:text-primary">
            See all <ArrowRight className="w-4 h-4" />
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2.5">
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
