
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-navy/80 backdrop-blur-lg py-4 shadow-lg shadow-tech-purple/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/1cb97fa6-5b40-4d79-800a-0c5cbcab759f.png" 
              alt="Siya Jewels Infotech Logo" 
              className="h-12 w-12"
            />
            <div className="ml-2">
              <h1 className="text-white text-xl font-bold">
                SIYA <span className="text-tech-purple">JEWELS</span> <br />
                <span className="text-sm font-light tracking-wider">INFOTECH</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white/80 hover:text-tech-purple transition-colors">Services</a>
            <a href="#about" className="text-white/80 hover:text-tech-purple transition-colors">About</a>
            <a href="#solutions" className="text-white/80 hover:text-tech-purple transition-colors">Solutions</a>
            <a href="#contact" className="text-white/80 hover:text-tech-purple transition-colors">Contact</a>
            <Button className="bg-gradient-blue hover:shadow-lg hover:shadow-tech-blue/20 transition-all">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-navy/95 backdrop-blur-lg border-t border-white/10 animate-slide-in-top">
          <div className="container mx-auto py-6 px-4 flex flex-col space-y-6">
            <a 
              href="#services" 
              className="text-white/80 hover:text-tech-purple transition-colors text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-white/80 hover:text-tech-purple transition-colors text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#solutions" 
              className="text-white/80 hover:text-tech-purple transition-colors text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="#contact" 
              className="text-white/80 hover:text-tech-purple transition-colors text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              className="bg-gradient-blue hover:shadow-lg hover:shadow-tech-blue/20 transition-all w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
