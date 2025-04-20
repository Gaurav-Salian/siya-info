
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    id: 1,
    title: "Digital Presence",
    description: "Establish a powerful online presence with responsive websites, e-commerce platforms, and mobile applications.",
    icon: "/lovable-uploads/45a0da8a-b070-4928-8144-cedea157b195.png"
  },
  {
    id: 2,
    title: "AI Automation",
    description: "Streamline operations with AI-powered tools that handle repetitive tasks and boost productivity.",
    icon: "/lovable-uploads/063f1a5b-4bae-4159-bd3d-49f2037f43df.png"
  },
  {
    id: 3,
    title: "Business Analytics",
    description: "Make data-driven decisions with comprehensive analytics and insights into your business performance.",
    icon: "/lovable-uploads/4e713b69-8291-4f0b-802a-9d07812c78f7.png"
  },
  {
    id: 4,
    title: "Jewelry Design",
    description: "Specialized CAD services for jewelry businesses with 3D rendering and high-quality digital assets.",
    icon: "/lovable-uploads/234ba9e3-5dfc-4014-bb74-5446868c1bc9.png"
  }
];

const SolutionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLearnMore = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
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
      id="solutions"
      ref={sectionRef}
      className="py-20 scroll-trigger"
    >
      {/* Background decorations */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-tech-purple/10 rounded-full filter blur-[120px]"></div>
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-tech-blue/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute inset-0 tech-grid-bg bg-tech-grid opacity-10 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 scroll-trigger">
          <h2 className="inline-block text-sm text-tech-purple uppercase tracking-wider mb-2 font-medium bg-tech-purple/20 px-3 py-1 rounded-full">Solutions</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Transform Your Business with Our Integrated Solutions</h3>
          <p className="text-white/70">
            We provide end-to-end technology solutions that help businesses adapt, scale, and thrive in the digital landscape.
          </p>
        </div>

        {/* Solutions grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id}
              ref={el => itemRefs.current[index] = el}
              className="bento-item p-8 grid-reveal group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-tech-purple/20 to-tech-blue/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img 
                    src={solution.icon} 
                    alt={solution.title} 
                    className="w-10 h-10 object-contain"
                  />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-3 group-hover:text-tech-purple transition-colors">
                    {solution.title}
                  </h4>
                  
                  <p className="text-white/60 group-hover:text-white/80 transition-colors">
                    {solution.description}
                  </p>
                  
                  {/* Hover reveal button */}
                  <div className="mt-5 overflow-hidden h-0 group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <button 
                      onClick={handleLearnMore}
                      className="inline-flex items-center text-tech-purple hover:text-tech-blue transition-colors font-medium"
                    >
                      Learn More
                      <svg
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-tech-purple/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-tech-blue/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="rounded-2xl p-10 relative overflow-hidden border border-white/10 bg-gradient-to-r from-navy to-dark-purple scroll-trigger">
          {/* Background glow */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-tech-purple/20 rounded-full filter blur-[80px]"></div>
            <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-tech-blue/20 rounded-full filter blur-[100px]"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">Ready to Transform Your Business?</h3>
              <p className="text-white/70 max-w-md">
                Let's discuss how our solutions can help you achieve your business goals. Contact us today for a free consultation.
              </p>
            </div>
            
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-tech-purple to-tech-pink hover:shadow-lg hover:shadow-tech-purple/20 transition-all px-8 py-6 text-white"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
