"use client"

import { MessageCircle, Mail, Phone } from "lucide-react"
import { profile } from "@/data/about"

export function ContactCard() {
    return (
        <div className="h-full p-5 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="text-base font-semibold text-muted-foreground">Contact</span>
            </div>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                Open to ideas, collabs, or just a good conversation.
            </p>

            <div className="flex flex-col gap-2">
                <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-medium transition-all hover:bg-primary/90 hover:scale-[1.02]"
                >
                    <Mail className="w-4 h-4" />
                    Email
                </a>
                <a
                    href={`tel:${profile.phone}`}
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-card border border-border hover:border-primary/50 text-foreground text-sm font-medium transition-all hover:bg-primary/10"
                >
                    <Phone className="w-4 h-4" />
                    Call
                </a>
            </div>
        </div>
    )
}
