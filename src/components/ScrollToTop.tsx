
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 bg-gradient-to-r from-tech-purple to-tech-blue text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-tech-purple/20 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      } hover:shadow-xl hover:shadow-tech-purple/30 hover:scale-110`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-purple opacity-20"></span>
    </button>
  );
};

export default ScrollToTop;
