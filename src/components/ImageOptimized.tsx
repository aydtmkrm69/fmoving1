'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { resolveImagePath } from '@/utils/imageUtils';

interface ImageOptimizedProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackSeed?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  eager?: boolean;
}

export default function ImageOptimized({
  src,
  alt,
  width,
  height,
  className = '',
  fallbackSeed = 'default',
  priority = false,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  eager = false,
}: ImageOptimizedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState<string>('');
  
  useEffect(() => {
    // Resolver la ruta de la imagen en el lado del cliente
    const resolvedPath = resolveImagePath(src, fallbackSeed);
    setImgSrc(resolvedPath);
  }, [src, fallbackSeed]);

  // Si no hay imagen, no renderizar nada
  if (!imgSrc && !src) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={alt}
          width={fill ? undefined : (width || 1200)}
          height={fill ? undefined : (height || 800)}
          className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
          priority={priority}
          loading={eager || priority ? 'eager' : 'lazy'}
          fill={fill}
          sizes={sizes}
          quality={75}
        />
      )}
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ aspectRatio: width && height ? `${width}/${height}` : '16/9' }}
        />
      )}
    </div>
  );
} 