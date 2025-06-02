# 🚀 نشر المشروع على Vercel - دليل سريع

## ✅ تم رفع المشروع بنجاح إلى GitHub!

**رابط المستودع**: https://github.com/aydtmkrm69/fmoving1.git

## 📋 خطوات النشر على Vercel

### 1. إنشاء حساب Vercel
- انتقل إلى [vercel.com](https://vercel.com)
- سجل دخول باستخدام GitHub

### 2. ربط المستودع
1. اضغط على "New Project"
2. اختر "Import Git Repository"
3. ابحث عن `aydtmkrm69/fmoving1`
4. اضغط "Import"

### 3. إعدادات المشروع
```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### 4. متغيرات البيئة المطلوبة
أضف هذه المتغيرات في Vercel Dashboard:

```env
SITE_URL=https://your-project-name.vercel.app
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

### 5. متغيرات اختيارية للسيو
```env
GOOGLE_VERIFICATION=your-google-verification-code
BING_VERIFICATION=your-bing-verification-code
YANDEX_VERIFICATION=your-yandex-verification-code
```

### 6. النشر
- اضغط "Deploy"
- انتظر اكتمال البناء (2-3 دقائق)
- ستحصل على رابط الموقع

## 🔧 بعد النشر

### 1. تحديث SITE_URL
- انسخ رابط الموقع من Vercel
- حدث متغير `SITE_URL` في إعدادات Vercel
- أعد النشر

### 2. إعداد Google Search Console
1. انتقل إلى [Google Search Console](https://search.google.com/search-console)
2. أضف الموقع الجديد
3. تحقق من الملكية
4. أرسل Sitemap: `https://your-domain.vercel.app/sitemap.xml`

### 3. اختبار الموقع
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Rich Results Test](https://search.google.com/test/rich-results)

## 🎯 النطاق المخصص (اختياري)

### إضافة نطاق مخصص:
1. في Vercel Dashboard > Settings > Domains
2. أضف النطاق المخصص
3. اتبع تعليمات DNS
4. حدث `SITE_URL` للنطاق الجديد

## 📊 المراقبة والتحليلات

### تفعيل Vercel Analytics:
```bash
npm i @vercel/analytics
```

### تفعيل Speed Insights:
```bash
npm i @vercel/speed-insights
```

## 🔄 التحديثات التلقائية

- أي push إلى main branch سيؤدي لنشر تلقائي
- يمكن إعداد فروع للاختبار (staging)
- مراجعة التغييرات قبل النشر

## 🆘 استكشاف الأخطاء

### مشاكل شائعة:
1. **خطأ في البناء**: تحقق من logs في Vercel
2. **مشاكل البيئة**: تأكد من متغيرات البيئة
3. **مشاكل الصور**: تحقق من مسارات الصور

### الحلول:
```bash
# محلياً
npm run build
npm run start

# إذا نجح محلياً، المشكلة في إعدادات Vercel
```

## 📞 الدعم

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [GitHub Issues](https://github.com/aydtmkrm69/fmoving1/issues)

---

## 🎉 تهانينا!

موقعك جاهز للنشر مع:
- ✅ تحسين كامل للسيو
- ✅ أداء عالي
- ✅ أمان متقدم
- ✅ دعم PWA
- ✅ تصميم متجاوب

**الخطوة التالية**: انشر على Vercel واستمتع بموقع احترافي! 🚀