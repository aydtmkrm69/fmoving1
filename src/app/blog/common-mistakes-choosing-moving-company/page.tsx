import type { Metadata } from 'next';
import ArticleTemplate from '@/components/mdx/ArticleTemplate';
import Heading from '@/components/mdx/Heading';
import Image from '@/components/mdx/Image';
import Callout from '@/components/mdx/Callout';
import { UnorderedList, OrderedList, ListItem } from '@/components/mdx/List';

export const metadata: Metadata = {
  title: 'أخطاء شائعة يجب تجنبها عند اختيار شركة نقل أثاث - مدونة نقل العفش',
  description: 'تعرف على الأخطاء الشائعة التي يقع فيها الكثيرون عند اختيار شركة نقل الأثاث وكيفية تجنبها. نصائح وإرشادات مهمة لاختيار أفضل.',
  openGraph: {
    title: 'أخطاء شائعة يجب تجنبها عند اختيار شركة نقل أثاث',
    description: 'دليل شامل للأخطاء الشائعة في اختيار شركات نقل العفش وكيفية تجنبها لضمان تجربة نقل ناجحة.',
    images: ['/images/blog/common-mistakes-moving-company.jpg'],
  },
};

const post = {
  id: 'common-mistakes-choosing-moving-company',
  title: 'أخطاء شائعة يجب تجنبها عند اختيار شركة نقل أثاث',
  description: 'تعرف على الأخطاء الشائعة التي يقع فيها الكثيرون عند اختيار شركة نقل الأثاث وكيفية تجنبها. نصائح وإرشادات مهمة لاختيار أفضل.',
  content: 'دليل تفصيلي يكشف عن الأخطاء الشائعة في اختيار شركات نقل العفش وكيفية تجنبها، مع نصائح عملية لاتخاذ القرار الصحيح.',
  publishedAt: '2025-05-08',
  author: {
    id: 'consumer-protection',
    name: 'أ. محمد العتيبي',
    bio: 'خبير في حماية حقوق المستهلك وتقييم خدمات شركات النقل مع خبرة 15 عاماً',
    image: '/images/authors/consumer-protection.jpg',
    credentials: [
      'مستشار في حماية حقوق المستهلك',
      'خبرة 15+ عاماً في تقييم شركات النقل',
      'محكم معتمد في نزاعات النقل',
    ],
  },
  category: 'حماية المستهلك',
  tags: [
    'أخطاء شائعة',
    'اختيار شركة نقل',
    'حماية المستهلك',
    'نصائح مهمة',
    'تجنب المشاكل',
  ],
  image: '/images/blog/common-mistakes-moving-company.jpg',
  slug: 'common-mistakes-choosing-moving-company',
};

