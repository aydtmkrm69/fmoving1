import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '@/data/posts';
import { generateMetadata as generatePageMetadata } from '@/utils/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'تصنيفات المدونة - مدونة نقل العفش',
  description: 'تصفح جميع تصنيفات مدونة نقل العفش. اعثر على المقالات المفيدة حول نقل العفش والأثاث في المملكة العربية السعودية مصنفة حسب الموضوع.',
  canonicalUrl: '/blog/category',
  type: 'website'
});

// Get all categories with post counts
function getAllCategories() {
  const categoryMap = new Map();
  
  posts.forEach(post => {
    const category = post.category;
    if (categoryMap.has(category)) {
      categoryMap.set(category, categoryMap.get(category) + 1);
    } else {
      categoryMap.set(category, 1);
    }
  });
  
  return Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    count,
    slug: encodeURIComponent(name)
  }));
}

export default function CategoriesPage() {
  const categories = getAllCategories();

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
            <span className="text-blue-600 font-medium">التصنيفات</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            تصنيفات المدونة
          </h1>
          <p className="text-lg text-gray-600">
            اكتشف المقالات حسب التصنيف
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/blog/category/${category.slug}`}
              className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {category.name}
              </h2>
              <p className="text-gray-600 mb-4">
                {category.count} مقال{category.count > 1 ? 'ة' : ''}
              </p>
              <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
                عرض المقالات
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
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