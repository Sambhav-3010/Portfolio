"use client"

import { AboutCard } from "./bento/AboutCard"
import { ExperienceCard } from "./bento/ExperienceCard"
import { ProjectsCarouselCard } from "./bento/ProjectsCarouselCard"
import { TechStackCard } from "./bento/TechStackCard"
import { ContactCard } from "./bento/ContactCard"

export function BentoSections() {
  return (
    <section id="bento" className="w-full max-w-6xl mx-auto px-4 sm:px-6 pb-10 sm:pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6" style={{ gridAutoRows: "1fr" }}>
        <div className="md:col-span-1 lg:col-span-4">
          <AboutCard />
        </div>
        <div className="md:col-span-1 lg:col-span-8">
          <ExperienceCard />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 mt-5 sm:mt-6">
        <div className="lg:col-span-8">
          <ProjectsCarouselCard />
        </div>
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 sm:gap-6">
          <div className="h-full">
            <ContactCard />
          </div>
          <div className="h-full">
            <TechStackCard />
          </div>
        </div>
      </div>
    </section>
  )
}
