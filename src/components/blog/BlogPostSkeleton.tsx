export default function BlogPostSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image placeholder */}
      <div className="h-48 bg-gray-200 animate-pulse"></div>
      <div className="p-6">
        {/* Author info placeholder */}
        <div className="flex items-center space-x-4 space-x-reverse mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="space-y-2">
            <div className="h-4 w-24 bg-gray-200 animate-pulse rounded"></div>
            <div className="h-3 w-16 bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
        {/* Title placeholder */}
        <div className="h-6 w-full bg-gray-200 animate-pulse rounded mb-3"></div>
        {/* Description placeholder */}
        <div className="space-y-2 mb-4">
          <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
          <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded"></div>
        </div>
        {/* Meta info placeholder */}
        <div className="flex items-center space-x-4 space-x-reverse">
          <div className="h-4 w-20 bg-gray-200 animate-pulse rounded"></div>
          <div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
        </div>
      </div>
    </div>
  );
} 