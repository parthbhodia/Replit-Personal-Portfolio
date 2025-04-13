import React, { useState, useRef, useEffect } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
  index?: number;
}

export default function AnimatedProjectCard({ 
  title, 
  description, 
  tags, 
  liveUrl, 
  codeUrl,
  index = 0
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    // Get position of the card
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the card center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Update rotation and position based on mouse position
    setRotation({
      x: y / 10, // Rotate around X-axis (up/down)
      y: -x / 10 // Rotate around Y-axis (left/right)
    });
    
    setPosition({
      x: x / 20,
      y: y / 20
    });
  };

  // Reset card position and rotation
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
    setPosition({ x: 0, y: 0 });
  };

  // This effect adds a new animation when the component is rendered
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.classList.add('project-card-enter');
      cardRef.current.style.animationDelay = `${index * 0.1}s`;
    }
    
    // Cleanup animation classes after animation completes
    const timeout = setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.classList.remove('project-card-enter');
      }
    }, 1000);
    
    return () => clearTimeout(timeout);
  }, [index]);
  
  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-96 bg-white/90 dark:bg-black/60 rounded-xl shadow-lg overflow-hidden transform transition-all duration-200 ease-out hover:shadow-xl hover:scale-[1.02]"
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translate3d(${position.x}px, ${position.y}px, 0)`,
        transformStyle: 'preserve-3d',
        opacity: 0 // Start with opacity 0, the animation will bring it to 1
      }}
    >
      {/* Card Header with Title */}
      <div 
        className="h-48 bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 flex items-center justify-center p-6 transform transition-transform duration-300"
        style={{ 
          transform: `translateZ(${isHovered ? '20px' : '0px'})`,
          transformStyle: 'preserve-3d'
        }}
      >
        <h3 className="text-white text-xl font-medium text-center">{title}</h3>
      </div>
      
      {/* Card Body */}
      <div 
        className="p-6 transform transition-transform duration-300"
        style={{ 
          transform: `translateZ(${isHovered ? '40px' : '0px'})`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Project Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        
        {/* Project Tags */}
        <div className="flex flex-wrap gap-2 mb-4 transform transition-transform duration-300" style={{ 
          transform: `translateZ(${isHovered ? '60px' : '0px'})`,
        }}>
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Project Links */}
        <div 
          className="flex space-x-3 transform transition-transform duration-300"
          style={{ 
            transform: `translateZ(${isHovered ? '60px' : '0px'})`,
          }}
        >
          <a 
            href={liveUrl} 
            className="px-3 py-1 bg-green-600 dark:bg-green-500 text-white rounded hover:bg-green-700 dark:hover:bg-green-600 transition-colors"
          >
            View Live
          </a>
          <a 
            href={codeUrl} 
            className="px-3 py-1 border border-green-600 dark:border-green-500 text-green-600 dark:text-green-500 rounded hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
          >
            Source Code
          </a>
        </div>
      </div>
      
      {/* Animated glow effect on hover */}
      {isHovered && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
      )}
    </div>
  );
}