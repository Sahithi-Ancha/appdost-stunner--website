import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Portfolio from '@/components/Portfolio';
import Careers from '@/components/Careers';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Portfolio />
      <Careers />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
