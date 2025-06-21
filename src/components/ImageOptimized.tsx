'use client';

import Image from 'next/image';
import { getImagePath } from '@/utils/imageUtils';

interface ImageOptimizedProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}

export default function ImageOptimized({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'
}: ImageOptimizedProps) {
  // Use getImagePath to ensure we have a valid image
  const validImageSrc = getImagePath(src);

  // Common image props
  const imageProps = {
    src: validImageSrc,
    alt,
    className: `object-cover ${className}`,
    priority,
    sizes,
  };

  if (fill) {
    return (
      <Image
        {...imageProps}
        fill
      />
    );
  }

  return (
    <Image
      {...imageProps}
      width={width || 800}
      height={height || 400}
    />
  );
} 