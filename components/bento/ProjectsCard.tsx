"use client"

import Link from "next/link"
import { Code2 } from "lucide-react"
import Image from "next/image"
import { projects } from "@/data/projects"

export function ProjectsCard() {
    const featuredProject = projects[0]

    return (
        <Link href={`/projects/${featuredProject.slug}`} className="block group h-full">
            <div className="h-full min-h-[200px] p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col">
                <div className="flex items-center gap-2 mb-5">
                    <Code2 className="w-5 h-5 text-primary" />
                    <span className="text-base font-semibold text-muted-foreground">Projects</span>
                </div>

                <div className="relative flex-1 rounded-xl overflow-hidden bg-card border border-border/50">
                    <Image
                        src={featuredProject.images[0]}
                        alt={featuredProject.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-base font-semibold text-foreground">{featuredProject.title}</p>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{featuredProject.description}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
