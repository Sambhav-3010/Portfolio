"use client"

import Link from "next/link"
import { User, Code2, Sparkles } from "lucide-react"
import { profile } from "@/data/about"

export function AboutCard() {
    return (
        <Link href="/about" className="block group h-full">
            <div className="h-full min-h-[280px] p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col">
                <div className="flex items-center gap-2 mb-5">
                    <User className="w-5 h-5 text-primary" />
                    <span className="text-base font-semibold text-muted-foreground">About Me</span>
                </div>

                <div className="space-y-4 flex-1">
                    <div className="flex items-start gap-3">
                        <Code2 className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                        <p className="text-base text-muted-foreground leading-relaxed">
                            {profile.bioPoints[1]}
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="text-xl mt-0.5 shrink-0">🔥</span>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            {profile.bioPoints[0]}
                        </p>
                    </div>

                    <div className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <p className="text-base text-green-500 leading-relaxed font-medium">
                            {profile.tagline}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
