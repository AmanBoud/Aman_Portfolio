import { MapPin, GraduationCap, Briefcase, Target } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative section-glow">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Passionate About <span className="glow-text">AI Innovation</span>
          </h2>
          <div className="neon-line max-w-xs mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              I'm <span className="text-foreground font-medium">Aman Boud</span>, an Agentic AI Developer 
              from <span className="text-primary">Ballari, Karnataka</span>. I hold a B.E. in Computer Science 
              with a First Class degree (8.24 CGPA) from VTU.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              My passion lies in solving real-world problems using AI. I specialize in building 
              <span className="text-primary"> AI-driven automation systems</span>, 
              <span className="text-secondary"> lead generation solutions</span>, and 
              intelligent assistants for education, healthcare, and customer support.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-body">
              Currently working as an Agentic AI Developer at{' '}
              <a 
                href="https://adyatech.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Adyatech Solutions LLP
              </a>
              , where I build multilingual AI chatbots, RAG-based agents, and automation solutions 
              that deliver real business impact.
            </p>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass-card p-4">
                <MapPin className="text-primary mb-2" size={20} />
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="font-medium">Ballari, Karnataka</div>
              </div>
              <div className="glass-card p-4">
                <Target className="text-primary mb-2" size={20} />
                <div className="text-sm text-muted-foreground">Focus</div>
                <div className="font-medium">Agentic AI</div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
            
            <div className="space-y-8">
              {/* Education */}
              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <GraduationCap size={16} className="text-primary" />
                </div>
                <div className="glass-card-hover p-5">
                  <span className="text-xs text-primary font-medium">2021 - 2025</span>
                  <h3 className="font-semibold mt-1">B.E. in Computer Science</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Visvesvaraya Technological University (VTU)
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Vivekananda College of Engineering and Technology, Puttur, D.K
                  </p>
                  <div className="mt-2 inline-block px-2 py-1 bg-primary/10 rounded text-xs text-primary">
                    CGPA: 8.24
                  </div>
                </div>
              </div>

              {/* Internship */}
              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 rounded-full bg-background border-2 border-secondary flex items-center justify-center">
                  <Briefcase size={16} className="text-secondary" />
                </div>
                <div className="glass-card-hover p-5">
                  <span className="text-xs text-secondary font-medium">July - October 2024</span>
                  <h3 className="font-semibold mt-1">AI Developer Intern</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Adyatech Solutions LLP
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Built foundational AI systems and learned enterprise automation workflows.
                  </p>
                </div>
              </div>

              {/* Current Role */}
              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center animate-pulse-glow">
                  <Briefcase size={16} className="text-primary-foreground" />
                </div>
                <div className="glass-card-hover p-5 border-primary/30">
                  <span className="text-xs text-primary font-medium">November 2024 - Present</span>
                  <h3 className="font-semibold mt-1">Agentic AI Developer</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Adyatech Solutions LLP
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Building production-grade AI agents, RAG systems, and automation solutions.
                  </p>
                  <div className="mt-2 inline-block px-2 py-1 bg-primary/20 rounded text-xs text-primary font-medium">
                    Current Role
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
