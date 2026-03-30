"use client"

import Link from "next/link"
import { ArrowRight, GraduationCap, User } from "lucide-react"
import { profile } from "@/data/about"

export function AboutCard() {
  return (
    <Link href="/about" className="group block h-full">
      <article className="cream-card h-full min-h-80 p-6 sm:p-8 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-primary font-semibold">
            <User className="w-4 h-4" />
            About
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground/70 group-hover:text-primary">
            Explore <ArrowRight className="w-4 h-4" />
          </span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">What do I help?</h3>
        <p className="text-muted-foreground leading-relaxed mb-7">
          I help with finding practical solutions and building digital products that solve real user and business problems, focusing on scalability, performance, and meaningful user experiences.
        </p>

        <div className="mt-auto p-4 rounded-2xl bg-accent/60 border border-primary/20">
          <p className="items-center gap-2 font-semibold">
            <GraduationCap className="w-4 h-4 text-primary" />
          </p>
          <p className="items-center gap-2 font-semibold">{profile.education.college}</p>
          <p className="text-sm text-muted-foreground mt-1">{profile.education.degree}</p>
        </div>
      </article>
    </Link >
  )
}
