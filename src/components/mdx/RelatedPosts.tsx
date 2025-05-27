'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { posts } from '@/data/posts';
import type { BlogPost } from '@/types/blog';
import { resolveImagePath } from '@/utils/imageUtils';

type RelatedPostsProps = {
  currentPostId: string;
  tags: string[];
  maxPosts?: number;
};

export default function RelatedPosts({ currentPostId, tags, maxPosts = 3 }: RelatedPostsProps) {
  useEffect(() => {
    // Find related posts based on tags
    const relatedPosts = findRelatedPosts(currentPostId, tags, maxPosts);
    
    // Update related posts container
    const relatedPostsDiv = document.getElementById('related-posts');
    if (relatedPostsDiv && relatedPosts.length > 0) {
      relatedPostsDiv.innerHTML = '';
      relatedPosts.forEach(post => {
        relatedPostsDiv.appendChild(createPostElement(post));
      });
    } else if (relatedPostsDiv && relatedPosts.length === 0) {
      relatedPostsDiv.innerHTML = '<p class="text-gray-500">لا توجد مقالات ذات صلة حالياً.</p>';
    }
  }, [currentPostId, tags, maxPosts]);

  // Find related posts based on shared tags
  const findRelatedPosts = (currentId: string, postTags: string[], limit: number): BlogPost[] => {
    // Calculate post relevance score based on shared tags
    const scoredPosts = posts
      .filter(post => post.id !== currentId) // Exclude current post
      .map(post => {
        const sharedTags = post.tags.filter(tag => postTags.includes(tag));
        return {
          post,
          score: sharedTags.length
        };
      })
      .filter(item => item.score > 0) // Only include posts with shared tags
      .sort((a, b) => b.score - a.score); // Sort by score (highest first)
    
    // Return top posts (up to the limit)
    return scoredPosts.slice(0, limit).map(item => item.post);
  };

  // Create post element DOM structure
  const createPostElement = (post: BlogPost) => {
    const container = document.createElement('div');
    container.className = 'flex items-start space-x-4 space-x-reverse mb-4 pb-4 border-b border-gray-100 hover-lift transition-transform';
    
    // Post image container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0';
    
    // Image element (created manually since we can't use Next.js Image component here)
    const img = document.createElement('img');
    img.src = resolveImagePath(post.image, post.title);
    img.alt = post.title;
    img.className = 'object-cover w-full h-full';
    img.onerror = () => {
      // إذا فشل تحميل الصورة، استخدم صورة بديلة
      img.src = '/images/blog/Furniture_Moving_Process.jpeg';
    };
    imageContainer.appendChild(img);
    
    // Post content container
    const content = document.createElement('div');
    content.className = 'flex-1';
    
    // Post title
    const title = document.createElement('h4');
    title.className = 'font-medium text-gray-800 mb-1 line-clamp-2 hover:text-blue-600 transition-colors';
    
    // Title link
    const titleLink = document.createElement('a');
    titleLink.href = `/blog/${post.slug}`;
    titleLink.textContent = post.title;
    title.appendChild(titleLink);
    
    // Post date
    const date = document.createElement('p');
    date.className = 'text-sm text-gray-500';
    date.textContent = new Date(post.publishedAt).toLocaleDateString('ar-SA');
    
    content.appendChild(title);
    content.appendChild(date);
    
    container.appendChild(imageContainer);
    container.appendChild(content);
    
    // Make the whole card clickable
    container.onclick = () => {
      window.location.href = `/blog/${post.slug}`;
    };
    container.style.cursor = 'pointer';
    
    return container;
  };

  return null; // This component doesn't render anything directly, it manipulates the DOM
} 