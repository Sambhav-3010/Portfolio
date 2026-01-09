"use client"

import Link from "next/link"
import { AboutCard } from "./bento/AboutCard"
import { ExperienceCard } from "./bento/ExperienceCard"
import { ProjectsCarouselCard } from "./bento/ProjectsCarouselCard"
import { TechStackCard } from "./bento/TechStackCard"
import { ContactCard } from "./bento/ContactCard"

export function BentoSections() {
    return (
        <section id="bento" className="w-full max-w-6xl mx-auto px-6 py-12">
            {/* Bento Grid Layout - Responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Row 1: About Me */}
                <div className="lg:row-span-1">
                    <AboutCard />
                </div>

                {/* Row 1: Experience - Spans 2 columns on large */}
                <div className="lg:col-span-2">
                    <ExperienceCard />
                </div>

                {/* Row 2: Projects Carousel - Spans 2 columns */}
                <div className="lg:col-span-2 lg:row-span-2">
                    <ProjectsCarouselCard />
                </div>

                {/* Row 2-3: Contact + Tech Stack stacked on right side */}
                <div className="flex flex-col gap-5">
                    <ContactCard />
                    <TechStackCard />
                </div>
            </div>
        </section>
    )
}
