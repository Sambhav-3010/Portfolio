import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer id="contact" className="px-6 pt-16 pb-10 border-t border-border">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question or
            just want to say hi, feel free to reach out.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-6">
          <Button 
            size="lg" 
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all hover:scale-105 text-base px-8 py-6 shadow-md"
          >
            <a href="mailto:sambhavmani.tripathi@gmail.com" className="inline-flex items-center gap-3">
              <Mail className="h-5 w-5" />
              Get in Touch
            </a>
          </Button>
        </div>
        
        <div className="pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground opacity-70">
            © {new Date().getFullYear()} Sambhav Mani Tripathi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}