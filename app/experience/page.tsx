import { ArrowLeft, Briefcase, Calendar, MapPin, Download, Users } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/data/experience"
import Image from "next/image"

export default function ExperiencePage() {
    const workExperiences = experiences.filter(exp => exp.type === "experience")
    const leadershipRoles = experiences.filter(exp => exp.type === "leadership")

    const renderExperienceCard = (exp: typeof experiences[0], index: number) => (
        <div
            key={index}
            className="p-4 md:p-6 lg:p-8 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
        >
            <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 overflow-hidden">
                    <Image className="w-full h-full object-cover" src={exp.image} alt={exp.company} width={40} height={40} />
                </div>
                <div className="flex-1">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1 md:mb-2">
                        {exp.company}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4" />
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

                        <h4 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                            {role.title}
                        </h4>

                        <ul className="space-y-2 md:space-y-3 mb-3 md:mb-4">
                            {role.description.map((point, i) => (
                                <li key={i} className="text-muted-foreground text-sm md:text-base leading-relaxed flex gap-2 md:gap-3">
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
    )

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
                                Experience & Leadership
                            </h1>
                        </div>
                        <p className="text-muted-foreground text-lg">
                            My professional journey and community contributions
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

                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-6">
                        <Briefcase className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-bold text-foreground">Work Experience</h2>
                    </div>
                    <div className="grid gap-6">
                        {workExperiences.map((exp, index) => renderExperienceCard(exp, index))}
                    </div>
                </div>

                <div className="mt-20">
                    <div className="flex items-center gap-2 mb-6">
                        <Users className="w-6 h-6 text-primary" />
                        <h2 className="text-2xl font-bold text-foreground">Leadership</h2>
                    </div>
                    <div className="grid gap-6">
                        {leadershipRoles.map((exp, index) => renderExperienceCard(exp, index))}
                    </div>
                </div>
            </div>
        </div>
    )
}

