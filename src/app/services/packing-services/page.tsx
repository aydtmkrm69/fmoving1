import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FaBoxOpen, FaTape, FaShieldAlt, FaBoxes, FaClipboardCheck } from 'react-icons/fa'; // FaClipboardCheck for organized packing

export const metadata: Metadata = {
  title: 'خدمات تغليف الأثاث الاحترافية - تغليف آمن لجميع المقتنيات',
  description: 'نقدم خدمات تغليف أثاث احترافية باستخدام أفضل المواد والتقنيات لحماية مقتنياتك أثناء النقل. تغليف آمن لكل قطعة، كبيرة كانت أم صغيرة.',
};

export default function PackingServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-yellow-600 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/blog/Professional_Furniture_Packing.jpeg" // Placeholder
            alt="خدمات تغليف الأثاث"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
          <FaBoxOpen className="text-6xl mb-4 text-gray-800" /> {/* Changed icon color for contrast */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            تغليف احترافي لأثاثك ومقتنياتك
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            نضمن حماية فائقة لجميع أغراضك باستخدام مواد تغليف عالية الجودة وتقنيات متقدمة.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">أهمية التغليف الاحترافي عند النقل</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              التغليف الجيد هو خط الدفاع الأول عن ممتلكاتك أثناء عملية النقل. خدمتنا تضمن وصول كل شيء سليمًا إلى وجهته الجديدة.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">ما نقدمه في خدمة التغليف:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaBoxes className="text-yellow-700 mt-1 mr-3 flex-shrink-0" />
                  <span>توفير جميع مواد التغليف عالية الجودة (كراتين، فقاعات هواء، أشرطة لاصقة، إلخ).</span>
                </li>
                <li className="flex items-start">
                  <FaTape className="text-yellow-700 mt-1 mr-3 flex-shrink-0" />
                  <span>تغليف كل قطعة أثاث بشكل فردي ومناسب لنوعها وحجمها.</span>
                </li>
                <li className="flex items-start">
                  <FaShieldAlt className="text-yellow-700 mt-1 mr-3 flex-shrink-0" />
                  <span>عناية خاصة بالمواد القابلة للكسر والأشياء الثمينة.</span>
                </li>
                <li className="flex items-start">
                  <FaClipboardCheck className="text-yellow-700 mt-1 mr-3 flex-shrink-0" />
                  <span>تصنيف وترقيم الصناديق لسهولة التفريغ والترتيب.</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/images/blog/furniture-wrapping-heat-protection.jpg" // Placeholder
                alt="مواد تغليف عالية الجودة"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Materials Used */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">مواد تغليف نستخدمها لضمان الحماية</h2>
          </div>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{icon: FaBoxOpen, name: 'كراتين متينة'}, {icon: FaTape, name: 'أشرطة لاصقة قوية'}, {icon: FaShieldAlt, name: 'بلاستيك فقاعات'}, {icon: FaBoxes, name: 'ورق تغليف خاص'}].map(item => (
              <div key={item.name} className="bg-white p-6 rounded-lg shadow-md">
                <item.icon className="text-4xl text-yellow-700 mx-auto mb-3" />
                <p className="font-semibold">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Packing Process */}
       <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">خطواتنا لتغليف احترافي وآمن</h2>
          </div>
          <ol className="relative border-l border-gray-200 dark:border-gray-700 space-y-10">
            <li className="mb-10 ml-6">            
                <span className="absolute flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-yellow-900">
                    <FaClipboardCheck className="w-4 h-4 text-yellow-700 dark:text-yellow-300" />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">1. التقييم والفرز</h3>
                <p className="text-gray-600">تقييم المقتنيات وتصنيفها لتحديد أفضل طرق التغليف لكل نوع.</p>
            </li>
            <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-yellow-900">
                    <FaBoxOpen className="w-4 h-4 text-yellow-700 dark:text-yellow-300" />
                </span>
                <h3 className="mb-1 text-xl font-semibold text-gray-900">2. التغليف المتخصص</h3>
                <p className="text-gray-600">استخدام المواد المناسبة وتقنيات التغليف المتقدمة لكل قطعة.</p>
            </li>
            <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-yellow-900">
                    <FaTape className="w-4 h-4 text-yellow-700 dark:text-yellow-300" />
                </span>
                <h3 className="mb-1 text-xl font-semibold text-gray-900">3. التسمية والتنظيم</h3>
                <p className="text-gray-600">تسمية كل صندوق بمحتوياته والغرفة الموجه إليها لسهولة التفريغ.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">هل تحتاج إلى مساعدة في تغليف أثاثك؟</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            وفر على نفسك عناء التغليف. فريقنا جاهز لتقديم خدمة تغليف شاملة وآمنة لممتلكاتك.
          </p>
          <Link
            href="/get-a-free-quote" 
            className="bg-white text-yellow-700 hover:bg-yellow-50 px-8 py-4 rounded-lg text-xl font-semibold transition-colors inline-block shadow-lg"
          >
            اطلب خدمة التغليف الآن
          </Link>
        </div>
      </section>
    </div>
  );
}