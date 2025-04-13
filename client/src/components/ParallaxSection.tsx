import React, { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number; // Speed multiplier (1 = normal, 0.5 = half speed, 2 = double speed)
  className?: string;
}

export default function ParallaxSection({ 
  children, 
  speed = 0.5, 
  className = '' 
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return;
      
      const scrollTop = window.pageYOffset;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Only apply parallax when the section is in view
      if (scrollTop + window.innerHeight >= sectionTop && 
          scrollTop <= sectionTop + sectionHeight) {
        
        // Calculate how far the section is from the viewport top
        const offsetFromViewportTop = scrollTop - sectionTop;
        
        // Apply transform based on scroll position and speed
        const yValue = offsetFromViewportTop * speed;
        contentRef.current.style.transform = `translateY(${yValue}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      <div ref={contentRef} className="transition-transform duration-200 ease-out">
        {children}
      </div>
    </div>
  );
}