import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Handle mouse movement
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Make cursor visible on first mouse move
      if (!isVisible) {
        setIsVisible(true);
      }
    };
    
    // Handle mouse over clickable elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if the target or its parents are clickable
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') !== null || 
        target.closest('a') !== null ||
        target.getAttribute('role') === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(Boolean(isClickable));
    };
    
    // Handle mouse leaving document
    const onMouseLeave = () => {
      setIsVisible(false);
    };
    
    // Handle mouse entering document
    const onMouseEnter = () => {
      setIsVisible(true);
    };
    
    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    
    // Clean up
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);
  
  // Don't render on touch devices or if cursor isn't visible
  if (typeof window !== 'undefined' && ('ontouchstart' in window)) return null;
  
  return (
    <div 
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
}