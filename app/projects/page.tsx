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
    <main className="min-h-screen px-4 sm:px-6 py-6 sm:py-10">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="button-outline inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold mb-6 sm:mb-8">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        <section className="cream-card p-5 sm:p-8 mb-6 sm:mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Portfolio Archive</p>
          <h1 className="section-title text-[clamp(2.1rem,4vw,3.3rem)]! inline-flex items-center gap-3">
            <Code2 className="w-7 h-7 sm:w-9 sm:h-9 text-primary" />
            Selected Works
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg mt-3 max-w-2xl">A sharper look at products I built across web apps, tooling, and experiments.</p>
        </section>

        <div className="space-y-5 sm:space-y-6">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              onClick={() => router.push(`/projects/${project.slug}`)}
              className="cream-card p-4 sm:p-5 cursor-pointer group"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-5 items-center`}>
                <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative h-52 sm:h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden border border-border">
                    <Image src={project.images[0]} alt={project.title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-linear-to-t from-foreground/55 via-transparent to-transparent" />
                    {project.status && (
                      <div className="absolute left-4 top-4 z-10">
                        <ProjectStatusBadge status={project.status} statusMessage={project.statusMessage} size="sm" />
                      </div>
                    )}
                  </div>
                </div>

                <div className={`lg:col-span-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-2 sm:mb-3 group-hover:text-primary transition-colors">{project.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                    {project.tags.slice(0, 6).map((tag) => (
                      <span key={`${project.slug}-${tag}`} className="pill-nav px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold text-foreground/80">{tag}</span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="button-solid inline-flex items-center gap-2 px-4 py-2 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="button-outline inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold"
                      >
                        <Github className="w-4 h-4" /> Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
