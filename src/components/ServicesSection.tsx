import { Bot, MessageSquare, Cog, Zap, Users, Mail } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'Agentic AI Solutions',
    description: 'Custom AI agents for automation, decision-making, and complex business workflows.',
    features: ['Autonomous Agents', 'Multi-Agent Systems', 'Workflow Automation'],
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description: 'Multilingual RAG-based chatbots for education, healthcare, and customer support.',
    features: ['Multilingual Support', 'RAG Integration', '24/7 Availability'],
  },
  {
    icon: Cog,
    title: 'AI Automation Systems',
    description: 'End-to-end automation solutions that streamline operations and boost productivity.',
    features: ['Email Marketing', 'Lead Generation', 'Process Automation'],
  },
  {
    icon: Users,
    title: 'HR AI Solutions',
    description: 'Intelligent resume screening and candidate evaluation systems.',
    features: ['Resume Parsing', 'Skill Matching', 'Candidate Ranking'],
  },
  {
    icon: Zap,
    title: 'Lead Generation AI',
    description: 'AI-powered pipelines that identify and qualify potential customers automatically.',
    features: ['Data Enrichment', 'Lead Scoring', 'CRM Integration'],
  },
  {
    icon: Mail,
    title: 'Email Marketing Agents',
    description: 'Intelligent email agents that personalize and optimize your outreach campaigns.',
    features: ['Personalization', 'A/B Testing', 'Performance Analytics'],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 relative section-glow">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Services & <span className="glow-text">Solutions</span>
          </h2>
          <div className="neon-line max-w-xs mx-auto" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto font-body">
            Transforming businesses with cutting-edge AI solutions that automate workflows, 
            enhance customer experiences, and drive growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card-hover p-6 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-primary" size={24} />
              </div>
              
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 font-body">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
