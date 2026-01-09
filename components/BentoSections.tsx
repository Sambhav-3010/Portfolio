"use client"

import { AboutCard } from "./bento/AboutCard"
import { ExperienceCard } from "./bento/ExperienceCard"
import { ProjectsCarouselCard } from "./bento/ProjectsCarouselCard"
import { TechStackCard } from "./bento/TechStackCard"
import { ContactCard } from "./bento/ContactCard"

export function BentoSections() {
    return (
        <section id="bento" className="w-full max-w-6xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                    <AboutCard />
                </div>
                <div className="lg:col-span-2">
                    <ExperienceCard />
                </div>
                <div className="lg:col-span-2">
                    <ProjectsCarouselCard />
                </div>
                <div className="flex flex-col gap-5">
                    <ContactCard />
                    <TechStackCard />
                </div>
            </div>
        </section>
    )
}
