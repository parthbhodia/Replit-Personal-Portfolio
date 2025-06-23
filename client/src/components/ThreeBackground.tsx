import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isDarkMode = useRef<boolean>(false);
  
  useEffect(() => {
    // Initialize Three.js scene
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    
    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    
    // Get initial dark mode
    isDarkMode.current = document.documentElement.classList.contains('dark');
    
    // Particle material color based on theme
    const getParticleColor = () => {
      return isDarkMode.current ? 0x8b5cf6 : 0x7c3aed; // Brighter purple for dark mode
    };
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    
    // Initialize particle positions
    const positions = new Float32Array(particlesCount * 3);
    const scales = new Float32Array(particlesCount);
    
    // Generate random positions and scales
    for (let i = 0; i < particlesCount; i++) {
      // Random positions across the entire scene
      positions[i * 3] = (Math.random() - 0.5) * 100; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100; // z
      
      // Random scales for varied particle sizes
      scales[i] = Math.random() * 2.0;
    }
    
    // Set the position attribute
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
    
    // Particle material
    const particlesMaterial = new THREE.PointsMaterial({
      color: getParticleColor(),
      size: 0.15,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true
    });
    
    // Create the particle system
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    
    // Animation function
    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate the particle system slowly
      particles.rotation.x += 0.0001;
      particles.rotation.y += 0.0001;
      
      // Add movement based on mouse position
      particles.rotation.x += (mousePosition.current.y * 0.00005);
      particles.rotation.y += (mousePosition.current.x * 0.00005);
      
      // Check if theme has changed
      const currentIsDark = document.documentElement.classList.contains('dark');
      if (currentIsDark !== isDarkMode.current) {
        isDarkMode.current = currentIsDark;
        (particlesMaterial as THREE.PointsMaterial).color.set(getParticleColor());
      }
      
      // Pulsing effect with time
      frame += 0.01;
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      const scales = particlesGeometry.attributes.scale.array as Float32Array;
      
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];
        
        // Add slight movement to particles
        positions[i3] = x + Math.sin(frame + i) * 0.01;
        positions[i3 + 1] = y + Math.cos(frame + i) * 0.01;
        
        // Pulse the particle sizes
        scales[i] = Math.abs(Math.sin(frame + i) * 1.5) + 0.5;
      }
      
      particlesGeometry.attributes.position.needsUpdate = true;
      particlesGeometry.attributes.scale.needsUpdate = true;
      
      renderer.render(scene, camera);
    };
    
    // Handle mouse movement
    function onDocumentMouseMove(event: MouseEvent) {
      // Normalize mouse coordinates
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    // Start animation
    animate();
    
    // Add event listeners
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousemove', onDocumentMouseMove);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      renderer.dispose();
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-60 dark:opacity-90"
    />
  );
}