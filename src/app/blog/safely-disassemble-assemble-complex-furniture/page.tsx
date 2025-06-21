import type { Metadata } from 'next';
import ArticleTemplate from '@/components/mdx/ArticleTemplate';
import Heading from '@/components/mdx/Heading';
import Image from '@/components/mdx/Image';
import Callout from '@/components/mdx/Callout';
import { UnorderedList, OrderedList, ListItem } from '@/components/mdx/List';

export const metadata: Metadata = {
  title: 'كيفية فك وتركيب الأثاث المعقد بأمان: دليل عملي للمبتدئين - مدونة نقل العفش',
  description: 'دليل شامل وعملي حول كيفية فك وتركيب قطع الأثاث المعقدة بأمان وسهولة، مع نصائح وإرشادات للمبتدئين وأدوات أساسية يجب توفرها.',
  openGraph: {
    title: 'كيفية فك وتركيب الأثاث المعقد بأمان: دليل عملي للمبتدئين',
    description: 'إرشادات خطوة بخطوة لفك وتركيب مختلف أنواع الأثاث المعقد بأمان، مع نصائح عملية للحفاظ عليه.',
    images: ['/images/blog/safely-disassemble-assemble-furniture.jpg'],
  },
};

const post = {
  id: 'safely-disassemble-assemble-complex-furniture',
  title: 'كيفية فك وتركيب الأثاث المعقد بأمان: دليل عملي للمبتدئين',
  description: 'دليل شامل وعملي حول كيفية فك وتركيب قطع الأثاث المعقدة بأمان وسهولة، مع نصائح وإرشادات للمبتدئين وأدوات أساسية يجب توفرها.',
  content: 'دليل تفصيلي يشرح كيفية فك وتركيب أنواع مختلفة من الأثاث المعقد بطريقة آمنة وسليمة، مع نصائح وإرشادات خطوة بخطوة مناسبة للمبتدئين.',
  publishedAt: '2025-04-15',
  author: {
    id: 'furniture-technician',
    name: 'م. خالد الحربي',
    bio: 'فني متخصص في صيانة وتركيب الأثاث مع خبرة تزيد عن 15 عاماً في المجال',
    image: '/images/authors/furniture-technician.jpg',
    credentials: [
      'شهادة هندسية في تصميم الأثاث',
      'خبير معتمد في تركيب الأثاث الإيكيا',
      'مدرب في ورش صناعة الأثاث المحلية',
    ],
  },
  category: 'نصائح تقنية',
  tags: [
    'فك الأثاث',
    'تركيب الأثاث',
    'أدوات نجارة',
    'نقل آمن',
    'الأثاث المعقد',
  ],
  image: '/images/blog/safely-disassemble-assemble-furniture.jpg',
  slug: 'safely-disassemble-assemble-complex-furniture',
};

