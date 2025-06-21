'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiTag, FiArrowRight } from 'react-icons/fi';
import type { BlogPost } from '@/types/blog';
import LazyLoad from '../LazyLoad';
import BlogSidebar from './BlogSidebar';
import { useEffect } from 'react';
import { resolveImagePath } from '@/utils/imageUtils';
import { formatDateArabic, formatDateISO } from '@/utils/dateUtils';
import Script from 'next/script';
import { SITE_URL, generateArticleSchema, generateBreadcrumbSchema } from '@/utils/seo';

type ArticleTemplateProps = {
  post: BlogPost;
  content: React.ReactNode;
};

// Author card skeleton
function AuthorCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-start space-x-6 space-x-reverse">
        <div className="w-24 h-24 bg-gray-200 animate-pulse rounded-lg"></div>
        <div className="w-full">
          <div className="h-6 w-40 bg-gray-200 animate-pulse rounded mb-3"></div>
          <div className="h-4 w-full bg-gray-200 animate-pulse rounded mb-2"></div>
          <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded mb-4"></div>
          <div className="flex flex-wrap gap-2">
            <div className="h-5 w-20 bg-blue-50 animate-pulse rounded-full"></div>
            <div className="h-5 w-24 bg-blue-50 animate-pulse rounded-full"></div>
            <div className="h-5 w-32 bg-blue-50 animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Content skeleton
function ContentSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="space-y-4">
        <div className="h-6 w-full bg-gray-200 animate-pulse rounded"></div>
        <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
        <div className="h-4 w-5/6 bg-gray-200 animate-pulse rounded"></div>
        <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
        <div className="h-40 bg-gray-200 animate-pulse rounded my-8"></div>
        <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
        <div className="h-4 w-4/5 bg-gray-200 animate-pulse rounded"></div>
        <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
      </div>
    </div>
  );
}

// Sidebar skeleton
function SidebarSkeleton() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="h-6 w-40 bg-gray-200 animate-pulse rounded mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
          <div className="h-4 w-4/5 bg-gray-200 animate-pulse rounded"></div>
          <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded"></div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="h-6 w-40 bg-gray-200 animate-pulse rounded mb-4"></div>
        <div className="space-y-4">
          <div className="flex items-start space-x-4 space-x-reverse">
            <div className="w-16 h-16 bg-gray-200 animate-pulse rounded-lg"></div>
            <div className="flex-1">
              <div className="h-4 w-full bg-gray-200 animate-pulse rounded mb-2"></div>
              <div className="h-3 w-24 bg-gray-200 animate-pulse rounded"></div>
            </div>
          </div>
          <div className="flex items-start space-x-4 space-x-reverse">
            <div className="w-16 h-16 bg-gray-200 animate-pulse rounded-lg"></div>
            <div className="flex-1">
              <div className="h-4 w-full bg-gray-200 animate-pulse rounded mb-2"></div>
              <div className="h-3 w-24 bg-gray-200 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ArticleTemplate({ post, content }: ArticleTemplateProps) {
  // Helper function to render different types of content
  const renderContent = () => {
    // If content is a string, render it as HTML with corrected image paths
    if (typeof content === 'string') {
      // Fix image paths in the HTML content
      let fixedContent = content;
      
      // Look for img tags with src attributes
      const imgSrcRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
      
      // Replace each image path with a corrected one
      fixedContent = fixedContent.replace(imgSrcRegex, (match, src) => {
        // Use resolveImagePath from our utils
        const resolvedSrc = resolveImagePath(src, post.title);
        return match.replace(src, resolvedSrc);
      });
      
      return <div dangerouslySetInnerHTML={{ __html: fixedContent }} />;
    }
    
    // If content is a React node, render it directly
    return content;
  };

  // Resolve the hero image path
  const heroImage = resolveImagePath(post.image, post.title);
  // Resolve the author image path
  const authorImage = resolveImagePath(post.author.image, post.author.name);

  // Generate structured data for the article
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt || post.description,
    publishedAt: new Date(post.publishedAt).toISOString(),
    updatedAt: post.updatedAt ? new Date(post.updatedAt).toISOString() : undefined,
    imageUrl: heroImage,
    authorName: post.author.name,
    url: `/blog/${post.slug}`
  });

  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'الرئيسية', url: '/' },
    { name: 'المدونة', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` }
  ]);

  return (
    <article className="min-h-screen bg-gray-50">
      {/* Structured Data */}
      <Script 
        id="article-schema" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script 
        id="breadcrumb-schema" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="breadcrumbs" className="bg-white shadow-sm py-3">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                الرئيسية
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">
                المدونة
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span className="text-gray-400 truncate max-w-[200px]">{post.title}</span>
            </li>
          </ol>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] bg-gray-900">
        <Image
          src={heroImage}
          alt={post.title}
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
          unoptimized={true}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl">
              {post.title}
            </h1>
            <div className="flex items-center space-x-6 space-x-reverse text-white/90">
              <div className="flex items-center">
                <div className="relative w-12 h-12 ml-3">
                  <Image
                    src={authorImage}
                    alt={post.author.name}
                    fill
                    loading="lazy"
                    className="object-cover rounded-full"
                    sizes="48px"
                    unoptimized={true}
                  />
                </div>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-white/70">
                    <time dateTime={formatDateISO(post.publishedAt)}>
                      {formatDateArabic(post.publishedAt)}
                    </time>
                  </p>
                </div>
              </div>
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
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {/* Author Card */}
            <LazyLoad 
              placeholder={<AuthorCardSkeleton />}
              rootMargin="50px 0px"
            >
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-start space-x-6 space-x-reverse">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={authorImage}
                      alt={post.author.name}
                      fill
                      loading="lazy"
                      className="object-cover rounded-lg"
                      sizes="96px"
                      unoptimized={true}
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-gray-800">{post.author.name}</h2>
                    <p className="text-gray-600 mb-3">{post.author.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.author.credentials.map((credential, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full"
                        >
                          {credential}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </LazyLoad>

            {/* Article Content */}
            <LazyLoad 
              placeholder={<ContentSkeleton />}
              rootMargin="100px 0px"
            >
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-lg prose-img:my-8 text-gray-800">
                  {renderContent()}
                </div>

                {/* Tags */}
                <div className="mt-8 pt-8 border-t">
                  <h3 className="text-lg font-bold mb-4 text-gray-800">الوسوم:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </LazyLoad>
          </div>

          {/* Sidebar */}
          <LazyLoad 
            placeholder={<SidebarSkeleton />}
            rootMargin="50px 0px"
          >
            <BlogSidebar post={post} />
          </LazyLoad>
        </div>
      </div>
    </article>
  );
} 