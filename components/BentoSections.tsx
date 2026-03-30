"use client"

import { AboutCard } from "./bento/AboutCard"
import { ExperienceCard } from "./bento/ExperienceCard"
import { ProjectsCarouselCard } from "./bento/ProjectsCarouselCard"
import { TechStackCard } from "./bento/TechStackCard"
import { ContactCard } from "./bento/ContactCard"

export function BentoSections() {
  return (
    <section id="bento" className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-10 sm:pb-16">
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 hidden lg:block w-2 bg-secondary/90 rounded-full -translate-x-1/2" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          <div className="lg:col-span-4">
            <AboutCard />
          </div>
          <div className="lg:col-span-8">
            <ExperienceCard />
          </div>
          <div className="lg:col-span-8">
            <ProjectsCarouselCard />
          </div>
          <div className="lg:col-span-4 space-y-5 sm:space-y-6">
            <ContactCard />
            <TechStackCard />
          </div>
        </div>
      </div>
    </section>
  )
}
