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
  const originalCanvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<TrailPoint[]>([]);
  const animationFrameRef = useRef<number>();
  const [cursorSize, setCursorSize] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !imgRef.current || !canvasRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const canvas = canvasRef.current;

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    setCursorPos({ x, y });

    trailRef.current.push({ x, y, age: 0 });

    if (trailRef.current.length > 25) {
      trailRef.current.shift();
    }
  };

  const handleMouseEnter = () => {
    setCursorSize(120);
  };

  const handleMouseLeave = () => {
    setCursorSize(0);
    trailRef.current = [];
  };

  const handleImageLoad = () => {
    if (!canvasRef.current || !imgRef.current || !originalCanvasRef.current) return;

    const canvas = canvasRef.current;
    const originalCanvas = originalCanvasRef.current;
    const img = imgRef.current;

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    originalCanvas.width = img.naturalWidth;
    originalCanvas.height = img.naturalHeight;

    // Store original color image
    const originalCtx = originalCanvas.getContext('2d');
    if (originalCtx) {
      originalCtx.drawImage(img, 0, 0);
    }

    // Draw initial grayscale image
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.filter = 'grayscale(85%)';
    ctx.drawImage(img, 0, 0);
    ctx.filter = 'none';
  };

  useEffect(() => {
    if (!canvasRef.current || !imgRef.current || !originalCanvasRef.current) return;

    const canvas = canvasRef.current;
    const originalCanvas = originalCanvasRef.current;
    const img = imgRef.current;
    const ctx = canvas.getContext('2d');
    const originalCtx = originalCanvas.getContext('2d');

    if (!ctx || !originalCtx) return;

    const animate = () => {
      // Redraw base grayscale image
      ctx.filter = 'grayscale(85%)';
      ctx.drawImage(img, 0, 0);
      ctx.filter = 'none';

      // Update trail points
      trailRef.current = trailRef.current
        .map(point => ({
          ...point,
          age: point.age + 1
        }))
        .filter(point => point.age < 50);

      // Draw trail - reveal original color
      trailRef.current.forEach(point => {
        const progress = point.age / 50;
        const radius = 100 * (1 - progress * 0.4);
        const alpha = 1 - progress;

        // Get original color image data for this area
        const imageData = originalCtx.getImageData(
          Math.max(0, point.x - radius),
          Math.max(0, point.y - radius),
          Math.min(canvas.width, radius * 2),
          Math.min(canvas.height, radius * 2)
        );

        // Apply soft circular mask to fade at edges
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
          const pixelIndex = i / 4;
          const pixelX = pixelIndex % (radius * 2);
          const pixelY = Math.floor(pixelIndex / (radius * 2));
          const distToCenter = Math.sqrt(
            Math.pow(pixelX - radius, 2) + Math.pow(pixelY - radius, 2)
          );

          if (distToCenter < radius) {
            // Smooth falloff at edges
            const falloff = Math.max(0, 1 - distToCenter / radius);
            const blendAlpha = falloff * alpha;

            // Reveal the color from original by blending
            data[i + 3] = Math.round(255 * blendAlpha);
          } else {
            data[i + 3] = 0;
          }
        }

        ctx.putImageData(
          imageData,
          Math.max(0, point.x - radius),
          Math.max(0, point.y - radius)
        );
      });

      // Draw cursor circle with glow
      if (cursorSize > 0) {
        const gradient = ctx.createRadialGradient(
          cursorPos.x,
          cursorPos.y,
          0,
          cursorPos.x,
          cursorPos.y,
          cursorSize
        );
        gradient.addColorStop(0, 'rgba(168, 85, 247, 0.25)');
        gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.08)');
        gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cursorPos.x, cursorPos.y, cursorSize, 0, Math.PI * 2);
        ctx.fill();

        // Cursor ring
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.8)';
        ctx.lineWidth = 3;
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
        <canvas
          ref={originalCanvasRef}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
}
