import type { Metadata } from 'next';
import ArticleTemplate from '@/components/mdx/ArticleTemplate';
import Heading from '@/components/mdx/Heading';
import Image from '@/components/mdx/Image';
import Callout from '@/components/mdx/Callout';
import { UnorderedList, OrderedList, ListItem } from '@/components/mdx/List';

export const metadata: Metadata = {
  title: 'هل الخدمات الإضافية في نقل العفش تستحق التكلفة؟ (تغليف، تخزين، تنظيف) - مدونة نقل العفش',
  description: 'تحليل شامل للخدمات الإضافية في نقل العفش وقيمتها الحقيقية. دليل يساعدك في اتخاذ قرار مدروس حول الخدمات التي تستحق الاستثمار.',
  openGraph: {
    title: 'هل الخدمات الإضافية في نقل العفش تستحق التكلفة؟',
    description: 'تحليل تفصيلي للخدمات الإضافية في نقل العفش وجدواها الاقتصادية.',
    images: ['/images/blog/additional-moving-services.jpg'],
  },
};

const post = {
  id: 'are-additional-moving-services-worth-cost',
  title: 'هل الخدمات الإضافية في نقل العفش تستحق التكلفة؟ (تغليف، تخزين، تنظيف)',
  description: 'تحليل شامل للخدمات الإضافية في نقل العفش وقيمتها الحقيقية. دليل يساعدك في اتخاذ قرار مدروس حول الخدمات التي تستحق الاستثمار.',
  content: 'دراسة تفصيلية للخدمات الإضافية المقدمة في نقل العفش وتحليل جدواها الاقتصادية.',
  publishedAt: '2025-05-09',
  author: {
    id: 'cost-analyst',
    name: 'أ. ريم العتيبي',
    bio: 'محللة تكاليف متخصصة في قطاع الخدمات اللوجستية مع خبرة 8 سنوات',
    image: '/images/authors/cost-analyst.jpg',
    credentials: [
      'محللة معتمدة في التكاليف التشغيلية',
      'خبيرة في تقييم الخدمات اللوجستية',
      'مستشارة في تحسين كفاءة التكلفة',
    ],
  },
  category: 'التكاليف والخدمات',
  tags: [
    'خدمات إضافية',
    'تكاليف النقل',
    'تغليف العفش',
    'تخزين الأثاث',
    'تنظيف المنزل',
  ],
  image: '/images/blog/additional-moving-services.jpg',
  slug: 'are-additional-moving-services-worth-cost',
};

