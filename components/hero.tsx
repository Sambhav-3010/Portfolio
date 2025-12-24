import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, FileText } from "lucide-react"
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:gap-20 lg:gap-32 gap-8 items-center justify-center md:flex-row-reverse px-6 py-20">
      <div className="shrink-0 mb-8">
        <Image
          src="sambhav.jpg"
          alt="Sambhav Mani Tripathi"
          width={320}
          height={320}
          priority
          className="rounded-full w-80 h-80 object-cover shadow-lg border-6 border-primary transition-colors duration-500"
        />
      </div>
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Sambhav Mani Tripathi</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">Full Stack Developer</p>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I build accessible, pixel-perfect digital experiences for the web. Passionate about crafting thoughtful
            solutions that blend design and engineering.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="default" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>


          <div className="flex gap-4 pt-8">
            <a
              href="https://github.com/Sambhav-3010"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sambhav-mani-tripathi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="tel:+917007231054"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-6 w-6" />
              <span className="sr-only">Phone</span>
            </a>
            <a
              href="mailto:sambhavmani.tripathi@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="/resume.pdf"
              download="Sambhav_Mani_Tripathi_Resume.pdf"
              className="text-muted-foreground hover:text-foreground transition-colors group relative"
            >
              <FileText className="h-6 w-6" />
              <span className="sr-only">Resume</span>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border shadow-sm">
                Download Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
