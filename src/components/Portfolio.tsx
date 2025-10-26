import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce solution with advanced features and seamless checkout experience.',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Healthcare App',
      category: 'Mobile Development',
      description: 'Patient management system with appointment scheduling and telemedicine features.',
      gradient: 'from-green-600 to-emerald-600',
    },
    {
      title: 'Finance Dashboard',
      category: 'Web Development',
      description: 'Real-time financial analytics dashboard with advanced data visualization.',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Food Delivery App',
      category: 'Mobile Development',
      description: 'On-demand food delivery platform with live tracking and smart recommendations.',
      gradient: 'from-orange-600 to-red-600',
    },
    {
      title: 'Education Portal',
      category: 'Web Development',
      description: 'Comprehensive learning management system with interactive course content.',
      gradient: 'from-indigo-600 to-purple-600',
    },
    {
      title: 'Fitness Tracker',
      category: 'Mobile Development',
      description: 'Personal fitness app with workout plans, nutrition tracking, and progress analytics.',
      gradient: 'from-teal-600 to-cyan-600',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our best work and successful projects
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
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
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
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
