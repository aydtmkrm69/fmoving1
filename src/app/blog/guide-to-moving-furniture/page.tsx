import type { Metadata } from 'next';
import ArticleTemplate from '@/components/mdx/ArticleTemplate';
import Heading from '@/components/mdx/Heading';
import Image from '@/components/mdx/Image';
import Callout from '@/components/mdx/Callout';
import { UnorderedList, OrderedList, ListItem } from '@/components/mdx/List';

export const metadata: Metadata = {
  title: 'الدليل الشامل لنقل الأثاث: نصائح وإرشادات مهمة - مدونة نقل العفش',
  description: 'تعرف على أفضل الممارسات والنصائح المهمة لنقل الأثاث بأمان وفعالية. دليل شامل يغطي كل ما تحتاج معرفته عن نقل العفش.',
  openGraph: {
    title: 'الدليل الشامل لنقل الأثاث: نصائح وإرشادات مهمة',
    description: 'تعرف على أفضل الممارسات والنصائح المهمة لنقل الأثاث بأمان وفعالية. دليل شامل يغطي كل ما تحتاج معرفته عن نقل العفش.',
    images: ['/images/blog/guide-to-moving-furniture.jpg'],
  },
};

const post = {
  id: 'guide-to-moving-furniture',
  title: 'الدليل الشامل لنقل الأثاث: نصائح وإرشادات مهمة',
  description: 'تعرف على أفضل الممارسات والنصائح المهمة لنقل الأثاث بأمان وفعالية. دليل شامل يغطي كل ما تحتاج معرفته عن نقل العفش.',
  content: 'دليل شامل يقدم أهم النصائح والإرشادات العملية لنقل الأثاث بطريقة آمنة وفعالة، من مرحلة التخطيط والتغليف وحتى النقل والتركيب في المنزل الجديد.',
  publishedAt: '2024-03-15',
  readingTime: '5 دقائق للقراءة',
  author: {
    id: "ahmed-expert",
    name: "أحمد الخبير",
    bio: "خبير في مجال نقل الأثاث مع خبرة تزيد عن 15 عاماً",
    image: "/images/author/Ahmed_Expert.png",
    credentials: [
      "خبير نقل أثاث معتمد",
      "15+ سنة خبرة",
      "مدرب معتمد في مجال نقل وتغليف العفش"
    ]
  },
  category: "نصائح وإرشادات",
  tags: [
    "نقل الأثاث",
    "نصائح عملية",
    "الحماية والتغليف",
    "نقل آمن",
    "دليل النقل"
  ],
  featured: true,
  image: "/images/blog/guide-to-moving-furniture.jpg",
  slug: "guide-to-moving-furniture"
};

export default function BlogPost() {
  const content = (
    <>
      <Heading as="h1">الدليل الشامل لنقل الأثاث: نصائح وإرشادات مهمة</Heading>
      
      <p className="mb-6">
        يعد نقل الأثاث من المهام التي تتطلب تخطيطاً دقيقاً وتنفيذاً محترفاً. في هذا الدليل الشامل، سنستعرض أهم النصائح والإرشادات التي تضمن نقل آمن وفعال لأثاثك.
      </p>
      
      <Image
        src="/images/blog/furniture-moving.jpg"
        alt="عملية نقل الأثاث"
        caption="عملية نقل الأثاث تتطلب تخطيطاً وتنفيذاً محترفاً"
      />
      
      <Callout type="info" title="نصيحة مهمة">
        قبل البدء بعملية النقل، قم بإعداد قائمة بجميع القطع التي تحتاج إلى نقل وتصنيفها حسب الحجم والأهمية.
      </Callout>
      
      <Heading as="h2">خطوات التحضير لنقل الأثاث</Heading>
      
      <OrderedList>
        <ListItem>تحديد موعد النقل وحجز شركة نقل موثوقة</ListItem>
        <ListItem>تجهيز مواد التغليف المناسبة</ListItem>
        <ListItem>فك الأثاث القابل للفك</ListItem>
        <ListItem>تنظيف وتغليف كل قطعة بعناية</ListItem>
      </OrderedList>
      
      <Heading as="h2">نصائح مهمة للتغليف</Heading>
      
      <UnorderedList>
        <ListItem>استخدم الفقاعات الهوائية لحماية القطع القابلة للكسر</ListItem>
        <ListItem>غلف الأثاث الخشبي بالبلاستيك الواقي</ListItem>
        <ListItem>احمِ الزوايا باستخدام واقيات خاصة</ListItem>
        <ListItem>ضع علامات واضحة على كل قطعة</ListItem>
      </UnorderedList>
      
      <Callout type="warning" title="تحذير">
        تجنب استخدام مواد تغليف رقيقة أو غير مناسبة، فقد يؤدي ذلك إلى تلف الأثاث أثناء النقل.
      </Callout>
      
      <Heading as="h2">نصائح للنقل الآمن</Heading>
      
      <Image
        src="/images/blog/safe-moving.jpg"
        alt="نقل آمن للأثاث"
        caption="استخدام التقنيات الصحيحة لنقل الأثاث بأمان"
      />
      
      <UnorderedList>
        <ListItem>استخدم المعدات المناسبة لرفع وتحريك الأثاث</ListItem>
        <ListItem>تأكد من تأمين الممرات وحمايتها</ListItem>
        <ListItem>اتبع تقنيات الرفع الصحيحة لتجنب الإصابات</ListItem>
        <ListItem>نظم عملية النقل بشكل متسلسل ومنطقي</ListItem>
      </UnorderedList>
      
      <Callout type="success" title="نصيحة احترافية">
        قم بتصوير الأثاث قبل الفك والنقل لتوثيق حالته وطريقة تركيبه، سيساعدك هذا في إعادة تركيبه بشكل صحيح.
      </Callout>
      
      <Heading as="h2">بعد عملية النقل</Heading>
      
      <OrderedList>
        <ListItem>تفقد جميع القطع وتأكد من سلامتها</ListItem>
        <ListItem>قم بإعادة تركيب الأثاث بالترتيب الصحيح</ListItem>
        <ListItem>نظف الأثاث وتأكد من تهوية المكان الجديد</ListItem>
        <ListItem>احتفظ بمواد التغليف الجيدة للاستخدام المستقبلي</ListItem>
      </OrderedList>
      
      <Heading as="h2">الخاتمة</Heading>
      
      <p className="mb-6">
        نقل الأثاث عملية تتطلب العناية والتخطيط الجيد. باتباع هذه النصائح والإرشادات، يمكنك ضمان نقل آمن وفعال لأثاثك. تذكر دائماً أن الاستعانة بمحترفين في مجال نقل الأثاث يمكن أن يوفر عليك الكثير من الجهد والقلق.
      </p>
    </>
  );

  return <ArticleTemplate post={post} content={content} />;
} 