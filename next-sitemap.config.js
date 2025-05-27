module.exports = {
  siteUrl: 'https://furniture-moving-blog.netlify.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://furniture-moving-blog.netlify.app/sitemap.xml',
    ],
  },
  exclude: ['/404'],
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  generateIndexSitemap: false,
  outDir: 'public',
  transform: async (config, path) => {
    // Páginas principales tienen prioridad alta
    if (path === '/' || path === '/about' || path === '/blog' || path === '/contact') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    // Artículos del blog tienen prioridad media
    if (path.startsWith('/blog/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }
    // Configuración por defecto para otras páginas
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
}; 