"use client"

import { useRouter } from "next/navigation"
import { ArrowRight, Briefcase, Download } from "lucide-react"
import { experiences } from "@/data/experience"
import Image from "next/image"

export function ExperienceCard() {
    const router = useRouter()
    const displayExperiences = experiences.slice(0, 2)

    const handleCardClick = () => {
        router.push("/experience")
    }

    return (
        <div
            onClick={handleCardClick}
            className="h-full min-h-[280px] p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col cursor-pointer group"
        >
            <div className="flex items-center justify-between gap-2 mb-5">
                <span className="text-base font-semibold text-muted-foreground flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Experience & Leadership
                </span>
                <span className="flex items-center gap-1 text-sm text-primary group-hover:text-primary/80 transition-colors font-medium">
                    View All <ArrowRight className="w-4 h-4" />
                </span>
            </div>

            <div className="space-y-4 flex-1">
                {displayExperiences.map((exp, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 overflow-hidden">
                            <Image className="w-full h-full object-cover" src={exp.image} alt={exp.company} width={40} height={40} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                                <h4 className="text-base font-semibold text-foreground truncate">
                                    {exp.company}
                                </h4>
                                <span className="text-sm text-muted-foreground whitespace-nowrap">
                                    {exp.roles[0].period}
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
    )
}
