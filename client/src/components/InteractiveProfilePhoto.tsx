import React, { useRef, useState } from 'react';

interface InteractiveProfilePhotoProps {
  src: string;
  alt: string;
}

export default function InteractiveProfilePhoto({ src, alt }: InteractiveProfilePhotoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canvasRef.current || !imgRef.current) return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imgRef.current;
    const width = img.width;
    const height = img.height;

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);

    const radius = 100;
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, 'rgba(168, 85, 247, 0.4)');
    gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();

    // Apply vibrancy effect in the hover area
    const imageData = ctx.getImageData(
      Math.max(0, x - radius),
      Math.max(0, y - radius),
      Math.min(width, radius * 2),
      Math.min(height, radius * 2)
    );
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const distance = Math.sqrt(
        Math.pow(x - ((i / 4) % width), 2) + Math.pow(y - Math.floor((i / 4) / width), 2)
      );
      const vibrancyFactor = Math.max(0, 1 - distance / radius);

      data[i] = Math.min(255, data[i] + vibrancyFactor * 30);
      data[i + 1] = Math.min(255, data[i + 1] + vibrancyFactor * 20);
      data[i + 2] = Math.min(255, data[i + 2] + vibrancyFactor * 40);
    }

    ctx.putImageData(imageData, Math.max(0, x - radius), Math.max(0, y - radius));
  };

  const handleMouseLeave = () => {
    if (!canvasRef.current || !imgRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imgRef.current;
    ctx.clearRect(0, 0, img.width, img.height);
    ctx.drawImage(img, 0, 0, img.width, img.height);
    setIsHovering(false);
  };

  const handleImageLoad = () => {
    if (!canvasRef.current || !imgRef.current) return;
    const canvas = canvasRef.current;
    const img = imgRef.current;

    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.drawImage(img, 0, 0);
  };

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
          className={`w-full h-auto rounded-2xl transition-all duration-300 ${
            isHovering ? 'brightness-110' : 'brightness-100'
          }`}
          onLoad={handleImageLoad}
        />
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full rounded-2xl cursor-none"
          style={{ display: isHovering ? 'block' : 'none' }}
        />
        {isHovering && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-600/20 via-transparent to-transparent animate-pulse" />
        )}
      </div>
    </div>
  );
}
