import type { Metadata } from 'next';
import ArticleTemplate from '@/components/mdx/ArticleTemplate';
import Heading from '@/components/mdx/Heading';
import Image from '@/components/mdx/Image';
import Callout from '@/components/mdx/Callout';
import { UnorderedList, OrderedList, ListItem } from '@/components/mdx/List';

export const metadata: Metadata = {
  title: 'قائمة المراجعة النهائية قبل يوم نقل العفش: لا تنسَ أي تفصيل! - مدونة نقل العفش',
  description: 'قائمة مراجعة شاملة لكل ما يجب عليك تذكره والقيام به قبل وأثناء وبعد يوم نقل العفش، مع نصائح احترافية لضمان تجربة نقل خالية من التوتر والمشاكل',
  openGraph: {
    title: 'قائمة المراجعة النهائية قبل يوم نقل العفش: لا تنسَ أي تفصيل!',
    description: 'دليل شامل يحتوي على كافة الخطوات والإجراءات التي يجب اتباعها قبل وأثناء وبعد عملية نقل العفش لضمان انتقال سلس وخالٍ من المشاكل.',
    images: ['/images/blog/moving-day-checklist.jpg'],
  },
};

const post = {
  id: 'ultimate-moving-day-checklist',
  title: 'قائمة المراجعة النهائية قبل يوم نقل العفش: لا تنسَ أي تفصيل!',
  description: 'قائمة مراجعة شاملة لكل ما يجب عليك تذكره والقيام به قبل وأثناء وبعد يوم نقل العفش، مع نصائح احترافية لضمان تجربة نقل خالية من التوتر والمشاكل',
  content: 'دليل متكامل يتضمن قوائم مراجعة تفصيلية للاستعدادات قبل وخلال وبعد عملية نقل العفش، مقسمة على فترات زمنية محددة بدءاً من شهر قبل الانتقال وحتى الأسبوع الأول في المنزل الجديد.',
  publishedAt: '2024-04-20',
  readingTime: '11 دقيقة للقراءة',
  author: {
    id: "nasser-almuhanna",
    name: "ناصر المهنا",
    bio: "مدير عمليات نقل العفش مع خبرة 12 عاماً، متخصص في تنظيم وإدارة عمليات النقل الكبيرة والمعقدة",
    image: "/images/author/Nasser_AlMuhanna.png",
    credentials: [
      "مدير عمليات في كبرى شركات نقل العفش بالمملكة",
      "خبير في تخطيط وتنفيذ عمليات نقل المنازل والمكاتب",
      "مدرب معتمد في مجال إدارة فرق نقل العفش"
    ]
  },
  category: "قوائم وإرشادات",
  tags: [
    "قائمة مراجعة",
    "نقل العفش",
    "التخطيط للانتقال",
    "نصائح احترافية",
    "يوم الانتقال"
  ],
  featured: true,
  image: "/images/blog/moving-day-checklist.jpg",
  slug: "ultimate-moving-day-checklist"
};

