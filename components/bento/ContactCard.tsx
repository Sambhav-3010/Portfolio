"use client"

import { MessageCircle, Mail } from "lucide-react"
import { profile } from "@/data/about"

export function ContactCard() {
  return (
    <article className="cream-card h-full p-6">
      <div className="flex items-center gap-2 mb-3">
        <MessageCircle className="h-3.5 w-3.5 text-primary" />
        <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">Start by saying hi</p>
      </div>

      <h3 className="text-[2rem] font-extrabold leading-tight mb-2">Let&apos;s build something great.</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">Open to collaborations and product ideas.</p>

      <div className="flex flex-col gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="button-solid inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm"
        >
          <Mail className="h-3.5 w-3.5" />
          Email Me
        </a>

      </div>
    </article>
  )
}
