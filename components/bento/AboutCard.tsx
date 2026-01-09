"use client"

import Link from "next/link"
import { User, Code2, ArrowRight, GraduationCap, Terminal } from "lucide-react"
import { profile } from "@/data/about"

export function AboutCard() {
    return (
        <Link href="/about" className="block group h-full">
            <div className="h-full min-h-[280px] p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col">
                <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-base font-semibold text-muted-foreground flex items-center gap-2">
                        <User className="w-5 h-5 text-primary" />About Me</span>
                    <span className="flex items-center gap-1 text-sm text-primary group-hover:text-primary/80 transition-colors font-medium">
                        Read More <ArrowRight className="w-4 h-4" />
                    </span>
                </div>

                <div className="space-y-4 flex-1 mt-5">
                    <div className="flex items-center gap-3">
                        <Code2 className="w-5 h-5 text-muted-foreground shrink-0" />
                        <p className="text-base text-muted-foreground leading-relaxed">
                            {profile.bioPoints[1]}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <Terminal className="w-5 h-5 text-muted-foreground shrink-0" />
                        <p className="text-base text-muted-foreground leading-relaxed">
                            {profile.bioPoints[0]}
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <GraduationCap className="w-5 h-5 text-muted-foreground shrink-0" />
                        <div>
                            <p className="text-base text-foreground font-medium">{profile.education.college}</p>
                            <p className="text-sm text-muted-foreground">{profile.education.degree}</p>
                            <p className="text-sm text-muted-foreground">{profile.education.grade}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
