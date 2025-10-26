import { Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const footerLinks = {
    Company: ['About Us', 'Careers', 'Blog', 'Contact'],
    Services: ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'Consulting'],
    Resources: ['Documentation', 'Support', 'Privacy Policy', 'Terms of Service'],
  };

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <span className="text-2xl font-bold text-primary-foreground">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-background">AppDost</h3>
                <p className="text-xs text-background/70 font-medium">COMPLETE IT SOLUTION</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              Transforming ideas into digital reality since 2025. Your trusted partner for comprehensive IT solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-background" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-bold text-background mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-background/70 hover:text-background transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">
            © 2025 AppDost. All rights reserved.
          </p>
          <p className="text-background/70 text-sm">
            Crafted with ❤️ by AppDost Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
