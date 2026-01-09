import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/data/experience"

export default function ExperiencePage() {
    return (
        <div className="min-h-screen pt-24 pb-16 px-6">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </Link>

                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Experience
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        My professional journey and contributions
                    </p>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="group relative border-l-2 border-border pl-8 pb-12 last:pb-0"
                        >
                            <div className="absolute left-0 top-3 -translate-x-[9px] w-4 h-4 rounded-full bg-primary ring-4 ring-background group-hover:scale-125 transition-transform duration-300" />
                            <div className="space-y-6">
                                <div>
                                    <p className="text-2xl md:text-3xl font-bold text-primary hover:text-primary/80 inline-flex items-center gap-2 group/link transition-colors">
                                        {exp.company}
                                    </p>
                                    <p className="text-muted-foreground text-base mt-1">
                                        {exp.location}
                                    </p>
                                </div>
                                <div className="space-y-8">
                                    {exp.roles.map((role, roleIndex) => (
                                        <div key={roleIndex} className="space-y-4 bg-transparent">
                                            <div className="flex items-center gap-3">
                                                <p className="text-sm text-primary/80 font-medium">
                                                    {role.period}
                                                </p>
                                                <div className="h-px flex-1 bg-border" />
                                            </div>

                                            <h4 className="text-xl md:text-2xl font-semibold text-foreground">
                                                {role.title}
                                            </h4>
                                            <ul className="space-y-3">
                                                {role.description.map((point, i) => (
                                                    <li key={i} className="text-muted-foreground text-base leading-relaxed flex gap-3">
                                                        <span className="text-primary mt-1.5 shrink-0">•</span>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {role.skills.map((skill) => (
                                                    <Badge
                                                        key={skill}
                                                        variant="secondary"
                                                        className="bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
