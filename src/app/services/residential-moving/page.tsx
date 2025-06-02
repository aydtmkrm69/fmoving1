import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FaHome, FaBoxOpen, FaTruck, FaSmileBeam, FaUserShield, FaClipboardList } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'خدمات نقل الأثاث السكني - نقل عفش منازل احترافي',
  description: 'نوفر خدمات نقل أثاث سكني موثوقة وآمنة للمنازل والشقق والفلل. فريق متخصص لضمان انتقال سلس ومريح لمنزلك الجديد.',
};

export default function ResidentialMovingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-green-700 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/blog/Guide_to_Moving_Furniture_in_Riyadh.jpeg" // Placeholder - replace with relevant residential moving image
            alt="نقل عفش سكني ومنازل"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
          <FaHome className="text-6xl mb-4 text-yellow-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            انتقل إلى منزلك الجديد براحة وأمان
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            خدمات نقل أثاث سكني متكاملة لتجربة انتقال خالية من القلق.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">نقل الأثاث السكني: راحتك أولويتنا</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نحن نتفهم أن الانتقال إلى منزل جديد يمكن أن يكون مرهقًا. فريقنا هنا ليجعل العملية بسيطة وسلسة قدر الإمكان، مع العناية بكل تفصيلة.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">خدماتنا لنقل منزلك تشمل:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaBoxOpen className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span>تغليف احترافي لجميع قطع الأثاث والمقتنيات الشخصية.</span>
                </li>
                <li className="flex items-start">
                  <FaUserShield className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span>عناية خاصة بالقطع القابلة للكسر والأشياء الثمينة.</span>
                </li>
                <li className="flex items-start">
                  <FaTruck className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span>نقل آمن وموثوق باستخدام شاحنات مجهزة.</span>
                </li>
                <li className="flex items-start">
                  <FaSmileBeam className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <span>ترتيب الأثاث في منزلك الجديد حسب توجيهاتك.</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/images/blog/Professional_Furniture_Packing.jpeg" // Placeholder
                alt="تغليف الأثاث السكني"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">لماذا نحن خيارك الأفضل لنقل منزلك؟</h2>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaUserShield className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">موثوقية وأمان</h3>
              <p className="text-gray-600">نتعامل مع ممتلكاتك بعناية فائقة كما لو كانت خاصة بنا.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaSmileBeam className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">تجربة مريحة</h3>
              <p className="text-gray-600">نهدف إلى جعل يوم انتقالك خاليًا من التوتر قدر الإمكان.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaHome className="text-4xl text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">خدمة شاملة</h3>
              <p className="text-gray-600">من التعبئة إلى التفريغ والترتيب، نغطي كل احتياجاتك.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">خطواتنا لنقل منزلك بسهولة</h2>
          </div>
          <ol className="relative border-l border-gray-200 dark:border-gray-700 space-y-10">
            <li className="mb-10 ml-6">            
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                    <FaClipboardList className="w-4 h-4 text-green-600 dark:text-green-300" />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">1. التقييم المجاني</h3>
                <p className="text-gray-600">نقوم بزيارة لتقييم حجم المنقولات وتحديد احتياجاتك.</p>
            </li>
            <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                    <FaBoxOpen className="w-4 h-4 text-green-600 dark:text-green-300" />
                </span>
                <h3 className="mb-1 text-xl font-semibold text-gray-900">2. التعبئة والتغليف</h3>
                <p className="text-gray-600">يقوم فريقنا بتغليف كل شيء بعناية باستخدام مواد عالية الجودة.</p>
            </li>
            <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                    <FaTruck className="w-4 h-4 text-green-600 dark:text-green-300" />
                </span>
                <h3 className="mb-1 text-xl font-semibold text-gray-900">3. النقل الآمن</h3>
                <p className="text-gray-600">نقل أثاثك إلى منزلك الجديد بأمان وفي الوقت المحدد.</p>
            </li>
            <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                    <FaHome className="w-4 h-4 text-green-600 dark:text-green-300" />
                </span>
                <h3 className="mb-1 text-xl font-semibold text-gray-900">4. التفريغ والترتيب</h3>
                <p className="text-gray-600">نقوم بتفريغ الأثاث ووضعه في الأماكن المحددة بمنزلك الجديد.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">اجعل انتقالك لمنزلك الجديد تجربة سعيدة!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            دعنا نهتم بالتفاصيل الصعبة. اتصل بنا اليوم لترتيب خدمة نقل أثاث منزلك.
          </p>
          <Link
            href="/get-a-free-quote"
            className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg text-xl font-semibold transition-colors inline-block shadow-lg"
          >
            احصل على عرض سعر مجاني لنقل منزلك
          </Link>
        </div>
      </section>
    </div>
  );
}