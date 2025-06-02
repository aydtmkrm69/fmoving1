# 🚀 دليل النشر على Vercel

## خطوات النشر

### 1. إعداد المشروع محلياً

```bash
# استنساخ المشروع
git clone https://github.com/your-username/furniture-moving-blog.git
cd furniture-moving-blog

# تثبيت التبعيات
npm install

# إنشاء ملف البيئة
cp .env.example .env.local
```

### 2. تحديث متغيرات البيئة

قم بتحديث `.env.local` بالقيم الصحيحة:

```env
SITE_URL=https://your-domain.vercel.app
GOOGLE_VERIFICATION=your-google-verification-code
BING_VERIFICATION=your-bing-verification-code
```

### 3. اختبار المشروع محلياً

```bash
# تشغيل الخادم المحلي
npm run dev

# فحص الكود
npm run check

# بناء المشروع
npm run build
```

### 4. النشر على Vercel

#### الطريقة الأولى: عبر Vercel CLI

```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# النشر
vercel

# النشر للإنتاج
vercel --prod
```

#### الطريقة الثانية: عبر GitHub Integration

1. ادفع الكود إلى GitHub
2. اربط المستودع بـ Vercel
3. سيتم النشر تلقائياً

### 5. إعداد متغيرات البيئة في Vercel

في لوحة تحكم Vercel:

1. انتقل إلى Settings > Environment Variables
2. أضف المتغيرات التالية:

```
SITE_URL=https://your-domain.vercel.app
GOOGLE_VERIFICATION=your-verification-code
BING_VERIFICATION=your-verification-code
YANDEX_VERIFICATION=your-verification-code
NODE_ENV=production
```

### 6. إعداد النطاق المخصص (اختياري)

1. في Vercel Dashboard > Domains
2. أضف النطاق المخصص
3. اتبع التعليمات لإعداد DNS

### 7. تحسين الأداء

#### تفعيل Analytics
```bash
vercel analytics enable
```

#### تفعيل Speed Insights
```bash
vercel speed-insights enable
```

### 8. إعداد Google Search Console

1. انتقل إلى [Google Search Console](https://search.google.com/search-console)
2. أضف الموقع الجديد
3. تحقق من الملكية باستخدام meta tag
4. أرسل خريطة الموقع: `https://your-domain.vercel.app/sitemap.xml`

### 9. إعداد Google Analytics (اختياري)

1. أنشئ حساب Google Analytics
2. احصل على Tracking ID
3. أضفه إلى متغيرات البيئة
4. أضف الكود إلى layout.tsx

### 10. اختبار السيو

#### أدوات الاختبار:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

#### قائمة التحقق:
- ✅ سرعة التحميل < 3 ثوانٍ
- ✅ نتيجة PageSpeed > 90
- ✅ Mobile-Friendly
- ✅ Schema Markup صحيح
- ✅ Sitemap يعمل
- ✅ Robots.txt صحيح
- ✅ SSL مفعل
- ✅ Meta tags كاملة

## إعدادات متقدمة

### تحسين الصور

```javascript
// next.config.js
images: {
  formats: ['image/webp', 'image/avif'],
  minimumCacheTTL: 31536000,
}
```

### تحسين الخطوط

```javascript
// layout.tsx
const font = IBM_Plex_Sans_Arabic({
  display: 'swap',
  preload: true,
})
```

### تحسين الأداء

```javascript
// next.config.js
experimental: {
  optimizeCss: true,
  optimizePackageImports: ['react-icons'],
}
```

## مراقبة الأداء

### Vercel Analytics
- مراقبة الزيارات
- تحليل الأداء
- تتبع التحويلات

### Error Monitoring
- تتبع الأخطاء
- مراقبة الأداء
- تنبيهات فورية

## النسخ الاحتياطي

### قاعدة البيانات (إن وجدت)
```bash
# نسخ احتياطي يومي
vercel env pull .env.backup
```

### الملفات
```bash
# نسخ احتياطي للمحتوى
git push origin main
```

## استكشاف الأخطاء

### مشاكل شائعة:

#### خطأ في البناء
```bash
# تنظيف الكاش
npm run clean
npm install
npm run build
```

#### مشاكل الصور
```bash
# تحقق من مسارات الصور
ls public/images/
```

#### مشاكل السيو
```bash
# تحقق من sitemap
curl https://your-domain.vercel.app/sitemap.xml
```

## الدعم

للحصول على المساعدة:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Issues](https://github.com/your-username/furniture-moving-blog/issues)

---

**نصائح مهمة:**
- اختبر دائماً محلياً قبل النشر
- استخدم فروع منفصلة للتطوير
- راقب الأداء بانتظام
- احتفظ بنسخ احتياطية