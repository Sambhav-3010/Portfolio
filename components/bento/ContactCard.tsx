"use client"

import { MessageCircle, Mail, Phone } from "lucide-react"
import { profile } from "@/data/about"

export function ContactCard() {
  return (
    <article className="cream-card p-6">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircle className="w-4 h-4 text-primary" />
        <p className="text-sm uppercase tracking-[0.18em] text-primary font-semibold">Start by saying hi</p>
      </div>

      <h3 className="text-3xl font-extrabold leading-tight mb-2">Let&apos;s make something amazing together.</h3>
      <p className="text-muted-foreground leading-relaxed mb-5">
        Open to ideas, collaborations, and meaningful products.
      </p>

      <div className="flex flex-col gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="button-solid inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm"
        >
          <Mail className="w-4 h-4" />
          Email Me
        </a>
        <a
          href={`tel:${profile.phone}`}
          className="button-outline inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold"
        >
          <Phone className="w-4 h-4" />
          Call Me
        </a>
      </div>
    </article>
  )
}
