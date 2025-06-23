import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress as a percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      
      setScrollProgress(progress);
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50">
      <div 
        className="h-full bg-gradient-to-r from-purple-400 to-purple-600"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}