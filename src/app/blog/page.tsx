import type { Metadata } from 'next';
import { posts } from '@/data/posts';
import BlogClientComponent from '@/components/blog/BlogClientComponent';

export const metadata: Metadata = {
  title: 'مدونة نقل العفش - مقالات ونصائح احترافية',
  description: 'اقرأ أحدث المقالات والنصائح الاحترافية حول نقل العفش والأثاث في المملكة العربية السعودية. نصائح خبراء، إرشادات، وأفضل الممارسات.',
  openGraph: {
    title: 'مدونة نقل العفش - مقالات ونصائح احترافية',
    description: 'اقرأ أحدث المقالات والنصائح الاحترافية حول نقل العفش والأثاث في المملكة العربية السعودية.',
    images: ['/images/blog-og.jpg'],
  },
};

// Get all categories for server component
const categories = Array.from(new Set(posts.map(post => post.category)));
// Get featured posts for server component
const featuredPosts = posts.filter(post => post.featured);

export default function BlogPage() {
  return (
    <BlogClientComponent 
      initialPosts={posts} 
      initialCategories={categories}
      initialFeaturedPosts={featuredPosts}
    />
  );
} 