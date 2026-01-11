"use client"

import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface Project {
    title: string
    slug: string
    description: string
    longDescription: {
        story: string
        howItWorks: string
        vision: string
    }
    tags: string[]
    images: string[]
    github?: string
    demo?: string
    codeSnippet?: string
    codeSnippetPosition?: 'top' | 'bottom'
    videoId?: string
}

export function ProjectContent({ project }: { project: Project }) {
    return (
        <div className="min-h-screen pt-10 md:pt-24 pb-10 md:pb-16 px-4 md:px-6">
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
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                            {project.tags.map((tag) => (
                                <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="bg-primary/10 text-primary border-primary/20 text-xs md:text-base py-0.5 md:py-1 px-2 md:px-3"
                                >
                                    {tag.replace(/\s+/g, '')}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative w-full aspect-video bg-black/90 rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                    <Carousel
                        className="w-full h-full"
                        plugins={[
                            Autoplay({
                                delay: 4000,
                            }),
                        ]}
                        opts={{
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            {project.images.map((image, i) => (
                                <CarouselItem key={i} className="relative w-full h-full aspect-video">
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
                    </Carousel>
                </div>

                {project.codeSnippet && project.codeSnippetPosition === 'top' && (
                    <section className="space-y-3 md:space-y-4 w-full">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">Core Logic</h2>
                        <div className="rounded-xl overflow-hidden border border-border/50 shadow-lg w-full">
                            <SyntaxHighlighter
                                language="javascript"
                                style={vscDarkPlus}
                                customStyle={{
                                    margin: 0,
                                    padding: '1rem',
                                    fontSize: '0.75rem',
                                }}
                                wrapLongLines={true}
                            >
                                {project.codeSnippet}
                            </SyntaxHighlighter>
                        </div>
                    </section>
                )}

                <div className="w-full space-y-12">
                    <section className="space-y-3 md:space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">The Story</h2>
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed md:leading-loose max-w-none">
                            {project.longDescription.story}
                        </p>
                    </section>

                    <section className="space-y-3 md:space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">How It Works</h2>
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed md:leading-loose max-w-none">
                            {project.longDescription.howItWorks}
                        </p>
                    </section>

                    <section className="space-y-3 md:space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">The Vision</h2>
                        <p className="text-muted-foreground text-base md:text-lg leading-relaxed md:leading-loose max-w-none">
                            {project.longDescription.vision}
                        </p>
                    </section>
                </div>

                {project.codeSnippet && (!project.codeSnippetPosition || project.codeSnippetPosition === 'bottom') && (
                    <section className="space-y-3 md:space-y-4 w-full">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">Core Logic</h2>
                        <div className="rounded-xl overflow-hidden border border-border/50 shadow-lg w-full">
                            <SyntaxHighlighter
                                language="javascript"
                                style={vscDarkPlus}
                                customStyle={{
                                    margin: 0,
                                    padding: '1rem',
                                    fontSize: '0.75rem',
                                }}
                                wrapLongLines={true}
                            >
                                {project.codeSnippet}
                            </SyntaxHighlighter>
                        </div>
                    </section>
                )}

                {project.videoId && (
                    <section className="space-y-4 w-full">
                        <h2 className="text-2xl font-bold text-foreground">Demo Video</h2>
                        <a
                            href={`https://www.youtube.com/watch?v=${project.videoId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group relative rounded-xl overflow-hidden aspect-video max-w-3xl border border-border hover:border-primary/50 transition-all shadow-lg"
                        >
                            <Image
                                src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                                alt="Video Thumbnail"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                                </div>
                            </div>
                        </a>
                    </section>
                )}

                <div className="space-y-8">
                    <div>
                        <h1 className="text-xl md:text-3xl font-medium mb-4 md:mb-5 text-foreground">Project Links</h1>
                        <div className="flex flex-wrap gap-2">
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 text-md font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
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
                                    className="inline-flex items-center gap-1.5 px-4 py-2 text-md font-medium rounded-md border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                                >
                                    <Github className="w-5 h-5" />
                                    View Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}