import Image from 'next/image';
import Link from 'next/link';
import { 
  FaTruck, FaBox, FaWarehouse, FaGlobe, FaShippingFast, 
  FaCalendarCheck, FaPhoneAlt, FaArrowLeft, FaQuoteRight,
  FaStar, FaMapMarkerAlt, FaRegClock
} from 'react-icons/fa';
import { MdSecurity, MdTimer, MdAttachMoney, MdLocationOn } from 'react-icons/md';
import { BiSolidPackage, BiSolidTruck } from 'react-icons/bi';
import { posts } from '@/data/posts';
import LazyLoad from '@/components/LazyLoad';
import BlogPostSkeleton from '@/components/blog/BlogPostSkeleton';

export default function HomePage() {
  // Get featured and recent posts
  const featuredPosts = posts.filter(post => post.featured).slice(0, 3);
  const recentPosts = posts.slice(0, 4);
  
  // سجل المدن - يفضل أن تؤخذ من API
  const saudiCities = [
    { name: 'الرياض', img: '/images/blog/Guide_to_Moving_Furniture_in_Riyadh.jpeg', description: 'خدمات نقل العفش في العاصمة' },
    { name: 'جدة', img: '/images/blog/Furniture_Moving_in_Jeddah.jpeg', description: 'نقل عفش احترافي في جدة' },
    { name: 'الدمام', img: '/images/blog/Everything_You_Need_to_Know_About_Moving_Furniture_in_Dammam.jpeg', description: 'خدمات نقل العفش بالمنطقة الشرقية' },
    { name: 'المدينة المنورة', img: '/images/blog/Furniture_Moving_Process.jpeg', description: 'نقل عفش آمن بالمدينة المنورة' },
    { name: 'مكة المكرمة', img: '/images/blog/Secure_Furniture_Storage_Services_in_Saudi_Arabia.jpeg', description: 'خدمات نقل وتخزين العفش' },
    { name: 'الطائف', img: '/images/blog/Moving_Furniture_in_Hot_Weather.jpeg', description: 'نقل العفش في الطقس المعتدل' }
  ];
  
  // المراجعات والتقييمات - يفضل أن تؤخذ من API
  const testimonials = [
    {
      id: 1,
      name: 'أحمد محمد',
      location: 'الرياض',
      text: 'تعاملت مع الشركة لنقل أثاث منزلي الجديد وكانت التجربة مميزة جداً. العمال محترفون والسعر كان مناسب جداً مقارنة بالخدمات المقدمة.',
      rating: 5,
      image: '/images/testimonials/testimonial-1.jpg',
    },
    {
      id: 2,
      name: 'سارة عبدالله',
      location: 'جدة',
      text: 'أفضل شركة نقل عفش تعاملت معها حتى الآن. الفريق كان احترافي جداً في التعامل مع جميع القطع خصوصاً الأثاث الحساس.',
      rating: 5,
      image: '/images/testimonials/testimonial-2.jpg',
    },
    {
      id: 3,
      name: 'عبدالعزيز الدوسري',
      location: 'الدمام',
      text: 'أنصح بالتعامل معهم لاحترافيتهم العالية وأسعارهم المنافسة. تم نقل أثاث منزلي بالكامل دون أي خدوش أو أضرار.',
      rating: 4,
      image: '/images/testimonials/testimonial-3.jpg',
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 brightness-50">
          <Image
            src="/images/blog/Furniture_Moving_Process.jpeg"
            alt="خدمات نقل العفش الموثوقة في السعودية"
            fill
            className="object-cover"
            priority={true}
            unoptimized={true}
          />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">نقل العفش</span>
            <span className="block text-blue-400">بثقة وأمان</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            خدمات نقل العفش الأكثر موثوقية في المملكة العربية السعودية. نحن نضمن وصول أثاثك بأمان تام وفي الوقت المحدد
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-a-free-quote" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <FaCalendarCheck />
              احصل على عرض سعر مجاني
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <FaPhoneAlt />
              اتصل بنا الآن
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              خدماتنا في جميع أنحاء المملكة
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم خدمات نقل العفش المتميزة في كافة المدن السعودية بأعلى معايير الجودة والأمان
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saudiCities.map((city, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={city.img}
                    alt={`نقل عفش في ${city.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{city.name}</h3>
                    <p className="text-sm text-gray-200">{city.description}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    <span>اطلب خدماتنا في {city.name}</span>
                    <FaArrowLeft className="mr-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              أحدث النصائح والمقالات
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              اكتشف أفضل النصائح والإرشادات لعملية نقل عفش ناجحة من خبرائنا
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      unoptimized={true}
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      مميز
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <FaRegClock className="ml-2" />
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString('ar-SA')}
                      </time>
                      <span className="mx-2">•</span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {post.author.name.charAt(0)}
                        </div>
                        <span className="mr-3 text-sm text-gray-700 font-medium">
                          {post.author.name}
                        </span>
                      </div>
                      
                      <span className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                        اقرأ المزيد
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/blog" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              <span>تصفح جميع المقالات</span>
              <FaArrowLeft />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">آراء عملائنا</h2>
            <p className="text-xl text-gray-600">
              شهادات حقيقية من عملاء راضين عن خدماتنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                      unoptimized={true}
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <LazyLoad>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">أحدث المقالات</h2>
              <p className="text-xl text-gray-600">
                نصائح وإرشادات مفيدة حول نقل العفش
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <div className="blog-card bg-white rounded-lg shadow-md overflow-hidden hover-lift h-full flex flex-col">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        unoptimized={true}
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <FaRegClock className="mr-1" />
                        <span>{new Date(post.publishedAt).toLocaleDateString('ar-SA')}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm flex-1">
                        {post.description.length > 100 
                          ? post.description.substring(0, 100) + '...' 
                          : post.description
                        }
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/blog" 
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                عرض جميع المقالات
              </Link>
            </div>
          </div>
        </section>
      </LazyLoad>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            جاهز لبدء رحلة نقل العفش؟
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            احصل على عرض سعر مخصص لاحتياجاتك واستمتع بخدمة نقل عفش احترافية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-a-free-quote" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <FaCalendarCheck />
              احصل على عرض سعر مجاني
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <FaPhoneAlt />
              تحدث مع خبير
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 