import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:amanboud29@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Your default email app will open with the message.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'amanboud29@gmail.com',
      href: 'mailto:amanboud29@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8971453858',
      href: 'tel:+918971453858',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ballari, Karnataka, India',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aman-boud-884964238/',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/AmanBoud',
    },
    {
      icon: ExternalLink,
      label: 'Adyatech',
      href: 'https://adyatech.com/',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative section-glow">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Let's Build Something <span className="glow-text">Intelligent</span>
          </h2>
          <div className="neon-line max-w-xs mx-auto" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto font-body">
            Have a project in mind? Looking for an AI solution? 
            I'd love to hear from you and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="glass-card-hover p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-medium">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card-hover p-3 group"
                    aria-label={link.label}
                  >
                    <link.icon
                      size={20}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="glass-card p-6">
              <h3 className="font-semibold mb-2">Currently Working At</h3>
              <a
                href="https://adyatech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline flex items-center gap-2"
              >
                Adyatech Solutions LLP
                <ExternalLink size={14} />
              </a>
              <p className="text-sm text-muted-foreground mt-2 font-body">
                Building AI-powered solutions for businesses across industries.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-6 md:p-8">
            <h3 className="font-semibold text-lg mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button type="submit" variant="glow" size="lg" className="w-full">
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
