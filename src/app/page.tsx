import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import { 
  FaTruck, FaBox, FaWarehouse, FaGlobe, FaShippingFast, 
  FaCalendarCheck, FaPhoneAlt, FaArrowLeft, FaQuoteRight,
  FaStar, FaMapMarkerAlt, FaRegClock
} from 'react-icons/fa';
import { MdSecurity, MdTimer, MdAttachMoney, MdLocationOn } from 'react-icons/md';
import { BiSolidPackage, BiSolidTruck } from 'react-icons/bi';
import { posts } from '@/data/posts';
import { formatDateArabic } from '@/utils/dateUtils';
import LazyLoad from '@/components/LazyLoad';
import BlogPostSkeleton from '@/components/blog/BlogPostSkeleton';

export default function HomePage() {
  // Get featured and recent posts
  const featuredPosts = posts.filter(post => post.featured).slice(0, 3);
  const recentPosts = posts.slice(0, 4);
  
  // سجل المدن - يفضل أن تؤخذ من API
  const saudiCities = [
    { name: 'الرياض', img: '/images/blog/Guide_to_Moving_Furniture_in_Riyadh.jpeg' },
    { name: 'جدة', img: '/images/blog/Furniture_Moving_in_Jeddah.jpeg' },
    { name: 'الدمام', img: '/images/blog/Everything_You_Need_to_Know_About_Moving_Furniture_in_Dammam.jpeg' },
    { name: 'مكة المكرمة', img: '/images/blog/Best_Neighborhoods_in_Riyadh_for_New_Housing.jpeg' }
  ];
  
  const whyChooseUs = [
    {
      icon: <MdSecurity className="w-12 h-12" />,
      title: 'أمان تام',
      description: 'فريق محترف ومدرب على أعلى مستوى للتعامل مع جميع أنواع الأثاث بعناية فائقة'
    },
    {
      icon: <MdTimer className="w-12 h-12" />,
      title: 'سرعة التنفيذ',
      description: 'نلتزم بالمواعيد المحددة ونسعى دائماً لإنجاز العمل في أسرع وقت ممكن مع الحفاظ على الجودة'
    },
    {
      icon: <MdAttachMoney className="w-12 h-12" />,
      title: 'أسعار منافسة',
      description: 'نقدم خدماتنا بأسعار منافسة مع ضمان أعلى مستويات الجودة دون أي تكاليف خفية'
    }
  ];
  
  // المراجعات والتقييمات - يفضل أن تؤخذ من API
  const testimonials = [
    {
      id: 1,
      name: 'أحمد محمد',
      position: 'الرياض',
      text: 'تعاملت مع الشركة لنقل أثاث منزلي الجديد وكانت التجربة مميزة جداً. العمال محترفون والسعر كان مناسب جداً مقارنة بالخدمات المقدمة.',
      rating: 5,
      image: '/images/blog/My_Experience_with_X_Moving_Company.jpeg',
    },
    {
      id: 2,
      name: 'سارة عبدالله',
      position: 'جدة',
      text: 'أفضل شركة نقل عفش تعاملت معها حتى الآن. الفريق كان احترافي جداً في التعامل مع جميع القطع خصوصاً الأثاث الحساس.',
      rating: 5,
      image: '/images/blog/Services_in_Furniture_Moving_Worth_the_Cost.jpeg',
    },
    {
      id: 3,
      name: 'عبدالعزيز الدوسري',
      position: 'الدمام',
      text: 'أنصح بالتعامل معهم لاحترافيتهم العالية وأسعارهم المنافسة. تم نقل أثاث منزلي بالكامل دون أي خدوش أو أضرار.',
      rating: 4,
      image: '/images/blog/Best_Furniture_Moving_Company.jpeg',
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden">
        <div className="absolute inset-0 brightness-40">
          <SafeImage
            src="/images/blog/Furniture_Moving_Process.jpeg"
            alt="خدمات نقل العفش"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 relative z-10 animate-fadeIn">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow">
                خدمات نقل عفش احترافية في المملكة العربية السعودية
              </h1>
              <p className="text-xl text-white mb-8">
                نقدم خدمات نقل وتخزين الأثاث بأعلى مستويات الاحترافية والأمان في جميع مناطق المملكة
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-a-free-quote"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-lg text-lg transition-colors inline-block"
                >
                  احصل على عرض سعر مجاني
                </Link>
                <Link
                  href="/services"
                  className="bg-white text-blue-600 hover:bg-blue-50 py-4 px-8 rounded-lg text-lg transition-colors inline-block"
                >
                  خدماتنا
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">خدماتنا المتميزة</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم مجموعة متكاملة من خدمات نقل العفش والتخزين بأعلى مستويات الجودة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FaTruck className="w-12 h-12" />}
              title="نقل سكني"
              description="خدمات نقل متكاملة للمنازل والشقق والفلل مع ضمان أمان وسلامة جميع المقتنيات"
              href="/services/residential-moving"
            />
            <ServiceCard
              icon={<FaBox className="w-12 h-12" />}
              title="نقل تجاري"
              description="خدمات نقل متخصصة للمكاتب والشركات مع التركيز على سرعة التنفيذ للحفاظ على استمرارية العمل"
              href="/services/commercial-moving"
              highlight={true}
            />
            <ServiceCard
              icon={<FaWarehouse className="w-12 h-12" />}
              title="تخزين آمن"
              description="حلول تخزين قصيرة وطويلة المدى في مستودعات مؤمنة ومراقبة على مدار الساعة"
              href="/services/storage-solutions"
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 text-lg font-medium"
            >
              عرض جميع الخدمات
              <FaArrowLeft className="mr-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">لماذا تختارنا؟</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نحن نسعى دائماً لتقديم خدمة استثنائية تفوق توقعاتك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover-lift">
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">المدن التي نخدمها</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم خدماتنا في جميع المدن الرئيسية في المملكة العربية السعودية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {saudiCities.map((city, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden h-64 hover-lift">
                <SafeImage
                  src={city.img}
                  alt={`نقل عفش في ${city.name}`}
                  fill
                  className="object-cover brightness-40"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold text-center">{city.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">آراء عملائنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نفخر بخدمة عملائنا ونسعد بآرائهم حول خدماتنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden p-6 hover-lift"
              >
                <div className="relative mb-6">
                  <FaQuoteRight className="absolute -top-2 -right-2 text-blue-100 text-4xl opacity-60" />
                  <p className="relative z-10 text-gray-600">{testimonial.text}</p>
                </div>
                
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <SafeImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={i < testimonial.rating ? "text-yellow-400 text-sm" : "text-gray-300 text-sm"} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 text-lg font-medium"
            >
              عرض المزيد من آراء العملاء
              <FaArrowLeft className="mr-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">أحدث المقالات</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تعرف على أحدث النصائح والمعلومات حول نقل العفش والتخزين
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPosts.map((post) => (
              <LazyLoad key={post.slug} placeholder={<BlogPostSkeleton />}>
                <div className="blog-card bg-white rounded-lg shadow-md overflow-hidden hover-lift h-full flex flex-col">
                  <div className="relative h-48">
                    <SafeImage
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <FaRegClock className="mr-1" />
                      <span>{formatDateArabic(post.publishedAt)}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {post.description.substring(0, 100)}...
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      قراءة المزيد
                      <FaArrowLeft className="mr-2 text-sm" />
                    </Link>
                  </div>
                </div>
              </LazyLoad>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 text-lg font-medium"
            >
              استكشاف المدونة
              <FaArrowLeft className="mr-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">جاهز لنقل أثاثك بأمان؟</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            تواصل معنا اليوم للحصول على خدمة نقل عفش احترافية وآمنة
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/get-a-free-quote"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-xl transition-colors inline-block"
            >
              احصل على عرض سعر
            </Link>
            <Link
              href="tel:+966500000000"
              className="flex items-center justify-center bg-transparent hover:bg-white/10 text-white border border-white px-8 py-4 rounded-lg text-xl transition-colors"
            >
              <FaPhoneAlt className="ml-2" />
              اتصل بنا: 0500000000
            </Link>
          </div>
        </div>
      </section>
      
      {/* Fast Quote */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">احصل على تقدير سريع</h2>
              <p className="text-gray-600">
                املأ النموذج أدناه للحصول على تقدير سريع لتكلفة نقل العفش
              </p>
            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="quickFrom" className="block text-gray-700 font-medium mb-1">من</label>
                <select
                  id="quickFrom"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">اختر المدينة</option>
                  <option value="riyadh">الرياض</option>
                  <option value="jeddah">جدة</option>
                  <option value="dammam">الدمام</option>
                  <option value="makkah">مكة المكرمة</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="quickTo" className="block text-gray-700 font-medium mb-1">إلى</label>
                <select
                  id="quickTo"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">اختر المدينة</option>
                  <option value="riyadh">الرياض</option>
                  <option value="jeddah">جدة</option>
                  <option value="dammam">الدمام</option>
                  <option value="makkah">مكة المكرمة</option>
                </select>
              </div>
              
              <div className="flex items-end">
                <Link
                  href="/get-a-free-quote"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors inline-block text-center"
                >
                  احصل على تقدير
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// Service Card Component
function ServiceCard({ icon, title, description, href, highlight = false }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  highlight?: boolean;
}) {
  return (
    <div className={`rounded-lg shadow-md overflow-hidden hover-lift ${highlight ? 'border-2 border-blue-500' : ''}`}>
      <div className={`p-8 ${highlight ? 'bg-blue-50' : 'bg-white'}`}>
        <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full ${highlight ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-700'}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-blue-600">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link
          href={href}
          className={`inline-flex items-center font-medium ${highlight ? 'text-blue-600 hover:text-blue-800' : 'text-gray-700 hover:text-gray-900'}`}
        >
          معرفة المزيد
          <FaArrowLeft className="mr-2 text-sm" />
        </Link>
      </div>
    </div>
  );
} 