import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
import resumeAsset from '@/assets/Aman_Boud_Resume.pdf.asset.json';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] animate-float delay-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(186 100% 50% / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(186 100% 50% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative animate-slide-up">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary p-[2px] animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <div className="w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full overflow-hidden">
                    <img 
                      src={profilePhoto} 
                      alt="Aman Boud" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass-card px-3 py-1.5 text-xs font-medium animate-float">
                <span className="text-primary">AI Agent</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card px-3 py-1.5 text-xs font-medium animate-float delay-200">
                <span className="text-secondary">Automation</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="animate-slide-up delay-100">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                Available for Projects
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-slide-up delay-200">
              Hi, I'm{' '}
              <span className="glow-text">Aman Boud</span>
            </h1>

            <h2 className="text-base sm:text-xl md:text-2xl text-muted-foreground font-medium mb-6 animate-slide-up delay-300">
              AI Automation Developer | Agentic AI Enthusiast
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg mb-8 animate-slide-up delay-400 font-body">
              Building intelligent, multilingual AI agents to solve real-world problems.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 animate-slide-up delay-500">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1+</div>
                <div className="text-xs text-muted-foreground">Year Exp.</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-xs text-muted-foreground">AI Projects</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">RAG</div>
                <div className="text-xs text-muted-foreground">Specialist</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8 animate-slide-up delay-600">
              <Button variant="glow" size="lg" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href={resumeAsset.url} download="Aman_Boud_Resume.pdf">
                  <Download className="mr-2" size={18} />
                  Download CV
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 animate-slide-up delay-600">
              <a
                href="https://www.linkedin.com/in/aman-boud-884964238/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card-hover"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com/AmanBoud"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card-hover"
                aria-label="GitHub"
              >
                <Github size={20} className="text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:amanboud29@gmail.com"
                className="p-3 glass-card-hover"
                aria-label="Email"
              >
                <Mail size={20} className="text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
