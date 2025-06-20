import React, { useEffect, useState } from 'react';

export default function ParallaxHeader() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Calculate parallax styles based on scroll position
  const opacityValue = Math.max(0, Math.min(1, 1 - scrollY / 500));
  const translateY = scrollY * 0.5; // Move at half the speed of scroll
  const scale = 1 - scrollY * 0.001; // Slowly reduce size as user scrolls
  
  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-0">
      {/* Top layer with parallax effect */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ 
          opacity: opacityValue,
          transform: `translateY(${translateY}px) scale(${scale})`,
        }}
      >
        <div className="w-full h-full absolute">
          {/* Header with name */}
          <div className="text-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Parth Bhodia
            </h1>
            <p className="text-xl md:text-2xl text-green-200">Software Developer</p>
          </div>
          
          {/* Animated gradient circles */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-green-400/30 to-green-600/30 filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-green-500/20 to-green-700/20 filter blur-3xl" style={{ animationDelay: '1s', animationDuration: '7s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-green-300/20 to-green-500/20 filter blur-3xl" style={{ animationDelay: '0.5s', animationDuration: '5s' }}></div>
        </div>
      </div>
      
      {/* Optional texture overlay */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '30px 30px',
        }}
      ></div>
    </div>
  );
}