import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const advantages = [
    "Cutting-Edge Technology & Advanced AI-driven solutions",
    "Expert Team of professional designers, developers, and specialists",
    "High-Quality Services with industry-leading tools",
    "End-to-End Solutions from concept to execution"
  ];

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
      id="about"
      ref={sectionRef}
      className="py-20 scroll-trigger"
      style={{ 
        background: 'linear-gradient(180deg, #0A101D 0%, #131B2F 100%)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left side - Image */}
          <div 
            ref={imageRef}
            className="lg:w-1/2 relative scroll-trigger"
          >
            <div className="relative z-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="shimmer">
                <img 
                  src="/lovable-uploads/ba354640-d3eb-4ec1-9115-c23b5256cc93.png" 
                  alt="About Siya Jewels Infotech" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-tech-blue/20 to-tech-purple/20 mix-blend-overlay"></div>
              
              {/* Floating card */}
              <div className="absolute -bottom-10 -right-10 lg:-right-20 bg-navy/70 backdrop-blur-md p-5 rounded-lg border border-white/10 shadow-xl animate-float">
                <div className="flex items-center space-x-4">
                  <div className="bg-tech-purple/20 p-3 rounded-full">
                    <svg className="w-6 h-6 text-tech-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Satisfaction Guaranteed</h4>
                    <p className="text-sm text-white/60">Top-rated tech solutions provider</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-tech-purple/40"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-tech-blue/40"></div>
            
            {/* Background glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-tech-purple/10 rounded-full filter blur-[80px]"></div>
          </div>
          
          {/* Right side - Content */}
          <div 
            ref={contentRef}
            className="lg:w-1/2 scroll-trigger"
          >
            <h2 className="inline-block text-sm text-tech-purple uppercase tracking-wider mb-2 font-medium bg-tech-purple/20 px-3 py-1 rounded-full">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">We Are a Next Generation Technology Company</h3>
            
            <p className="text-white/70 mb-6">
              SIYA JEWELS INFOTECH is a premier digital solutions provider specializing in website development, e-commerce, AI automation, jewelry CAD design, 3D rendering, social media marketing, and business automation. We merge technology and creativity to help businesses scale and succeed in the digital world.
            </p>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Why Choose Us?</h4>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-tech-purple/20 p-1 rounded-full mt-1 mr-3">
                      <svg className="w-4 h-4 text-tech-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white/70">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToServices}
                variant="default"
                className="bg-gradient-to-r from-tech-blue to-tech-purple text-white hover:from-tech-blue/90 hover:to-tech-purple/90"
              >
                Our Services
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                className="border-tech-purple/50 text-tech-purple hover:bg-tech-purple/10"
              >
                Contact Us
              </Button>
            </div>
            
            {/* Founder info */}
            <div className="mt-10 flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-tech-purple">
                <img 
                  src="/lovable-uploads/893816c3-7aad-4181-a581-9d6e9a96af12.png" 
                  alt="Harish Soni" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Harish Soni</h4>
                <p className="text-sm text-white/60">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
