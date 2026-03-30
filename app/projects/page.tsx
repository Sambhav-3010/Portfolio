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
    <main className="min-h-screen px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="button-outline inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Portfolio Archive</p>
          <h1 className="section-title !text-[clamp(2.2rem,4vw,3.4rem)] inline-flex items-center gap-3">
            <Code2 className="w-9 h-9 text-primary" />
            All Projects
          </h1>
          <p className="text-muted-foreground text-lg mt-3">A collection of my work and side projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.slug}
              onClick={() => router.push(`/projects/${project.slug}`)}
              className="cream-card overflow-hidden cursor-pointer group"
            >
              <div className="relative h-52 overflow-hidden">
                <Image src={project.images[0]} alt={project.title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#143246]/65 via-transparent to-transparent" />

                {project.status && (
                  <div className="absolute top-4 left-4 z-10">
                    <ProjectStatusBadge status={project.status} statusMessage={project.statusMessage} size="sm" />
                  </div>
                )}

                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className="button-solid p-2"
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
                      onClick={(event) => event.stopPropagation()}
                      className="button-outline p-2"
                      title="View Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-extrabold mb-2 group-hover:text-primary">{project.title}</h2>
                <p className="text-muted-foreground leading-relaxed line-clamp-2 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={`${project.slug}-${tag}`} className="pill-nav px-3 py-1 text-xs font-semibold text-foreground/80">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="pill-nav px-3 py-1 text-xs font-semibold text-foreground/80">+{project.tags.length - 4}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
