/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://furniture-moving-blog.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  outDir: 'public',
  
  // إعدادات robots.txt محسنة
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '*.json',
          '/404',
          '/500',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 2,
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || 'https://furniture-moving-blog.vercel.app'}/sitemap.xml`,
      `${process.env.SITE_URL || 'https://furniture-moving-blog.vercel.app'}/sitemap-0.xml`,
    ],
    host: process.env.SITE_URL || 'https://furniture-moving-blog.vercel.app',
  },

  // استبعاد الصفحات غير المرغوب فيها
  exclude: [
    '/404',
    '/500',
    '/api/*',
    '/_next/*',
    '/admin/*',
    '/private/*',
    '*.json',
    '/sitemap.xml',
    '/sitemap-*.xml',
    '/robots.txt',
  ],

  // تخصيص أولويات الصفحات
  transform: async (config, path) => {
    // الصفحة الرئيسية - أولوية عالية جداً
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          {
            href: `${config.siteUrl}${path}`,
            hreflang: 'ar',
          },
          {
            href: `${config.siteUrl}${path}`,
            hreflang: 'ar-SA',
          },
        ],
      };
    }

    // الصفحات الرئيسية - أولوية عالية
    if (['/about', '/blog', '/contact', '/services', '/testimonials', '/get-a-free-quote'].includes(path)) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          {
            href: `${config.siteUrl}${path}`,
            hreflang: 'ar',
          },
          {
            href: `${config.siteUrl}${path}`,
            hreflang: 'ar-SA',
          },
        ],
      };
    }

    // مقالات المدونة - أولوية متوسطة عالية
    if (path.startsWith('/blog/') && path !== '/blog') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          {
            href: `${config.siteUrl}${path}`,
            hreflang: 'ar',
          },
          {
            href: `${config.siteUrl}${path}`,
            hreflang: 'ar-SA',
          },
        ],
      };
    }

    // الصفحات القانونية - أولوية منخفضة
    if (['/privacy', '/terms'].includes(path)) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.3,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          {
            href: `${config.siteUrl}${path}`,
            hreflang: 'ar',
          },
          {
            href: `${config.siteUrl}${path}`,
            hreflang: 'ar-SA',
          },
        ],
      };
    }

    // الإعدادات الافتراضية
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'ar',
        },
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'ar-SA',
        },
      ],
    };
  },

  // إضافة صفحات إضافية يدوياً
  additionalPaths: async (config) => {
    const result = [];
    
    // إضافة صفحات ديناميكية للمدونة
    const blogPosts = [
      'comprehensive-guide-furniture-moving-saudi-arabia-2025',
      'steps-moving-furniture-without-damage',
      'complete-timeline-organized-furniture-moving',
      'diy-vs-professional-furniture-moving-comparison',
      'furniture-moving-prices-saudi-arabia',
      'how-to-choose-best-moving-company-saudi-arabia',
      'moving-furniture-hot-weather-saudi-arabia',
      'professional-furniture-packing-secrets',
      'ultimate-moving-day-checklist',
      'secure-furniture-storage-services-saudi-arabia',
      'safely-disassemble-assemble-complex-furniture',
      'moving-art-pieces-valuables-special-precautions',
      'furniture-moving-jeddah-humidity-challenges',
      'furniture-moving-guide-dammam-eastern-province',
      'handling-bulky-heavy-furniture-moving',
      'common-mistakes-choosing-moving-company',
      'crucial-questions-ask-moving-company',
      'are-additional-moving-services-worth-cost',
      'furniture-insurance-during-moving',
      'technology-improving-furniture-moving-experience',
      'new-criteria-evaluating-moving-companies-2025',
      'moving-company-customer-experience-stories',
      'cheapest-vs-best-moving-service',
      'best-riyadh-neighborhoods-moving-guide',
      '10-golden-tips-stress-free-moving',
      'from-chaos-to-order-new-home-arrangement',
      'what-to-do-with-unwanted-items-before-moving',
      'prepare-home-before-moving',
      'intercity-furniture-moving-guide',
      'office-company-furniture-moving-saudi-arabia',
      'furniture-moving-services-major-saudi-cities',
      'guide-to-moving-furniture',
    ];

    blogPosts.forEach((slug) => {
      result.push({
        loc: `/blog/${slug}`,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      });
    });

    return result;
  },
};