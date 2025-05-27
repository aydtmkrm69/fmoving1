import type { Metadata } from 'next';
import ArticleTemplate from '@/components/mdx/ArticleTemplate';
import Heading from '@/components/mdx/Heading';
import Image from '@/components/mdx/Image';
import Callout from '@/components/mdx/Callout';
import { UnorderedList, OrderedList, ListItem } from '@/components/mdx/List';

export const metadata: Metadata = {
  title: 'أسعار نقل العفش في السعودية: العوامل المؤثرة وكيفية الحصول على أفضل عرض - مدونة نقل العفش',
  description: 'دليل شامل لفهم أسعار نقل العفش في السعودية، العوامل المؤثرة في التكلفة، ونصائح للحصول على أفضل عرض سعر مع الحفاظ على جودة الخدمة.',
  openGraph: {
    title: 'أسعار نقل العفش في السعودية: العوامل المؤثرة وكيفية الحصول على أفضل عرض',
    description: 'تعرف على متوسط أسعار نقل العفش في السعودية والعوامل التي تؤثر على التكلفة. نصائح للحصول على أفضل سعر.',
    images: ['/images/blog/furniture-moving-prices.jpg'],
  },
};

const post = {
  id: 'furniture-moving-prices-saudi-arabia',
  title: 'أسعار نقل العفش في السعودية: العوامل المؤثرة وكيفية الحصول على أفضل عرض',
  description: 'دليل شامل لفهم أسعار نقل العفش في السعودية، العوامل المؤثرة في التكلفة، ونصائح للحصول على أفضل عرض سعر مع الحفاظ على جودة الخدمة.',
  content: 'تحليل مفصل لأسعار نقل العفش في السعودية، مع شرح العوامل المؤثرة في التكلفة وكيفية الحصول على أفضل قيمة مقابل المال.',
  publishedAt: '2025-05-07',
  author: {
    id: 'pricing-specialist',
    name: 'م. نورة الشمري',
    bio: 'متخصصة في تحليل أسعار خدمات النقل واللوجستيات مع خبرة 9 سنوات',
    image: '/images/authors/pricing-specialist.jpg',
    credentials: [
      'ماجستير في إدارة الأعمال',
      'محللة معتمدة في التكاليف اللوجستية',
      'خبيرة في تسعير خدمات النقل',
    ],
  },
  category: 'التكاليف والأسعار',
  tags: [
    'أسعار نقل العفش',
    'تكاليف النقل',
    'عروض الأسعار',
    'السعودية',
    'توفير التكاليف',
  ],
  image: '/images/blog/furniture-moving-prices.jpg',
  slug: 'furniture-moving-prices-saudi-arabia',
};

