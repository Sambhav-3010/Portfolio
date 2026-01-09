"use client"

import { Github, Linkedin, Mail, Phone, Twitter, Instagram } from "lucide-react"
import Image from "next/image"
import { profile } from "@/data/about"

export function ProfileHeader() {
    return (
        <div className="flex flex-col items-center md:items-start gap-4 mb-8">
            {/* Avatar */}
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
                <Image
                    src={profile.avatarUrl}
                    alt={profile.name}
                    width={100}
                    height={100}
                    priority
                    className="relative rounded-full w-24 h-24 object-cover border-2 border-primary/30"
                />
            </div>

            {/* Name and Role */}
            <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                    {profile.name}
                </h1>
                <p className="text-muted-foreground text-sm md:text-base">
                    {profile.role} based in {profile.location}
                </p>
            </div>

            {/* Availability Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-green-500 text-sm font-medium">{profile.availability}</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
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
                {profile.socials.instagram && (
                    <a
                        href={profile.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                    >
                        <Instagram className="h-5 w-5" />
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
            </div>
        </div>
    )
}
