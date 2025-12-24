import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer id="contact" className="px-6 py-20 border-t border-border">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-balance">Let&apos;s Build Something Together</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question or
          just want to say hi, feel free to reach out.
        </p>

        <Button size="lg" asChild>
          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Get in Touch
          </a>
        </Button>

        <div className="pt-12 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Sambhav Mani Tripathi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
