import Link from "next/link"

export function Footer() {
  return (
    <footer className="px-4 sm:px-6 pb-10 sm:pb-14">
      <div className="max-w-6xl mx-auto cream-card px-6 sm:px-8 py-7 sm:py-9">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:items-center">
          <div>
            <p className="script-mark text-4xl leading-none text-foreground/90">Sambhav</p>
            <p className="text-sm text-muted-foreground mt-2">Building products with clarity, speed and care.</p>
          </div>
          <div className="md:text-right">
            <div className="flex flex-wrap gap-2 md:justify-end mb-3">
              <Link href="/about" className="pill-nav px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/75 hover:text-primary">About</Link>
              <Link href="/projects" className="pill-nav px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/75 hover:text-primary">Works</Link>
              <Link href="/experience" className="pill-nav px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/75 hover:text-primary">Experience</Link>
            </div>
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Sambhav Mani Tripathi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
