import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FaStar, FaBroom, FaSprayCan, FaHouseUser, FaCheckCircle } from 'react-icons/fa'; // FaHouseUser for home environment, FaStar replaces FaSparkles

export const metadata: Metadata = {
  title: 'خدمات التنظيف قبل وبعد النقل - منزل نظيف وجاهز',
  description: 'نقدم خدمات تنظيف شاملة قبل الانتقال إلى منزلك الجديد وبعد مغادرة منزلك القديم. استمتع ببداية جديدة في بيئة نظيفة ومنعشة.',
};

export default function CleaningServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-teal-600 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/blog/Your_Guide_to_Efficiently_Arranging_Your_New_Home.jpeg" // Placeholder
            alt="خدمات التنظيف قبل وبعد النقل"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
          <FaStar className="text-6xl mb-4 text-yellow-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            خدمات تنظيف متكاملة لراحة بالك
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            نجهز منزلك القديم للتسليم ومنزلك الجديد للاستقبال، مع نظافة فائقة واهتمام بالتفاصيل.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">لماذا خدمة التنظيف مهمة عند النقل؟</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              الانتقال عملية مرهقة. دعنا نتولى مهمة التنظيف لتتمكن من التركيز على الاستقرار في منزلك الجديد أو إنهاء التزاماتك في منزلك القديم.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/images/blog/Professional_Furniture_Packing.jpeg" // Placeholder, needs a cleaning related image
                alt="فريق تنظيف محترف"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">تشمل خدمات التنظيف لدينا:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaBroom className="text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span>تنظيف شامل للمنزل القديم بعد إخلائه (تنظيف المغادرة).</span>
                </li>
                <li className="flex items-start">
                  <FaHouseUser className="text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span>تنظيف عميق للمنزل الجديد قبل انتقالك إليه (تنظيف الاستقبال).</span>
                </li>
                <li className="flex items-start">
                  <FaSprayCan className="text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span>استخدام مواد تنظيف آمنة وفعالة وصديقة للبيئة.</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-teal-600 mt-1 mr-3 flex-shrink-0" />
                  <span>التركيز على التفاصيل الدقيقة لضمان نظافة مثالية.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cleaning */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">خيارات خدمة التنظيف</h2>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <FaBroom className="text-3xl text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold">تنظيف المغادرة (المنزل القديم)</h3>
              </div>
              <p className="text-gray-600">نضمن ترك منزلك القديم نظيفًا وجاهزًا للمالك الجديد أو المستأجر التالي، مما يساعدك على استيفاء شروط عقد الإيجار أو البيع.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-3">
                <FaHouseUser className="text-3xl text-teal-600 mr-3" />
                <h3 className="text-xl font-semibold">تنظيف الاستقبال (المنزل الجديد)</h3>
              </div>
              <p className="text-gray-600">ابدأ حياتك في منزلك الجديد ببيئة صحية ونظيفة. نقوم بتنظيف شامل قبل وصول أثاثك ومقتنياتك.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* What We Clean */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">ماذا تشمل خدمة التنظيف الشامل؟</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              قائمة مفصلة بالمناطق والأسطح التي نركز عليها لضمان نظافة لا تشوبها شائبة.
            </p>
          </div>
           <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
            {['الأرضيات والسجاد', 'النوافذ الداخلية والخارجية', 'المطابخ والحمامات بالكامل', 'الأبواب والجدران (إزالة البقع)', 'الخزائن والأدراج (من الداخل والخارج)', 'الأجهزة الكهربائية (من الخارج)'].map((item, index) => (
              <li key={index} className="flex items-center bg-gray-100 p-3 rounded-lg">
                <FaCheckCircle className="text-sm text-teal-600 mr-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">هل تحتاج إلى مساعدة في التنظيف أثناء انتقالك؟</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            وفر وقتك وجهدك. اتصل بنا اليوم لحجز خدمة التنظيف قبل أو بعد النقل.
          </p>
          <Link
            href="/get-a-free-quote" 
            className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-lg text-xl font-semibold transition-colors inline-block shadow-lg"
          >
            اطلب خدمة التنظيف الآن
          </Link>
        </div>
      </section>
    </div>
  );
}