export default function BlogPost() {
  const content = (
    <div suppressHydrationWarning>
      <h2 className="text-3xl font-bold mb-5">مقدمة: أهمية فك وتركيب الأثاث بشكل صحيح</h2>
      
      <p className="mb-6">
        تشير الإحصائيات إلى أن 65% من حالات تلف الأثاث أثناء النقل تحدث بسبب الفك أو التركيب غير الصحيح. هذا الدليل العملي يهدف إلى تزويدك بالمعرفة والمهارات الأساسية للتعامل مع قطع الأثاث المعقدة، سواء كنت تستعد للانتقال إلى منزل جديد، أو تريد فقط إعادة تنظيم مساحة منزلك الحالي. بفهم الأساسيات والتقنيات السليمة، ستتمكن من حماية استثماراتك في الأثاث وإطالة عمرها الافتراضي.
      </p>

      <Image
        src="/images/blog/safely-disassemble-assemble-furniture.jpg"
        alt="فك وتركيب الأثاث المعقد بأمان"
        caption="باستخدام الأدوات المناسبة والتقنيات الصحيحة، يمكن فك وتركيب أكثر قطع الأثاث تعقيداً بأمان"
      />

      <h2 className="text-3xl font-bold mb-5">الأدوات الأساسية اللازمة لفك وتركيب الأثاث</h2>

      <h3 className="text-2xl font-bold mb-4">1. مجموعة مفكات متنوعة</h3>
      <ul className="list-disc list-outside mr-6 mb-6 space-y-2">
        <li>مفكات فيليبس (Phillips) ذات أحجام مختلفة</li>
        <li>مفكات مسطحة الرأس بمقاسات متنوعة</li>
        <li>مفكات توركس (Torx) للأثاث الحديث</li>
        <li>مفكات سداسية (Allen) للأثاث المستورد</li>
      </ul>

      <h3 className="text-2xl font-bold mb-4">2. أدوات قياس ومراجعة</h3>
      <ul className="list-disc list-outside mr-6 mb-6 space-y-2">
        <li>شريط قياس دقيق (5 أمتار على الأقل)</li>
        <li>ميزان ماء (روح) للتأكد من استقامة التركيب</li>
        <li>زاوية قائمة للتأكد من دقة الزوايا</li>
        <li>مسطرة معدنية مستقيمة للقياسات الصغيرة</li>
      </ul>

      <h3 className="text-2xl font-bold mb-4">3. أدوات التثبيت والضبط</h3>
      <ul className="list-disc list-outside mr-6 mb-6 space-y-2">
        <li>مطرقة متوسطة الحجم مع رأس مطاطي للطرق الخفيف</li>
        <li>مفتاح قابل للتعديل (فرنساوي)</li>
        <li>كماشة (بنسة) متعددة الاستخدامات</li>
        <li>مفاتيح ربط بمقاسات مختلفة</li>
      </ul>

      <Image
        src="/images/blog/furniture-tools.jpg"
        alt="الأدوات الأساسية لفك وتركيب الأثاث"
        caption="مجموعة الأدوات الأساسية التي تحتاجها لفك وتركيب الأثاث المعقد بأمان"
      />

      <div className="p-4 my-6 border rounded-lg bg-yellow-50 border-yellow-200">
        <div className="flex items-start">
          <div className="text-yellow-600 mt-1 ml-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-yellow-800">نصيحة هامة</h4>
            <div className="text-gray-700">
              لا تحاول استخدام أدوات بديلة غير مناسبة (مثل سكين المطبخ بدلاً من المفك)! استثمار 250-350 ريال في مجموعة أدوات جيدة يوفر عليك آلاف الريالات في إصلاح الأثاث التالف بسبب الاستخدام الخاطئ للأدوات.
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-5">خطوات التحضير قبل فك الأثاث</h2>

      <ol className="list-decimal list-outside mr-6 mb-6 space-y-2">
        <li>تصوير الأثاث من جميع الزوايا قبل البدء (توثيق الشكل الأصلي)</li>
        <li>تفريغ محتويات الأثاث بالكامل (الأدراج، الأرفف، إلخ)</li>
        <li>إزالة الأجزاء القابلة للكسر (الزجاج، المرايا) وتغليفها بشكل منفصل</li>
        <li>تجهيز مساحة كافية للعمل وفرش قطعة قماش أو بطانية لحماية الأثاث</li>
        <li>قراءة دليل المستخدم (إن وجد) أو البحث عن مقاطع فيديو توضيحية</li>
      </ol>

      <Image
        src="/images/blog/furniture-preparation.jpg"
        alt="تحضير مساحة العمل لفك الأثاث"
        caption="إعداد مساحة العمل المناسبة أمر ضروري قبل البدء في فك أي قطعة أثاث"
      />

      <h2 className="text-3xl font-bold mb-5">نظام التوثيق: المفتاح لإعادة التركيب بسهولة</h2>

      <p className="mb-6">
        أحد أكبر التحديات التي تواجه معظم الناس عند فك الأثاث هو تذكر كيفية إعادة تركيبه. لذلك، من الضروري اتباع نظام توثيق دقيق:
      </p>

      <ol className="list-decimal list-outside mr-6 mb-6 space-y-2">
        <li>تصوير كل خطوة من خطوات الفك بالتفصيل</li>
        <li>استخدام أكياس صغيرة وشفافة لتخزين البراغي والمسامير الخاصة بكل جزء</li>
        <li>وضع ملصقات على الأجزاء المفككة برموز متطابقة (مثلاً: أ1 - أ2 للأجزاء المتصلة)</li>
        <li>رسم مخطط بسيط يوضح تسلسل الفك لمساعدتك على التذكر</li>
        <li>تصوير المسامير والقطع الصغيرة بجانب مسطرة لتوثيق أحجامها</li>
      </ol>

      <div className="p-4 my-6 border rounded-lg bg-blue-50 border-blue-200">
        <div className="flex items-start">
          <div className="text-blue-600 mt-1 ml-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-blue-800">نصيحة من الخبراء</h4>
            <div className="text-gray-700">
              استخدم شريط ماسك شفاف لتثبيت البراغي والمسامير على قطعة من الورق، مع كتابة ملاحظة عن مكان استخدامها. هذه التقنية البسيطة تستخدمها ورش النجارة المحترفة لضمان عدم ضياع أي قطعة صغيرة.
            </div>
          </div>
        </div>
      </div>

      <p className="mb-6">
        فك وتركيب الأثاث المعقد هو مهارة تتطور مع الممارسة والصبر. باتباع الإرشادات والنصائح في هذا الدليل، ستتمكن من التعامل مع معظم قطع الأثاث في منزلك بثقة أكبر، مما يوفر عليك المال ويمنحك شعوراً بالإنجاز.
      </p>

      <p className="mb-6">
        تذكر دائماً: الصبر والدقة والتوثيق هي المفاتيح الثلاثة للنجاح في فك وتركيب الأثاث المعقد. فإذا واجهت صعوبة، خذ استراحة قصيرة وعد للعمل بذهن صافٍ. ومع الوقت، ستكتسب الخبرة التي تجعل من هذه المهمة عملاً ممتعاً بدلاً من كونه تحدياً مرهقاً.
      </p>
    </div>
  );

  return <ArticleTemplate post={post} content={content} />;
} 