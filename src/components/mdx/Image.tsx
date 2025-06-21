'use client';

import Image from 'next/image';
import { getImagePath } from '@/utils/imageUtils';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  caption?: string;
}

export default function BlogImage({ 
  src, 
  alt, 
  width = 800, 
  height = 400, 
  className = '',
  priority = false,
  caption
}: ImageProps) {
  // Use getImagePath to ensure we have a valid image
  const validImageSrc = getImagePath(src);
  
  return (
    <figure className="my-8">
      <div className={`relative overflow-hidden rounded-lg ${className}`}>
        <Image
          src={validImageSrc}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-full"
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
} 