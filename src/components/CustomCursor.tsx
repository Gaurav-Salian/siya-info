
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleMouseEnterLink = () => setHoveredLink(true);
    const handleMouseLeaveLink = () => setHoveredLink(false);
    
    const handleLinkElements = () => {
      const linkElements = document.querySelectorAll('a, button');
      
      linkElements.forEach(link => {
        link.addEventListener('mouseenter', handleMouseEnterLink);
        link.addEventListener('mouseleave', handleMouseLeaveLink);
      });
      
      return () => {
        linkElements.forEach(link => {
          link.removeEventListener('mouseenter', handleMouseEnterLink);
          link.removeEventListener('mouseleave', handleMouseLeaveLink);
        });
      };
    };
    
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    const cleanup = handleLinkElements();
    
    // Hide the default cursor
    document.body.style.cursor = 'none';
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cleanup();
      
      // Restore the default cursor
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      {/* Main cursor */}
      <div 
        className={`fixed w-4 h-4 rounded-full bg-tech-purple z-[9999] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 mix-blend-difference ${clicked ? 'scale-75' : 'scale-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      
      {/* Cursor trail/outer ring */}
      <div 
        className={`fixed w-10 h-10 rounded-full border border-tech-purple/50 z-[9998] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${clicked ? 'scale-50 opacity-50' : hoveredLink ? 'scale-200 opacity-30' : 'scale-100 opacity-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transitionProperty: 'width, height, transform, opacity',
        }}
      />
      
      {/* Cursor text for links/buttons */}
      {hoveredLink && (
        <div 
          className="fixed z-[9997] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 text-xs text-white bg-tech-purple px-2 py-0.5 rounded-full opacity-80 transition-opacity"
          style={{
            left: `${position.x}px`,
            top: `${position.y + 24}px`,
          }}
        >
          Click
        </div>
      )}
    </>
  );
};

export default CustomCursor;
