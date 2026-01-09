"use client"

import { Github, Linkedin, Mail, Phone, Twitter, FileText } from "lucide-react"
import Image from "next/image"
import { profile } from "@/data/about"
import { Button } from "@/components/ui/button"

export function CompactHeader() {
    return (
        <section className="w-full max-w-6xl mx-auto px-6 pt-20 pb-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                <div className="flex-1 space-y-6 text-center md:text-left order-2 md:order-1">
                    {/* Name & Role */}
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                            {profile.name}
                        </h1>
                        <p className="text-lg md:text-xl text-primary font-semibold">
                            {profile.role}
                        </p>
                    </div>

                    {/* Availability Badge */}
                    <div className="flex items-center justify-center md:justify-start gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full w-fit mx-auto md:mx-0">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-green-500 text-sm font-medium">{profile.availability}</span>
                    </div>

                    {/* Bio */}
                    <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                        {profile.bio}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        <Button
                            variant="default"
                            size="lg"
                            asChild
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all hover:scale-105"
                        >
                            <a href="#bento">View Work</a>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            asChild
                            className="bg-transparent border-border text-foreground hover:bg-accent hover:text-accent-foreground hover:border-primary/50 transition-all"
                        >
                            <a href={`mailto:${profile.email}`}>Get in Touch</a>
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-5 pt-4 border-t border-border justify-center md:justify-start">
                        {profile.socials.github && (
                            <a
                                href={profile.socials.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                        )}
                        {profile.socials.linkedin && (
                            <a
                                href={profile.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        )}
                        {profile.socials.twitter && (
                            <a
                                href={profile.socials.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                            >
                                <Twitter className="h-5 w-5" />
                            </a>
                        )}
                        <a
                            href={`mailto:${profile.email}`}
                            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                        >
                            <Mail className="h-5 w-5" />
                        </a>
                        <a
                            href={`tel:${profile.phone}`}
                            className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                        >
                            <Phone className="h-5 w-5" />
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

                {/* Right Side: Profile Photo */}
                <div className="shrink-0 order-1 md:order-2">
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-primary to-primary/50 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
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
