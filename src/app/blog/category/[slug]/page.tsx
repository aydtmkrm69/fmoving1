import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { posts } from '@/data/posts';
import { resolveImagePath } from '@/utils/imageUtils';
import { formatDateArabic } from '@/utils/dateUtils';
import { generateMetadata as generatePageMetadata } from '@/utils/seo';

interface PageProps {
  params: {
    slug: string;
  };
}

// Get category by slug (URL encoded or regular)
function getCategoryBySlug(slug: string) {
  // Decode URL-encoded category name
  const decodedSlug = decodeURIComponent(slug);
  
  // Find posts that match this category
  const categoryPosts = posts.filter(post => 
    post.category === decodedSlug || 
    post.category === slug ||
    encodeURIComponent(post.category) === slug
  );
  
  if (categoryPosts.length === 0) {
    return null;
  }
  
  return {
    name: categoryPosts[0].category,
    posts: categoryPosts,
    slug: slug
  };
}

// Generate static params for all categories
export async function generateStaticParams() {
  const categories = Array.from(new Set(posts.map(post => post.category)));
  
  return categories.map((category) => ({
    slug: encodeURIComponent(category),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);
  
  if (!category) {
    return {
      title: 'التصنيف غير موجود - مدونة نقل العفش',
      description: 'التصنيف المطلوب غير موجود'
    };
  }

  return generatePageMetadata({
    title: `${category.name} - مقالات مدونة نقل العفش`,
    description: `تصفح جميع المقالات في تصنيف ${category.name}. مجموعة شاملة من المقالات المفيدة حول نقل العفش والأثاث في المملكة العربية السعودية.`,
    canonicalUrl: `/blog/category/${params.slug}`,
    type: 'website'
  });
}

export default function CategoryPage({ params }: PageProps) {
  const category = getCategoryBySlug(params.slug);
  
  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-8">
          <nav className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              الرئيسية
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">
              المدونة
            </Link>
            <span>/</span>
            <span className="text-gray-400">التصنيفات</span>
            <span>/</span>
            <span className="text-blue-600 font-medium">{category.name}</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {category.name}
          </h1>
          <p className="text-lg text-gray-600">
            {category.posts.length} مقال{category.posts.length > 1 ? 'ة' : ''} في هذا التصنيف
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={resolveImagePath(post.image, post.title)}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {post.featured && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    مميز
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <span>{formatDateArabic(post.publishedAt)}</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <div className="relative w-8 h-8">
                      <Image
                        src={resolveImagePath(post.author.image, post.author.name)}
                        alt={post.author.name}
                        fill
                        className="object-cover rounded-full"
                        unoptimized={true}
                        sizes="32px"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {post.author.name}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
                    اقرأ المزيد
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back to Blog */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            العودة إلى المدونة
          </Link>
        </div>
      </div>
    </div>
  );
} 