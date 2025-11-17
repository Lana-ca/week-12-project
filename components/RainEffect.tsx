'use client';

import { useEffect, useState } from 'react';

interface Raindrop {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

export default function RainEffect() {
  const [raindrops, setRaindrops] = useState<Raindrop[]>([]);

  useEffect(() => {
    // Generate random raindrops
    const drops: Raindrop[] = [];
    for (let i = 0; i < 30; i++) {
      drops.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 1.5 + Math.random() * 1,
      });
    }
    setRaindrops(drops);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {raindrops.map((drop) => (
        <div
          key={drop.id}
          className="raindrop"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
          }}
        />
      ))}

      {/* Subtle rain sound indicator (visual) */}
      <div className="absolute bottom-4 right-4 text-water-sea/30 text-xs vintage-text flex items-center gap-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="animate-pulse"
        >
          <path d="M8 0c-1.5 0-2.5 1.5-2.5 3s1 3 2.5 3 2.5-1.5 2.5-3S9.5 0 8 0zm0 11c-1.5 0-2.5 1.5-2.5 3s1 3 2.5 3 2.5-1.5 2.5-3-1-3-2.5-3zM3 5.5C1.5 5.5.5 7 .5 8.5S1.5 11.5 3 11.5 5.5 10 5.5 8.5 4.5 5.5 3 5.5zm10 0c-1.5 0-2.5 1.5-2.5 3s1 3 2.5 3 2.5-1.5 2.5-3-1-3-2.5-3z" />
        </svg>
        <span>The sound of rain...</span>
      </div>
    </div>
  );
}
