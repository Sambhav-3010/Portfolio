"use client";

import { useState, useEffect } from "react";

import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  RocketIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectStatusBadge } from "@/components/ProjectStatusBadge";
import { ProjectStatus } from "@/data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Project } from "@/data/projects";

export function ProjectContent({ project }: { project: Project }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="min-h-screen pt-10 pb-10 px-4 md:px-6">
      <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">
        <div className="space-y-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>

          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground">
              {project.title}
            </h1>
            {(project.status === "update" && (
              <div className="flex items-center flex-row gap-3 bg-primary/10 border-primary/40 p-4 md:p-5 rounded-xl">
                <ProjectStatusBadge status={project.status as ProjectStatus} />
                <span className="text-sm md:text-base text-muted-foreground flex">
                  <RocketIcon />
                  <span className="ml-1">{project.statusMessage}</span>
                </span>
              </div>
            )) ||
              (project.status === "stable" && (
                <div className="flex items-center flex-row gap-3 bg-green-500/10 border-green-500/40 p-4 md:p-5 rounded-xl">
                  <ProjectStatusBadge
                    status={project.status as ProjectStatus}
                  />
                  <span className="text-sm md:text-base text-muted-foreground flex">
                    <RocketIcon />
                    <span className="ml-1">
                      Project is stable, deployed and working.
                    </span>
                  </span>
                </div>
              )) ||
              ((project.status === "warning" ||
                project.status === "issues") && (
                  <div
                    className={`w-full p-4 md:p-5 rounded-xl border-2 ${project.status === "issues"
                      ? "bg-red-500/10 border-red-500/40 text-red-400"
                      : "bg-amber-500/10 border-amber-500/40 text-amber-400"
                      }`}
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <div
                        className={`
                                        shrink-0 p-2 rounded-lg
                                        ${project.status === "issues"
                            ? "bg-red-500/20"
                            : "bg-amber-500/20"
                          }
                                    `}
                      >
                        {project.status === "issues" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                            <line x1="12" y1="9" x2="12" y2="13" />
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`text-lg md:text-xl font-bold mb-2 ${project.status === "issues"
                            ? "text-red-400"
                            : "text-amber-400"
                            }`}
                        >
                          {project.status === "issues" ? (
                            <span>Deployment Issues</span>
                          ) : (
                            <span>Minor Issues</span>
                          )}
                        </h3>
                        <p
                          className={`text-sm md:text-base leading-relaxed ${project.status === "issues" ? "text-red-300/90" : "text-amber-300/90"}`}
                        >
                          {project.statusMessage ||
                            "This project is currently experiencing some issues."}
                        </p>
                        <p
                          className={`text-xs md:text-sm mt-2 opacity-70 ${project.status === "issues"
                            ? "text-red-300"
                            : "text-amber-300"
                            }`}
                        >
                          Currently being resolved. Please check back later.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 text-xs md:text-base py-0.5 md:py-1 px-2 md:px-3"
                >
                  {tag.replace(/\s+/g, "")}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-video bg-black/90 rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
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
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {project.images.map((image, i) => (
                <CarouselItem
                  key={i}
                  className="relative w-full h-full aspect-video"
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={image}
                      alt={`${project.title} screenshot ${i + 1}`}
                      width={1920}
                      height={1080}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
            <div className="absolute bottom-4 right-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-medium border border-white/10">
              {current} / {count}
            </div>
          </Carousel>
        </div>

        {project.videoId &&
          project.videoId !== "#" &&
          project.videoId !== "" ? (
          <a
            href={`https://www.youtube.com/watch?v=${project.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 md:p-5 rounded-2xl bg-linear-to-r from-primary/10 via-primary/5 to-transparent border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="relative shrink-0 w-20 h-14 md:w-28 md:h-16 rounded-xl overflow-hidden bg-black/50 border border-border/50">
              <Image
                src={`https://img.youtube.com/vi/${project.videoId}/mqdefault.jpg`}
                alt="Demo Video Thumbnail"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-0.5"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                Watch Demo Video
              </h3>
              <p className="text-sm text-muted-foreground truncate">
                See {project.title} in action on YouTube
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1 duration-300"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        ) : (
          <div className="flex items-center gap-4 p-4 md:p-5 rounded-2xl bg-muted/30 border border-border/50">
            <div className="relative shrink-0 w-20 h-14 md:w-28 md:h-16 rounded-xl overflow-hidden bg-muted/50 border border-border/50 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground/50"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base md:text-lg font-semibold text-muted-foreground">
                Demo Video Coming Soon
              </h3>
              <p className="text-sm text-muted-foreground/70 truncate">
                Stay tuned for the {project.title} demo
              </p>
            </div>
          </div>
        )}

        <div className="w-full space-y-12">
          <section className="space-y-3 md:space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              The Story
            </h2>
            <ul className="space-y-3 text-muted-foreground text-base md:text-lg leading-relaxed md:leading-loose">
              {project.longDescription.story.map((point, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-primary shrink-0">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3 md:space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              How It Works
            </h2>
            <ul className="space-y-3 text-muted-foreground text-base md:text-lg leading-relaxed md:leading-loose">
              {project.longDescription.howItWorks.map((point, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-primary shrink-0">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-3 md:space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              The Vision
            </h2>
            <ul className="space-y-3 text-muted-foreground text-base md:text-lg leading-relaxed md:leading-loose">
              {project.longDescription.vision.map((point, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-primary shrink-0">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="space-y-3 md:space-y-4 w-full">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">
            Conclusion
          </h2>
          <ul className="space-y-3 text-muted-foreground text-base md:text-lg leading-relaxed md:leading-loose">
            {project.conclusion.map((point, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-primary shrink-0">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="space-y-8">
          <div>
            <h1 className="text-xl md:text-3xl font-medium mb-4 md:mb-5 text-foreground">
              Project Links
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neumorphic inline-flex items-center gap-1.5 px-4 py-2 text-md font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neumorphic-outline inline-flex items-center gap-1.5 px-4 py-2 text-md font-medium rounded-md border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

