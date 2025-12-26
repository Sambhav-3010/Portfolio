import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, FileText } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:gap-20 lg:gap-32 gap-8 items-center justify-center md:flex-row-reverse px-6 py-20">
      <div className="shrink-0 mb-8">
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-primary to-primary/80 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <Image
            src="/sambhav_portfolio.jpg"
            alt="Sambhav Mani Tripathi"
            width={320}
            height={320}
            priority
            className="relative rounded-full w-80 h-80 object-cover shadow-2xl border-4 border-primary/50 transition-all duration-500"
          />
        </div>
      </div>
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Sambhav Mani Tripathi
            </h1>
            <p className="text-xl md:text-2xl text-primary font-semibold">
              Full Stack Developer
            </p>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I build accessible, pixel-perfect digital experiences for the web. Passionate about crafting thoughtful
            solutions that blend design and engineering.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              variant="default"
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all hover:scale-105"
            >
              <a href="#projects">View Projects</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="bg-transparent border-border text-foreground hover:bg-accent hover:text-accent-foreground hover:border-primary/50 transition-all"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          <div className="flex gap-5 pt-8 border-t border-border">
            <a
              href="https://github.com/Sambhav-3010"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sambhav-mani-tripathi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="tel:+917007231054"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <Phone className="h-6 w-6" />
              <span className="sr-only">Phone</span>
            </a>
            <a
              href="mailto:sambhavmani.tripathi@gmail.com"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="/assets/resume.pdf"
              download="resume.pdf"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110 group relative"
            >
              <FileText className="h-6 w-6" />
              <span className="sr-only">Resume</span>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-card text-card-foreground text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-border shadow-lg">
                Download Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}