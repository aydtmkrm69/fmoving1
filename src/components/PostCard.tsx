import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types/blog';
import LazyLoad from './LazyLoad';
import { resolveImagePath } from '@/utils/imageUtils';

interface PostCardProps {
  post: BlogPost;
}

// Skeleton component for PostCard
function PostCardSkeleton() {
  return (
    <div className="blog-card bg-white">
      <div className="h-48 bg-gray-200 animate-pulse"></div>
      <div className="p-4">
        <div className="h-6 w-3/4 bg-gray-200 animate-pulse rounded mb-3"></div>
        <div className="h-4 w-full bg-gray-200 animate-pulse rounded mb-2"></div>
        <div className="h-4 w-5/6 bg-gray-200 animate-pulse rounded mb-4"></div>
        
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
          <div>
            <div className="h-4 w-20 bg-gray-200 animate-pulse rounded mb-1"></div>
            <div className="h-3 w-16 bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PostCard({ post }: PostCardProps) {
  // حل مسارات الصور
  const postImage = resolveImagePath(post.image, post.title);
  const authorImage = resolveImagePath(post.author.image, post.author.name);

  return (
    <LazyLoad placeholder={<PostCardSkeleton />}>
      <article className="blog-card">
        <div className="relative h-48">
          <Image
            src={postImage}
            alt={post.title}
            fill
            loading="lazy"
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
              {post.title}
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">{post.description}</p>
          <div className="flex items-center space-x-4">
            <div className="relative w-10 h-10">
              <Image
                src={authorImage}
                alt={post.author.name}
                fill
                loading="lazy"
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-gray-800">{post.author.name}</p>
              <p className="text-sm text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString('ar-SA')}
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </LazyLoad>
  );
} 