import React, { useRef, useEffect, useState } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number; // Speed multiplier (1 = normal, 0.5 = half speed, 2 = double speed)
  className?: string;
}

export default function ParallaxSection({ 
  children, 
  speed = 0.2,
  className = '',
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      // Get the section's position relative to the viewport
      const rect = sectionRef.current.getBoundingClientRect();
      
      // Check if the section is in the viewport
      const isInView = 
        rect.top < window.innerHeight && 
        rect.bottom > 0;
      
      if (isInView) {
        setIsVisible(true);
        
        // Calculate how far the section is from the center of the viewport
        const viewportMiddle = window.innerHeight / 2;
        const sectionMiddle = rect.top + rect.height / 2;
        const distanceFromCenter = sectionMiddle - viewportMiddle;
        
        // Create a parallax effect by moving the section at a different rate than the scrolling
        setOffset(distanceFromCenter * speed);
      }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Call once to set initial position
    handleScroll();
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  return (
    <div 
      ref={sectionRef} 
      className={`transform transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{ 
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.1s ease-out' 
      }}
    >
      {children}
    </div>
  );
}