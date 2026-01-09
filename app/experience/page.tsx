import { ArrowLeft, Briefcase, Calendar, MapPin, Download } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/data/experience"

export default function ExperiencePage() {
    return (
        <div className="min-h-screen pt-10 pb-10 px-6">
            <div className="max-w-6xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </Link>

                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                                Experience
                            </h1>
                        </div>
                        <p className="text-muted-foreground text-lg">
                            My professional journey and contributions
                        </p>
                    </div>
                    <a
                        href="/assets/resume.pdf"
                        download="resume.pdf"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-105 w-fit"
                    >
                        <Download className="w-4 h-4" />
                        Download Resume
                    </a>
                </div>

                <div className="grid gap-6">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="p-6 md:p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                        >
                            <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
                                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                                    <span className="text-primary text-2xl font-bold">
                                        {exp.company.charAt(0)}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                                        {exp.company}
                                    </h3>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <MapPin className="w-4 h-4" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8 ml-0 md:ml-[4.5rem]">
                                {exp.roles.map((role, roleIndex) => (
                                    <div
                                        key={roleIndex}
                                        className="relative pl-6 border-l-2 border-primary/30"
                                    >
                                        <div className="absolute left-0 top-0 -translate-x-[7px] w-3 h-3 rounded-full bg-primary" />

                                        <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{role.period}</span>
                                        </div>

                                        <h4 className="text-xl font-semibold text-foreground mb-4">
                                            {role.title}
                                        </h4>

                                        <ul className="space-y-3 mb-4">
                                            {role.description.map((point, i) => (
                                                <li key={i} className="text-muted-foreground text-base leading-relaxed flex gap-3">
                                                    <span className="text-primary shrink-0">•</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
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
                    ))}
                </div>
            </div>
        </div>
    )
}
