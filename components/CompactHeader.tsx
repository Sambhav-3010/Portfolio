"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, Phone, Eye, Menu, X, Twitter, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { profile } from "@/data/about"

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Works" },
  { href: "/tech-stack", label: "Tech Stack" },
  { href: "/experience", label: "Experience" },
]

export function CompactHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-8 sm:pb-12">
      <header className="cream-card px-4 sm:px-8 py-4 sm:py-5 mb-8 sm:mb-12">
        <div className="flex items-center justify-between lg:justify-start gap-4 lg:gap-8">
          <div className="script-mark text-3xl sm:text-4xl text-foreground/90 leading-none">Sambhav</div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden button-outline p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-3 lg:gap-4 lg:mx-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="pill-nav px-4 py-2 text-xs sm:text-sm tracking-wide uppercase font-semibold text-foreground/80 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a href={`tel:${profile.phone}`} className="hidden lg:inline-flex ml-auto items-center justify-center gap-2 text-sm font-semibold text-foreground">
            <span>{profile.phone}</span>
            <span className="w-9 h-9 rounded-full bg-accent text-primary flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Mobile nav dropdown */}
        {menuOpen && (
          <nav className="lg:hidden flex flex-col gap-2 mt-4 pt-4 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="pill-nav px-4 py-2.5 text-sm tracking-wide uppercase font-semibold text-foreground/80 hover:text-primary text-center"
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${profile.phone}`} className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-foreground mt-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>{profile.phone}</span>
            </a>
          </nav>
        )}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 items-center gap-8 sm:gap-10">
        {/* Text column */}
        <div className="lg:col-span-5 md:col-span-1 space-y-6 sm:space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.22em] text-primary font-semibold">Portfolio</p>
            <h1 className="section-title">Hey There, I&apos;m Sambhav</h1>
            <p className="max-w-md mx-auto md:mx-0 text-muted-foreground text-base sm:text-lg leading-relaxed">
              {profile.bio}
            </p>
          </div>

          <div className="space-y-4">
            <a href={`mailto:${profile.email}`} className="inline-block text-secondary font-bold text-base sm:text-lg underline underline-offset-4">
              {profile.email}
            </a>
          </div>
        </div>

        {/* Photo column — circular egg shape */}
        <div className="lg:col-span-4 md:col-span-1 order-first md:order-0">
          <div className="relative mx-auto w-56 sm:w-72 lg:w-80">
            {/* Outer decorative ring */}
            <div className="absolute -inset-3 sm:-inset-4 rounded-full border-2 border-dashed border-primary/25" />
            {/* Accent glow ring */}
            <div className="absolute -inset-1 sm:-inset-2 rounded-full bg-linear-to-br from-primary/10 via-accent/40 to-secondary/10" />
            {/* Main circular container */}
            <div className="relative aspect-square rounded-full overflow-hidden border-4 border-card shadow-2xl shadow-foreground/15">
              {/* Background brush */}
              <Image
                src="/assets/bg-image-2.png"
                alt=""
                aria-hidden
                fill
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                className="z-0 object-cover object-center opacity-90 scale-[1.3]"
              />
              {/* Personal photo */}
              <Image
                src={profile.avatarUrl}
                alt={profile.name}
                fill
                priority
                className="z-10 object-cover object-top scale-[1.2] -translate-y-[5%]"
              />
            </div>
          </div>
        </div>

        {/* Right info column */}
        <div className="lg:col-span-3 md:col-span-2 space-y-6 text-center md:text-left">
          <p className="text-base sm:text-lg leading-relaxed max-w-xs mx-auto md:mx-0">I design beautifully simple things, and I love what I do.</p>

          <div className="cream-card p-4 sm:p-5 max-w-xs mx-auto md:mx-0">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">Status</p>
            <p className="font-bold text-base sm:text-lg">{profile.availability}</p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {profile.socials.github && (
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="button-outline p-2.5 sm:p-3">
                <Github className="w-5 h-5" />
              </a>
            )}
            {profile.socials.linkedin && (
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="button-outline p-2.5 sm:p-3">
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {profile.socials.twitter && (
              <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer" className="button-outline p-2.5 sm:p-3">
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {profile.socials.instagram && (
              <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" className="button-outline p-2.5 sm:p-3">
                <Instagram className="w-5 h-5" />
              </a>
            )}
            <a href={`mailto:${profile.email}`} className="button-outline p-2.5 sm:p-3">
              <Mail className="w-5 h-5" />
            </a>
            <a href={profile.resumeViewUrl} target="_blank" rel="noopener noreferrer" className="button-outline p-2.5 sm:p-3">
              <Eye className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
