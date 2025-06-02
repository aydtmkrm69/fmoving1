import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FaTools, FaCouch, FaScrewdriver, FaCheckSquare, FaUserCog } from 'react-icons/fa'; // FaUserCog for skilled technicians

export const metadata: Metadata = {
  title: 'خدمات تركيب الأثاث - فك وتركيب أثاث احترافي',
  description: 'نوفر خدمات فك وتركيب جميع أنواع الأثاث باحترافية ودقة. فريق فني متخصص لضمان تركيب أثاثك بشكل صحيح وآمن.',
};

export default function FurnitureAssemblyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden bg-orange-600 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/blog/Safely_Disassemble_and Assemble_Complex_Furniture.jpeg" // Placeholder
            alt="تركيب وفك الأثاث"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
          <FaTools className="text-6xl mb-4 text-yellow-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            خدمات فك وتركيب الأثاث بدقة واحترافية
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            نوفر عليك الوقت والجهد ونضمن تركيب أثاثك بشكل مثالي وآمن.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">لماذا تحتاج لخدمة تركيب أثاث متخصصة؟</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              تركيب الأثاث بشكل صحيح يتطلب خبرة وأدوات مناسبة. خدمتنا تضمن لك تركيبًا آمنًا وسريعًا لجميع أنواع الأثاث، من البسيط إلى المعقد.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold text-gray-700 mb-3">ما نقدمه في خدمة فك وتركيب الأثاث:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <FaCouch className="text-orange-600 mt-1 mr-3 flex-shrink-0" />
                  <span>فك وتركيب جميع أنواع الأثاث (غرف نوم، مطابخ، مكاتب، إلخ).</span>
                </li>
                <li className="flex items-start">
                  <FaScrewdriver className="text-orange-600 mt-1 mr-3 flex-shrink-0" />
                  <span>استخدام أدوات متخصصة لضمان عدم إلحاق الضرر بالأثاث.</span>
                </li>
                <li className="flex items-start">
                  <FaUserCog className="text-orange-600 mt-1 mr-3 flex-shrink-0" />
                  <span>فنيون مدربون وذوو خبرة في التعامل مع مختلف التصاميم والموديلات.</span>
                </li>
                <li className="flex items-start">
                  <FaCheckSquare className="text-orange-600 mt-1 mr-3 flex-shrink-0" />
                  <span>التأكد من متانة وثبات الأثاث بعد التركيب.</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/images/blog/Furniture_Moving_Process.jpeg" // Placeholder
                alt="فني يركب الأثاث"
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">فوائد الاعتماد على خبراء تركيب الأثاث</h2>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaTools className="text-4xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">توفير الوقت والجهد</h3>
              <p className="text-gray-600">دعنا نتولى المهمة الشاقة والمعقدة لتركيب الأثاث نيابة عنك.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaCheckSquare className="text-4xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">تركيب صحيح وآمن</h3>
              <p className="text-gray-600">نضمن تركيب كل قطعة بشكل صحيح وفقًا لتعليمات الشركة المصنعة.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaUserCog className="text-4xl text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">تجنب الأضرار</h3>
              <p className="text-gray-600">خبرتنا تقلل من مخاطر إتلاف الأثاث أثناء عملية الفك أو التركيب.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Types of Furniture */}
       <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">نتعامل مع جميع أنواع الأثاث</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              سواء كان أثاثًا جديدًا من الكرتون أو أثاثًا مستخدمًا يحتاج إلى إعادة تجميع.
            </p>
          </div>
           <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
            {['أثاث ايكيا IKEA', 'أثاث غرف النوم', 'أثاث غرف الأطفال', 'أثاث المكاتب', 'الخزائن والدواليب', 'المطابخ (بعض الأنواع)'].map((item, index) => (
              <li key={index} className="flex items-center bg-gray-100 p-3 rounded-lg">
                <FaCouch className="text-sm text-orange-600 mr-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">هل تحتاج إلى مساعدة في تركيب أثاثك؟</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            اتصل بنا الآن لجدولة خدمة فك وتركيب الأثاث واستمتع بأثاث مركب بإتقان.
          </p>
          <Link
            href="/contact" 
            className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg text-xl font-semibold transition-colors inline-block shadow-lg"
          >
            اطلب خدمة تركيب الأثاث
          </Link>
        </div>
      </section>
    </div>
  );
}