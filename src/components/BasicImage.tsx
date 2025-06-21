import Image from 'next/image';

interface BasicImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function BasicImage({
  src,
  alt,
  width = 800,
  height = 400,
  className = '',
  priority = false
}: BasicImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-cover ${className}`}
      priority={priority}
      unoptimized={true}
    />
  );
} 