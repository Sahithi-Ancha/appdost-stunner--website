import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'FinTrack Pro',
      category: 'Financial Technology',
      description: 'Next-generation financial management platform with AI-powered insights and analytics.',
      gradient: 'from-emerald-600 to-teal-600',
    },
    {
      title: 'MediCare Connect',
      category: 'Healthcare Platform',
      description: 'Comprehensive telehealth solution connecting patients with healthcare providers seamlessly.',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'EduVerse',
      category: 'Education Technology',
      description: 'Interactive learning platform with gamification and personalized learning paths.',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      title: 'ShopFlow',
      category: 'E-Commerce',
      description: 'Modern retail platform with AI recommendations and seamless checkout experience.',
      gradient: 'from-orange-600 to-amber-600',
    },
    {
      title: 'TravelHub',
      category: 'Travel & Tourism',
      description: 'All-in-one travel planning and booking platform with real-time updates.',
      gradient: 'from-rose-600 to-red-600',
    },
    {
      title: 'GreenEnergy Dashboard',
      category: 'Sustainability',
      description: 'Real-time energy monitoring and optimization platform for sustainable living.',
      gradient: 'from-green-600 to-emerald-600',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions and success stories
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border-border hover:shadow-floating transition-all duration-500 cursor-pointer"
            >
              {/* Project Image/Gradient */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full shadow-lg hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full shadow-lg hover:scale-110 transition-transform"
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  {project.category}
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 font-semibold"
          >
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
