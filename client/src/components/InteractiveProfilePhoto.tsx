import React, { useRef, useState } from 'react';

interface InteractiveProfilePhotoProps {
  src: string;
  alt: string;
}

const hobbies = [
  { emoji: '🎾', label: 'Tennis', glow: 'from-lime-400/30 to-green-500/30' },
  { emoji: '📚', label: 'Reading', glow: 'from-orange-400/30 to-amber-500/30' },
  { emoji: '💻', label: 'Coding', glow: 'from-purple-400/30 to-indigo-500/30' },
  { emoji: '💪', label: 'Fitness', glow: 'from-red-400/30 to-rose-500/30' },
  { emoji: '🏓', label: 'Pickleball', glow: 'from-yellow-400/30 to-orange-500/30' },
  { emoji: '🎮', label: 'Gaming', glow: 'from-cyan-400/30 to-blue-500/30' },
];

export default function InteractiveProfilePhoto({ src, alt }: InteractiveProfilePhotoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [transform, setTransform] = useState({ rx: 0, ry: 0, tx: 0, ty: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isFlipped) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const nx = (x - cx) / cx;
    const ny = (y - cy) / cy;
    setTransform({ rx: -ny * 12, ry: nx * 12, tx: nx * 6, ty: ny * 6 });
    setSpotlight({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setTransform({ rx: 0, ry: 0, tx: 0, ty: 0 });
    setSpotlight({ x: 50, y: 50 });
  };

  const flipRotation = isFlipped ? 180 : 0;

  return (
    <div
      ref={containerRef}
      className="relative mx-auto max-w-sm cursor-pointer select-none"
      style={{ perspective: '1500px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsFlipped((v) => !v)}
    >
      {/* Animated glow halo */}
      <div
        className={`absolute -inset-6 rounded-3xl transition-opacity duration-500 ${
          isHovering ? 'opacity-100' : 'opacity-60'
        }`}
        style={{
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(168, 85, 247, 0.5), rgba(139, 92, 246, 0.2) 40%, transparent 70%)`,
          filter: 'blur(40px)',
          transition: 'background 0.15s ease-out, opacity 0.5s',
        }}
      />

      {/* Flip wrapper */}
      <div
        className="relative transition-transform ease-out"
        style={{
          transform: isFlipped
            ? `rotateY(${flipRotation}deg)`
            : `rotateX(${transform.rx}deg) rotateY(${transform.ry}deg) translate3d(${transform.tx}px, ${transform.ty}px, 0)`,
          transformStyle: 'preserve-3d',
          transitionDuration: isFlipped ? '700ms' : '200ms',
        }}
      >
        {/* FRONT */}
        <div
          className="relative rounded-2xl p-[2px] bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 shadow-2xl"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-black">
            <img
              src={src}
              alt={alt}
              className={`block w-full h-auto rounded-2xl transition-all duration-500 ${
                isHovering && !isFlipped ? 'scale-105 saturate-150' : 'scale-100 saturate-100'
              }`}
              draggable={false}
            />
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle 200px at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.25), transparent 60%)`,
                opacity: isHovering && !isFlipped ? 1 : 0,
                mixBlendMode: 'overlay',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle 250px at ${spotlight.x}% ${spotlight.y}%, rgba(168,85,247,0.18), rgba(236,72,153,0.1) 40%, transparent 70%)`,
                opacity: isHovering && !isFlipped ? 1 : 0,
                mixBlendMode: 'screen',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background: `linear-gradient(${135 + (spotlight.x - 50) * 0.5}deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)`,
                opacity: isHovering && !isFlipped ? 1 : 0,
              }}
            />

            {/* Bottom hint */}
            <div
              className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent transition-all duration-500 ${
                isHovering && !isFlipped ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <p className="text-white font-semibold text-lg drop-shadow-lg">Parth Bhodia</p>
              <p className="text-purple-200 text-sm">Click to see my hobbies →</p>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-purple-600 via-pink-500 to-purple-400 shadow-2xl"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 p-6 flex flex-col">
            <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
              Off the clock
            </h3>
            <p className="text-purple-200/70 text-xs mb-5">When I'm not building things, I'm…</p>

            <div className="grid grid-cols-3 gap-3 flex-1">
              {hobbies.map(({ emoji, label, glow }, i) => (
                <div
                  key={i}
                  className={`group relative flex flex-col items-center justify-center text-center gap-1.5 p-3 rounded-xl bg-gradient-to-br ${glow} border border-white/10 hover:border-purple-400/50 transition-all overflow-hidden`}
                  style={{
                    animation: isFlipped ? `fadeInUp 0.5s ease-out ${0.3 + i * 0.05}s both` : 'none',
                  }}
                >
                  <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                    {emoji}
                  </span>
                  <span className="text-[11px] font-medium text-white/90 leading-tight">{label}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-purple-300/60 text-xs mt-4">Click to flip back</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
