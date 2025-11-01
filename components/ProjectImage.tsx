'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  iconSize?: 'sm' | 'md' | 'lg' | 'xl';
  priority?: boolean;
}

export default function ProjectImage({
  src,
  alt,
  className = '',
  iconSize = 'lg',
  priority = false
}: ProjectImageProps) {
  const [imageError, setImageError] = useState(false);

  const iconSizes = {
    sm: 'text-4xl',
    md: 'text-6xl',
    lg: 'text-7xl',
    xl: 'text-9xl',
  };

  // If image failed to load or doesn't exist, show placeholder
  if (imageError) {
    return (
      <div className={`bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center ${className}`}>
        <FaHeart className={`text-white ${iconSizes[iconSize]} opacity-50`} />
      </div>
    );
  }

  // Try to load the actual image
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setImageError(true)}
        priority={priority}
      />
    </div>
  );
}
