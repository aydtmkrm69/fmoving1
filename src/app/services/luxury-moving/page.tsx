import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FaGem, FaUserTie, FaShieldVirus, FaBoxTissue, FaTruckLoading } from 'react-icons/fa'; // FaShieldVirus for specialized protection, FaBoxTissue for delicate items

export const metadata: Metadata = {
  title: 'خدمات نقل الأثاث الفاخر والمقتنيات الثمينة - نقل فاخر وآمن',
  description: 'متخصصون في نقل الأثاث الفاخر، التحف الفنية، والمقتنيات الثمينة بأقصى درجات العناية والاحترافية. خدمات مصممة خصيصًا للحفاظ على سلامة كنوزك.',
};

export default function LuxuryMovingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-gray-800 text-white">
        <div className="absolute inset-0 opacity-40">
          <Image
            src="/images/blog/Moving_Art_Pieces_and_Valuables.jpeg" // Placeholder
            alt="نقل الأثاث الفاخر والمقتنيات الثمينة"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
          <FaGem className="text-6xl mb-4 text-yellow-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            نقل فاخر لأثاثك ومقتنياتك الثمينة
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            عناية فائقة وخدمة مخصصة لنقل كنوزك بأمان لا مثيل له.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">خدمة النقل الفاخر: ما يميزنا؟</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              عندما يتعلق الأمر بمقتنياتك الأكثر قيمة، فإنك تحتاج إلى خدمة تتجاوز المألوف. نقدم حلول نقل فاخرة تضمن أقصى درجات الحماية والاهتمام بالتفاصيل.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">تشمل خدمتنا الفاخرة:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaUserTie className="text-gray-700 mt-1 mr-3 flex-shrink-0" />
                  <span>مدير مشروع مخصص للإشراف على كل خطوة.</span>
                </li>
                <li className="flex items-start">
                  <FaBoxTissue className="text-gray-700 mt-1 mr-3 flex-shrink-0" />
                  <span>مواد تغليف مصممة خصيصًا للقطع الفاخرة والحساسة.</span>
                </li>
                <li className="flex items-start">
                  <FaShieldVirus className="text-gray-700 mt-1 mr-3 flex-shrink-0" />
                  <span>تقنيات مناولة ونقل متقدمة لضمان الحماية القصوى.</span>
                </li>
                <li className="flex items-start">
                  <FaTruckLoading className="text-gray-700 mt-1 mr-3 flex-shrink-0" />
                  <span>شاحنات مجهزة بأنظمة تحكم بيئي وتتبع GPS.</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/images/blog/Furniture_Insurance_During_Moving.jpeg" // Placeholder
                alt="تغليف المقتنيات الثمينة"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Handling */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">عناية متخصصة لكل قطعة</h2>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaGem className="text-4xl text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">التحف الفنية واللوحات</h3>
              <p className="text-gray-600">تغليف مخصص، صناديق مبطنة، وتحكم في درجة الحرارة والرطوبة.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaBoxTissue className="text-4xl text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">الأثاث العتيق والمصمم</h3>
              <p className="text-gray-600">تقنيات فك وتركيب دقيقة، وحماية ضد الخدوش والاهتزازات.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaShieldVirus className="text-4xl text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">المقتنيات الحساسة</h3>
              <p className="text-gray-600">مثل الآلات الموسيقية، الزجاجيات، والمجموعات النادرة، مع تأمين شامل.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* White Glove Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">خدمة القفازات البيضاء</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                نقدم خدمة شاملة تتضمن التخطيط الدقيق، التغليف الاحترافي، النقل الآمن، التفريغ، وإعادة ترتيب مقتنياتك في موقعك الجديد، كل ذلك بأقصى درجات العناية والسرية.
            </p>
            {/* You can add more details or an image here */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">هل لديك مقتنيات ثمينة تحتاج لنقل متخصص؟</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            ثق بنا لنقل كنوزك بأمان واحترافية. اتصل بنا اليوم لاستشارة خاصة.
          </p>
          <Link
            href="/contact" // Changed to /contact as it's a specialized service
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-8 py-4 rounded-lg text-xl font-semibold transition-colors inline-block shadow-lg"
          >
            تواصل معنا لخدمة النقل الفاخر
          </Link>
        </div>
      </section>
    </div>
  );
}