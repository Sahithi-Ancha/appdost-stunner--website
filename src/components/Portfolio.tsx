import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AnimatedBackground from './AnimatedBackground';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('portfolio');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'FinTrack Pro',
      category: 'Financial Technology',
      description: 'Next-generation financial management platform with AI-powered insights and analytics.',
      image: project1,
    },
    {
      title: 'MediCare Connect',
      category: 'Healthcare Platform',
      description: 'Comprehensive telehealth solution connecting patients with healthcare providers seamlessly.',
      image: project2,
    },
    {
      title: 'EduVerse',
      category: 'Education Technology',
      description: 'Interactive learning platform with gamification and personalized learning paths.',
      image: project3,
    },
    {
      title: 'ShopFlow',
      category: 'E-Commerce',
      description: 'Modern retail platform with AI recommendations and seamless checkout experience.',
      image: project4,
    },
    {
      title: 'TravelHub',
      category: 'Travel & Tourism',
      description: 'All-in-one travel planning and booking platform with real-time updates.',
      image: project5,
    },
    {
      title: 'GreenEnergy Dashboard',
      category: 'Sustainability',
      description: 'Real-time energy monitoring and optimization platform for sustainable living.',
      image: project6,
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions and success stories
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="group overflow-hidden bg-card border-border hover:shadow-floating transition-all duration-500 hover:-translate-y-2 cursor-pointer h-full">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-colors duration-300"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/90">
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
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide">
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
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 font-semibold text-lg px-8"
          >
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
