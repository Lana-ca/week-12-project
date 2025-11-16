'use client';

import Image from 'next/image';

interface PhotoTuckProps {
  imagePath: string;
  caption?: string;
}

export default function PhotoTuck({ imagePath, caption }: PhotoTuckProps) {
  return (
    <div className="relative group">
      {/* Photo container with corner curl */}
      <div className="relative bg-white p-3 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
        {/* Placeholder for photo */}
        <div className="relative w-full h-64 bg-gradient-to-br from-memory-sepia to-memory-amber flex items-center justify-center">
          <span className="text-parchment-light vintage-text text-sm">
            {caption || 'Family Photo'}
          </span>
        </div>

        {/* Corner curl effect (top-right) */}
        <div className="absolute top-0 right-0 w-0 h-0 border-style-solid border-width-0">
          <div
            className="absolute top-0 right-0 w-8 h-8"
            style={{
              background: 'linear-gradient(135deg, transparent 0%, transparent 50%, rgba(200, 200, 200, 0.3) 50%, rgba(150, 150, 150, 0.5) 100%)',
              clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
            }}
          ></div>
        </div>

        {/* Tape holding the photo */}
        <div className="absolute -top-2 left-1/4 w-16 h-6 bg-memory-golden/40 transform -rotate-12 shadow-sm"></div>
        <div className="absolute -top-2 right-1/4 w-16 h-6 bg-memory-golden/40 transform rotate-12 shadow-sm"></div>
      </div>

      {/* Handwritten caption below */}
      {caption && (
        <p className="mt-3 text-center handwritten text-lg text-earth-brown">
          {caption}
        </p>
      )}

      {/* Shadow beneath photo */}
      <div className="absolute inset-0 -z-10 bg-earth-brown/10 blur-sm transform translate-y-1 translate-x-1"></div>
    </div>
  );
}
