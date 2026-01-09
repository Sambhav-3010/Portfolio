export function Footer() {
  return (
    <footer id="contact" className="px-6 pt-16 pb-10">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground opacity-70">
            © {new Date().getFullYear()} Sambhav Mani Tripathi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}