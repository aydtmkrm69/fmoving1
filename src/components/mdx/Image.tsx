'use client';

import Image from 'next/image';

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
  // تحديد المسار الصحيح للصورة
  let imageSrc = src;
  
  // إذا كان المسار يحتوي على اسم ملف غير موجود، استخدم صورة افتراضية
  if (src.includes('safe-furniture-moving-steps.jpg')) {
    imageSrc = '/images/blog/Steps_to_Move_Furniture_Without_Damage.jpeg';
  } else if (src.includes('furniture-packing-materials.jpg')) {
    imageSrc = '/images/blog/Professional_Furniture_Packing.jpeg';
  } else if (src.includes('furniture-disassembly-process.jpg')) {
    imageSrc = '/images/blog/Safely_Disassemble_and Assemble_Complex_Furniture.jpeg';
  } else if (src.includes('truck-loading-arrangement.jpg')) {
    imageSrc = '/images/blog/Furniture_Moving_Process.jpeg';
  } else if (src.includes('furniture-installation-new-home.jpg')) {
    imageSrc = '/images/blog/Your_Guide_to_Efficiently_Arranging_Your_New_Home.jpeg';
  } else if (src.includes('successful-furniture-moving.jpg')) {
    imageSrc = '/images/blog/Furniture_Moving_Services.jpeg';
  } else if (!src.startsWith('/images/blog/')) {
    // إذا لم يكن المسار صحيحاً، استخدم صورة افتراضية
    imageSrc = '/images/blog/Furniture_Moving_Process.jpeg';
  }
  
  return (
    <figure className="my-8">
      <div className={`relative overflow-hidden rounded-lg ${className}`}>
        <Image
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-full"
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          unoptimized={true}
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