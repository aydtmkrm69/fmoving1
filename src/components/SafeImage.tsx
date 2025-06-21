'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

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
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [hasError, setHasError] = useState(false);

  // Function to get fallback image
  const getFallbackImage = () => {
    return '/images/blog/Furniture_Moving_Process.jpeg';
  };

  // Handle image error
  const handleError = () => {
    console.log('Image failed to load:', imageSrc);
    if (!hasError) {
      setHasError(true);
      const fallback = getFallbackImage();
      console.log('Using fallback:', fallback);
      setImageSrc(fallback);
    }
  };

  // Handle successful load
  const handleLoad = () => {
    console.log('Image loaded successfully:', imageSrc);
    setHasError(false);
  };

  const imageProps = {
    src: imageSrc,
    alt,
    className: `transition-opacity duration-300 ${className}`,
    onError: handleError,
    onLoad: handleLoad,
    priority,
    sizes,
    loading: priority ? 'eager' as const : loading,
  };

  const imageElement = fill ? (
    <Image
      {...imageProps}
      fill
      style={{ objectFit: 'cover' }}
    />
  ) : (
    <Image
      {...imageProps}
      width={width}
      height={height}
      style={{ objectFit: 'cover' }}
    />
  );

  // If caption is provided, wrap in figure
  if (caption) {
    return (
      <figure className="my-8">
        <div className={`relative ${fill ? 'w-full h-full' : ''} overflow-hidden rounded-lg`}>
          {imageElement}
          {hasError && (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">صورة غير متاحة</span>
            </div>
          )}
        </div>
        <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
          {caption}
        </figcaption>
      </figure>
    );
  }

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''} overflow-hidden rounded-lg`}>
      {imageElement}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">صورة غير متاحة</span>
        </div>
      )}
    </div>
  );
} 