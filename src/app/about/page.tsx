import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  FaUsers, FaTrophy, FaHandshake, FaGem, 
  FaRegLightbulb, FaPhone, FaQuoteRight 
} from 'react-icons/fa';
import { MdSecurity, MdTimer, MdAttachMoney } from 'react-icons/md';

export const metadata: Metadata = {
  title: 'من نحن - شركة نقل العفش',
  description: 'تعرف على قصتنا ورؤيتنا وقيمنا وفريقنا المتخصص في مجال نقل العفش في المملكة العربية السعودية',
};

export default function AboutPage() {
  // بيانات الفريق
  const teamMembers = [
    {
      id: 1,
      name: 'فيصل الحربي',
      role: 'المدير التنفيذي',
      bio: 'خبرة أكثر من 15 عاماً في مجال نقل العفش والخدمات اللوجستية',
      image: '/images/blog/My_Experience_with_X_Moving_Company.jpeg'
    },
    {
      id: 2,
      name: 'سعد القحطاني',
      role: 'مدير العمليات',
      bio: 'متخصص في إدارة فرق العمل وتخطيط عمليات النقل بكفاءة عالية',
      image: '/images/blog/Services_in_Furniture_Moving_Worth_the_Cost.jpeg'
    },
    {
      id: 3,
      name: 'نورة العتيبي',
      role: 'مديرة التسويق',
      bio: 'متخصصة في التسويق الرقمي واستراتيجيات نمو الأعمال',
      image: '/images/blog/Professional_Furniture_Packing.jpeg'
    }
  ];

  // إنجازات الشركة
  const achievements = [
    {
      id: 1,
      number: '+5000',
      title: 'عميل سعيد',
      description: 'خدمنا أكثر من 5000 عميل في مختلف مناطق المملكة'
    },
    {
      id: 2,
      number: '+20',
      title: 'مدينة',
      description: 'نقدم خدماتنا في أكثر من 20 مدينة في المملكة العربية السعودية'
    },
    {
      id: 3,
      number: '+10',
      title: 'سنوات خبرة',
      description: 'نملك خبرة تزيد عن 10 سنوات في مجال نقل العفش'
    },
    {
      id: 4,
      number: '+50',
      title: 'موظف محترف',
      description: 'فريق متخصص ومدرب على أعلى مستوى'
    }
  ];

  // القيم الأساسية
  const coreValues = [
    {
      id: 1,
      title: 'الأمانة',
      description: 'نتعامل مع أثاث عملائنا كما لو كان أثاثنا الخاص مع الحرص الشديد على كل قطعة',
      icon: <MdSecurity className="w-10 h-10" />
    },
    {
      id: 2,
      title: 'الجودة',
      description: 'نقدم خدمات عالية الجودة بأسعار منافسة دون المساس بمستوى الخدمة',
      icon: <FaGem className="w-10 h-10" />
    },
    {
      id: 3,
      title: 'الإحترافية',
      description: 'فريق عمل مدرب على أعلى مستوى ويتبع أحدث الأساليب في النقل والتغليف',
      icon: <FaUsers className="w-10 h-10" />
    },
    {
      id: 4,
      title: 'رضا العملاء',
      description: 'رضا العميل هو هدفنا الأول ونسعى دائماً لتقديم خدمة تفوق التوقعات',
      icon: <FaHandshake className="w-10 h-10" />
    }
  ];

  // الشهادات
  const testimonials = [
    {
      id: 1,
      name: 'فهد السليمان',
      position: 'الرياض',
      text: 'لم أتوقع أن تكون عملية نقل الأثاث بهذه السلاسة! فريق محترف وخدمة ممتازة من البداية حتى النهاية.',
      image: '/images/blog/My_Experience_with_X_Moving_Company.jpeg',
    },
    {
      id: 2,
      name: 'رنا العتيبي',
      position: 'جدة',
      text: 'سعدت بالتعامل مع الشركة خلال نقل منزلي. الفريق كان متعاوناً ومحترفاً، والأثاث وصل بحالة ممتازة.',
      image: '/images/blog/Services_in_Furniture_Moving_Worth_the_Cost.jpeg',
    },
    {
      id: 3,
      name: 'خالد الشمري',
      position: 'الدمام',
      text: 'الأسعار كانت منافسة والخدمة كانت استثنائية. لم أشهد أي ضرر لأثاثي وتم الالتزام بالموعد تماماً.',
      image: '/images/blog/Best_Furniture_Moving_Company.jpeg',
    }
  ];

  // الخط الزمني
  const timeline = [
    {
      year: '2013',
      title: 'تأسيس الشركة',
      description: 'انطلقت الشركة بفريق صغير وبرؤية واضحة لتقديم خدمات نقل عفش احترافية'
    },
    {
      year: '2015',
      title: 'التوسع الأول',
      description: 'افتتاح فروع إضافية وتوسيع نطاق الخدمات لتشمل مناطق أكبر في المملكة'
    },
    {
      year: '2018',
      title: 'تطوير الخدمات',
      description: 'إضافة خدمات جديدة مثل التخزين الآمن والنقل الدولي وخدمات التغليف المتخصصة'
    },
    {
      year: '2020',
      title: 'التحول الرقمي',
      description: 'تطوير منصة رقمية متكاملة لتحسين تجربة العملاء وتسهيل عملية الحجز والمتابعة'
    },
    {
      year: '2023',
      title: 'الإنتشار الواسع',
      description: 'الوصول إلى أكثر من 20 مدينة في المملكة وتطوير أسطول النقل بأحدث المركبات'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 brightness-40">
          <Image
            src="/images/blog/Best_Furniture_Moving_Company.jpeg"
            alt="فريق العمل"
            fill
            priority
            className="object-cover"
            unoptimized={true}
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold text-white mb-6 animate-fadeIn">
                قصتنا ومهمتنا
              </h1>
              <p className="text-xl text-white mb-8 animate-slideUp">
                نحن نؤمن بأن نقل الأثاث هو أكثر من مجرد خدمة - إنها مسؤولية نقل ذكريات وأشياء ثمينة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">من نحن</h2>
              <p className="text-lg text-gray-600 mb-6">
                شركتنا هي واحدة من الشركات الرائدة في مجال نقل العفش والأثاث في المملكة العربية السعودية. بدأنا رحلتنا في عام 2013 برؤية واضحة لتغيير مفهوم خدمات نقل العفش التقليدية وتقديم نموذج احترافي يضمن أعلى مستويات الأمان والجودة.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                نفتخر اليوم بخدمة آلاف العملاء في مختلف مناطق المملكة، ونتميز بفريق عمل مدرب على أعلى مستوى، وأسطول من السيارات المجهزة خصيصاً لنقل الأثاث بأمان تام، بالإضافة إلى استخدام أفضل مواد التغليف وأحدث التقنيات في مجال النقل والتخزين.
              </p>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/blog/Guide_to_Moving_Furniture_in_Riyadh.jpeg"
                  alt="خدمات نقل العفش"
                  fill
                  className="object-cover"
                  unoptimized={true}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl font-bold">+10</div>
                <div className="text-lg">سنوات من الخبرة</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">قصة نجاحنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تعرف على رحلتنا منذ البداية وكيف تطورت شركتنا على مر السنين
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-start mb-12">
                <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-blue-600 mr-8"></div>
                <div className="bg-blue-600 text-white flex items-center justify-center w-16 h-16 rounded-full mr-8 z-10 flex-shrink-0">
                  <span className="font-bold">{item.year}</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover-lift flex-grow">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-blue-50 p-10 rounded-lg shadow-md hover-lift">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                  <FaRegLightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">رؤيتنا</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                أن نكون الشركة الرائدة في مجال نقل العفش والخدمات اللوجستية في المملكة العربية السعودية، ونموذجاً يحتذى به في تقديم خدمات آمنة وذات جودة عالية تتجاوز توقعات العملاء.
              </p>
            </div>

            <div className="bg-blue-600 text-white p-10 rounded-lg shadow-md hover-lift">
              <div className="flex items-center mb-6">
                <div className="bg-white text-blue-600 p-3 rounded-full mr-4">
                  <FaTrophy className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">مهمتنا</h3>
              </div>
              <p className="text-lg leading-relaxed">
                توفير خدمات نقل عفش احترافية وآمنة تضمن حماية ممتلكات عملائنا الثمينة، وتحقيق أعلى مستويات الرضا من خلال فريق عمل متميز وتقنيات حديثة وعمليات منظمة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">قيمنا الأساسية</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              المبادئ التي توجهنا في كل ما نقوم به وتشكل ثقافة عملنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map(value => (
              <div key={value.id} className="bg-white p-8 rounded-lg shadow-md hover-lift">
                <div className="text-blue-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">فريقنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تعرف على الفريق المتميز الذي يعمل بجد لتقديم أفضل خدمة ممكنة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map(member => (
              <div key={member.id} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-md hover-lift">
                <div className="relative h-72">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    loading="lazy"
                    unoptimized={true}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">إنجازاتنا</h2>
            <p className="text-xl max-w-3xl mx-auto">
              نفتخر بما حققناه على مر السنين من خلال التزامنا بتقديم أفضل الخدمات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map(achievement => (
              <div key={achievement.id} className="text-center hover-lift">
                <div className="text-5xl font-bold mb-3">{achievement.number}</div>
                <h3 className="text-2xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-white/80">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">ماذا يقول عملاؤنا</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              آراء بعض عملائنا الكرام الذين استفادوا من خدماتنا
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
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      loading="lazy"
                      unoptimized={true}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">مستعد للبدء؟</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر لخدمات نقل العفش
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
              <FaPhone className="ml-2" />
              اتصل بنا: 0500000000
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 