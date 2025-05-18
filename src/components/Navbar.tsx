
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Home',
      href: isHomePage ? '#home' : '/#home'
    },
    {
      name: 'About',
      href: isHomePage ? '#about' : '/#about'
    },
    {
      name: 'Projects',
      href: isHomePage ? '#projects' : '/#projects'
    },
    {
      name: 'Services',
      href: isHomePage ? '#services' : '/#services'
    },
    {
      name: 'Resume',
      href: isHomePage ? '#resume' : '/#resume'
    }
    // Contact removed from regular nav links
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-portfolio-background/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-portfolio-cyan font-poppins">
            Vivek<span className="text-portfolio-pink">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Regular nav links */}
            {navLinks.map(link => 
              link.isPage ? (
                <Link key={link.name} to={link.href} className="text-portfolio-text hover:text-portfolio-cyan transition-colors duration-300">
                  {link.name}
                </Link>
              ) : (
                <a key={link.name} href={link.href} className="text-portfolio-text hover:text-portfolio-cyan transition-colors duration-300">
                  {link.name}
                </a>
              )
            )}
            
            {/* Contact Button */}
            <Link to="/contact">
              <Button className="bg-portfolio-cyan hover:bg-portfolio-cyanLight text-portfolio-background rounded-full">
                Contact
              </Button>
            </Link>
          </div>

          {/* Resume Button - Desktop */}
          <div className="hidden md:block">
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-portfolio-cyan">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-portfolio-card shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-4">
            {navLinks.map(link => 
              link.isPage ? (
                <Link key={link.name} to={link.href} onClick={() => setMobileMenuOpen(false)} className="block text-portfolio-text hover:text-portfolio-cyan py-2 text-lg">
                  {link.name}
                </Link>
              ) : (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block text-portfolio-text hover:text-portfolio-cyan py-2 text-lg">
                  {link.name}
                </a>
              )
            )}
            
            {/* Contact Button in Mobile Menu */}
            <div className="pt-2">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-portfolio-cyan hover:bg-portfolio-cyanLight text-portfolio-background rounded-full">
                  Contact
                </Button>
              </Link>
            </div>
            
            {/* Resume Button in Mobile Menu */}
            <div className="pt-2">
              <Button className="w-full bg-portfolio-cyan hover:bg-portfolio-cyanLight text-portfolio-background rounded-full" onClick={handleResumeClick}>
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
