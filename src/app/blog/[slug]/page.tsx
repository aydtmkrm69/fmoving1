import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiTag, FiArrowRight } from 'react-icons/fi';
import { posts } from '@/data/posts';
import type { BlogPost } from '@/types/blog';
import Script from 'next/script';
import ArticleTemplate from '@/components/mdx/ArticleTemplate';

type Props = {
  params: { slug: string }
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find(post => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'مقال غير موجود - مدونة نقل العفش',
      description: 'عذراً، المقال الذي تبحث عنه غير موجود.'
    };
  }

  return {
    title: `${post.title} - مدونة نقل العفش`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
      type: 'article',
      authors: [post.author.name],
      publishedTime: post.publishedAt,
    },
  };
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: Props) {
  const post = posts.find(post => post.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto text-center p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">عذراً، المقال غير موجود</h1>
          <p className="text-gray-600 mb-8">
            المقال الذي تبحث عنه غير موجود أو ربما تم نقله إلى عنوان آخر.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <FiArrowRight className="ml-2" />
            العودة إلى المدونة
          </Link>
        </div>
      </div>
    );
  }

  // Schema.org structured data for the article
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'شركة نقل العفش',
      logo: {
        '@type': 'ImageObject',
        url: 'https://your-domain.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://your-domain.com/blog/${post.slug}`
    }
  };

  return (
    <>
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ArticleTemplate
        post={post}
        content={post.content}
      />
    </>
  );
} 