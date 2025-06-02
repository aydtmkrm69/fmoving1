import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // إنشاء response
  const response = NextResponse.next()

  // إضافة headers أمنية
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

  // إضافة CSP header
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' blob: data: https:;
    font-src 'self' https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim()

  response.headers.set('Content-Security-Policy', cspHeader)

  // إعادة توجيه للصفحات القديمة
  const url = request.nextUrl.clone()
  
  // إعادة توجيه /home إلى /
  if (url.pathname === '/home') {
    url.pathname = '/'
    return NextResponse.redirect(url, 301)
  }

  // إعادة توجيه /index إلى /
  if (url.pathname === '/index') {
    url.pathname = '/'
    return NextResponse.redirect(url, 301)
  }

  // إضافة trailing slash للمجلدات
  if (url.pathname.endsWith('/blog') && !url.pathname.endsWith('/blog/')) {
    url.pathname = url.pathname + '/'
    return NextResponse.redirect(url, 301)
  }

  // منع الوصول للملفات الحساسة
  if (url.pathname.startsWith('/api/admin') || 
      url.pathname.startsWith('/.env') ||
      url.pathname.includes('.git')) {
    return new NextResponse('Not Found', { status: 404 })
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}