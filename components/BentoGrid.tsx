"use client"

import { ProfileHeader } from "./ProfileHeader"
import { AboutCard } from "./bento/AboutCard"
import { ExperienceCard } from "./bento/ExperienceCard"
import { ProjectsCard } from "./bento/ProjectsCard"
import { TechStackCard } from "./bento/TechStackCard"
import { ContactCard } from "./bento/ContactCard"

export function BentoGrid() {
    return (
        <div className="w-full max-w-5xl mx-auto px-4 py-8">
            {/* Profile Header */}
            <ProfileHeader />

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                {/* Row 1: About Me (spans 3) + Experience (spans 3) */}
                <div className="md:col-span-3">
                    <AboutCard />
                </div>
                <div className="md:col-span-3">
                    <ExperienceCard />
                </div>

                {/* Row 2: Projects (spans 2) + Contact (spans 2) + Tech Stack (spans 2) */}
                <div className="md:col-span-2">
                    <ProjectsCard />
                </div>
                <div className="md:col-span-2">
                    <ContactCard />
                </div>
                <div className="md:col-span-2">
                    <TechStackCard />
                </div>
            </div>
        </div>
    )
}
