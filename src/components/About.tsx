import { Users, Target, Award, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative technology solutions that drive growth and digital transformation.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse group of talented professionals passionate about creating exceptional digital experiences.',
    },
    {
      icon: Award,
      title: 'Our Excellence',
      description: 'Committed to delivering world-class solutions with uncompromising quality and attention to detail.',
    },
    {
      icon: Zap,
      title: 'Our Innovation',
      description: 'Constantly exploring emerging technologies to stay ahead and deliver cutting-edge solutions.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            About{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">AppDost</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a forward-thinking technology company dedicated to transforming ideas into 
            powerful digital solutions. With years of expertise and a passion for innovation, 
            we help businesses navigate the digital landscape and achieve their goals.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold">Our Story</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-heading font-bold">
              Building Digital Excellence Since 2018
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded with a vision to bridge the gap between technology and business needs, 
              AppDost has grown into a trusted partner for companies worldwide. Our journey 
              began with a simple mission: to create digital solutions that make a real difference.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Today, we work with startups, enterprises, and everyone in between, delivering 
              innovative solutions that drive measurable results. Our commitment to excellence 
              and client satisfaction remains at the heart of everything we do.
            </p>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <div className="aspect-video bg-gradient-to-br from-primary via-secondary to-accent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
                <div className="space-y-2">
                  <p className="text-4xl font-heading font-bold text-white">500+</p>
                  <p className="text-white/90 font-semibold">Projects Delivered Globally</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-6 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
