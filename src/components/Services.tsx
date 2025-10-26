import { Code, Palette, Rocket, Users, TrendingUp, Lightbulb } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built with cutting-edge technologies to match your unique business needs.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that create memorable user experiences and drive engagement.',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: Rocket,
      title: 'Product Strategy',
      description: 'Strategic planning and roadmapping to turn your vision into a successful digital product.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Users,
      title: 'Team Augmentation',
      description: 'Scale your team with our skilled developers and designers who integrate seamlessly.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your online presence and reach your audience.',
      gradient: 'from-rose-500 to-red-500',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Expert guidance on emerging technologies and digital transformation strategies.',
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            What We{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end digital solutions designed to accelerate your growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-floating transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <div className="relative p-8 space-y-4">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-soft group-hover:shadow-glow group-hover:scale-110 transition-all duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                {/* Learn More Link */}
                <div className="pt-4">
                  <span className="text-primary font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Discover More
                    <span className="text-xl">→</span>
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
