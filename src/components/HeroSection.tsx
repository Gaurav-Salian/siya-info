import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const layers = heroRef.current.querySelectorAll('.parallax-layer');
      layers.forEach((layer: Element, index) => {
        const htmlLayer = layer as HTMLElement;
        const speed = index * 0.2;
        const xOffset = (x - rect.width / 2) * speed / 100;
        const yOffset = (y - rect.height / 2) * speed / 100;
        htmlLayer.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden py-20" 
      style={{ 
        background: 'linear-gradient(180deg, #0A101D 0%, #131B2F 100%)'
      }}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 tech-grid-bg bg-tech-grid opacity-30"></div>
      
      {/* Glowing circles */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-tech-purple/20 filter blur-[100px] parallax-layer"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-tech-blue/20 filter blur-[120px] parallax-layer"></div>
      
      {/* Floating particles */}
      <div className="absolute top-20 right-40 w-2 h-2 rounded-full bg-tech-blue animate-pulse-glow parallax-layer"></div>
      <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-tech-purple animate-pulse-glow parallax-layer"></div>
      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-tech-pink animate-pulse-glow parallax-layer"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left content */}
            <div 
              className={`lg:w-1/2 space-y-6 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="inline-block bg-tech-purple/20 rounded-full px-4 py-1 border border-tech-purple/30 backdrop-blur-sm">
                <p className="text-sm text-white flex items-center">
                  <span className="w-2 h-2 rounded-full bg-tech-purple mr-2 animate-pulse"></span>
                  Next Generation IT Solutions Provider
                </p>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair">
                Empowering Your <span className="gradient-text">Digital World</span> with AI-Driven Solutions
              </h1>
              
              <p className="text-white/70 text-lg max-w-md">
                Transform your business ideas into AI-enhanced realities with our cutting-edge technological solutions and creative expertise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToContact}
                  variant="default"
                  className="bg-gradient-to-r from-tech-blue to-tech-purple text-white hover:from-tech-blue/90 hover:to-tech-purple/90"
                >
                  Get Started
                  <ArrowRight className="ml-2" size={16} />
                </Button>
                <Button 
                  onClick={scrollToServices}
                  variant="outline" 
                  className="border-tech-purple/50 text-tech-purple hover:bg-tech-purple/10"
                >
                  Explore Services
                </Button>
              </div>

              {/* Stats */}
              <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-tech-purple">100+</h3>
                  <p className="text-white/60 text-sm">Projects Completed</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-tech-blue">95%</h3>
                  <p className="text-white/60 text-sm">Client Satisfaction</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-tech-pink">24/7</h3>
                  <p className="text-white/60 text-sm">Support Available</p>
                </div>
              </div>
            </div>
            
            {/* Right content - 3D/AI visual */}
            <div 
              className={`lg:w-1/2 transition-all duration-1000 delay-700 ${
                isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative">
                <div className="relative z-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl animate-float">
                  <img 
                    src="/lovable-uploads/e97553e9-a15a-474d-aae7-743ba863670b.png"
                    alt="AI Technology" 
                    className="w-full h-auto"
                  />
                  
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-tech-purple/30 to-tech-blue/30 mix-blend-overlay"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-tech-purple opacity-60"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-tech-blue opacity-60"></div>
                
                {/* Circles */}
                <div className="absolute -top-8 right-1/2 w-16 h-16 rounded-full border border-dashed border-white/20 animate-rotate-slow"></div>
                <div className="absolute bottom-1/3 -right-6 w-12 h-12 rounded-full border border-dashed border-white/20 animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scrolling text */}
      <div className="absolute bottom-10 left-0 right-0 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="text-4xl font-bold text-white/5 uppercase tracking-wider">
              AI Solutions • Web Development • Mobile Apps • E-Commerce • Automation • AI Chatbots • Jewelry CAD • 3D Rendering • 
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-70">
        <span className="text-xs text-white/50 mb-1">Scroll</span>
        <div className="w-5 h-10 rounded-full border border-white/20 flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-pulse-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
