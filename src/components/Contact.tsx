import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for reaching out! We\'ll respond within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Us',
      value: 'hello@appdost.com',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '+1 (555) 987-6543',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'Silicon Valley, California',
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Let's{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? We're here to help bring your vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-heading font-bold mb-6">Reach Out To Us</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elevated transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shadow-soft`}
                      >
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">{info.label}</p>
                        <p className="text-foreground font-semibold">{info.value}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <Card className="p-8 bg-gradient-primary text-white animate-fade-in-up">
              <h4 className="text-2xl font-heading font-bold mb-4">Why Choose Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-white/90">✓</span>
                  <span className="text-white/90">Expert team with 5+ years experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/90">✓</span>
                  <span className="text-white/90">On-time delivery guaranteed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/90">✓</span>
                  <span className="text-white/90">24/7 dedicated support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/90">✓</span>
                  <span className="text-white/90">Flexible engagement models</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">
                  Your Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Subject</label>
                <Input
                  type="text"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">Your Message</label>
                <Textarea
                  placeholder="Share your project details and requirements..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 font-semibold"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
