"use client"

import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-6xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </Link>

                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        All Projects
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        A collection of my work and side projects
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <Link
                            key={index}
                            href={`/projects/${project.slug}`}
                            className="group bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/40 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                        >
                            <div className="relative w-full h-56 overflow-hidden">
                                <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
                            </div>
                            <div className="p-6">
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <div className="flex gap-2 shrink-0">
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                                                title="Live Demo"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                                                title="View Code"
                                            >
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
