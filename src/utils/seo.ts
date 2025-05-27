import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article';
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
}

export const DEFAULT_KEYWORDS = [
  'نقل عفش',
  'نقل أثاث',
  'نقل عفش السعودية',
  'شركة نقل عفش',
  'نقل أثاث الرياض',
  'نقل أثاث جدة',
  'نقل أثاث الدمام',
  'خدمات النقل',
  'تغليف أثاث',
  'فك وتركيب أثاث'
];

export const DEFAULT_OG_IMAGE = '/images/blog/Furniture_Moving_Process.jpeg';
export const SITE_URL = 'https://furniture-moving-blog.netlify.app';
export const SITE_NAME = 'مدونة نقل العفش';

export function generateMetadata({
  title,
  description,
  keywords = DEFAULT_KEYWORDS,
  ogImage = DEFAULT_OG_IMAGE,
  canonicalUrl,
  type = 'website',
  publishedAt,
  updatedAt,
  author
}: SEOProps): Metadata {
  // Prepare the full URL for the ogImage
  const ogImageUrl = ogImage.startsWith('http') 
    ? ogImage 
    : `${SITE_URL}${ogImage}`;

  // Prepare the canonical URL
  const canonical = canonicalUrl 
    ? canonicalUrl.startsWith('http') ? canonicalUrl : `${SITE_URL}${canonicalUrl}`
    : undefined;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      type,
      url: canonical,
      locale: 'ar_SA',
      ...(publishedAt && { publishedAt }),
      ...(updatedAt && { modifiedTime: updatedAt }),
      ...(author && { authors: [author] }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
      creator: '@furniture_moving',
    },
    alternates: {
      canonical: canonical,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    sameAs: [
      'https://facebook.com/furnituremovingksa',
      'https://twitter.com/furniture_moving',
      'https://instagram.com/furnituremovingksa'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+966-123456789',
      contactType: 'customer service',
      availableLanguage: ['Arabic', 'English'],
    }
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateArticleSchema({
  title,
  description,
  publishedAt,
  updatedAt,
  imageUrl,
  authorName,
  url
}: {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  imageUrl: string;
  authorName: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: imageUrl.startsWith('http') ? imageUrl : `${SITE_URL}${imageUrl}`,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`
      }
    },
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url.startsWith('http') ? url : `${SITE_URL}${url}`
    }
  };
} 