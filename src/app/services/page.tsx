import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FaTruck, FaBox, FaWarehouse, FaGlobe, FaShippingFast, FaTools, FaChair, FaBoxOpen } from 'react-icons/fa';
import { MdSecurity, MdLocationOn, MdAttachMoney } from 'react-icons/md';
import { BiSolidPackage } from 'react-icons/bi';

export const metadata: Metadata = {
  title: 'خدماتنا - شركة نقل العفش',
  description: 'تعرف على خدمات نقل العفش الاحترافية والمتكاملة التي نقدمها في مختلف مناطق المملكة العربية السعودية',
};

export default function ServicesPage() {
  // بيانات خدمات الشركة
  const services = [
    {
      id: 1,
      title: 'نقل سكني',
      description: 'خدمات نقل احترافية ومتكاملة للمنازل والشقق والفلل مع ضمان أمان وسلامة جميع المقتنيات الثمينة والأثاث.',
      icon: <FaTruck className="w-12 h-12" />,
      image: '/images/Furniture_moving.jpeg',
      href: '/services/residential-moving',
      features: [
        'تغليف احترافي لجميع القطع',
        'فك وتركيب الأثاث بمهارة',
        'فريق عمل مدرب ومؤهل',
        'مواعيد مرنة تناسب احتياجاتك',
        'تأمين شامل على جميع المنقولات'
      ]
    },
    {
      id: 2,
      title: 'نقل تجاري',
      description: 'خدمات نقل متخصصة للمكاتب والشركات مع التركيز على سرعة التنفيذ للحفاظ على استمرارية العمل دون توقف طويل.',
      icon: <FaBox className="w-12 h-12" />,
      image: '/images/Furniture_Moving_Saudi_arabia.jpeg',
      href: '/services/commercial-moving',
      features: [
        'خطة نقل مفصلة لتجنب تعطل الأعمال',
        'فريق متخصص في نقل المعدات المكتبية',
        'إعادة ترتيب وتركيب المكاتب',
        'العمل خارج ساعات الدوام لتقليل الاضطراب',
        'نقل الأجهزة الإلكترونية والحساسة بعناية فائقة'
      ]
    },
    {
      id: 3,
      title: 'تخزين آمن',
      description: 'حلول تخزين قصيرة وطويلة المدى في مستودعات مؤمنة ومراقبة على مدار الساعة مع ضمان الحفاظ على حالة الأثاث.',
      icon: <FaWarehouse className="w-12 h-12" />,
      image: '/images/Furniture_moving_Dammam.jpeg',
      href: '/services/storage-solutions',
      features: [
        'مستودعات جافة ومكيفة لحماية الأثاث',
        'أنظمة أمان ومراقبة على مدار الساعة',
        'خيارات تخزين مرنة (شهري، سنوي)',
        'تغليف إضافي للتخزين طويل المدى',
        'سهولة الوصول إلى المقتنيات عند الحاجة'
      ]
    },
    {
      id: 4,
      title: 'نقل دولي',
      description: 'خدمات نقل احترافية من وإلى المملكة العربية السعودية بأفضل المعايير العالمية وبالتنسيق مع شركات عالمية.',
      icon: <FaGlobe className="w-12 h-12" />,
      image: '/images/Furniture_moving_Jeddah.jpeg',
      href: '/services/international-moving',
      features: [
        'التعامل مع جميع الإجراءات الجمركية',
        'تغليف خاص للشحن الدولي',
        'تتبع الشحنات في الوقت الفعلي',
        'تأمين شامل للنقل الدولي',
        'خيارات شحن بحري وجوي مختلفة'
      ]
    },
    {
      id: 5,
      title: 'خدمات التغليف',
      description: 'خدمات تغليف احترافية باستخدام أفضل المواد للحفاظ على القطع الحساسة والثمينة أثناء النقل والتخزين.',
      icon: <BiSolidPackage className="w-12 h-12" />,
      image: '/images/Furniture_moving_company.jpeg',
      href: '/services/packing-services',
      features: [
        'استخدام مواد تغليف عالية الجودة',
        'تغليف مخصص للقطع الفنية والتحف',
        'ترقيم وتنظيم الصناديق لسهولة التفريغ',
        'فريق متخصص في تغليف المقتنيات الثمينة',
        'خيارات تغليف بيئية صديقة للبيئة'
      ]
    },
    {
      id: 6,
      title: 'فك وتركيب الأثاث',
      description: 'خدمات فك وتركيب الأثاث على يد فنيين محترفين مع ضمان سلامة جميع القطع وإعادة تركيبها بشكل صحيح.',
      icon: <FaTools className="w-12 h-12" />,
      image: '/images/Furniture_moving_Riyadh.jpeg',
      href: '/services/furniture-assembly',
      features: [
        'فنيين مدربين على جميع أنواع الأثاث',
        'أدوات متخصصة للفك والتركيب',
        'ترقيم وتنظيم القطع لضمان التركيب الصحيح',
        'خبرة خاصة مع الأثاث الحديث والإيكيا',
        'ضمان على خدمات التركيب'
      ]
    },
    {
      id: 7,
      title: 'نقل الأثاث الثمين',
      description: 'خدمات متخصصة لنقل القطع الثمينة مثل البيانو والتحف والمقتنيات الفنية والأنتيكات بأقصى درجات العناية.',
      icon: <FaChair className="w-12 h-12" />,
      image: '/images/Best_Neighborhoods_in_Riyadh_for_New_Housing.jpeg',
      href: '/services/luxury-moving',
      features: [
        'فريق متخصص في نقل المقتنيات الثمينة',
        'معدات وتقنيات خاصة للقطع الحساسة',
        'تأمين إضافي على القطع عالية القيمة',
        'خطة نقل مخصصة لكل قطعة ثمينة',
        'تقنيات تغليف متقدمة للحماية القصوى'
      ]
    },
    {
      id: 8,
      title: 'خدمات التنظيف',
      description: 'خدمات تنظيف شاملة للمنزل القديم والجديد قبل وبعد النقل مع التركيز على النظافة العميقة وإزالة جميع آثار النقل.',
      icon: <FaBoxOpen className="w-12 h-12" />,
      image: '/images/Furniture_moving_prices.jpeg',
      href: '/services/cleaning-services',
      features: [
        'تنظيف المنزل القديم بعد النقل',
        'تنظيف المنزل الجديد قبل الانتقال',
        'إزالة مخلفات التغليف والنقل',
        'تنظيف عميق للمطابخ والحمامات',
        'استخدام منظفات آمنة وفعالة'
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 hero-pattern">
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">خدماتنا المتكاملة</h1>
          <p className="text-xl max-w-3xl mx-auto">
            نقدم مجموعة متكاملة من خدمات نقل العفش الاحترافية لتلبية كافة احتياجاتك
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <FeatureCard 
              icon={<MdSecurity className="w-10 h-10" />}
              title="خدمات آمنة"
              description="نضمن سلامة جميع ممتلكاتك من لحظة الفك حتى التركيب النهائي"
            />
            <FeatureCard 
              icon={<MdLocationOn className="w-10 h-10" />}
              title="تغطية واسعة"
              description="نقدم خدماتنا في جميع مناطق المملكة العربية السعودية"
            />
            <FeatureCard 
              icon={<MdAttachMoney className="w-10 h-10" />}
              title="أسعار تنافسية"
              description="خدمات احترافية بأسعار معقولة وشفافة دون تكاليف خفية"
            />
          </div>

          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <ServiceSection 
                key={service.id} 
                service={service} 
                isReverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">أسعارنا</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نقدم باقات مختلفة لتناسب احتياجاتك وميزانيتك مع الحفاظ على جودة الخدمة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              title="الباقة الأساسية"
              price="يبدأ من 500 ريال"
              features={[
                'نقل الأثاث',
                'عمالة مدربة',
                'استخدام شاحنات مغلقة',
                'تغليف أساسي',
                'تأمين على المنقولات'
              ]}
              isPopular={false}
              href="/get-a-free-quote"
            />
            <PricingCard 
              title="الباقة المتميزة"
              price="يبدأ من 800 ريال"
              features={[
                'كل مميزات الباقة الأساسية',
                'فك وتركيب الأثاث',
                'تغليف متقدم لجميع القطع',
                'ترقيم وتنظيم الصناديق',
                'خدمة التفريغ وإعادة الترتيب'
              ]}
              isPopular={true}
              href="/get-a-free-quote"
            />
            <PricingCard 
              title="الباقة الشاملة"
              price="يبدأ من 1200 ريال"
              features={[
                'كل مميزات الباقة المتميزة',
                'تنظيف المنزل القديم',
                'تنظيف المنزل الجديد',
                'تغليف خاص للمقتنيات الثمينة',
                'تأمين إضافي على القطع الثمينة'
              ]}
              isPopular={false}
              href="/get-a-free-quote"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">الأسئلة الشائعة</h2>
          
          <div className="max-w-3xl mx-auto">
            <FAQItem 
              question="كيف يتم تحديد سعر النقل؟" 
              answer="يتم تحديد سعر النقل بناءً على عدة عوامل منها كمية الأثاث، المسافة بين المكانين، عدد الطوابق، وجود مصعد من عدمه، والخدمات الإضافية مثل الفك والتركيب والتغليف. نقدم معاينة مجانية لتحديد السعر بدقة." 
            />
            <FAQItem 
              question="كم من الوقت يستغرق حجز موعد النقل؟" 
              answer="يمكن حجز موعد للنقل قبل الموعد المطلوب بيومين على الأقل، ولكننا ننصح بالحجز المبكر خاصة في فترات الذروة مثل الإجازات ونهاية الشهر لضمان توفر الموعد المناسب لك." 
            />
            <FAQItem 
              question="ما هي سياسة التأمين والتعويض؟" 
              answer="جميع خدماتنا مشمولة بتأمين شامل على المنقولات. في حالة حدوث أي تلف أو فقدان لأي قطعة، نتحمل المسؤولية الكاملة وفقًا لشروط التعاقد. كما نقدم خيارات تأمين إضافية للقطع الثمينة." 
            />
            <FAQItem 
              question="هل يمكنني الاطلاع على بعض الأعمال السابقة؟" 
              answer="نعم، يمكنك الاطلاع على بعض الأعمال السابقة من خلال قسم آراء العملاء في موقعنا، كما يمكننا تزويدك بمراجع لعملاء سابقين عند الطلب." 
            />
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">مستعد للبدء؟</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            احصل على خدمة نقل عفش احترافية تناسب احتياجاتك وميزانيتك
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/get-a-free-quote"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-xl transition-colors inline-block"
            >
              احصل على عرض سعر
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-4 rounded-lg text-xl transition-colors inline-block"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 text-blue-600 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ServiceSection({ service, isReverse }: { 
  service: any; 
  isReverse: boolean;
}) {
  return (
    <div className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
      <div className="lg:w-1/2">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="lg:w-1/2">
        <div className="flex items-center mb-4">
          <div className="text-blue-600 mr-4">{service.icon}</div>
          <h2 className="text-3xl font-bold">{service.title}</h2>
        </div>
        <p className="text-lg text-gray-600 mb-6">
          {service.description}
        </p>
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-3">مميزات الخدمة:</h3>
          <ul className="space-y-2">
            {service.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link 
          href={service.href}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors"
        >
          معرفة المزيد
        </Link>
      </div>
    </div>
  );
}

function PricingCard({ title, price, features, isPopular, href }: {
  title: string;
  price: string;
  features: string[];
  isPopular: boolean;
  href: string;
}) {
  return (
    <div className={`p-6 rounded-lg ${isPopular ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200'} transform ${isPopular ? 'scale-105' : 'scale-100'} transition-transform shadow-lg`}>
      {isPopular && (
        <div className="mb-4 -mt-10 bg-yellow-400 text-gray-900 py-1 px-4 rounded-full inline-block text-sm font-bold">
          الأكثر طلباً
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className={`text-3xl font-bold mb-6 ${isPopular ? 'text-white' : 'text-blue-600'}`}>
        {price}
      </div>
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg 
              className={`w-5 h-5 mr-2 mt-1 ${isPopular ? 'text-white' : 'text-green-500'} flex-shrink-0`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className={isPopular ? 'text-white/90' : 'text-gray-600'}>{feature}</span>
          </li>
        ))}
      </ul>
      <Link 
        href={href}
        className={`block text-center py-3 px-6 rounded-lg transition-colors ${
          isPopular 
            ? 'bg-white text-blue-600 hover:bg-blue-50' 
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        احصل على عرض سعر
      </Link>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="mb-6 p-6 bg-white rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-3 text-blue-600">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
} 