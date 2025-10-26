import { useEffect, useState } from 'react';
import { Rocket, Monitor, Smartphone, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Monitor, label: 'Web Development', value: '+10 Projects', delay: '0.2s' },
    { icon: Smartphone, label: 'Mobile Apps', value: '+4 Apps', delay: '0.4s' },
    { icon: Users, label: 'Active Viewers', value: '0', subtext: 'people viewing now', delay: '0.6s' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-soft border border-border animate-scale-in">
              <Rocket className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Complete IT Solution Provider Since 2025
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Transform Your{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                Ideas
              </span>{' '}
              Into{' '}
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                Digital Reality
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise
              software, we bring innovation and excellence to every project with our expert team of
              developers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
              >
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative h-[500px] hidden lg:block">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="absolute bg-card/80 backdrop-blur-xl rounded-2xl p-6 shadow-floating border border-border/50 hover:shadow-glow transition-all duration-500 hover:scale-110 animate-float cursor-pointer"
                style={{
                  top: `${index * 150}px`,
                  right: `${index % 2 === 0 ? '0' : '100px'}`,
                  animationDelay: stat.delay,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-xl shadow-soft">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    {stat.subtext && (
                      <p className="text-xs text-muted-foreground mt-1">{stat.subtext}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
