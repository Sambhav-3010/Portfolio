import { Badge } from "@/components/ui/badge"

const leadershipRoles = [
    {
        company: "Somaiya Machine Learning Research Association",
        location: "Mumbai, India (On-Site)",
        roles: [
            {
                period: "July 2025 - Present",
                title: "Co Lead",
                description: [
                    "Organized and managed council events, representing the council through public speaking and coordination.",
                    "Head of the Tech Team, leading development and maintenance of the council website.",
                ],
                skills: ["Leadership", "MERN Stack", "Web Development", "Git & GitHub", "Next.js", "Docker", "CI/CD"],
            },
            {
                period: "August 2024 - July 2025",
                title: "Associate Mentor",
                description: [
                    "Delivered lectures during symposium events on Machine Learning concepts.",
                    "Conducted sessions on Git, GitHub, and Web Development.",
                ],
                skills: ["Mentoring", "Machine Learning", "Public Speaking"],
            },
        ],
    },
    {
        company: "Crowdsource by Google India",
        location: "Mumbai, Maharashtra, India · Remote",
        roles: [
            {
                period: "Aug 2025 - Oct 2025",
                title: "Crowdsource Learning Community Influencer",
                description: [
                    "Conducted student led Google Crowdsource Seminars, helping students understand the importance of crowdsourcing in inclusive training of AI models.",
                    "Made over 50+ contributions for the Crowdsource programme in the STEM domain, contributing my part in training of Google's upcoming AI models.",
                ],
                skills: ["Public Speaking", "Community Building", "AI/ML Awareness"],
            },
        ],
    },
]

export function Leadership() {
    return (
        <section id="leadership" className="px-6 py-24">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                        Leadership
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        My leadership roles and community contributions
                    </p>
                </div>
                <div className="space-y-12">
                    {leadershipRoles.map((role, index) => (
                        <div
                            key={index}
                            className="group relative border-l-2 border-border pl-8 pb-12 last:pb-0"
                        >
                            <div className="absolute left-0 top-3 -translate-x-[9px] w-4 h-4 rounded-full bg-primary ring-4 ring-background group-hover:scale-125 transition-transform duration-300" />
                            <div className="space-y-6">
                                <div>
                                    <p
                                        className="text-2xl md:text-3xl font-bold text-primary hover:text-primary/80 inline-flex items-center gap-2 group/link transition-colors"
                                    >
                                        {role.company}
                                    </p>
                                    <p className="text-muted-foreground text-base mt-1">
                                        {role.location}
                                    </p>
                                </div>
                                <div className="space-y-8">
                                    {role.roles.map((subRole, roleIndex) => (
                                        <div key={roleIndex} className="space-y-4 bg-transparent">
                                            <div className="flex items-center gap-3">
                                                <p className="text-sm text-primary/80 font-medium">
                                                    {subRole.period}
                                                </p>
                                                <div className="h-px flex-1 bg-border" />
                                            </div>

                                            <h4 className="text-xl md:text-2xl font-semibold text-foreground">
                                                {subRole.title}
                                            </h4>
                                            <ul className="space-y-3">
                                                {subRole.description.map((point, i) => (
                                                    <li key={i} className="text-muted-foreground text-base leading-relaxed flex gap-3">
                                                        <span className="text-primary mt-1.5 shrink-0">•</span>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {subRole.skills.map((skill) => (
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
        </section>
    )
}