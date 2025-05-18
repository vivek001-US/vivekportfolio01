import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleResumeClick = () => {
    // Open resume in new tab
    window.open('https://drive.google.com/file/d/1dfYuRMjA_C9yLEP4t88ZYavheuJWJrAP/view?usp=sharing', '_blank');
    
    // Close mobile menu if it's open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-portfolio-background/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-portfolio-cyan font-poppins">
            Vivek<span className="text-portfolio-pink">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-portfolio-text hover:text-portfolio-cyan transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Resume Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              className="bg-portfolio-cyan hover:bg-portfolio-cyanLight text-portfolio-background font-medium rounded-full px-6"
              onClick={handleResumeClick}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-portfolio-cyan"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-portfolio-card shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-portfolio-text hover:text-portfolio-cyan py-2 text-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <Button 
                className="w-full bg-portfolio-cyan hover:bg-portfolio-cyanLight text-portfolio-background rounded-full"
                onClick={handleResumeClick}
              >
                Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
