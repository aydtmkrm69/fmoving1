import Link from 'next/link';
import SafeImage from './SafeImage';
import { BlogPost } from '@/types/blog';

interface PostCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/blog/${post.slug}`}>
        <div className={`relative ${featured ? 'h-64' : 'h-48'}`}>
          <SafeImage
            src={post.image}
            alt={post.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
          {featured && (
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              مميز
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span>{new Date(post.publishedAt).toLocaleDateString('ar-SA')}</span>
          <span>•</span>
          <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
            {post.category}
          </span>
        </div>
        
        <Link href={`/blog/${post.slug}`}>
          <h3 className={`font-bold text-gray-900 hover:text-blue-600 transition-colors mb-3 ${
            featured ? 'text-xl' : 'text-lg'
          }`}>
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <SafeImage
                src={post.author.image}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm text-gray-600">{post.author.name}</span>
          </div>
          
          <Link 
            href={`/blog/${post.slug}`}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            اقرأ المزيد ←
          </Link>
        </div>
      </div>
    </article>
  );
} 