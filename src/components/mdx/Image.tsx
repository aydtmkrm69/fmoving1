'use client';

import NextImage from 'next/image';
import LazyLoad from '../LazyLoad';
import { useState, useEffect } from 'react';

type ImageProps = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
};

// Fallback images from the actual blog directory
const FALLBACK_IMAGES = [
  '/images/blog/Furniture_Moving_Process.jpeg',
  '/images/blog/Furniture_Moving_Services.jpeg',
  '/images/blog/Everything_You_Need_to_Know_About_Moving_Furniture_in_Dammam.jpeg',
  '/images/blog/Guide_to Successful_Furniture_Moving.jpeg',
  '/images/blog/Furniture_Moving_Saudi_arabia.jpeg',
  '/images/blog/Services_in_Furniture_Moving_Worth_the_Cost.jpeg'
];

// Mapping for common image paths that might be referenced in blog posts
const IMAGE_MAPPING: Record<string, string> = {
  '/images/blog/moving-furniture-dammam.jpg': '/images/blog/Everything_You_Need_to_Know_About_Moving_Furniture_in_Dammam.jpeg',
  '/images/blog/dammam-neighborhoods-map.jpg': '/images/blog/Best_Neighborhoods_in_Riyadh_for_New_Housing.jpeg',
  '/images/blog/humidity-protection-dammam.jpg': '/images/blog/Safely_Disassemble_and Assemble_Complex_Furniture.jpeg',
  '/images/blog/moving-services-saudi-cities.jpg': '/images/blog/Furniture_Moving_Services.jpeg',
  '/images/blog/furniture-moving-tips.jpg': '/images/blog/Golden_Tips_for_a_Stress-Free.jpeg',
  '/images/blog/moving-day-checklist.jpg': '/images/blog/Ultimate_Checklist_Before_Moving_Day.jpeg',
  
  // مسارات الصور التي سببت الأخطاء
  '/images/Furniture_moving_Jeddah.jpeg': '/images/blog/Furniture_Moving_in_Jeddah.jpeg',
  '/images/Furniture_moving_Dammam.jpeg': '/images/blog/Everything_You_Need_to_Know_About_Moving_Furniture_in_Dammam.jpeg',
  
  // صور الشهادات - الآن موجودة في المجلد الصحيح
  '/images/testimonials/testimonial-1.jpg': '/images/testimonials/testimonial-1.jpg',
  '/images/testimonials/testimonial-2.jpg': '/images/testimonials/testimonial-2.jpg',
  '/images/testimonials/testimonial-3.jpg': '/images/testimonials/testimonial-3.jpg',
  '/images/testimonials/testimonial-4.jpg': '/images/testimonials/testimonial-4.jpg',
  '/images/testimonials/testimonial-5.jpg': '/images/testimonials/testimonial-5.jpg',
  '/images/testimonials/testimonial-6.jpg': '/images/testimonials/testimonial-6.jpg',
  '/images/testimonials/testimonial-7.jpg': '/images/testimonials/testimonial-7.jpg',
  '/images/testimonials/testimonial-8.jpg': '/images/testimonials/testimonial-8.jpg',
  '/images/testimonials/testimonial-9.jpg': '/images/testimonials/testimonial-9.jpg',
};

// Skeleton for the image
function ImageSkeleton() {
  return (
    <div className="relative h-[400px] overflow-hidden rounded-lg bg-gray-200 animate-pulse">
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

export default function Image({ src, alt, caption, className = '' }: ImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    // Check if there's a direct mapping for this image path
    if (IMAGE_MAPPING[src]) {
      setImageSrc(IMAGE_MAPPING[src]);
      return;
    }

    // If source already starts with /images/blog and includes a valid extension, use it
    if (src.startsWith('/images/blog/') && 
        (src.endsWith('.jpg') || src.endsWith('.jpeg') || src.endsWith('.png'))) {
      // Keep original source for now, will handle error with onError
      return;
    }

    // For other cases, use a fallback image based on the alt text "hash"
    const altTextSum = alt.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const fallbackIndex = altTextSum % FALLBACK_IMAGES.length;
    setImageSrc(FALLBACK_IMAGES[fallbackIndex]);
  }, [src, alt]);

  // Handle image load error
  const handleError = () => {
    if (errorCount > FALLBACK_IMAGES.length) {
      // If we've tried too many times, just use the first fallback
      setImageSrc(FALLBACK_IMAGES[0]);
      return;
    }

    // Try a different fallback image
    const nextIndex = errorCount % FALLBACK_IMAGES.length;
    setImageSrc(FALLBACK_IMAGES[nextIndex]);
    setErrorCount(prev => prev + 1);
  };

  return (
    <figure className="my-8">
      <LazyLoad placeholder={<ImageSkeleton />}>
        <div className="relative h-[400px] overflow-hidden rounded-lg">
          <NextImage
            src={imageSrc}
            alt={alt}
            fill
            loading="lazy"
            className={`object-cover ${className}`}
            onError={handleError}
          />
        </div>
      </LazyLoad>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
} 