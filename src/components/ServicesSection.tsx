
import { useEffect, useRef, useState } from 'react';
import ServiceDialog from "@/components/ServiceDialog";

const services = [
  {
    id: 1,
    icon: "/lovable-uploads/df676247-789b-49f0-9725-1fff69a3221b.png",
    title: "Website & E-commerce Development",
    description: "Custom-built responsive websites and online stores with cutting-edge technology and seamless user experiences.",
    details: "Our expert team leverages the latest web technologies to create stunning, high-performance websites and e-commerce platforms. We focus on responsive design, user experience, SEO optimization, and seamless integration with payment gateways and inventory management systems."
  },
  {
    id: 2,
    icon: "/lovable-uploads/32a50a75-f494-4d2c-8323-323323b2f3f2.png",
    title: "Mobile App Development",
    description: "Feature-rich applications for Android & iOS that enhance customer engagement and boost business growth.",
    details: "We develop native and cross-platform mobile applications that deliver exceptional user experiences. Our mobile solutions include custom features, offline functionality, push notifications, and seamless integration with backend services."
  },
  {
    id: 3,
    icon: "/lovable-uploads/2f724ddb-324e-4243-820c-ee436d5680ca.png",
    title: "Billing Software Development",
    description: "Custom billing solutions tailored for businesses with invoicing, GST compliance, and secure cloud storage.",
    details: "Our billing software solutions streamline financial operations with features like automated invoicing, tax calculations, payment tracking, and comprehensive reporting tools. We ensure compliance with local regulations and secure data handling."
  },
  {
    id: 4,
    icon: "/lovable-uploads/117a8a69-d1fc-4cdc-9846-0053ead2caad.png",
    title: "AI Automation Services",
    description: "Smart AI solutions to boost efficiency with chatbots, email automation, and custom AI software development.",
    details: "We implement cutting-edge AI solutions to automate business processes, enhance customer service, and improve operational efficiency. Our AI services include machine learning models, natural language processing, and predictive analytics."
  },
  {
    id: 5,
    icon: "/lovable-uploads/e9c0388a-e93f-4035-9089-25b525356311.png",
    title: "AI Sales & Operations",
    description: "Optimize strategies with AI-driven insights, lead generation, and powerful sales analytics.",
    details: "Transform your sales and operations with AI-powered analytics and automation. We provide solutions for lead scoring, sales forecasting, customer segmentation, and operational optimization using advanced AI algorithms."
  },
  {
    id: 6,
    icon: "/lovable-uploads/8ae1cde3-09ab-4a59-8e63-92d3b4753f71.png",
    title: "Jewelry CAD Design",
    description: "Specialized CAD designs for jewelry businesses with 3D rendering and hip-hop Cuban jewelry design.",
    details: "Professional CAD design services specifically for the jewelry industry. We create detailed 3D models, photorealistic renderings, and technical specifications for manufacturing. Our expertise includes custom designs, modifications, and rapid prototyping."
  }
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
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
    
    // Observe the section itself
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Observe each grid item
    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLearnMore = (service: typeof services[0]) => {
    setSelectedService(service);
  };

  return (
    <section 
      id="services"
      ref={sectionRef}
      className="py-20 relative scroll-trigger"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full tech-grid-bg bg-tech-grid opacity-10 z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-tech-purple/10 filter blur-[100px]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-tech-blue/10 filter blur-[120px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-trigger">
          <h2 className="inline-block text-sm text-tech-purple uppercase tracking-wider mb-2 font-medium bg-tech-purple/20 px-3 py-1 rounded-full">Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Our Cutting-Edge Digital Solutions</h3>
          <p className="text-white/70">
            We offer a comprehensive range of tech services designed to transform your business operations and enhance your digital presence.
          </p>
        </div>
        
        {/* Services grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              ref={el => itemRefs.current[index] = el}
              className="bento-item grid-reveal p-6 group relative border border-white/10 rounded-lg backdrop-blur-sm hover:bg-white/5 transition-colors"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-tech-purple/20 to-tech-blue/20 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="w-10 h-10 object-contain"
                />
              </div>
              
              <h4 className="text-xl font-semibold mb-3 group-hover:text-tech-purple transition-colors">
                {service.title}
              </h4>
              
              <p className="text-white/60 group-hover:text-white/80 transition-colors">
                {service.description}
              </p>
            
              <button 
                onClick={() => handleLearnMore(service)}
                className="mt-6 inline-flex items-center text-tech-purple hover:text-tech-blue transition-colors font-medium"
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
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-tech-purple/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-tech-blue/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Dialog */}
      {selectedService && (
        <ServiceDialog 
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={selectedService}
        />
      )}
    </section>
  );
};

export default ServicesSection;
