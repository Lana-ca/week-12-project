'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RainEffect from './RainEffect';
import PhotoTuck from './PhotoTuck';

interface Page {
  id: number;
  title: string;
  content: string;
  date: string;
  hasRain: boolean;
  photos?: string[];
}

// Sample data for demonstration
const samplePages: Page[] = [
  {
    id: 1,
    title: "A Rainy Day with Grandma Ruby",
    content: `I remember sitting on Grandma Ruby's porch on a rainy afternoon in July. The smell of wet earth mixed with the sweet scent of her peach cobbler cooling on the windowsill. She told me stories about her childhood, about how she and her best friend used to dance in the rain, their feet splashing in the puddles.

Ruby was like sunshine, even on the cloudiest days. Her laughter could fill a whole room, warm and golden like honey dripping from a spoon. She always wore yellow – said it reminded her of hope and new beginnings.

That day, she taught me how to listen to the rain. "Every drop has a story," she said, her eyes twinkling. And I believed her, because Ruby had a way of making the ordinary feel magical.`,
    date: "July 1985",
    hasRain: true,
    photos: ["/images/sample-photo.jpg"]
  }
];

export default function GrimoirePage() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const currentPage = samplePages[currentPageIndex];

  const nextPage = () => {
    if (currentPageIndex < samplePages.length - 1) {
      setDirection(1);
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const prevPage = () => {
    if (currentPageIndex > 0) {
      setDirection(-1);
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  // Page turn animation variants
  const pageVariants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      transformOrigin: direction > 0 ? 'left' : 'right',
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      transformOrigin: 'center',
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
      transformOrigin: direction > 0 ? 'right' : 'left',
    }),
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-earth-dark-green via-parchment-dark to-water-deep">
      {/* Grimoire Book Container */}
      <div className="relative max-w-6xl w-full perspective-1000">
        {/* Book Binding (visible in the middle) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-8 -ml-4 bg-earth-brown shadow-2xl z-10 rounded-sm">
          <div className="h-full w-full bg-gradient-to-r from-earth-brown via-earth-red to-earth-brown opacity-80"></div>
          {/* Binding stitches */}
          <div className="absolute top-1/4 left-1/2 w-1 h-4 bg-memory-golden transform -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-4 bg-memory-golden transform -translate-x-1/2"></div>
          <div className="absolute top-3/4 left-1/2 w-1 h-4 bg-memory-golden transform -translate-x-1/2"></div>
        </div>

        {/* Two-Page Spread */}
        <div className="grid grid-cols-2 gap-0 relative">
          {/* Left Page (Previous/Current) */}
          <div className="relative h-[800px] wrinkled-paper paper-texture rounded-l-lg shadow-2xl border-r-2 border-earth-brown/20 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentPageIndex}
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  rotateY: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 p-12"
              >
                {/* Page Number */}
                <div className="absolute top-6 left-6 text-memory-sepia text-sm vintage-text">
                  Page {currentPageIndex * 2 + 1}
                </div>

                {/* Content */}
                <div className="h-full flex flex-col">
                  <h2 className="text-3xl mb-4 text-earth-red vintage-text font-semibold">
                    {currentPage.title}
                  </h2>
                  <p className="text-sm text-memory-sepia mb-6 vintage-text italic">
                    {currentPage.date}
                  </p>

                  {/* Main text content with handwriting font */}
                  <div className="flex-1 overflow-auto handwritten text-xl text-earth-dark-green leading-relaxed">
                    {currentPage.content}
                  </div>
                </div>

                {/* Page curl effect */}
                <div className="page-curl"></div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Page */}
          <div className="relative h-[800px] wrinkled-paper paper-texture rounded-r-lg shadow-2xl border-l-2 border-earth-brown/20 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentPageIndex + 0.5}
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  rotateY: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 p-12"
              >
                {/* Page Number */}
                <div className="absolute top-6 right-6 text-memory-sepia text-sm vintage-text">
                  Page {currentPageIndex * 2 + 2}
                </div>

                {/* Photos tucked into the page */}
                {currentPage.photos && currentPage.photos.length > 0 && (
                  <div className="space-y-6">
                    <h3 className="text-xl text-earth-red vintage-text mb-4">Captured Moments</h3>
                    {currentPage.photos.map((photo, index) => (
                      <PhotoTuck key={index} imagePath={photo} caption="Grandma Ruby on her porch" />
                    ))}
                  </div>
                )}

                {/* Additional notes or memories */}
                <div className="mt-8 p-6 bg-memory-golden/10 rounded border-l-4 border-memory-golden">
                  <p className="handwritten text-lg text-earth-brown">
                    <span className="font-semibold">Ruby&apos;s Essence:</span> Sunshine at noon, smells like fresh peaches and cinnamon, sounds like gentle laughter
                  </p>
                </div>

                {/* Rain effect overlay */}
                {currentPage.hasRain && <RainEffect />}

                {/* Page curl effect */}
                <div className="page-curl"></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute -left-16 top-1/2 transform -translate-y-1/2">
          <button
            onClick={prevPage}
            disabled={currentPageIndex === 0}
            className="w-12 h-12 rounded-full bg-earth-brown text-parchment-light shadow-lg hover:bg-earth-red transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            ←
          </button>
        </div>
        <div className="absolute -right-16 top-1/2 transform -translate-y-1/2">
          <button
            onClick={nextPage}
            disabled={currentPageIndex === samplePages.length - 1}
            className="w-12 h-12 rounded-full bg-earth-brown text-parchment-light shadow-lg hover:bg-earth-red transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            →
          </button>
        </div>

        {/* Bookmark */}
        <div className="absolute top-0 right-1/3 w-8 h-16 bg-memory-golden shadow-lg transform -translate-y-2 rounded-b-sm"></div>
      </div>

      {/* Title overlay */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <h1 className="text-4xl font-bold text-parchment-light vintage-text tracking-wider drop-shadow-lg">
          Family Grimoire
        </h1>
      </div>
    </div>
  );
}
