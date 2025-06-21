'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiClock, FiTag } from 'react-icons/fi';
import type { BlogPost } from '@/types/blog';
import { formatDateArabic } from '@/utils/dateUtils';
import Script from 'next/script';
import LazyLoad from '../LazyLoad';
import BlogPostSkeleton from './BlogPostSkeleton';
import FeaturedPostSkeleton from './FeaturedPostSkeleton';
import { resolveImagePath } from '@/utils/imageUtils';

interface BlogClientComponentProps {
  initialPosts: BlogPost[];
  initialCategories: string[];
  initialFeaturedPosts: BlogPost[];
}

export default function BlogClientComponent({ 
  initialPosts,
  initialCategories,
  initialFeaturedPosts
}: BlogClientComponentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Filter posts based on search and category
  const filteredPosts = initialPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Schema.org structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'مدونة نقل العفش',
    description: 'مدونة متخصصة في خدمات نقل العفش والأثاث في المملكة العربية السعودية',
    url: 'https://your-domain.com/blog',
    inLanguage: 'ar-SA',
    publisher: {
      '@type': 'Organization',
      name: 'شركة نقل العفش',
      logo: {
        '@type': 'ImageObject',
        url: 'https://your-domain.com/logo.png'
      }
    },
    blogPost: filteredPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      author: {
        '@type': 'Person',
        name: post.author.name
      },
      image: post.image
    }))
  };

  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              مدونة نقل العفش
            </h1>
            <p className="text-xl text-center mb-8 max-w-2xl mx-auto">
              نصائح احترافية ومقالات متخصصة في مجال نقل الأثاث والعفش في المملكة العربية السعودية
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-lg text-gray-900 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Featured Posts */}
          {initialFeaturedPosts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8">مقالات مميزة</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {initialFeaturedPosts.map((post) => (
                  <LazyLoad 
                    key={post.id}
                    placeholder={<FeaturedPostSkeleton />}
                    rootMargin="200px 0px"
                  >
                    <FeaturedPostCard post={post} />
                  </LazyLoad>
                ))}
              </div>
            </section>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <LazyLoad 
                    key={post.id}
                    placeholder={<BlogPostSkeleton />}
                    rootMargin={`${200 + (index % 4) * 50}px 0px`}
                  >
                    <BlogPostCard post={post} />
                  </LazyLoad>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">التصنيفات</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('')}
                    className={`block w-full text-right py-2 px-3 rounded transition-colors ${
                      !selectedCategory ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50 text-gray-800'
                    }`}
                  >
                    جميع المقالات
                  </button>
                  {initialCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-right py-2 px-3 rounded transition-colors ${
                        selectedCategory === category ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50 text-gray-800'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">الأكثر قراءة</h3>
                <div className="space-y-4">
                  {initialPosts.slice(0, 5).map((post) => (
                    <Link 
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="flex items-start space-x-4 space-x-reverse hover:bg-gray-50 p-2 rounded transition-colors text-gray-800"
                    >
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image
                          src={resolveImagePath(post.image, post.title)}
                          alt={post.title}
                          fill
                          loading="lazy"
                          className="object-cover rounded"
                          unoptimized={true}
                        />
                      </div>
                      <div>
                        <h4 className="font-medium line-clamp-2 text-gray-800">{post.title}</h4>
                        <p className="text-sm text-gray-500">
                          {formatDateArabic(post.publishedAt)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

function FeaturedPostCard({ post }: { post: BlogPost }) {
  // حل مسارات الصور
  const postImage = resolveImagePath(post.image, post.title);
  const authorImage = resolveImagePath(post.author.image, post.author.name);

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="bg-white rounded-lg shadow-lg overflow-hidden group-hover:shadow-xl transition-shadow">
        <div className="relative h-64">
          <Image
            src={postImage}
            alt={post.title}
            fill
            loading="lazy"
            className="object-cover"
            unoptimized={true}
          />
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-4 space-x-reverse mb-4">
            <div className="relative w-12 h-12">
              <Image
                src={authorImage}
                alt={post.author.name}
                fill
                loading="lazy"
                className="object-cover rounded-full"
                unoptimized={true}
              />
            </div>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-gray-500">
                {formatDateArabic(post.publishedAt)}
              </p>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
          <div className="flex items-center text-sm text-gray-500 space-x-4 space-x-reverse">
            <span className="flex items-center">
              <FiClock className="ml-1" />
              {post.readingTime || '5 دقائق للقراءة'}
            </span>
            <span className="flex items-center">
              <FiTag className="ml-1" />
              {post.category}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function BlogPostCard({ post }: { post: BlogPost }) {
  // حل مسارات الصور
  const postImage = resolveImagePath(post.image, post.title);
  const authorImage = resolveImagePath(post.author.image, post.author.name);

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="bg-white rounded-lg shadow-md overflow-hidden group-hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <Image
            src={postImage}
            alt={post.title}
            fill
            loading="lazy"
            className="object-cover"
            unoptimized={true}
          />
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-4 space-x-reverse mb-4">
            <div className="relative w-10 h-10">
              <Image
                src={authorImage}
                alt={post.author.name}
                fill
                loading="lazy"
                className="object-cover rounded-full"
                unoptimized={true}
              />
            </div>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-gray-500">
                {formatDateArabic(post.publishedAt)}
              </p>
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 text-sm line-clamp-2">{post.description}</p>
          <div className="flex items-center text-sm text-gray-500 space-x-4 space-x-reverse">
            <span className="flex items-center">
              <FiClock className="ml-1" />
              {post.readingTime || '5 دقائق للقراءة'}
            </span>
            <span className="flex items-center">
              <FiTag className="ml-1" />
              {post.category}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
} 