import { ExternalLink, MessageSquare, Bot, Mail, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Jnanaamrutha AI Assistant',
    description: 'Education-focused multilingual AI chatbot providing instant academic support with RAG-powered responses.',
    icon: MessageSquare,
    tags: ['RAG', 'Multilingual', 'Education', 'AI Chatbot'],
    impact: 'Serves students with 24/7 academic assistance in multiple languages',
    color: 'primary',
  },
  {
    title: 'Corporate Lead Generation Bot',
    description: 'AI-powered lead generation system that identifies, qualifies, and nurtures potential customers automatically.',
    icon: Bot,
    tags: ['Lead Gen', 'Automation', 'CRM', 'AI Agent'],
    impact: 'Increased qualified leads by automating outreach and qualification',
    color: 'secondary',
  },
  {
    title: 'Email Marketing Agent',
    description: 'Intelligent email automation system that personalizes content and optimizes send times for maximum engagement.',
    icon: Mail,
    tags: ['Email', 'Automation', 'Personalization', 'Analytics'],
    impact: 'Improved email engagement through AI-driven personalization',
    color: 'primary',
  },
  {
    title: 'HR Resume Screening Agent',
    description: 'Automated resume parsing and candidate ranking system using AI to streamline recruitment processes.',
    icon: Users,
    tags: ['HR Tech', 'NLP', 'Resume Parsing', 'AI'],
    impact: 'Reduced manual screening time while improving candidate matching',
    color: 'secondary',
  },
  {
    title: 'Customer Support AI',
    description: 'Multi-channel AI assistant handling customer queries with context-aware responses and escalation workflows.',
    icon: Sparkles,
    tags: ['Support', 'Multi-channel', 'RAG', 'Automation'],
    impact: 'Enhanced customer satisfaction with instant, accurate responses',
    color: 'primary',
  },
  {
    title: 'Virtual Try-On Solution',
    description: 'AI-powered virtual try-on system for e-commerce, allowing customers to visualize products before purchase.',
    icon: Bot,
    tags: ['E-commerce', 'Computer Vision', 'AI', 'UX'],
    impact: 'Improved conversion rates through immersive shopping experience',
    color: 'secondary',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <div className="neon-line max-w-xs mx-auto" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto font-body">
            A showcase of AI solutions I've built that solve real-world problems 
            and deliver measurable business impact.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card-hover p-6 group flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${
                  project.color === 'primary' 
                    ? 'bg-primary/10' 
                    : 'bg-secondary/10'
                } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className={project.color === 'primary' ? 'text-primary' : 'text-secondary'} size={24} />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 font-body flex-grow">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Impact */}
              <div className={`p-3 rounded-lg ${
                project.color === 'primary' 
                  ? 'bg-primary/5 border border-primary/10' 
                  : 'bg-secondary/5 border border-secondary/10'
              }`}>
                <p className="text-xs text-muted-foreground">
                  <span className={project.color === 'primary' ? 'text-primary' : 'text-secondary'}>Impact:</span>{' '}
                  {project.impact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="glass" size="lg" asChild>
            <a href="#contact">
              Interested in a project?
              <ExternalLink className="ml-2" size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
