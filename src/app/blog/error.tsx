'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto text-center p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">عذراً، حدث خطأ ما</h2>
        <p className="text-gray-600 mb-8">
          نواجه مشكلة في تحميل المقالات. يرجى المحاولة مرة أخرى لاحقاً.
        </p>
        <div className="space-y-4">
          <button
            onClick={reset}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full"
          >
            حاول مرة أخرى
          </button>
          <Link
            href="/"
            className="block bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
} 