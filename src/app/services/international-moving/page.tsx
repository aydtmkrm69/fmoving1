import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FaGlobeAmericas, FaPlaneDeparture, FaShip, FaPassport, FaBox, FaUserShield, FaClipboardList } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'خدمات النقل الدولي - شحن أثاث دولي احترافي وآمن',
  description: 'متخصصون في خدمات النقل الدولي والشحن من وإلى المملكة العربية السعودية. حلول لوجستية متكاملة لنقل أثاثك ومقتنياتك عبر الحدود بأمان.',
};

export default function InternationalMovingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-sky-700 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/blog/Furniture_Moving_in_KSA.jpeg" // Placeholder
            alt="نقل دولي وشحن أثاث"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
          <FaGlobeAmericas className="text-6xl mb-4 text-yellow-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            النقل الدولي بثقة وأمان عبر القارات
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            نجعل عملية انتقالك الدولي تجربة سلسة ومنظمة، مع الاهتمام بكافة التفاصيل اللوجستية والجمركية.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">لماذا تختارنا لخدمات النقل الدولي؟</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              يتطلب النقل الدولي خبرة وتخطيطًا دقيقًا. نحن نقدم لك شبكة عالمية من الشركاء وفريقًا متخصصًا لضمان وصول ممتلكاتك بأمان إلى وجهتك الجديدة.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">خدمات النقل الدولي الشاملة:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaPlaneDeparture className="text-sky-600 mt-1 mr-3 flex-shrink-0" />
                  <span>شحن جوي سريع وآمن للمقتنيات العاجلة.</span>
                </li>
                <li className="flex items-start">
                  <FaShip className="text-sky-600 mt-1 mr-3 flex-shrink-0" />
                  <span>شحن بحري اقتصادي للكميات الكبيرة من الأثاث.</span>
                </li>
                <li className="flex items-start">
                  <FaPassport className="text-sky-600 mt-1 mr-3 flex-shrink-0" />
                  <span>المساعدة في التخليص الجمركي وإعداد الوثائق اللازمة.</span>
                </li>
                <li className="flex items-start">
                  <FaBox className="text-sky-600 mt-1 mr-3 flex-shrink-0" />
                  <span>تغليف متخصص للشحن الدولي لضمان أقصى حماية.</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/images/blog/Furniture_Moving_Saudi_arabia.jpeg" // Placeholder
                alt="تغليف للشحن الدولي"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">مميزات خدمتنا في النقل الدولي</h2>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaGlobeAmericas className="text-4xl text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">شبكة عالمية</h3>
              <p className="text-gray-600">شركاء موثوقون في جميع أنحاء العالم لضمان سلاسة العملية.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaPassport className="text-4xl text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">خبرة جمركية</h3>
              <p className="text-gray-600">نساعدك في تجاوز تعقيدات الإجراءات الجمركية والوثائق المطلوبة.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaUserShield className="text-4xl text-sky-600 mx-auto mb-4" /> {/* Using FaUserShield as placeholder */}
              <h3 className="text-xl font-semibold mb-2">تأمين شامل</h3>
              <p className="text-gray-600">خيارات تأمين متنوعة لتغطية ممتلكاتك أثناء النقل الدولي.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process */}
       <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">خطوات عملية النقل الدولي معنا</h2>
          </div>
          <ol className="relative border-l border-gray-200 dark:border-gray-700 space-y-10">
            <li className="mb-10 ml-6">            
                <span className="absolute flex items-center justify-center w-8 h-8 bg-sky-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
                    <FaClipboardList className="w-4 h-4 text-sky-600 dark:text-sky-300" /> {/* Placeholder */}
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">1. استشارة وتخطيط دولي</h3>
                <p className="text-gray-600">فهم متطلباتك، الوجهة، والجدول الزمني، وتقديم عرض سعر شامل.</p>
            </li>
            <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-sky-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
                    <FaBox className="w-4 h-4 text-sky-600 dark:text-sky-300" />
                </span>
                <h3 className="mb-1 text-xl font-semibold text-gray-900">2. التغليف المتخصص للشحن</h3>
                <p className="text-gray-600">استخدام مواد تغليف مقاومة ومناسبة لمعايير الشحن الدولي.</p>
            </li>
            <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-sky-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
                    <FaShip className="w-4 h-4 text-sky-600 dark:text-sky-300" /> {/* Or FaPlaneDeparture */}
                </span>
                <h3 className="mb-1 text-xl font-semibold text-gray-900">3. الشحن والتتبع</h3>
                <p className="text-gray-600">إدارة عملية الشحن وتزويدك بتحديثات منتظمة حول مكان شحنتك.</p>
            </li>
            <li className="ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-sky-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
                    <FaPassport className="w-4 h-4 text-sky-600 dark:text-sky-300" />
                </span>
                <h3 className="mb-1 text-xl font-semibold text-gray-900">4. التخليص الجمركي والتسليم</h3>
                <p className="text-gray-600">المساعدة في إجراءات التخليص الجمركي وتسليم ممتلكاتك إلى باب منزلك الجديد.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-sky-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">هل تخطط للانتقال إلى الخارج؟</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            دعنا نجعل تجربتك في النقل الدولي خالية من المتاعب. اتصل بنا اليوم للحصول على استشارة وتقدير تكلفة.
          </p>
          <Link
            href="/contact"
            className="bg-white text-sky-700 hover:bg-sky-50 px-8 py-4 rounded-lg text-xl font-semibold transition-colors inline-block shadow-lg"
          >
            اطلب استشارة للنقل الدولي
          </Link>
        </div>
      </section>
    </div>
  );
}