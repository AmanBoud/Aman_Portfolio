import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="font-sans text-base font-bold tracking-tight">AB</span>
            <span className="mono hidden sm:inline">/ Aman Boud</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="mono hover:text-foreground transition-colors duration-300 relative group"
              >
                <span className="text-muted-foreground/60 mr-1.5">{String(i + 1).padStart(2, '0')}.</span>
                {link.label}
              </a>
            ))}
          </div>

          <Button variant="outline" size="sm" className="hidden md:flex" asChild>
            <a href="#contact">Let's Talk</a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border animate-slide-up">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-4">
                <Button variant="glow" className="w-full" asChild>
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    Let's Talk
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
