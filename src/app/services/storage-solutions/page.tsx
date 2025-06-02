import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FaWarehouse, FaLock, FaTemperatureLow, FaBoxes, FaCalendarAlt, FaUserShield, FaShieldAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'حلول تخزين الأثاث الآمنة - خدمات تخزين عفش موثوقة',
  description: 'نوفر حلول تخزين أثاث آمنة ومرنة على المدى القصير والطويل. مستودعات مجهزة بكافة وسائل الأمان والمحافظة على الأثاث.',
};

export default function StorageSolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-purple-700 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/blog/Secure_Furniture_Storage_Services_in_Saudi_Arabia.jpeg" // Placeholder
            alt="حلول تخزين الأثاث"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
          <FaWarehouse className="text-6xl mb-4 text-yellow-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            حلول تخزين آمنة ومرنة لأثاثك
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            مستودعات مجهزة ومؤمنة لتخزين أثاثك ومقتنياتك بأمان تام لأي فترة تحتاجها.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">لماذا تحتاج إلى حلول تخزين الأثاث؟</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              سواء كنت تنتقل، أو تقوم بتجديد منزلك، أو تحتاج ببساطة إلى مساحة إضافية، فإن حلول التخزين لدينا توفر لك الأمان والمرونة.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/images/blog/Furniture_Moving_in_KSA.jpeg" // Placeholder
                alt="مستودعات تخزين آمنة"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">مميزات خدمات التخزين لدينا:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaLock className="text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <span>أمان على مدار الساعة مع أنظمة مراقبة متقدمة.</span>
                </li>
                <li className="flex items-start">
                  <FaTemperatureLow className="text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <span>تحكم في درجة الحرارة والرطوبة للحفاظ على الأثاث.</span>
                </li>
                <li className="flex items-start">
                  <FaBoxes className="text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <span>مساحات تخزين متنوعة تناسب جميع أحجام الأثاث.</span>
                </li>
                <li className="flex items-start">
                  <FaCalendarAlt className="text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <span>خيارات تخزين مرنة قصيرة وطويلة الأجل.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Storage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">أنواع حلول التخزين المتوفرة</h2>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaCalendarAlt className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">تخزين قصير الأجل</h3>
              <p className="text-gray-600">مثالي أثناء عمليات الانتقال أو التجديدات المنزلية المؤقتة. مرونة في المدة وسهولة الوصول.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaLock className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">تخزين طويل الأجل</h3>
              <p className="text-gray-600">حل آمن واقتصادي لتخزين الأثاث والمقتنيات لفترات طويلة مع الحفاظ على حالتها.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Security Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">نضمن أمان مقتنياتك</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              مستودعاتنا مجهزة بأحدث تقنيات الأمان لحماية أثاثك من أي مخاطر.
            </p>
          </div>
           <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
            <li className="flex items-center bg-gray-100 p-4 rounded-lg">
              <FaLock className="text-2xl text-purple-600 mr-3" />
              <span>مراقبة بالكاميرات 24/7</span>
            </li>
            <li className="flex items-center bg-gray-100 p-4 rounded-lg">
              <FaUserShield className="text-2xl text-purple-600 mr-3" /> {/* Placeholder icon */}
              <span>أنظمة إنذار ضد السرقة والحريق</span>
            </li>
            <li className="flex items-center bg-gray-100 p-4 rounded-lg">
              <FaTemperatureLow className="text-2xl text-purple-600 mr-3" />
              <span>تحكم بيئي (حرارة ورطوبة)</span>
            </li>
            <li className="flex items-center bg-gray-100 p-4 rounded-lg">
              <FaBoxes className="text-2xl text-purple-600 mr-3" />
              <span>تغليف وحماية إضافية داخل الوحدة</span>
            </li>
             <li className="flex items-center bg-gray-100 p-4 rounded-lg">
              <FaShieldAlt className="text-2xl text-purple-600 mr-3" /> {/* Placeholder icon */}
              <span>تأمين شامل ضد المخاطر</span>
            </li>
             <li className="flex items-center bg-gray-100 p-4 rounded-lg">
              <FaWarehouse className="text-2xl text-purple-600 mr-3" />
              <span>وصول مقنن ومسجل للمستودعات</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">هل تحتاج إلى مساحة تخزين آمنة؟</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            اتصل بنا اليوم لمناقشة احتياجات التخزين الخاصة بك واحصل على أفضل الحلول والأسعار.
          </p>
          <Link
            href="/get-a-free-quote"
            className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg text-xl font-semibold transition-colors inline-block shadow-lg"
          >
            استفسر عن حلول التخزين
          </Link>
        </div>
      </section>
    </div>
  );
}