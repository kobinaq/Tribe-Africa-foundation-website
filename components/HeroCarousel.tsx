'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroCarouselProps {
  images: string[];
  interval?: number;
}

export default function HeroCarousel({ images, interval = 5000 }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  // Check if all images have errors
  const allImagesError = images.every((_, index) => imageErrors[index]);

  if (allImagesError) {
    // Fallback to gradient if all images fail
    return (
      <div className="relative w-full h-full bg-gradient-to-br from-primary-700 to-primary-900">
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        {!imageErrors[currentIndex] ? (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt={`Hero slide ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority={currentIndex === 0}
              onError={() => handleImageError(currentIndex)}
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </motion.div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-900">
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        )}
      </AnimatePresence>

      {/* Carousel indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
