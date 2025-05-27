export default function FeaturedPostSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image placeholder */}
      <div className="h-64 bg-gray-200 animate-pulse"></div>
      <div className="p-6">
        {/* Author info placeholder */}
        <div className="flex items-center space-x-4 space-x-reverse mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="space-y-2">
            <div className="h-4 w-28 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-3 w-20 bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
        {/* Title placeholder */}
        <div className="h-7 w-full bg-gray-200 animate-pulse rounded mb-3"></div>
        {/* Description placeholder */}
        <div className="space-y-2 mb-4">
          <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
          <div className="h-4 w-4/5 bg-gray-200 animate-pulse rounded"></div>
        </div>
        {/* Meta info placeholder */}
        <div className="flex items-center space-x-4 space-x-reverse">
          <div className="h-4 w-24 bg-gray-200 animate-pulse rounded"></div>
          <div className="h-4 w-20 bg-gray-200 animate-pulse rounded"></div>
        </div>
      </div>
    </div>
  );
} 