export default function BlogPost() {
  const content = (
    <>
      <Heading as="h2">مقدمة: فهم أسعار نقل العفش</Heading>
      
      <p className="mb-6">
        يعد فهم أسعار نقل العفش وعواملها المؤثرة أمراً ضرورياً للحصول على أفضل قيمة مقابل المال. في هذا الدليل الشامل، سنستعرض متوسط الأسعار في السعودية، العوامل التي تؤثر على التكلفة، وكيفية الحصول على أفضل عرض دون المساومة على الجودة.
      </p>

      <Image
        src="/images/blog/furniture-moving-prices.jpg"
        alt="أسعار نقل العفش في السعودية"
        caption="دليل شامل لفهم تكاليف نقل العفش في المملكة"
      />

      <Heading as="h2">العوامل الرئيسية المؤثرة في السعر</Heading>

      <OrderedList>
        <ListItem>حجم وكمية الأثاث المراد نقله</ListItem>
        <ListItem>المسافة بين موقعي النقل</ListItem>
        <ListItem>الطابق في المبنى القديم والجديد</ListItem>
        <ListItem>توفر مصعد خدمة</ListItem>
        <ListItem>موسم النقل وتوقيته</ListItem>
      </OrderedList>

      <Callout type="info" title="معلومة مهمة">
        الأسعار تختلف بشكل كبير بين المدن الرئيسية والمناطق النائية، وكذلك بين مواسم الذروة والمواسم العادية.
      </Callout>

      <Heading as="h2">متوسط الأسعار حسب حجم المنزل</Heading>

      <UnorderedList>
        <ListItem>شقة استوديو: 800-1200 ريال</ListItem>
        <ListItem>شقة غرفتين: 1200-2000 ريال</ListItem>
        <ListItem>شقة ثلاث غرف: 2000-3000 ريال</ListItem>
        <ListItem>فيلا صغيرة: 3000-5000 ريال</ListItem>
        <ListItem>فيلا كبيرة: 5000-8000 ريال</ListItem>
      </UnorderedList>

      <Image
        src="/images/blog/moving-cost-factors.jpg"
        alt="عوامل تكلفة نقل العفش"
        caption="العوامل الرئيسية المؤثرة في تكلفة نقل العفش"
      />

      <Heading as="h2">تكاليف الخدمات الإضافية</Heading>

      <OrderedList>
        <ListItem>خدمة التغليف الكامل: 500-1500 ريال</ListItem>
        <ListItem>فك وتركيب الأثاث: 300-1000 ريال</ListItem>
        <ListItem>التخزين المؤقت: 200-500 ريال يومياً</ListItem>
        <ListItem>التأمين الشامل: 2-5% من قيمة المنقولات</ListItem>
      </OrderedList>

      <Callout type="warning" title="تنبيه">
        احذر من العروض المنخفضة جداً - قد تخفي رسوماً إضافية غير معلنة أو تشير إلى خدمة غير احترافية.
      </Callout>

      <Heading as="h2">أسعار النقل بين المدن الرئيسية</Heading>

      <UnorderedList>
        <ListItem>الرياض - جدة: 3000-6000 ريال</ListItem>
        <ListItem>الرياض - الدمام: 2500-5000 ريال</ListItem>
        <ListItem>جدة - الدمام: 4000-7000 ريال</ListItem>
        <ListItem>المدن الرئيسية - المدن الصغيرة: يضاف 30-50%</ListItem>
      </UnorderedList>

      <Image
        src="/images/blog/intercity-moving.jpg"
        alt="النقل بين المدن"
        caption="أسعار نقل العفش بين المدن الرئيسية في السعودية"
      />

      <Heading as="h2">نصائح لتوفير التكاليف</Heading>

      <OrderedList>
        <ListItem>اختيار أوقات خارج موسم الذروة</ListItem>
        <ListItem>التخلص من الأغراض غير الضرورية</ListItem>
        <ListItem>طلب عروض أسعار من عدة شركات</ListItem>
        <ListItem>تولي بعض المهام البسيطة بنفسك</ListItem>
      </OrderedList>

      <Callout type="success" title="نصيحة للتوفير">
        حجز موعد النقل في منتصف الشهر وخلال أيام الأسبوع العادية يمكن أن يوفر 20-30% من التكلفة.
      </Callout>

      <Heading as="h2">كيفية الحصول على أفضل عرض سعر</Heading>

      <UnorderedList>
        <ListItem>طلب معاينة مجانية قبل التسعير</ListItem>
        <ListItem>المقارنة بين 3-5 شركات على الأقل</ListItem>
        <ListItem>طلب عرض سعر مفصل وشامل</ListItem>
        <ListItem>التفاوض على الخدمات الإضافية</ListItem>
      </UnorderedList>

      <Heading as="h2">فهم مكونات فاتورة النقل</Heading>

      <OrderedList>
        <ListItem>التكلفة الأساسية للنقل</ListItem>
        <ListItem>رسوم الخدمات الإضافية</ListItem>
        <ListItem>تكاليف مواد التغليف</ListItem>
        <ListItem>رسوم التأمين والضمان</ListItem>
      </OrderedList>

      <Callout type="info" title="نصيحة مهمة">
        اطلب دائماً فاتورة مفصلة تحدد كل بند من بنود التكلفة لتجنب أي مفاجآت لاحقة.
      </Callout>

      <Heading as="h2">موسمية الأسعار</Heading>

      <UnorderedList>
        <ListItem>موسم الذروة (الصيف): زيادة 30-50%</ListItem>
        <ListItem>نهاية الشهر: زيادة 20-30%</ListItem>
        <ListItem>عطلات نهاية الأسبوع: زيادة 15-25%</ListItem>
        <ListItem>المواسم الهادئة: خصومات تصل إلى 40%</ListItem>
      </UnorderedList>

      <Heading as="h2">طرق الدفع والتأمين</Heading>

      <OrderedList>
        <ListItem>دفعة مقدمة: 20-30% من القيمة</ListItem>
        <ListItem>الرصيد عند التسليم</ListItem>
        <ListItem>خيارات الدفع الإلكتروني</ListItem>
        <ListItem>تغطية التأمين الإضافي</ListItem>
      </OrderedList>

      <Heading as="h2">الخاتمة</Heading>

      <p className="mb-6">
        فهم أسعار نقل العفش وعواملها المؤثرة يساعدك في اتخاذ قرار مدروس واختيار العرض الأنسب لميزانيتك. تذكر دائماً أن السعر الأرخص ليس دائماً الخيار الأفضل، وأن الموازنة بين التكلفة والجودة هي المفتاح للحصول على خدمة نقل مرضية. استخدم هذا الدليل كمرجع للتفاوض والحصول على أفضل قيمة مقابل مالك.
      </p>
    </>
  );

  return <ArticleTemplate post={post} content={content} />;
} 