export default function BlogPost() {
  const content = (
    <>
      <Heading as="h2">مقدمة: أهمية تجنب الأخطاء الشائعة</Heading>
      
      <p className="mb-6">
        يقع الكثير من الناس في أخطاء شائعة عند اختيار شركة نقل العفش، مما قد يؤدي إلى تجارب سيئة وخسائر مادية. في هذا المقال، سنستعرض أهم هذه الأخطاء وكيفية تجنبها لضمان تجربة نقل ناجحة وآمنة.
      </p>

      <Image
        src="/images/blog/common-mistakes-moving-company.jpg"
        alt="أخطاء شائعة في اختيار شركات النقل"
        caption="تعرف على الأخطاء التي يجب تجنبها عند اختيار شركة نقل العفش"
      />

      <Heading as="h2">الخطأ #1: اختيار أرخص عرض سعر</Heading>

      <UnorderedList>
        <ListItem>التركيز على السعر فقط دون النظر للجودة</ListItem>
        <ListItem>تجاهل التكاليف الإضافية المخفية</ListItem>
        <ListItem>عدم فهم سبب انخفاض السعر بشكل كبير</ListItem>
        <ListItem>تجاهل علامات التحذير من العروض المشبوهة</ListItem>
      </UnorderedList>

      <Callout type="warning" title="تحذير هام">
        العرض الأرخص قد يكلفك أضعاف المبلغ في النهاية بسبب الأضرار والمشاكل غير المتوقعة.
      </Callout>

      <Heading as="h2">الخطأ #2: عدم التحقق من الترخيص والتأمين</Heading>

      <OrderedList>
        <ListItem>عدم طلب رؤية الترخيص الرسمي</ListItem>
        <ListItem>تجاهل أهمية وثائق التأمين</ListItem>
        <ListItem>عدم التحقق من صلاحية التراخيص</ListItem>
        <ListItem>قبول وعود شفهية دون توثيق</ListItem>
      </OrderedList>

      <Image
        src="/images/blog/legal-verification.jpg"
        alt="التحقق من الوثائق القانونية"
        caption="أهمية التحقق من التراخيص والوثائق القانونية"
      />

      <Heading as="h2">الخطأ #3: عدم قراءة التقييمات والمراجعات</Heading>

      <UnorderedList>
        <ListItem>الاكتفاء بتوصية شخص واحد</ListItem>
        <ListItem>تجاهل التقييمات السلبية</ListItem>
        <ListItem>عدم البحث عن تجارب العملاء السابقين</ListItem>
        <ListItem>عدم التحقق من مصداقية التقييمات</ListItem>
      </UnorderedList>

      <Callout type="info" title="نصيحة مهمة">
        ابحث عن تقييمات من مصادر موثوقة ومتعددة، وركز على التقييمات التي تقدم تفاصيل محددة عن التجربة.
      </Callout>

      <Heading as="h2">الخطأ #4: عدم توثيق الاتفاق كتابياً</Heading>

      <OrderedList>
        <ListItem>الاكتفاء بالاتفاق الشفهي</ListItem>
        <ListItem>عدم قراءة العقد بعناية</ListItem>
        <ListItem>تجاهل البنود الصغيرة في العقد</ListItem>
        <ListItem>عدم الاحتفاظ بنسخة من العقد</ListItem>
      </OrderedList>

      <Image
        src="/images/blog/contract-documentation.jpg"
        alt="توثيق العقود والاتفاقيات"
        caption="أهمية التوثيق الكتابي لجميع تفاصيل الاتفاق"
      />

      <Heading as="h2">الخطأ #5: عدم إجراء معاينة قبل النقل</Heading>

      <UnorderedList>
        <ListItem>قبول تقدير السعر عبر الهاتف فقط</ListItem>
        <ListItem>عدم توضيح تفاصيل الأثاث المهمة</ListItem>
        <ListItem>تجاهل ظروف المبنى والمداخل</ListItem>
        <ListItem>عدم تحديد المتطلبات الخاصة</ListItem>
      </UnorderedList>

      <Callout type="success" title="الحل الأمثل">
        اطلب دائماً معاينة مجانية وتأكد من حصول الشركة على كافة المعلومات اللازمة.
      </Callout>

      <Heading as="h2">الخطأ #6: عدم التخطيط للتوقيت المناسب</Heading>

      <OrderedList>
        <ListItem>اختيار مواعيد الذروة دون داعٍ</ListItem>
        <ListItem>عدم مراعاة ظروف الطقس</ListItem>
        <ListItem>حجز موعد في اللحظة الأخيرة</ListItem>
        <ListItem>عدم وضع خطة بديلة</ListItem>
      </OrderedList>

      <Heading as="h2">الخطأ #7: تجاهل تفاصيل التأمين والتعويض</Heading>

      <UnorderedList>
        <ListItem>عدم فهم نطاق التغطية التأمينية</ListItem>
        <ListItem>تجاهل شروط التعويض</ListItem>
        <ListItem>عدم توثيق حالة الأثاث قبل النقل</ListItem>
        <ListItem>عدم معرفة إجراءات المطالبة</ListItem>
      </UnorderedList>

      <Image
        src="/images/blog/insurance-coverage.jpg"
        alt="تغطية التأمين والتعويضات"
        caption="فهم تفاصيل التأمين والتعويضات أمر ضروري"
      />

      <Heading as="h2">الخطأ #8: عدم التحضير المناسب</Heading>

      <OrderedList>
        <ListItem>عدم تجهيز قائمة بالمنقولات</ListItem>
        <ListItem>عدم تصوير الأثاث قبل النقل</ListItem>
        <ListItem>عدم فرز وتنظيم الأغراض</ListItem>
        <ListItem>عدم تحديد الأولويات</ListItem>
      </OrderedList>

      <Callout type="info" title="نصيحة للتنظيم">
        قم بإعداد قائمة تفصيلية وتوثيق حالة الأثاث بالصور قبل النقل لحماية حقوقك.
      </Callout>

      <Heading as="h2">الخطأ #9: تجاهل الخبرة والتخصص</Heading>

      <UnorderedList>
        <ListItem>عدم السؤال عن خبرة الشركة</ListItem>
        <ListItem>تجاهل تخصص الشركة في نوع معين من النقل</ListItem>
        <ListItem>عدم التحقق من مؤهلات العمال</ListItem>
        <ListItem>تجاهل سمعة الشركة في السوق</ListItem>
      </UnorderedList>

      <Heading as="h2">الخطأ #10: عدم طلب ضمانات كافية</Heading>

      <OrderedList>
        <ListItem>عدم طلب ضمان خطي للخدمة</ListItem>
        <ListItem>تجاهل سياسة الشركة في حل المشكلات</ListItem>
        <ListItem>عدم معرفة حقوق العميل</ListItem>
        <ListItem>قبول وعود غير موثقة</ListItem>
      </OrderedList>

      <Heading as="h2">كيفية تجنب هذه الأخطاء</Heading>

      <UnorderedList>
        <ListItem>إجراء بحث شامل عن الشركة</ListItem>
        <ListItem>طلب عروض أسعار مفصلة ومكتوبة</ListItem>
        <ListItem>التحقق من جميع الوثائق والتراخيص</ListItem>
        <ListItem>توثيق كل شيء كتابياً وبالصور</ListItem>
        <ListItem>قراءة العقد بعناية قبل التوقيع</ListItem>
      </UnorderedList>

      <Heading as="h2">الخاتمة</Heading>

      <p className="mb-6">
        تجنب هذه الأخطاء الشائعة يمكن أن يوفر عليك الكثير من المشاكل والخسائر المحتملة. تذكر دائماً أن الاختيار الصحيح لشركة نقل العفش يتطلب بحثاً دقيقاً وتخطيطاً جيداً. لا تتسرع في اتخاذ القرار واحرص على توثيق كل التفاصيل لضمان تجربة نقل ناجحة وآمنة.
      </p>
    </>
  );

  return <ArticleTemplate post={post} content={content} />;
} 