
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-background text-portfolio-text">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
