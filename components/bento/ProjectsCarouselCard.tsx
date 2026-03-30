"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Code2 } from "lucide-react"
import Image from "next/image"
import { projects } from "@/data/projects"
import { ProjectStatusBadge } from "@/components/ProjectStatusBadge"

export function ProjectsCarouselCard() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const project = projects[currentIndex]

  return (
    <article
      onClick={() => router.push("/projects")}
      className="cream-card h-full p-6 sm:p-8 cursor-pointer group flex flex-col"
    >
      <div className="flex items-center justify-between mb-6">
        <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-primary font-semibold">
          <Code2 className="w-4 h-4" />
          My Latest Works
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary underline underline-offset-4">
          Explore more <ArrowRight className="w-4 h-4" />
        </span>
      </div>

      <div className="relative w-full aspect-video rounded-[1.2rem] overflow-hidden border border-border flex-1 min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45 }}
            className="absolute inset-0"
          >
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover object-top"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-linear-to-t from-foreground/90 via-foreground/28 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-2xl font-extrabold">{project.title}</h3>
            {project.status && <ProjectStatusBadge status={project.status} size="sm" showLabel={false} />}
          </div>
          <p className="text-sm text-white/85 line-clamp-2 max-w-xl">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={`${project.slug}-${tag}`}
                className="px-2 py-1 rounded-full text-[11px] font-semibold bg-white/16 border border-white/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-auto pt-5">
        {projects.map((item, index) => (
          <button
            key={item.slug}
            onClick={(event) => {
              event.stopPropagation()
              setCurrentIndex(index)
            }}
            className={`h-2.5 rounded-full transition-all ${index === currentIndex ? "w-8 bg-primary" : "w-2.5 bg-primary/30"}`}
            aria-label={`Show ${item.title}`}
          />
        ))}
      </div>
    </article>
  )
}
