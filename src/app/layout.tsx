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
    default: `${SITE_NAME} - خدمات نقل الأثاث في السعودية`,
    template: `%s | ${SITE_NAME}`
  },
  description: 'مدونة متخصصة في خدمات نقل العفش والأثاث في المملكة العربية السعودية. نقدم نصائح احترافية وإرشادات مفيدة لنقل الأثاث بأمان.',
  keywords: DEFAULT_KEYWORDS.join(', '),
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
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
    },
  },
  openGraph: {
    title: `${SITE_NAME} - خدمات نقل الأثاث في السعودية`,
    description: 'مدونة متخصصة في خدمات نقل العفش والأثاث في المملكة العربية السعودية',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: 'مدونة متخصصة في خدمات نقل العفش والأثاث في المملكة العربية السعودية',
    creator: '@furniture_moving',
    images: [DEFAULT_OG_IMAGE],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'google-site-verification-code', // Reemplazar con el código real cuando esté disponible
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
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify(organizationSchema)}
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