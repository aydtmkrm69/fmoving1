export interface Author {
  id: string;
  name: string;
  bio: string;
  image: string;
  credentials: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  excerpt?: string;
  content: string;
  image: string;
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  category: string;
  readingTime?: string;
  featured?: boolean;
}

export type BlogCategory = {
  name: string;
  slug: string;
  description: string;
  count: number;
} 