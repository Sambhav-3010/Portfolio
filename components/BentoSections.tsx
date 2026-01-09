"use client"

import Link from "next/link"
import { AboutCard } from "./bento/AboutCard"
import { ExperienceCard } from "./bento/ExperienceCard"
import { ProjectsCard } from "./bento/ProjectsCard"
import { TechStackCard } from "./bento/TechStackCard"
import { ContactCard } from "./bento/ContactCard"

export function BentoSections() {
    return (
        <section id="bento" className="w-full max-w-6xl mx-auto px-6 py-12">
            {/* Bento Grid Layout - Same height cards with larger sizes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* About Me Card - Full height */}
                <div className="lg:row-span-1">
                    <AboutCard />
                </div>

                {/* Experience Card - Spans 2 columns on large screens */}
                <div className="lg:col-span-2">
                    <ExperienceCard />
                </div>

                {/* Projects Card */}
                <div>
                    <ProjectsCard />
                </div>

                {/* Contact Card */}
                <div>
                    <ContactCard />
                </div>

                {/* Tech Stack Card */}
                <div>
                    <TechStackCard />
                </div>
            </div>
        </section>
    )
}
