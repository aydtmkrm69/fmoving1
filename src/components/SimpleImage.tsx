'use client';

import Image from 'next/image';

interface SimpleImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function SimpleImage({
  src,
  alt,
  width = 800,
  height = 400,
  className = '',
  priority = false
}: SimpleImageProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
        priority={priority}
        unoptimized={true}
      />
    </div>
  );
} 