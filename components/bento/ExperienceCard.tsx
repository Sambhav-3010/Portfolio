"use client"

import Link from "next/link"
import { Briefcase, Download } from "lucide-react"
import { experiences } from "@/data/experience"

export function ExperienceCard() {
    const displayExperiences = experiences.slice(0, 2)

    return (
        <Link href="/experience" className="block group h-full">
            <div className="h-full min-h-[280px] p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col">
                <div className="flex items-center gap-2 mb-5">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span className="text-base font-semibold text-muted-foreground">Experience</span>
                </div>

                <div className="space-y-4 flex-1">
                    {displayExperiences.map((exp, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                                <span className="text-primary text-sm font-bold">
                                    {exp.company.charAt(0)}
                                </span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                    <h4 className="text-base font-semibold text-foreground truncate">
                                        {exp.company}
                                    </h4>
                                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                                        {exp.roles[0].period.split(' - ')[0]}
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground mt-0.5">{exp.roles[0].title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <a
                    href="/assets/resume.pdf"
                    download="resume.pdf"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center gap-2 mt-4 py-2.5 px-5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary text-base font-medium transition-colors border border-primary/20"
                >
                    <Download className="w-4 h-4" />
                    Download CV
                </a>
            </div>
        </Link>
    )
}
