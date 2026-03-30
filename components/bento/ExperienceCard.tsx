"use client"

import { useRouter } from "next/navigation"
import { ArrowRight, Briefcase, Calendar, Eye } from "lucide-react"
import { experiences } from "@/data/experience"
import { profile } from "@/data/about"
import Image from "next/image"

export function ExperienceCard() {
  const router = useRouter()
  const displayExperiences = experiences
    .filter((exp) => exp.type === "experience")
    .slice(0, 3)

  return (
    <article
      onClick={() => router.push("/experience")}
      className="cream-card h-full min-h-[320px] p-6 sm:p-8 cursor-pointer group flex flex-col"
    >
      <div className="flex items-center justify-between mb-7">
        <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-primary font-semibold">
          <Briefcase className="w-4 h-4" />
          My Work Experience
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground/70 group-hover:text-primary">
          View all <ArrowRight className="w-4 h-4" />
        </span>
      </div>

      <div className="relative flex-1">
        <div className="absolute left-[18px] top-1 bottom-1 border-s border-dashed border-primary/40 max-h-[200px]" />
        <div className="space-y-5">
          {displayExperiences.map((exp) => (
            <div key={`${exp.company}-${exp.roles[0].period}`} className="relative pl-11">
              <span className="absolute left-0 top-1.5 w-9 h-9 rounded-full bg-accent border border-primary/35 flex items-center justify-center overflow-hidden">
                <Image src={exp.image} alt={exp.company} width={30} height={30} className="object-cover w-full h-full" />
              </span>
              <h4 className="text-xl font-bold leading-tight">{exp.company}</h4>
              <p className="text-sm text-muted-foreground mt-1">{exp.roles[0].title}</p>
              <p className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold mt-1.5">
                <Calendar className="w-3 h-3" />
                {exp.roles[0].period}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-6">
        <a
          href={profile.resumeViewUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()}
          className="button-solid inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm"
        >
          <Eye className="w-4 h-4" />
          View Resume
        </a>
      </div>
    </article>
  )
}
