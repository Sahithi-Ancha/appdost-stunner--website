import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const openings = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Join our engineering team to build scalable web applications using modern technologies.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create beautiful and intuitive user experiences for our diverse range of client projects.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Android Developer',
      department: 'Mobile',
      location: 'Bangalore, India',
      type: 'Full-time',
      description: 'Build innovative mobile applications that reach millions of users worldwide.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Pune, India',
      type: 'Full-time',
      description: 'Manage and optimize our cloud infrastructure for maximum reliability and performance.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Cyber Security Specialist',
      department: 'Security',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Protect our systems and client data with cutting-edge security practices and technologies.',
      gradient: 'from-red-500 to-rose-500',
    },
    {
      title: 'Business Analyst',
      department: 'Strategy',
      location: 'Mumbai, India',
      type: 'Contract',
      description: 'Bridge the gap between business requirements and technical solutions for our clients.',
      gradient: 'from-indigo-500 to-blue-500',
    },
  ];

  const benefits = [
    'Competitive salary and equity',
    'Flexible working hours',
    'Remote work options',
    'Health insurance',
    'Learning & development budget',
    'Team outings & events',
  ];

  return (
    <section id="careers" className="py-24 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Join Our{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of a dynamic team that's shaping the future of technology. 
            We're always looking for talented individuals who are passionate about innovation.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Card className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-primary/20 p-8">
            <h3 className="text-2xl font-heading font-bold mb-6 text-center">Why Work With Us?</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-lg hover:bg-card transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-primary"></div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Job Openings */}
        <div className="space-y-8">
          <h3 className="text-3xl font-heading font-bold text-center mb-8">
            Current Openings
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {openings.map((job, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${job.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="relative p-6 space-y-4">
                  {/* Job Header */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h4 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-semibold">{job.department}</p>
                    </div>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${job.gradient} flex items-center justify-center shadow-soft group-hover:shadow-glow group-hover:scale-110 transition-all duration-300`}
                    >
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>

                  {/* Apply Button */}
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Card className="bg-gradient-primary text-white p-12">
            <h3 className="text-3xl font-heading font-bold mb-4">
              Don't See Your Role?
            </h3>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              We're always interested in hearing from talented individuals. 
              Send us your resume and let's explore opportunities together.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/90 border-0 text-lg px-8 py-6"
            >
              Send Your Resume
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Careers;
