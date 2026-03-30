"use client"

import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { projects } from "@/data/projects"

export function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-2">Featured</p>
          <h2 className="text-4xl font-extrabold">Selected Projects</h2>
          <p className="text-muted-foreground mt-2">A collection of recent work and side projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((project) => (
            <article key={project.slug} className="cream-card overflow-hidden group">
              <Link href={`/projects/${project.slug}`} className="block relative h-56">
                <Image src={project.images[0]} alt={project.title} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </Link>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  </Link>

                  <div className="flex gap-2">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="button-solid p-2" title="Live Demo">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="button-outline p-2" title="View Code">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={`${project.slug}-${tag}`} className="pill-nav px-3 py-1 text-xs font-semibold text-foreground/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
