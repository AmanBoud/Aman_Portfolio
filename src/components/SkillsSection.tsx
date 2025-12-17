import { Code, Brain, Wrench, Database, Bot, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    color: 'primary',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Backend & AI',
    icon: Brain,
    color: 'secondary',
    skills: ['Python', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'AI & Automation',
    icon: Bot,
    color: 'primary',
    skills: ['Agentic AI', 'RAG Agents', 'Prompt Engineering', 'LangChain'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'secondary',
    skills: ['n8n', 'APIs', 'GitHub', 'VS Code'],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'primary',
    skills: ['Vector Databases', 'Pinecone', 'PostgreSQL'],
  },
  {
    title: 'AI Models',
    icon: Sparkles,
    color: 'secondary',
    skills: ['OpenAI', 'Gemini', 'Claude', 'LLaMA'],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Skills & <span className="glow-text">Technologies</span>
          </h2>
          <div className="neon-line max-w-xs mx-auto" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card-hover p-6 glow-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${
                  category.color === 'primary' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-secondary/10 text-secondary'
                }`}>
                  <category.icon size={24} />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm rounded-full ${
                      category.color === 'primary'
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'bg-secondary/10 text-secondary border border-secondary/20'
                    } transition-all duration-300 hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Currently Learning & Exploring</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['LangChain', 'CrewAI', 'AutoGen', 'LangGraph'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass-card text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