export default function BlogPost() {
  const content = (
    <>
      <Heading as="h2">مقدمة: فهم الخدمات الإضافية في نقل العفش</Heading>
      
      <p className="mb-6">
        عند التخطيط لنقل العفش، تواجهنا قائمة من الخدمات الإضافية التي تقدمها شركات النقل. في هذا التحليل الشامل، سنستعرض كل خدمة إضافية، تكلفتها، وما إذا كانت تستحق الاستثمار في ظروف مختلفة.
      </p>

      <Image
        src="/images/blog/additional-moving-services.jpg"
        alt="الخدمات الإضافية في نقل العفش"
        caption="تحليل شامل للخدمات الإضافية وقيمتها الحقيقية"
      />

      <Heading as="h2">خدمة التغليف الاحترافي</Heading>

      <UnorderedList>
        <ListItem>التكلفة: 500-1500 ريال (حسب حجم المنزل)</ListItem>
        <ListItem>تشمل: مواد تغليف عالية الجودة وعمالة متخصصة</ListItem>
        <ListItem>مميزات: حماية أفضل، توفير الوقت، ضمان إضافي</ListItem>
        <ListItem>عيوب: تكلفة إضافية، قد لا تكون ضرورية للأثاث البسيط</ListItem>
      </UnorderedList>

      <Callout type="info" title="متى تستحق؟">
        تستحق التكلفة إذا كان لديك قطع ثمينة أو حساسة، أو إذا كان وقتك محدوداً.
      </Callout>

      <Heading as="h2">خدمة التخزين المؤقت</Heading>

      <OrderedList>
        <ListItem>التكلفة اليومية: 50-200 ريال</ListItem>
        <ListItem>التكلفة الشهرية: 500-2000 ريال</ListItem>
        <ListItem>تشمل: مستودع آمن، تحكم في درجة الحرارة</ListItem>
        <ListItem>مميزات: مرونة في موعد النقل، حل للفجوة الزمنية</ListItem>
      </OrderedList>

      <Image
        src="/images/blog/storage-service.jpg"
        alt="خدمة التخزين المؤقت"
        caption="مستودعات آمنة للتخزين المؤقت للأثاث"
      />

      <Heading as="h2">خدمة التنظيف الشامل</Heading>

      <UnorderedList>
        <ListItem>تنظيف المنزل القديم: 300-800 ريال</ListItem>
        <ListItem>تنظيف المنزل الجديد: 300-800 ريال</ListItem>
        <ListItem>الخدمة الشاملة: 500-1500 ريال</ListItem>
        <ListItem>تشمل: تنظيف عميق، تعقيم، إزالة المخلفات</ListItem>
      </UnorderedList>

      <Callout type="info" title="توفير محتمل">
        يمكن أن توفر عليك هذه الخدمة وقتاً وجهداً كبيرين، خاصة في المنازل الكبيرة.
      </Callout>

      <Heading as="h2">خدمة فك وتركيب الأثاث</Heading>

      <OrderedList>
        <ListItem>التكلفة: 300-1000 ريال</ListItem>
        <ListItem>تشمل: فنيين متخصصين وأدوات احترافية</ListItem>
        <ListItem>ضمان على التركيب</ListItem>
        <ListItem>خبرة في التعامل مع الأثاث المعقد</ListItem>
      </OrderedList>

      <Callout type="warning" title="تحذير">
        تجنب الفك والتركيب الذاتي للأثاث المعقد أو الثمين لتفادي الأضرار المكلفة.
      </Callout>

      <Heading as="h2">خدمة التأمين الشامل</Heading>

      <UnorderedList>
        <ListItem>التكلفة: 2-5% من قيمة المنقولات</ListItem>
        <ListItem>تغطية شاملة ضد الأضرار والفقدان</ListItem>
        <ListItem>تعويض سريع في حالة الحوادث</ListItem>
        <ListItem>راحة بال إضافية</ListItem>
      </UnorderedList>

      <Image
        src="/images/blog/insurance-coverage.jpg"
        alt="تغطية التأمين الشامل"
        caption="أهمية التأمين الشامل على المنقولات"
      />

      <Heading as="h2">خدمة إعادة الترتيب</Heading>

      <UnorderedList>
        <ListItem>التكلفة: 300-1000 ريال</ListItem>
        <ListItem>ترتيب محترف للأثاث في المنزل الجديد</ListItem>
        <ListItem>تنسيق الديكور الأساسي</ListItem>
        <ListItem>توفير الوقت والجهد</ListItem>
      </UnorderedList>

      <Heading as="h2">تحليل التكلفة والعائد</Heading>

      <OrderedList>
        <ListItem>قيمة وقتك وجهدك</ListItem>
        <ListItem>قيمة الأثاث المنقول</ListItem>
        <ListItem>المخاطر المحتملة</ListItem>
        <ListItem>الظروف الخاصة (وقت محدود، احتياجات خاصة)</ListItem>
      </OrderedList>

      <Callout type="info" title="نصيحة للتوفير">
        اختر الخدمات الإضافية التي تناسب احتياجاتك الفعلية وميزانيتك. لا تتردد في التفاوض على الحزم المجمعة.
      </Callout>

      <Heading as="h2">متى تكون الخدمات الإضافية ضرورية؟</Heading>

      <UnorderedList>
        <ListItem>عند نقل أثاث ثمين أو حساس</ListItem>
        <ListItem>في حالة ضيق الوقت</ListItem>
        <ListItem>عند وجود قطع معقدة تحتاج لخبرة</ListItem>
        <ListItem>في حالة المسافات الطويلة</ListItem>
      </UnorderedList>

      <Heading as="h2">نصائح لتحقيق أقصى استفادة</Heading>

      <OrderedList>
        <ListItem>اطلب عروض أسعار مفصلة</ListItem>
        <ListItem>قارن بين الشركات المختلفة</ListItem>
        <ListItem>اسأل عن الضمانات المقدمة</ListItem>
        <ListItem>تأكد من شمولية الخدمة</ListItem>
      </OrderedList>

      <Heading as="h2">الخاتمة</Heading>

      <p className="mb-6">
        الخدمات الإضافية في نقل العفش يمكن أن تكون استثماراً ذكياً إذا تم اختيارها بعناية وفقاً لاحتياجاتك الفعلية. المفتاح هو تحليل القيمة مقابل التكلفة لكل خدمة، مع الأخذ في الاعتبار قيمة وقتك وجهدك والمخاطر المحتملة. لا تتردد في التفاوض على الأسعار والبحث عن العروض المجمعة التي تقدم أفضل قيمة لميزانيتك.
      </p>
    </>
  );

  return <ArticleTemplate post={post} content={content} />;
} 