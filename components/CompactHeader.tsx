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

                    <div className="flex gap-5 justify-center md:justify-start">
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
                        <a
                            href="https://leetcode.com/u/user5119TK/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-all hover:scale-110 relative group"
                        >
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                            </svg>
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-card text-card-foreground text-xs px-2 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
                                LeetCode
                            </span>
                        </a>
                    </div>
                </div>

                <div className="shrink-0 order-1 md:order-2">
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-linear-to-r from-primary to-primary/50 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition duration-500"></div>
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
