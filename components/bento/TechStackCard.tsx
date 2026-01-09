"use client"

import Link from "next/link"
import { Cpu } from "lucide-react"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiNodedotjs, SiMongodb, SiFirebase, SiGit, SiGithub, SiExpress, SiPrisma } from "react-icons/si"

const techIcons = [
    { icon: <SiJavascript className="w-6 h-6" />, color: "text-yellow-500", name: "JavaScript" },
    { icon: <SiTypescript className="w-6 h-6" />, color: "text-blue-500", name: "TypeScript" },
    { icon: <SiReact className="w-6 h-6" />, color: "text-cyan-400", name: "React" },
    { icon: <SiNextdotjs className="w-6 h-6" />, color: "text-foreground", name: "Next.js" },
    { icon: <SiNodedotjs className="w-6 h-6" />, color: "text-green-500", name: "Node.js" },
    { icon: <SiExpress className="w-6 h-6" />, color: "text-foreground", name: "Express" },
    { icon: <SiMongodb className="w-6 h-6" />, color: "text-green-600", name: "MongoDB" },
    { icon: <SiTailwindcss className="w-6 h-6" />, color: "text-cyan-500", name: "Tailwind" },
    { icon: <SiFirebase className="w-6 h-6" />, color: "text-amber-500", name: "Firebase" },
    { icon: <SiPrisma className="w-6 h-6" />, color: "text-foreground", name: "Prisma" },
    { icon: <SiGit className="w-6 h-6" />, color: "text-orange-500", name: "Git" },
    { icon: <SiGithub className="w-6 h-6" />, color: "text-foreground", name: "GitHub" },
]

export function TechStackCard() {
    return (
        <Link href="/tech-stack" className="block group h-full">
            <div className="h-full p-5 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                    <Cpu className="w-5 h-5 text-primary" />
                    <span className="text-base font-semibold text-muted-foreground">Tech Stack</span>
                </div>

                <h3 className="text-base font-semibold text-foreground mb-3">
                    Technologies I work with
                </h3>

                <div className="grid grid-cols-4 gap-2 flex-1 content-start">
                    {techIcons.map((tech, index) => (
                        <div
                            key={index}
                            className={`group/icon relative p-2 rounded-xl bg-card border border-border/50 flex items-center justify-center transition-all duration-300 hover:border-primary/50 hover:scale-110 hover:shadow-lg hover:shadow-primary/20 cursor-pointer ${tech.color}`}
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="transition-transform duration-300 group-hover/icon:rotate-12">
                                {tech.icon}
                            </div>
                            {/* Tooltip */}
                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-card text-foreground text-xs rounded-lg opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-border z-10">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    )
}
