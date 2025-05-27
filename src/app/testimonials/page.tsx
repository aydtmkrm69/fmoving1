import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { FaStar, FaQuoteRight, FaArrowLeft } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'آراء وشهادات العملاء - شركة نقل العفش',
  description: 'اطلع على شهادات وآراء عملائنا الحقيقية حول خدمات نقل العفش التي نقدمها في مختلف مناطق المملكة العربية السعودية',
};

export default function TestimonialsPage() {
  // بيانات الشهادات والآراء
  const testimonials = [
    {
      id: 1,
      name: 'أحمد محمد',
      location: 'الرياض',
      rating: 5,
      text: 'خدمة استثنائية! قام الفريق بنقل أثاث منزلي بكل عناية واحترافية. كان الفريق ودودًا ومتعاونًا، وانتهى العمل في الموعد المحدد تمامًا. سأتعامل معهم مرة أخرى بالتأكيد وأنصح كل من يبحث عن خدمة نقل عفش محترفة بالتواصل معهم.',
      image: '/images/testimonials/testimonial-1.jpg',
      date: '2024-03-15',
      service: 'نقل سكني'
    },
    {
      id: 2,
      name: 'سارة عبدالله',
      location: 'جدة',
      rating: 5,
      text: 'سعيدة جداً بتجربتي مع الشركة. الفريق محترف والأسعار معقولة مقارنة بالخدمة الممتازة. ساعدوني في نقل المنزل بالكامل دون أي ضرر للأثاث. التغليف كان ممتازًا والفك والتركيب تم بمهارة عالية. أنصح بهم بشدة لكل من يبحث عن جودة عالية وأسعار منافسة.',
      image: '/images/testimonials/testimonial-2.jpg',
      date: '2024-02-22',
      service: 'نقل سكني + تغليف'
    },
    {
      id: 3,
      name: 'خالد العمري',
      location: 'الدمام',
      rating: 5,
      text: 'التعامل معهم كان تجربة مميزة. احترافية عالية في التغليف والنقل والتركيب. فريق العمل مدرب تدريباً عالياً ويعمل بإتقان. أفضل شركة نقل عفش تعاملت معها حتى الآن. النقل تم في وقت قياسي دون أي تلف أو كسر في الأثاث.',
      image: '/images/testimonials/testimonial-3.jpg',
      date: '2024-03-05',
      service: 'نقل سكني + تخزين'
    },
    {
      id: 4,
      name: 'نوف السليمان',
      location: 'الرياض',
      rating: 4,
      text: 'تجربة جيدة جدًا مع الشركة. قاموا بنقل أثاث شقتي إلى منزل جديد بعناية فائقة. التأخير البسيط في الموعد كان العيب الوحيد، لكن الخدمة كانت ممتازة بشكل عام. سأتعامل معهم مرة أخرى لكن مع تحديد موعد بهامش وقت أكبر.',
      image: '/images/testimonials/testimonial-4.jpg',
      date: '2024-01-18',
      service: 'نقل سكني'
    },
    {
      id: 5,
      name: 'محمد العتيبي',
      location: 'مكة المكرمة',
      rating: 5,
      text: 'تجربة رائعة مع الشركة. قاموا بنقل أثاث منزلي من مكة إلى الرياض دون أي مشاكل. العمالة مدربة ومحترفة، والتغليف كان ممتازًا. الأثاث وصل دون أي خدوش أو أضرار. أنصح بهم بشدة لمن يحتاج نقل عفش بين المدن.',
      image: '/images/testimonials/testimonial-5.jpg',
      date: '2024-02-10',
      service: 'نقل بين المدن'
    },
    {
      id: 6,
      name: 'ليلى الخالدي',
      location: 'جدة',
      rating: 5,
      text: 'قامت الشركة بنقل مكتبي بطريقة احترافية للغاية. الفريق كان متعاونًا جدًا وفهموا احتياجات العمل واستمراريته. تم النقل في عطلة نهاية الأسبوع دون أي تأثير على سير العمل. ممتازون في التنظيم والتنفيذ.',
      image: '/images/testimonials/testimonial-6.jpg',
      date: '2024-03-20',
      service: 'نقل تجاري'
    },
    {
      id: 7,
      name: 'عبدالله السهلي',
      location: 'الخبر',
      rating: 5,
      text: 'شركة محترفة من الطراز الأول. تعاملت معهم لنقل منزل كبير والنتيجة كانت مبهرة. الفريق منظم ويعرف ماذا يفعل بالضبط. الفك والتركيب كان دقيقًا ومحترفًا. أنصح بهم للمنازل الكبيرة التي تحتاج خبرة خاصة.',
      image: '/images/testimonials/testimonial-7.jpg',
      date: '2024-01-05',
      service: 'نقل سكني + فك وتركيب'
    },
    {
      id: 8,
      name: 'هند القحطاني',
      location: 'الرياض',
      rating: 5,
      text: 'أشكر فريق الشركة على الاحترافية العالية. قمت بتخزين أثاثي عندهم لمدة 3 أشهر وعندما استلمته كان بحالته الأصلية تمامًا. مستودعاتهم نظيفة وآمنة وأسعارهم معقولة. خدمة ممتازة لمن يحتاج تخزين أثاث لفترات.',
      image: '/images/testimonials/testimonial-8.jpg',
      date: '2024-02-15',
      service: 'تخزين آمن'
    },
    {
      id: 9,
      name: 'فيصل الدوسري',
      location: 'الرياض',
      rating: 4,
      text: 'خدمة جيدة جدًا. قاموا بنقل جميع محتويات منزلي بعناية ودقة. التغليف كان جيدًا والعمال متعاونون. السعر كان مناسبًا نسبيًا مقارنة بالخدمات المقدمة. أقترح عليهم تحسين مواعيد الوصول لتكون أكثر دقة.',
      image: '/images/testimonials/testimonial-9.jpg',
      date: '2024-03-25',
      service: 'نقل سكني + تغليف'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 hero-pattern">
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">آراء وشهادات عملائنا</h1>
          <p className="text-xl max-w-3xl mx-auto">
            نفتخر بثقة آلاف العملاء الذين اختاروا خدماتنا لنقل عفشهم ومقتنياتهم الثمينة
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 text-center p-4">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">+500</div>
              <div className="text-gray-700">عميل راضٍ شهريًا</div>
            </div>
            <div className="w-full md:w-1/3 text-center p-4">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4.9</div>
              <div className="text-gray-700">متوسط تقييم العملاء من 5</div>
            </div>
            <div className="w-full md:w-1/3 text-center p-4">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">96%</div>
              <div className="text-gray-700">نسبة الرضا عن الخدمة</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">شهادات مصورة</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            استمع إلى تجارب عملائنا مباشرة من خلال هذه الشهادات المصورة
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
              <div className="text-gray-500">فيديو شهادة عميل #1</div>
            </div>
            <div className="bg-gray-200 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
              <div className="text-gray-500">فيديو شهادة عميل #2</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leave Testimonial */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">شاركنا تجربتك</h2>
            <p className="text-xl mb-8">
              نحن نقدر آراءكم وملاحظاتكم التي تساعدنا على تحسين خدماتنا باستمرار
            </p>
            <Link 
              href="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-xl inline-block transition-colors"
            >
              أرسل تقييمك
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Homepage */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-lg font-medium"
          >
            العودة إلى الصفحة الرئيسية
            <FaArrowLeft className="mr-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover-lift">
      <div className="relative">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{testimonial.name}</h3>
                <div className="text-gray-600 text-sm">
                  {testimonial.location}
                </div>
              </div>
            </div>
            <div className="text-yellow-400 text-xs bg-yellow-50 px-2 py-1 rounded-full">
              {testimonial.service}
            </div>
          </div>
          
          <div className="relative">
            <FaQuoteRight className="absolute -top-2 -right-2 text-blue-100 text-4xl opacity-60" />
            <p className="text-gray-700 mb-4 relative z-10">{testimonial.text}</p>
          </div>
          
          <div className="flex justify-between items-center mt-6">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i} 
                  className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"} 
                />
              ))}
            </div>
            <div className="text-gray-500 text-sm">
              {new Date(testimonial.date).toLocaleDateString('ar-SA')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 