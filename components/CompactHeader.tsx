"use client"

import { Github, Linkedin, Mail, Phone, Eye, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { profile } from "@/data/about"

const navItems = [
  { href: "/about", label: "Services" },
  { href: "/projects", label: "Works" },
  { href: "/tech-stack", label: "Notes" },
  { href: "/experience", label: "Experience" },
]

export function CompactHeader() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-14 sm:pb-20">
      <header className="cream-card px-4 sm:px-8 py-4 sm:py-5 mb-8 sm:mb-12">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
          <div className="script-mark text-4xl text-foreground/90 leading-none">Sambhav</div>
          <nav className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 lg:mx-auto">
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
          <a
            href={`tel:${profile.phone}`}
            className="ml-0 lg:ml-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-foreground"
          >
            <span>{profile.phone}</span>
            <span className="w-9 h-9 rounded-full bg-accent text-primary flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </span>
          </a>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-7 sm:gap-10">
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.22em] text-primary font-semibold">Portfolio</p>
            <h1 className="section-title">Hey There, I&apos;m Sambhav</h1>
            <p className="max-w-md text-muted-foreground text-base sm:text-lg leading-relaxed">
              {profile.bio}
            </p>
          </div>

          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-block text-secondary font-bold text-lg underline underline-offset-4"
            >
              {profile.email}
            </a>
            <div className="flex items-end gap-2">
              <span className="text-5xl font-extrabold text-foreground">10</span>
              <span className="uppercase text-xs tracking-widest text-muted-foreground pb-2">
                years experience
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="relative mx-auto w-[250px] h-[330px] sm:w-[320px] sm:h-[430px]">
            <div className="absolute inset-x-0 top-8 sm:top-10 mx-auto w-[240px] h-[200px] sm:w-[320px] sm:h-[260px] bg-primary/90 [clip-path:polygon(0_43%,14%_18%,30%_34%,43%_8%,56%_29%,72%_6%,84%_32%,100%_16%,88%_53%,100%_81%,82%_70%,71%_100%,53%_78%,40%_100%,25%_78%,10%_100%,0_74%,7%_54%)]" />
            <Image
              src={profile.avatarUrl}
              alt={profile.name}
              fill
              priority
              className="object-cover object-top rounded-[2rem] border-[10px] border-[#f6f2ea] shadow-2xl"
            />
          </div>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <p className="text-lg leading-relaxed max-w-xs">
            I design beautifully simple things, and I love what I do.
          </p>

          <div className="cream-card p-5 max-w-xs">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">Status</p>
            <p className="font-bold text-lg">{profile.availability}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {profile.socials.github && (
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="button-outline p-2.5">
                <Github className="w-4 h-4" />
              </a>
            )}
            {profile.socials.linkedin && (
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="button-outline p-2.5">
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            <a href={`mailto:${profile.email}`} className="button-outline p-2.5">
              <Mail className="w-4 h-4" />
            </a>
            <a href={profile.resumeViewUrl} target="_blank" rel="noopener noreferrer" className="button-outline p-2.5">
              <Eye className="w-4 h-4" />
            </a>
            <a href={profile.resumeUrl} download="resume.pdf" className="button-outline p-2.5">
              <FileText className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
