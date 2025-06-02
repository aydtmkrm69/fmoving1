# 🏠 مدونة نقل العفش - أفضل خدمات نقل الأثاث في السعودية

[![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000)](https://vercel.com/)

مدونة متخصصة في خدمات نقل العفش والأثاث في المملكة العربية السعودية. نقدم نصائح احترافية وإرشادات مفيدة لنقل الأثاث بأمان وبأفضل الأسعار.

## 🌟 المميزات

- ✅ **تصميم متجاوب** - يعمل بشكل مثالي على جميع الأجهزة
- ✅ **محسن للسيو** - تحسين محركات البحث المتقدم
- ✅ **سرعة عالية** - تحسين الأداء والتحميل السريع
- ✅ **دعم اللغة العربية** - تصميم RTL كامل
- ✅ **مقالات تفاعلية** - محتوى غني ومفيد
- ✅ **Schema Markup** - بيانات منظمة لمحركات البحث
- ✅ **PWA Ready** - تطبيق ويب تقدمي
- ✅ **أمان عالي** - Headers أمنية متقدمة

## 🚀 التقنيات المستخدمة

- **Framework**: Next.js 14.1.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Font**: IBM Plex Sans Arabic
- **Deployment**: Vercel
- **SEO**: next-sitemap
- **Performance**: Image Optimization, Code Splitting

## 📁 هيكل المشروع

```
├── public/                 # الملفات العامة
│   ├── images/            # الصور والوسائط
│   ├── robots.txt         # ملف الروبوتات
│   ├── sitemap.xml        # خريطة الموقع
│   └── site.webmanifest   # ملف التطبيق
├── src/
│   ├── app/               # صفحات التطبيق (App Router)
│   ├── components/        # المكونات القابلة لإعادة الاستخدام
│   ├── content/           # محتوى المدونة (MDX)
│   ├── data/              # البيانات الثابتة
│   ├── types/             # تعريفات TypeScript
│   └── utils/             # الوظائف المساعدة
├── next.config.js         # إعدادات Next.js
├── next-sitemap.config.js # إعدادات خريطة الموقع
├── vercel.json           # إعدادات Vercel
└── tailwind.config.js    # إعدادات Tailwind
```

## 🛠️ التثبيت والتشغيل

### المتطلبات
- Node.js 18.0 أو أحدث
- npm أو yarn

### خطوات التثبيت

1. **استنساخ المشروع**
```bash
git clone https://github.com/your-username/furniture-moving-blog.git
cd furniture-moving-blog
```

2. **تثبيت التبعيات**
```bash
npm install
# أو
yarn install
```

3. **إعداد متغيرات البيئة**
```bash
cp .env.example .env.local
```
قم بتحديث القيم في `.env.local` حسب احتياجاتك.

4. **تشغيل الخادم المحلي**
```bash
npm run dev
# أو
yarn dev
```

5. **فتح المتصفح**
انتقل إلى [http://localhost:3000](http://localhost:3000)

## 📝 Scripts المتاحة

```bash
npm run dev          # تشغيل الخادم المحلي
npm run build        # بناء المشروع للإنتاج
npm run start        # تشغيل الخادم في وضع الإنتاج
npm run lint         # فحص الكود
npm run lint:fix     # إصلاح مشاكل الكود تلقائياً
npm run type-check   # فحص أنواع TypeScript
npm run sitemap      # إنشاء خريطة الموقع
npm run clean        # تنظيف ملفات البناء
npm run check        # فحص شامل للكود والأنواع
```

## 🔧 إعدادات السيو

### خريطة الموقع (Sitemap)
- يتم إنشاؤها تلقائياً عند البناء
- تتضمن جميع الصفحات والمقالات
- محسنة لمحركات البحث العربية

### Schema Markup
- Organization Schema
- Article Schema
- Breadcrumb Schema
- Website Schema

### Meta Tags
- Open Graph للشبكات الاجتماعية
- Twitter Cards
- تحسين للمحمول
- دعم PWA

## 🚀 النشر على Vercel

1. **ربط المشروع بـ Vercel**
```bash
npm i -g vercel
vercel
```

2. **إعداد متغيرات البيئة في Vercel**
- انتقل إلى لوحة تحكم Vercel
- أضف متغيرات البيئة من `.env.example`

3. **النشر التلقائي**
- يتم النشر تلقائياً عند push إلى main branch

## 📊 تحسين الأداء

- **Image Optimization**: تحسين الصور تلقائياً
- **Code Splitting**: تقسيم الكود للتحميل السريع
- **Lazy Loading**: تحميل المحتوى عند الحاجة
- **Caching**: تخزين مؤقت متقدم
- **Compression**: ضغط الملفات

## 🔒 الأمان

- Security Headers
- XSS Protection
- CSRF Protection
- Content Security Policy
- HTTPS Only

## 📱 دعم PWA

- Service Worker
- Offline Support
- Install Prompt
- App-like Experience

## 🌐 دعم اللغات

- العربية (الأساسية)
- RTL Layout
- Arabic Fonts
- Localized Content

## 📈 Analytics والتتبع

- Google Analytics (اختياري)
- Search Console Integration
- Performance Monitoring
- Error Tracking

## 🤝 المساهمة

نرحب بالمساهمات! يرجى قراءة [دليل المساهمة](CONTRIBUTING.md) قبل البدء.

## 📄 الترخيص

هذا المشروع مرخص تحت [MIT License](LICENSE).

## 📞 التواصل

- **الموقع**: [https://furniture-moving-blog.vercel.app](https://furniture-moving-blog.vercel.app)
- **البريد الإلكتروني**: info@furniture-moving-blog.com
- **تويتر**: [@furniture_moving_sa](https://twitter.com/furniture_moving_sa)

## 🙏 شكر وتقدير

شكر خاص لجميع المساهمين والمطورين الذين ساعدوا في تطوير هذا المشروع.

---

**تم تطويره بـ ❤️ في المملكة العربية السعودية**