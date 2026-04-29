import React, { useRef, useState, useEffect } from 'react';

interface InteractiveProfilePhotoProps {
  src: string;
  alt: string;
}

interface TrailPoint {
  x: number;
  y: number;
  age: number;
  maxAge: number;
}

export default function InteractiveProfilePhoto({ src, alt }: InteractiveProfilePhotoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const colorCanvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const animationFrameRef = useRef<number>();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canvasRef.current || !imgRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (imgRef.current.width / rect.width);
    const y = (e.clientY - rect.top) * (imgRef.current.height / rect.height);

    // Add new trail point
    setTrail(prevTrail => [
      ...prevTrail,
      { x, y, age: 0, maxAge: 30 }
    ].slice(-15)); // Keep last 15 points for smooth trail
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTrail([]);
  };

  const handleImageLoad = () => {
    if (!canvasRef.current || !imgRef.current || !colorCanvasRef.current) return;
    const canvas = canvasRef.current;
    const colorCanvas = colorCanvasRef.current;
    const img = imgRef.current;

    canvas.width = img.width;
    canvas.height = img.height;
    colorCanvas.width = img.width;
    colorCanvas.height = img.height;

    // Draw grayscale image on main canvas
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.filter = 'grayscale(85%)';
    ctx.drawImage(img, 0, 0);
    ctx.filter = 'none';

    // Draw color version on hidden canvas
    const colorCtx = colorCanvas.getContext('2d');
    if (!colorCtx) return;
    colorCtx.drawImage(img, 0, 0);
  };

  // Animation loop for trail effect
  useEffect(() => {
    if (!canvasRef.current || !colorCanvasRef.current || !imgRef.current) return;

    const animate = () => {
      const canvas = canvasRef.current;
      const colorCanvas = colorCanvasRef.current;
      const img = imgRef.current;

      if (!canvas || !colorCanvas || !img) return;

      const ctx = canvas.getContext('2d');
      const colorCtx = colorCanvas.getContext('2d');

      if (!ctx || !colorCtx) return;

      // Redraw base grayscale image
      ctx.filter = 'grayscale(85%)';
      ctx.drawImage(img, 0, 0);
      ctx.filter = 'none';

      // Update trail ages and draw color overlay for each point
      setTrail(prevTrail => {
        const newTrail = prevTrail
          .map(point => ({ ...point, age: point.age + 1 }))
          .filter(point => point.age < point.maxAge);

        // Draw color trail
        newTrail.forEach(point => {
          const progress = point.age / point.maxAge;
          const radius = 80 * (1 - progress * 0.3);
          const alpha = 0.6 * (1 - progress);

          const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, radius);
          gradient.addColorStop(0, `rgba(168, 85, 247, ${alpha})`);
          gradient.addColorStop(0.5, `rgba(139, 92, 246, ${alpha * 0.6})`);
          gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');

          // Get color data from original image at this point
          const imageData = colorCtx.getImageData(point.x - radius, point.y - radius, radius * 2, radius * 2);
          const data = imageData.data;

          for (let i = 0; i < data.length; i += 4) {
            const pixelX = Math.floor((i / 4) % (radius * 2));
            const pixelY = Math.floor((i / 4) / (radius * 2));
            const distToCenter = Math.sqrt(Math.pow(pixelX - radius, 2) + Math.pow(pixelY - radius, 2));
            const vibrancyFactor = Math.max(0, 1 - distToCenter / radius) * alpha;

            data[i] = Math.min(255, data[i] + vibrancyFactor * 50);
            data[i + 1] = Math.min(255, data[i + 1] + vibrancyFactor * 30);
            data[i + 2] = Math.min(255, data[i + 2] + vibrancyFactor * 60);
          }

          ctx.putImageData(imageData, point.x - radius, point.y - radius);
        });

        return newTrail;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto mb-8 max-w-sm"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-purple-400/20 to-purple-600/20 p-1">
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className="w-full h-auto rounded-2xl"
          onLoad={handleImageLoad}
          style={{ display: 'none' }}
        />
        <canvas
          ref={canvasRef}
          className="w-full h-auto rounded-2xl transition-all duration-300 cursor-crosshair"
        />
        <canvas
          ref={colorCanvasRef}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
}
