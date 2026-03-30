"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Github, ArrowLeft, RocketIcon, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { ProjectStatusBadge } from "@/components/ProjectStatusBadge"
import { Project, ProjectStatus } from "@/data/projects"

export function ProjectContent({ project }: { project: Project }) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const showVideo = project.videoId && project.videoId !== "#" && project.videoId !== ""

  return (
    <main className="min-h-screen px-4 sm:px-6 py-8 sm:py-10">
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
        <Link href="/projects" className="button-outline inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <section className="cream-card p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">Project Detail</p>
          <h1 className="section-title text-[clamp(1.8rem,4.8vw,4.2rem)]! mb-4">{project.title}</h1>

          {project.status && (
            <StatusPanel status={project.status} message={project.statusMessage} />
          )}

          <div className="flex flex-wrap gap-2 mt-5">
            {project.tags.map((tag) => (
              <span key={`${project.slug}-${tag}`} className="pill-nav px-3 py-1 text-xs font-semibold text-foreground/80">
                {tag.replace(/\s+/g, "")}
              </span>
            ))}
          </div>
        </section>

        <section className="cream-card p-3 sm:p-4">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border bg-foreground">
            <Carousel
              setApi={setApi}
              className="w-full h-full"
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnMouseEnter: true,
                  stopOnInteraction: true,
                }),
              ]}
              opts={{ loop: true }}
            >
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={`${project.slug}-${index}`} className="relative w-full h-full aspect-video">
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={1920}
                      height={1080}
                      className="object-contain w-full h-full"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 sm:left-4" />
              <CarouselNext className="right-2 sm:right-4" />
              <div className="absolute bottom-4 right-4 z-20 rounded-full bg-background/95 px-3 py-1 text-xs font-semibold border border-border">
                {current} / {count}
              </div>
            </Carousel>
          </div>
        </section>

        <section className="cream-card p-6 sm:p-8">
          {showVideo ? (
            <a
              href={`https://www.youtube.com/watch?v=${project.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-accent/45 p-4 sm:p-5 flex items-center gap-4"
            >
              <div className="relative w-24 h-16 sm:w-32 sm:h-20 rounded-xl overflow-hidden border border-border">
                <Image
                  src={`https://img.youtube.com/vi/${project.videoId}/mqdefault.jpg`}
                  alt="Demo Video Thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 grid place-items-center bg-black/30">
                  <span className="w-9 h-9 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                    <Play className="w-4 h-4 ml-0.5" />
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-extrabold">Watch Demo Video</h3>
                <p className="text-muted-foreground text-sm mt-1">See {project.title} in action on YouTube</p>
              </div>
            </a>
          ) : (
            <div className="rounded-2xl border border-border bg-muted/40 p-4 sm:p-5">
              <h3 className="text-xl font-extrabold">Demo Video Coming Soon</h3>
              <p className="text-muted-foreground text-sm mt-1">Stay tuned for the {project.title} demo.</p>
            </div>
          )}
        </section>

        <section className="cream-card p-6 sm:p-8 space-y-9">
          <TextBlock title="Description" content={[project.description]} />
          <TextBlock title="The Story" content={project.longDescription.story} />
          <TextBlock title="How It Works" content={project.longDescription.howItWorks} />
          <TextBlock title="The Vision" content={project.longDescription.vision} />
          <TextBlock title="Conclusion" content={project.conclusion} />
        </section>

        <section className="cream-card p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold mb-4">Project Links</h2>
          <div className="flex flex-wrap gap-3">
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="button-solid inline-flex items-center gap-2 px-5 py-2.5 text-sm">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="button-outline inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold">
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

function TextBlock({ title, content }: { title: string; content: string[] }) {
  return (
    <section>
      <h2 className="text-2xl font-extrabold mb-3">{title}</h2>
      <ul className="space-y-2.5">
        {content.map((point, index) => (
          <li key={`${title}-${index}`} className="flex gap-2.5 text-muted-foreground leading-relaxed">
            <span className="text-secondary font-bold">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function StatusPanel({ status, message }: { status: ProjectStatus; message?: string }) {
  if (status === "stable") {
    return (
      <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-4 sm:p-5 mt-4">
        <div className="flex items-center gap-3">
          <ProjectStatusBadge status={status} />
          <p className="text-sm text-emerald-800 inline-flex items-center gap-1.5">
            <RocketIcon className="w-4 h-4" />
            Project is stable, deployed and working.
          </p>
        </div>
      </div>
    )
  }

  if (status === "update") {
    return (
      <div className="rounded-2xl border border-primary/30 bg-accent/55 p-4 sm:p-5 mt-4">
        <div className="flex items-center gap-3">
          <ProjectStatusBadge status={status} />
          <p className="text-sm text-foreground inline-flex items-center gap-1.5">
            <RocketIcon className="w-4 h-4" />
            {message}
          </p>
        </div>
      </div>
    )
  }

  const issuePalette =
    status === "issues"
      ? "border-red-300 bg-red-50 text-red-700"
      : "border-amber-300 bg-amber-50 text-amber-700"

  return (
    <div className={`rounded-2xl border p-4 sm:p-5 mt-4 ${issuePalette}`}>
      <div className="flex items-start gap-3">
        <ProjectStatusBadge status={status} />
        <div>
          <h3 className="font-bold">{status === "issues" ? "Deployment Issues" : "Minor Issues"}</h3>
          <p className="text-sm mt-1">{message || "This project is currently experiencing some issues."}</p>
          <p className="text-xs mt-2 opacity-80">Currently being resolved. Please check back later.</p>
        </div>
      </div>
    </div>
  )
}
