import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-[0.35] pointer-events-none" />

      {/* Top-left & bottom-right hairline corners */}
      <div className="absolute top-24 left-6 md:left-12 hidden md:flex items-center gap-3 mono">
        <span className="h-px w-6 bg-muted-foreground/50" />
        Portfolio / 2025
      </div>
      <div className="absolute bottom-8 right-6 md:right-12 hidden md:flex items-center gap-3 mono">
        Ballari · India
        <span className="h-px w-6 bg-muted-foreground/50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="flex flex-col space-y-8 animate-slide-up">
            <div className="eyebrow">Available for Projects</div>

            <div className="space-y-4">
              <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
                Aman <span className="text-muted-foreground">Boud</span>
              </h1>
              <h2 className="font-sans text-lg md:text-xl text-muted-foreground font-light">
                Agentic AI Developer &amp;{' '}
                <span className="text-foreground border-b border-border pb-0.5">
                  Automation Specialist
                </span>
              </h2>
            </div>

            <p className="font-body text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed">
              Building intelligent, multilingual AI agents to solve complex real-world problems.
              Specialized in orchestration, RAG, and production-grade deployments.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-2 max-w-md">
              <div className="flex flex-col gap-1">
                <span className="font-sans text-2xl md:text-3xl font-bold">10+</span>
                <span className="mono">Months Exp.</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-sans text-2xl md:text-3xl font-bold">10+</span>
                <span className="mono">AI Projects</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-sans text-2xl md:text-3xl font-bold text-muted-foreground">
                  RAG
                </span>
                <span className="mono">Specialist</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button variant="glow" size="lg" asChild>
                <a href="#projects" className="group">
                  View My Work
                  <ArrowUpRight
                    size={16}
                    className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-5 pt-2">
              <a
                href="https://www.linkedin.com/in/aman-boud-884964238/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/AmanBoud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:amanboud29@gmail.com"
                aria-label="Email"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right: Portrait frame */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in delay-200">
            <div className="relative w-full max-w-md aspect-[4/5] group">
              {/* Offset frame */}
              <div className="absolute inset-0 border border-border translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

              {/* Main frame */}
              <div className="relative w-full h-full border border-border bg-[hsl(var(--surface-1))] p-3 overflow-hidden">
                <div className="relative w-full h-full overflow-hidden bg-[hsl(var(--surface-2))]">
                  <img
                    src={profilePhoto}
                    alt="Aman Boud — Agentic AI Developer"
                    className="w-full h-full object-cover grayscale contrast-[1.05] transition-all duration-700 group-hover:grayscale-0"
                    loading="eager"
                  />
                  {/* Tone overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />

                  {/* Floating technical labels */}
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm border border-border px-2.5 py-1">
                    <span className="mono">System.Agent_v3</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm border border-border px-2.5 py-1">
                    <span className="mono">Logic.Flow</span>
                  </div>
                </div>
              </div>

              {/* Right vertical caption */}
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 rotate-90 origin-center hidden lg:block">
                <div className="flex items-center gap-3">
                  <span className="mono whitespace-nowrap">Architect · Developer</span>
                  <span className="h-px w-10 bg-border" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-border to-transparent" />
      </div>
    </section>
  );
}
