"use client"

import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen px-4 sm:px-6 grid place-items-center py-10">
      <div className="cream-card p-8 sm:p-12 text-center max-w-xl">
        <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">404</p>
        <h1 className="section-title !text-[clamp(2.2rem,5vw,4rem)] mb-4">Page Not Found</h1>
        <p className="text-muted-foreground text-lg mb-8">The page you are looking for does not exist or might have moved.</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="button-solid inline-flex items-center justify-center gap-2 px-6 py-3 text-sm">
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <button onClick={() => history.back()} className="button-outline inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </main>
  )
}
