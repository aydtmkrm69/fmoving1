'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getImagePath } from '@/utils/imageUtils';

interface SafeImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  caption?: string;
}

export default function SafeImage({
  src,
  alt,
  width = 800,
  height = 400,
  className = '',
  priority = false,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw',
  loading = 'lazy',
  caption
}: SafeImageProps) {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Get the validated image path
    const validSrc = getImagePath(src);
    setImageSrc(validSrc);
    setIsLoading(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Fallback to the default image
      setImageSrc('/images/blog/Furniture_Moving_Process.jpeg');
    }
  };

  if (isLoading || !imageSrc) {
    return (
      <div 
        className={`bg-gray-200 animate-pulse ${className}`}
        style={{ 
          width: fill ? '100%' : width, 
          height: fill ? '100%' : height,
          aspectRatio: fill ? 'inherit' : `${width}/${height}`
        }}
      />
    );
  }

  const imageProps = {
    src: imageSrc,
    alt,
    className: `object-cover ${className}`,
    onError: handleError,
    priority,
    sizes,
    loading: priority ? 'eager' : loading,
  };

  const imageElement = fill ? (
    <Image
      {...imageProps}
      fill
    />
  ) : (
    <Image
      {...imageProps}
      width={width}
      height={height}
    />
  );

  // If caption is provided, wrap in figure
  if (caption) {
    return (
      <figure className="my-8">
        <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
          {imageElement}
        </div>
        <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
          {caption}
        </figcaption>
      </figure>
    );
  }

  return imageElement;
} 