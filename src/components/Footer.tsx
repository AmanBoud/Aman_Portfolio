

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} Aman Boud. All rights reserved.
          </div>
          <div className="text-sm text-muted-foreground">
            <a href="#home" className="hover:text-primary transition-colors">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
