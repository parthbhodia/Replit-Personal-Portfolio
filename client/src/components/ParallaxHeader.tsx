import React, { useEffect, useRef } from 'react';

export default function ParallaxHeader() {
  const headerRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current || !layer1Ref.current || !layer2Ref.current || !layer3Ref.current) return;
      
      const scrollY = window.scrollY;
      
      // Parallax effect - different speeds for different layers
      layer1Ref.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      layer2Ref.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      layer3Ref.current.style.transform = `translateY(${scrollY * 0.8}px)`;
    };
    
    // Initial position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle mouse movement for interactive effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!layer1Ref.current || !layer2Ref.current || !layer3Ref.current) return;
      
      // Calculate mouse position relative to the center of the screen
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;
      
      // Apply subtle movement based on mouse position
      layer1Ref.current.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
      layer2Ref.current.style.transform = `translate(${mouseX * -30}px, ${mouseY * -30}px)`;
      layer3Ref.current.style.transform = `translate(${mouseX * 40}px, ${mouseY * 40}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={headerRef} 
      className="relative w-full h-screen overflow-hidden bg-gray-100 dark:bg-black"
    >
      {/* Layer 1 - Large circles in the background */}
      <div 
        ref={layer1Ref} 
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-green-300/20 to-green-600/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-green-400/20 to-green-700/20 blur-3xl"></div>
      </div>
      
      {/* Layer 2 - Medium circles in the middle */}
      <div 
        ref={layer2Ref} 
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-40 right-40 w-40 h-40 rounded-full bg-gradient-to-br from-green-400/30 to-green-600/30 blur-xl"></div>
        <div className="absolute bottom-40 left-40 w-52 h-52 rounded-full bg-gradient-to-br from-green-300/30 to-green-500/30 blur-xl"></div>
      </div>
      
      {/* Layer 3 - Small geometric shapes in the foreground */}
      <div 
        ref={layer3Ref} 
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-60 left-1/4 w-20 h-20 rounded-md bg-gradient-to-br from-green-400/40 to-green-600/40 blur-sm rotate-12"></div>
        <div className="absolute bottom-60 right-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-green-500/40 to-green-700/40 blur-sm"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-lg bg-gradient-to-br from-green-300/40 to-green-500/40 blur-sm -rotate-12"></div>
      </div>
      
      {/* Content - will be provided by the parent component */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        {/* This is intentionally empty - content will come from the parent */}
      </div>
    </div>
  );
}