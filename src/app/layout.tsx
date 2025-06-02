import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { DEFAULT_KEYWORDS, SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE, generateOrganizationSchema } from '@/utils/seo'
import Script from 'next/script'

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['arabic', 'latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - أفضل خدمات نقل العفش والأثاث في السعودية 2025`,
    template: `%s | ${SITE_NAME}`
  },
  description: 'مدونة متخصصة في خدمات نقل العفش والأثاث في المملكة العربية السعودية. نقدم نصائح احترافية وإرشادات مفيدة لنقل الأثاث بأمان وبأفضل الأسعار في الرياض وجدة والدمام.',
  keywords: DEFAULT_KEYWORDS.join(', '),
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
    languages: {
      'ar-SA': '/',
      'ar': '/',
    },
  },
  openGraph: {
    title: `${SITE_NAME} - أفضل خدمات نقل العفش والأثاث في السعودية 2025`,
    description: 'مدونة متخصصة في خدمات نقل العفش والأثاث في المملكة العربية السعودية. نصائح احترافية وإرشادات مفيدة لنقل الأثاث بأمان.',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - خدمات نقل العفش في السعودية`,
        type: 'image/jpeg',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
    countryName: 'Saudi Arabia',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - أفضل خدمات نقل العفش في السعودية`,
    description: 'مدونة متخصصة في خدمات نقل العفش والأثاث في المملكة العربية السعودية',
    creator: '@furniture_moving_sa',
    site: '@furniture_moving_sa',
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        alt: `${SITE_NAME} - خدمات نقل العفش`,
      }
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION || 'google-site-verification-code',
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
    other: {
      'msvalidate.01': process.env.BING_VERIFICATION || '',
    },
  },
  category: 'business',
  classification: 'خدمات نقل العفش والأثاث',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': SITE_NAME,
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#ffffff',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema();
  
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Theme and Mobile Optimization */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
        <meta name="application-name" content={SITE_NAME} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Preconnect for Critical Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Icons and Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Structured Data */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(organizationSchema)}
        </Script>
        
        {/* Website Schema */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": SITE_NAME,
            "url": SITE_URL,
            "description": "مدونة متخصصة في خدمات نقل العفش والأثاث في المملكة العربية السعودية",
            "inLanguage": "ar-SA",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${SITE_URL}/blog?search={search_term_string}`
              },
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@type": "Organization",
              "name": SITE_NAME,
              "url": SITE_URL
            }
          })}
        </Script>
        
        {/* Breadcrumb Schema */}
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "الرئيسية",
                "item": SITE_URL
              }
            ]
          })}
        </Script>
      </head>
      <body className={ibmPlexSansArabic.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
} 