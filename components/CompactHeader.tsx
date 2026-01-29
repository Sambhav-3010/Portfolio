"use client"

import { Github, Linkedin, Mail, Phone, Twitter, FileText, Eye } from "lucide-react"
import Image from "next/image"
import { profile } from "@/data/about"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CompactHeader() {
    return (
        <section className="w-full max-w-6xl mx-auto px-6 pt-10 pb-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                <div className="flex-1 space-y-6 text-center md:text-left order-2 md:order-1">
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                            {profile.name}
                        </h1>
                        <p className="text-lg md:text-xl text-primary font-semibold">
                            {profile.role}
                        </p>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2 rounded-full w-fit mx-auto md:mx-0">
                        <div className="flex items-center justify-center md:justify-start gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full w-fit mx-auto md:mx-0">
                            <span className="w-1 h-1 md:w-2 md:h-2  bg-purple-500 rounded-full animate-pulse"></span>
                            <span className="text-purple-500 text-sm font-medium">{profile.interest}</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full w-fit mx-auto md:mx-0">
                            <span className="w-1 h-1 md:w-2 md:h-2 bg-red-500 rounded-full animate-pulse"></span>
                            <span className="text-red-500 text-sm font-medium">{profile.availability}</span>
                        </div>
                    </div>

                    <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                        {profile.bio}
                    </p>

                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        <Button
                            variant="default"
                            size="lg"
                            asChild
                            className="btn-neumorphic bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all"
                        >
                            <Link href="/projects">View Work</Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            asChild
                            className="btn-neumorphic-outline bg-transparent border-border text-foreground hover:bg-accent hover:text-accent-foreground hover:border-primary/50 transition-all"
                        >
                            <a href={`mailto:${profile.email}`}>Get in Touch</a>
                        </Button>
                    </div>

                    <div className="flex gap-5 pt-4 border-t border-border justify-center md:justify-start">
                        {profile.socials.github && (
                            <a
                                href={profile.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 relative group"
                            >
                                <Github className="h-5 w-5" />
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-card text-card-foreground text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
                                    GitHub
                                </span>
                            </a>
                        )}
                        {profile.socials.linkedin && (
                            <a
                                href={profile.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 relative group"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-card text-card-foreground text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
                                    LinkedIn
                                </span>
                            </a>
                        )}
                        {profile.socials.twitter && (
                            <a
                                href={profile.socials.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 relative group"
                            >
                                <Twitter className="h-5 w-5" />
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-card text-card-foreground text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
                                    Twitter
                                </span>
                            </a>
                        )}
                        <a
                            href={`mailto:${profile.email}`}
                            className="text-muted-foreground hover:text-primary transition-all hover:scale-110 relative group"
                        >
                            <Mail className="h-5 w-5" />
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-card text-card-foreground text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
                                Email
                            </span>
                        </a>
                        <a
                            href={`tel:${profile.phone}`}
                            className="text-muted-foreground hover:text-primary transition-all hover:scale-110 relative group"
                        >
                            <Phone className="h-5 w-5" />
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-card text-card-foreground text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
                                Call
                            </span>
                        </a>
                        <a
                            href={profile.resumeViewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-all hover:scale-110 relative group"
                        >
                            <Eye className="h-5 w-5" />
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-card text-card-foreground text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
                                View Resume
                            </span>
                        </a>
                        <a
                            href={profile.resumeUrl}
                            download="resume.pdf"
                            className="text-muted-foreground hover:text-primary transition-all hover:scale-110 relative group"
                        >
                            <FileText className="h-5 w-5" />
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-card text-card-foreground text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
                                Download Resume
                            </span>
                        </a>
                    </div>
                </div>

                <div className="shrink-0 order-1 md:order-2">
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-linear-to-r from-primary to-primary/50 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
                        <Image
                            src={profile.avatarUrl}
                            alt={profile.name}
                            width={280}
                            height={280}
                            priority
                            className="relative rounded-full w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover border-4 border-primary/30 shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