export default function BlogPost() {
  const content = (
    <>
      <Heading as="h1">قائمة المراجعة النهائية قبل يوم نقل العفش: لا تنسَ أي تفصيل!</Heading>
      
      <p className="mb-6">
        يعتبر يوم نقل العفش من الأيام المرهقة والمليئة بالتفاصيل التي قد يغفل عنها الكثيرون. مهما كان استعدادك جيداً، فإن وجود قائمة مراجعة شاملة يمكن أن يكون الفرق بين تجربة انتقال سلسة وسهلة، وبين يوم مليء بالمفاجآت غير السارة والتوتر.
      </p>
      
      <Image
        src="/images/blog/moving-day-checklist.jpg"
        alt="قائمة مراجعة يوم نقل العفش"
        caption="التحضير الجيد ليوم نقل العفش يمنحك تجربة انتقال سلسة وخالية من التوتر"
      />
      
      <Heading as="h2">قائمة المراجعة قبل شهر من الانتقال</Heading>
      
      <p className="mb-3">البدء بالتحضير مبكراً هو أحد أهم أسرار النقل الناجح. قبل شهر من موعد الانتقال، تأكد من إنجاز المهام التالية:</p>
      
      <OrderedList>
        <ListItem>تحديد ميزانية واضحة لعملية النقل تشمل جميع التكاليف المتوقعة</ListItem>
        <ListItem>البحث عن شركات نقل العفش المعتمدة وقراءة تقييمات العملاء السابقين</ListItem>
        <ListItem>طلب عروض أسعار من 3-5 شركات نقل على الأقل</ListItem>
        <ListItem>تحديد موعد النقل (يفضل منتصف الشهر وأيام الأسبوع)</ListItem>
        <ListItem>بدء عملية فرز الأغراض وتحديد ما سيتم نقله وما سيتم التبرع به</ListItem>
      </OrderedList>
      
      <Callout type="info" title="نصيحة خبير">
        قم بإنشاء ملف خاص بعملية الانتقال يحتوي على جميع المستندات الهامة: عقود الشركة، عروض الأسعار، التأمين، وقوائم الجرد.
      </Callout>
      
      <Heading as="h2">قائمة المراجعة قبل أسبوعين من الانتقال</Heading>
      
      <UnorderedList>
        <ListItem>تأكيد الحجز مع شركة نقل العفش</ListItem>
        <ListItem>الاتصال بشركات المرافق لنقل الخدمات إلى المنزل الجديد</ListItem>
        <ListItem>إبلاغ الجهات المعنية بتغيير العنوان (البنوك، شركات التأمين)</ListItem>
        <ListItem>البدء بتغليف الأغراض التي لا تستخدمها بشكل يومي</ListItem>
        <ListItem>تنظيف وتجهيز المنزل الجديد إذا كان ذلك ممكناً</ListItem>
      </UnorderedList>
      
      <Image
        src="/images/blog/packing-process-checklist.jpg"
        alt="تغليف المقتنيات استعداداً للنقل"
        caption="التغليف المنظم والدقيق للمقتنيات يساعد في عملية فك التغليف لاحقاً"
      />
      
      <Heading as="h2">قائمة المراجعة قبل 3 أيام من الانتقال</Heading>
      
      <OrderedList>
        <ListItem>تأكد من إتمام تغليف معظم المقتنيات باستثناء الضروريات اليومية</ListItem>
        <ListItem>تفريغ الثلاجة والمجمد واستهلاك المواد الغذائية المتبقية</ListItem>
        <ListItem>تنظيف الأجهزة الكهربائية الكبيرة وتجهيزها للنقل</ListItem>
        <ListItem>تجهيز حقيبة أساسيات تحتوي على ما تحتاجه للأيام الأولى</ListItem>
        <ListItem>تأكيد مواعيد تسليم واستلام المفاتيح للمنزلين القديم والجديد</ListItem>
      </OrderedList>
      
      <Callout type="warning" title="تنبيه هام">
        احتفظ بالمستندات الهامة، المجوهرات، والمقتنيات الثمينة معك شخصياً ولا تضعها مع باقي الأغراض المنقولة.
      </Callout>
      
      <Heading as="h2">قائمة مراجعة صباح يوم النقل</Heading>
      
      <OrderedList>
        <ListItem>الاستيقاظ مبكراً واتباع روتين صباحي بسيط</ListItem>
        <ListItem>ارتداء ملابس مريحة وأحذية مناسبة</ListItem>
        <ListItem>التقاط صور للعدادات (الكهرباء، الماء) في المنزل القديم</ListItem>
        <ListItem>تجهيز مشروبات وطعام خفيف لك ولفريق النقل</ListItem>
        <ListItem>وضع ملصقات واضحة على الصناديق لتحديد الغرف المخصصة لها</ListItem>
      </OrderedList>
      
      <Heading as="h2">قائمة مراجعة أثناء عملية التحميل</Heading>
      
      <Callout type="success" title="نصيحة ذهبية">
        كن متواجداً طوال عملية التحميل للإجابة على أي استفسارات وتقديم التوجيهات اللازمة لفريق النقل.
      </Callout>
      
      <UnorderedList>
        <ListItem>توجيه فريق النقل لتحميل الأثاث الثقيل أولاً ثم الصناديق الخفيفة</ListItem>
        <ListItem>التأكد من تغليف القطع الهشة وتأمينها جيداً</ListItem>
        <ListItem>مراقبة حمل الأثاث بعناية لتجنب إلحاق الضرر بالجدران</ListItem>
        <ListItem>تدوين أي ملاحظات عن حالة الأثاث قبل تحميله</ListItem>
        <ListItem>التأكد من عدم نسيان أي شيء في خزائن المطبخ وأدراج غرف النوم</ListItem>
      </UnorderedList>
      
      <Heading as="h2">قائمة المراجعة النهائية قبل مغادرة المنزل القديم</Heading>
      
      <OrderedList>
        <ListItem>تفقد جميع الغرف والخزائن والأدراج للتأكد من عدم ترك أي شيء</ListItem>
        <ListItem>التأكد من إغلاق جميع النوافذ والأبواب</ListItem>
        <ListItem>إغلاق صمامات الغاز والمياه</ListItem>
        <ListItem>فصل الكهرباء من اللوحة الرئيسية</ListItem>
        <ListItem>تسليم المفاتيح للمالك الجديد أو وكيل العقار</ListItem>
      </OrderedList>
      
      <Heading as="h2">قائمة مراجعة عند الوصول إلى المنزل الجديد</Heading>
      
      <UnorderedList>
        <ListItem>التقاط صور للعدادات في المنزل الجديد</ListItem>
        <ListItem>التأكد من تشغيل الكهرباء والماء</ListItem>
        <ListItem>توجيه فريق النقل بشأن ترتيب الأثاث وفقاً للمخطط المعد مسبقاً</ListItem>
        <ListItem>فحص الأثاث والصناديق عند تفريغها بحثاً عن أي ضرر</ListItem>
        <ListItem>البدء بتركيب الأسرّة وتجهيز المطبخ أولاً</ListItem>
      </UnorderedList>
      
      <Callout type="info" title="ملاحظة مهمة">
        حاول تفريغ صناديق الضروريات الأساسية أولاً، والتي تحتوي على أدوات النظافة، أغراض الحمام، وملاءات الأسرّة.
      </Callout>
      
      <Heading as="h2">قائمة مراجعة الأسبوع الأول في المنزل الجديد</Heading>
      
      <UnorderedList>
        <ListItem>تحديث العنوان في جميع الوثائق والمستندات الرسمية</ListItem>
        <ListItem>التعرف على الخدمات المتوفرة في الحي الجديد</ListItem>
        <ListItem>ترتيب منطقة المعيشة الرئيسية لتوفير مساحة مريحة</ListItem>
        <ListItem>فك باقي صناديق التغليف تدريجياً حسب الأولوية</ListItem>
        <ListItem>التواصل مع الجيران والتعرف عليهم</ListItem>
      </UnorderedList>
      
      <Heading as="h2">أدوات ومستلزمات يجب توفرها في يوم النقل</Heading>
      
      <UnorderedList>
        <ListItem>صندوق أدوات أساسي (مفك، مطرقة، كماشة)</ListItem>
        <ListItem>شريط لاصق إضافي وأقلام تحديد</ListItem>
        <ListItem>مناديل ورقية ومناشف</ListItem>
        <ListItem>مواد تنظيف أساسية</ListItem>
        <ListItem>أكياس نفايات كبيرة</ListItem>
        <ListItem>إسعافات أولية</ListItem>
        <ListItem>شواحن هواتف وبطاريات إضافية</ListItem>
      </UnorderedList>
      
      <Heading as="h2">نصائح اختيارية لتجربة نقل مثالية</Heading>
      
      <OrderedList>
        <ListItem>تصوير الترتيب الأصلي للأسلاك خلف الأجهزة الإلكترونية قبل فصلها</ListItem>
        <ListItem>إعداد حقيبة ملابس لمدة 3-5 أيام للاستخدام الفوري</ListItem>
        <ListItem>استعمال ألوان مختلفة للملصقات حسب الغرفة لتسهيل عملية التوزيع</ListItem>
        <ListItem>أخذ مقاسات الأثاث الكبير والتأكد من مناسبته للأبواب في المنزل الجديد</ListItem>
        <ListItem>تجهيز هدية بسيطة لفريق النقل إذا كان أداؤهم ممتازاً</ListItem>
      </OrderedList>
      
      <p className="mb-6">
        يمكن أن يكون يوم نقل العفش من أكثر الأيام إجهاداً وتوتراً، لكن مع التخطيط المسبق والتنظيم الجيد، يمكنك تحويله إلى تجربة سلسة وناجحة. قائمة المراجعة هذه ستساعدك على التأكد من أنك لم تنسَ أي تفصيل مهم، وستوفر عليك الكثير من التوتر المصاحب لعملية الانتقال.
      </p>
    </>
  );

  return <ArticleTemplate post={post} content={content} />;
} 