"use client"

import Link from "next/link"
import { Cpu } from "lucide-react"
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiNodedotjs, SiMongodb, SiFirebase, SiGit, SiGithub, SiExpress, SiPrisma } from "react-icons/si"

const techIcons = [
    { icon: <SiJavascript className="w-7 h-7" />, color: "text-yellow-500" },
    { icon: <SiTypescript className="w-7 h-7" />, color: "text-blue-500" },
    { icon: <SiReact className="w-7 h-7" />, color: "text-cyan-400" },
    { icon: <SiNextdotjs className="w-7 h-7" />, color: "text-foreground" },
    { icon: <SiNodedotjs className="w-7 h-7" />, color: "text-green-500" },
    { icon: <SiExpress className="w-7 h-7" />, color: "text-foreground" },
    { icon: <SiMongodb className="w-7 h-7" />, color: "text-green-600" },
    { icon: <SiTailwindcss className="w-7 h-7" />, color: "text-cyan-500" },
    { icon: <SiFirebase className="w-7 h-7" />, color: "text-amber-500" },
    { icon: <SiPrisma className="w-7 h-7" />, color: "text-foreground" },
    { icon: <SiGit className="w-7 h-7" />, color: "text-orange-500" },
    { icon: <SiGithub className="w-7 h-7" />, color: "text-foreground" },
]

export function TechStackCard() {
    return (
        <Link href="/tech-stack" className="block group h-full">
            <div className="h-full min-h-[280px] p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                    <Cpu className="w-5 h-5 text-primary" />
                    <span className="text-base font-semibold text-muted-foreground">Tech Stack</span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                    Technologies I work with
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                    Tools that get the job done.
                </p>

                <div className="grid grid-cols-4 gap-2 flex-1 content-start">
                    {techIcons.map((tech, index) => (
                        <div
                            key={index}
                            className={`p-2.5 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:border-primary/30 transition-colors ${tech.color}`}
                        >
                            {tech.icon}
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    )
}
