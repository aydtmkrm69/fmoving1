import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FaBuilding, FaTruckMoving, FaShieldAlt, FaClipboardList, FaTools } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'خدمات نقل المكاتب والشركات - نقل عفش تجاري احترافي',
  description: 'نقدم خدمات نقل تجاري شاملة للمكاتب والشركات والمؤسسات في جميع أنحاء المملكة. حلول متكاملة لنقل أثاث ومعدات الشركات بأمان وكفاءة.',
};

export default function CommercialMovingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-blue-700 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/blog/office-company-furniture-moving-saudi-arabia.jpeg" // Placeholder - replace with relevant commercial moving image
            alt="نقل عفش تجاري وشركات"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
          <FaBuilding className="text-6xl mb-4 text-yellow-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            نقل المكاتب والشركات باحترافية وأمان
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            حلول متكاملة لنقل أعمالك التجارية بكفاءة عالية ودون تعطيل لعملياتك.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">نظرة عامة على خدمة النقل التجاري</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ندرك أهمية استمرارية أعمالك. لذلك، نقدم خدمة نقل تجاري مصممة خصيصًا لتقليل وقت التوقف عن العمل وضمان انتقال سلس لمكتبك أو شركتك.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/images/blog/Furniture_Moving_Services.jpeg" // Placeholder
                alt="تخطيط عملية نقل تجاري"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">ما نقدمه في النقل التجاري:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaTruckMoving className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span>تخطيط دقيق لعملية النقل لضمان الكفاءة وتقليل الاضطراب.</span>
                </li>
                <li className="flex items-start">
                  <FaShieldAlt className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span>تغليف احترافي وآمن لجميع أثاث المكاتب، المعدات الإلكترونية، والملفات الهامة.</span>
                </li>
                <li className="flex items-start">
                  <FaTools className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span>فك وتركيب الأثاث المكتبي والمعدات بواسطة فنيين متخصصين.</span>
                </li>
                <li className="flex items-start">
                  <FaClipboardList className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <span>نقل آمن للمعدات الحساسة مثل الخوادم وأجهزة الكمبيوتر.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">لماذا تختارنا لنقل أعمالك التجارية؟</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              خبرتنا الطويلة وفريقنا المتخصص يجعلاننا الخيار الأمثل لضمان عملية نقل تجاري ناجحة.
            </p>
          </div>
          {/* Add content for why choose us - e.g., grid of features/benefits */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaBuilding className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">خبرة متخصصة</h3>
              <p className="text-gray-600">لدينا سنوات من الخبرة في نقل الشركات والمكاتب من مختلف الأحجام والقطاعات.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaTools className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">تقليل وقت التعطل</h3>
              <p className="text-gray-600">نخطط وننفذ عملية النقل بكفاءة لضمان عودة أعمالك للعمل في أسرع وقت ممكن.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">أمان المعدات</h3>
              <p className="text-gray-600">نتعامل مع معداتك وملفاتك بعناية فائقة ونستخدم مواد تغليف متخصصة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">عملية النقل التجاري لدينا</h2>
          </div>
          {/* Add content for our process - e.g., timeline or steps */}
          <ol className="relative border-l border-gray-200 dark:border-gray-700 space-y-10">
            <li className="mb-10 ml-6">            
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <FaClipboardList className="w-4 h-4 text-blue-600 dark:text-blue-300" />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">1. الاستشارة والتخطيط الأولي</h3>
                <p className="text-gray-600">تقييم احتياجات النقل الخاصة بك ووضع خطة مفصلة.</p>
            </li>
            <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <FaTools className="w-4 h-4 text-blue-600 dark:text-blue-300" />
                </span>
                <h3 className="mb-1 text-xl font-semibold text-gray-900">2. التغليف والتحضير</h3>
                <p className="text-gray-600">تغليف احترافي لجميع الأصول المكتبية والمعدات.</p>
            </li>
            <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <FaTruckMoving className="w-4 h-4 text-blue-600 dark:text-blue-300" />
                </span>
                <h3 className="mb-1 text-xl font-semibold text-gray-900">3. النقل الآمن</h3>
                <p className="text-gray-600">نقل ممتلكاتك باستخدام أسطولنا المجهز.</p>
            </li>
            <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <FaBuilding className="w-4 h-4 text-blue-600 dark:text-blue-300" />
                </span>
                <h3 className="mb-1 text-xl font-semibold text-gray-900">4. التفريغ وإعادة التركيب</h3>
                <p className="text-gray-600">تفريغ الأثاث والمعدات وإعادة تركيبها في الموقع الجديد حسب الخطة.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">خدمات نقل تجاري متخصصة</h2>
          </div>
          {/* Add content for specialized services - e.g., cards for office moving, IT equipment, etc. */}
          <p className="text-lg text-gray-600 text-center">
            نقدم أيضًا خدمات متخصصة مثل نقل معدات تكنولوجيا المعلومات الحساسة، نقل المعامل، والمزيد. اتصل بنا لمناقشة احتياجاتك الخاصة.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">هل أنت جاهز لنقل أعمالك؟</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            اتصل بنا اليوم للحصول على استشارة مجانية وخطة نقل مخصصة لشركتك.
          </p>
          <Link
            href="/get-a-free-quote"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-xl font-semibold transition-colors inline-block shadow-lg"
          >
            اطلب عرض سعر الآن
          </Link>
        </div>
      </section>
    </div>
  );
}