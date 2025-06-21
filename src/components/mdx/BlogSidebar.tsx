import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiTag } from 'react-icons/fi';
import { posts } from '@/data/posts';
import type { BlogPost } from '@/types/blog';
import { resolveImagePath } from '@/utils/imageUtils';
import { formatDateArabic } from '@/utils/dateUtils';

type BlogSidebarProps = {
  post: BlogPost;
};

export default function BlogSidebar({ post }: BlogSidebarProps) {
  // Find related posts based on tags (server-side)
  const relatedPosts = posts
    .filter(p => p.id !== post.id)
    .map(p => ({
      post: p,
      score: p.tags.filter(tag => post.tags.includes(tag)).length
    }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(item => item.post);
  
  return (
    <aside className="space-y-8">
      {/* Related Posts */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">مقالات ذات صلة</h3>
        {relatedPosts.length > 0 ? (
          <div className="space-y-4">
            {relatedPosts.map((relatedPost) => (
              <Link 
                href={`/blog/${relatedPost.slug}`} 
                key={relatedPost.id}
                className="flex items-start space-x-3 space-x-reverse pb-3 group hover:bg-blue-50/30 p-2 rounded-md transition-colors"
              >
                <div className="relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={resolveImagePath(relatedPost.image, relatedPost.title)}
                    alt={relatedPost.title}
                    fill
                    className="object-cover"
                    unoptimized={true}
                    sizes="64px"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {relatedPost.title}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {formatDateArabic(relatedPost.publishedAt)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-3">لا توجد مقالات ذات صلة حالياً</p>
        )}
      </div>
      
      {/* Tags */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">الوسوم</h3>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm"
            >
              <FiTag className="ml-1 text-blue-500" />
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Category */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">التصنيف</h3>
        <Link
          href={`/blog/category/${post.category}`}
          className="inline-block bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-lg transition-colors"
        >
          {post.category}
        </Link>
      </div>

      {/* Quick Navigation */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">التنقل السريع</h3>
        <div className="space-y-2">
          <Link
            href="/blog"
            className="block text-gray-600 hover:text-blue-600 transition-colors"
          >
            ← العودة إلى المدونة
          </Link>
          <Link
            href="/get-a-free-quote"
            className="block text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            ← احصل على عرض سعر مجاني
          </Link>
          <Link
            href="/services"
            className="block text-gray-600 hover:text-blue-600 transition-colors"
          >
            ← تصفح خدماتنا
          </Link>
        </div>
      </div>
    </aside>
  );
} 