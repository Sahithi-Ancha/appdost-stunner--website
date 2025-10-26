import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-soft border border-border animate-scale-in ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Innovation Meets Excellence in Technology
            </span>
          </div>

          {/* Main Headline */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight max-w-5xl">
              Building The{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Future
              </span>{' '}
              <br />
              Of Digital{' '}
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We craft exceptional digital experiences through cutting-edge technology and creative
              solutions. From concept to deployment, we're your partner in digital transformation.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 justify-center ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg px-8 py-7 font-semibold"
            >
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 text-lg px-8 py-7 font-semibold"
            >
              Explore Our Work
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className={`flex flex-wrap items-center justify-center gap-8 pt-12 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent">
                100%
              </p>
              <p className="text-sm text-muted-foreground font-medium mt-1">Client Satisfaction</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border"></div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent">
                5+
              </p>
              <p className="text-sm text-muted-foreground font-medium mt-1">Years Experience</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border"></div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent">
                24/7
              </p>
              <p className="text-sm text-muted-foreground font-medium mt-1">Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 fill-background"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
