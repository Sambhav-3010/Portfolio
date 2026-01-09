"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"

export function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Selected Projects
          </h2>
          <p className="text-muted-foreground">
            A collection of my recent work and side projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-lg border border-primary/10 hover:border-primary/30 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Image Container - Fixed height for compact look */}
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
                </div>
              </Link>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <Link href={`/projects/${project.slug}`}>
                    <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </Link>

                  {/* Action Buttons */}
                  <div className="flex gap-1 shrink-0">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        title="View Code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-md line-clamp-3 mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[13px] font-medium rounded bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}