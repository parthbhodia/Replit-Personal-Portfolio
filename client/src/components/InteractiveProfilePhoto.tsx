import React, { useRef, useState, useEffect } from 'react';

interface InteractiveProfilePhotoProps {
  src: string;
  alt: string;
}

interface TrailPoint {
  x: number;
  y: number;
  age: number;
}

export default function InteractiveProfilePhoto({ src, alt }: InteractiveProfilePhotoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<TrailPoint[]>([]);
  const animationFrameRef = useRef<number>();
  const [cursorSize, setCursorSize] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !imgRef.current || !canvasRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const canvas = canvasRef.current;

    // Calculate position relative to canvas
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    setCursorPos({ x, y });

    // Add trail point
    trailRef.current.push({ x, y, age: 0 });

    // Keep only last 20 points
    if (trailRef.current.length > 20) {
      trailRef.current.shift();
    }
  };

  const handleMouseEnter = () => {
    setCursorSize(150);
  };

  const handleMouseLeave = () => {
    setCursorSize(0);
    trailRef.current = [];
  };

  const handleImageLoad = () => {
    if (!canvasRef.current || !imgRef.current) return;

    const canvas = canvasRef.current;
    const img = imgRef.current;

    // Set canvas size to match image
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    // Draw initial grayscale image
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.filter = 'grayscale(80%)';
    ctx.drawImage(img, 0, 0);
    ctx.filter = 'none';
  };

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || !imgRef.current) return;

    const canvas = canvasRef.current;
    const img = imgRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      // Redraw base grayscale image
      ctx.filter = 'grayscale(80%)';
      ctx.drawImage(img, 0, 0);
      ctx.filter = 'none';

      // Update trail points
      trailRef.current = trailRef.current.map(point => ({
        ...point,
        age: point.age + 1
      })).filter(point => point.age < 40);

      // Draw trail with color overlay
      trailRef.current.forEach((point, index) => {
        const progress = point.age / 40;
        const radius = 100 * (1 - progress * 0.5);
        const alpha = 0.8 * (1 - progress);

        // Create radial gradient with vibrant colors
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, radius);
        gradient.addColorStop(0, `rgba(168, 85, 247, ${alpha})`);
        gradient.addColorStop(0.4, `rgba(139, 92, 246, ${alpha * 0.8})`);
        gradient.addColorStop(1, `rgba(168, 85, 247, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
        ctx.fill();

        // Apply vibrant color boost to pixels under the trail
        const imageData = ctx.getImageData(
          Math.max(0, point.x - radius),
          Math.max(0, point.y - radius),
          Math.min(canvas.width, radius * 2),
          Math.min(canvas.height, radius * 2)
        );

        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          const pixelIndex = i / 4;
          const pixelX = (pixelIndex % (radius * 2));
          const pixelY = Math.floor(pixelIndex / (radius * 2));
          const distToCenter = Math.sqrt(
            Math.pow(pixelX - radius, 2) + Math.pow(pixelY - radius, 2)
          );

          if (distToCenter < radius) {
            const vibrancyFactor = Math.max(0, 1 - distToCenter / radius) * alpha;
            data[i] = Math.min(255, data[i] + vibrancyFactor * 60); // Red
            data[i + 1] = Math.min(255, data[i + 1] + vibrancyFactor * 40); // Green
            data[i + 2] = Math.min(255, data[i + 2] + vibrancyFactor * 80); // Blue
            data[i + 3] = 255; // Alpha
          }
        }

        ctx.putImageData(
          imageData,
          Math.max(0, point.x - radius),
          Math.max(0, point.y - radius)
        );
      });

      // Draw cursor circle
      if (cursorSize > 0) {
        const gradient = ctx.createRadialGradient(
          cursorPos.x,
          cursorPos.y,
          0,
          cursorPos.x,
          cursorPos.y,
          cursorSize
        );
        gradient.addColorStop(0, 'rgba(168, 85, 247, 0.3)');
        gradient.addColorStop(0.6, 'rgba(168, 85, 247, 0.1)');
        gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cursorPos.x, cursorPos.y, cursorSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw cursor ring
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cursorPos.x, cursorPos.y, cursorSize, 0, Math.PI * 2);
        ctx.stroke();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [cursorSize, cursorPos]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto mb-8 max-w-sm"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
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
          className="w-full h-auto rounded-2xl block"
          style={{ cursor: cursorSize > 0 ? 'none' : 'default' }}
        />
      </div>
    </div>
  );
}
