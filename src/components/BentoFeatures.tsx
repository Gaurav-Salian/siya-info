
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "AI-Driven Automation",
    description: "Streamline operations with intelligent automation that learns and adapts to your business needs.",
    image: "/lovable-uploads/063f1a5b-4bae-4159-bd3d-49f2037f43df.png",
    size: "col-span-1 md:col-span-1 row-span-1 md:row-span-1"
  },
  {
    id: 2,
    title: "Responsive Web Development",
    description: "Custom websites that look amazing on every device with seamless user experiences.",
    image: "/lovable-uploads/df676247-789b-49f0-9725-1fff69a3221b.png",
    size: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    id: 3,
    title: "Mobile App Solutions",
    description: "Feature-rich Android & iOS applications that engage customers and drive growth.",
    image: "/lovable-uploads/32a50a75-f494-4d2c-8323-323323b2f3f2.png",
    size: "col-span-1 md:col-span-1 row-span-1 md:row-span-2"
  },
  {
    id: 4,
    title: "AI Chatbot Integration",
    description: "24/7 customer support with intelligent chatbots that handle queries efficiently.",
    image: "/lovable-uploads/e9c0388a-e93f-4035-9089-25b525356311.png",
    size: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    id: 5,
    title: "Jewelry CAD Design",
    description: "Specialized design services with 3D rendering for jewelry businesses.",
    image: "/lovable-uploads/234ba9e3-5dfc-4014-bb74-5446868c1bc9.png",
    size: "col-span-1 md:col-span-1 row-span-1"
  }
];

const BentoFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const handleLearnMore = (id: number) => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section 
      id="features"
      ref={sectionRef} 
      className="py-24 relative overflow-hidden scroll-trigger"
    >
      {/* Background elements */}
      <div className="absolute inset-0 tech-grid-bg bg-tech-grid opacity-10 z-0"></div>
      <div className="absolute right-1/4 top-1/4 w-96 h-96 bg-tech-purple/10 rounded-full filter blur-[120px]"></div>
      <div className="absolute left-1/4 bottom-1/4 w-80 h-80 bg-tech-blue/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="inline-block text-sm text-tech-purple uppercase tracking-wider mb-2 font-medium bg-tech-purple/20 px-3 py-1 rounded-full">Features</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Innovative Solutions for Modern Businesses</h3>
          <p className="text-white/70">
            Explore our range of cutting-edge services designed to transform your business operations and enhance your digital presence.
          </p>
        </div>
        
        {/* Bento grid - improved layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={el => itemRefs.current[index] = el}
              className={`${feature.size} bento-item overflow-hidden group transition-all duration-500 h-full ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full flex flex-col">
                {/* Background image with gradient overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-6 mt-auto">
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-tech-purple transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-white/70 mb-4">
                    {feature.description}
                  </p>
                  <button
                    onClick={() => handleLearnMore(feature.id)}
                    className="inline-flex items-center text-tech-purple hover:text-tech-blue transition-colors gap-1 font-medium text-sm opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    Learn more <ArrowRight size={16} />
                  </button>
                </div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-tech-purple/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-tech-blue/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
