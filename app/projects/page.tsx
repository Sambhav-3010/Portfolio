"use client"

import { ArrowLeft, ExternalLink, Github, Code2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { projects } from "@/data/projects"
import { ProjectStatusBadge } from "@/components/ProjectStatusBadge"

export default function ProjectsPage() {
    const router = useRouter()

    return (
        <div className="min-h-screen pt-10 pb-10 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </Link>

                <div className="mb-12">
                    <div className="flex items-center gap-2 md:gap-3 mb-4">
                        <Code2 className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                            All Projects
                        </h1>
                    </div>
                    <p className="text-muted-foreground text-lg">
                        A collection of my work and side projects
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => router.push(`/projects/${project.slug}`)}
                            className="group rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
                        >
                            <div className="relative w-full h-48 overflow-hidden">
                                <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent" />

                                {(project.status === 'warning' || project.status === 'issues' || project.status === 'stable' || project.status === 'update') && (
                                    <div className="absolute top-4 left-4 z-10">
                                        <ProjectStatusBadge
                                            status={project.status}
                                            statusMessage={project.statusMessage}
                                            size="sm"
                                        />
                                    </div>
                                )}
                                
                                <div className="absolute top-4 right-4 flex gap-2">
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="p-2.5 rounded-xl bg-card/80 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground transition-all border border-border/50"
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
                                            className="p-2.5 rounded-xl bg-card/80 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground transition-all border border-border/50"
                                            title="View Code"
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 4).map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {project.tags.length > 4 && (
                                        <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-muted text-muted-foreground">
                                            +{project.tags.length - 4}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
