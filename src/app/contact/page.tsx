'use client';

import { useState } from 'react';
import SafeImage from '@/components/SafeImage';
import Link from 'next/link';
import { 
  FaMapMarkerAlt, FaPhone, FaEnvelope, 
  FaClock, FaCheckCircle, FaQuestion,
  FaHeadset
} from 'react-icons/fa';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
    
    // Clear error when field is updated
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'الاسم مطلوب';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'البريد الإلكتروني غير صالح';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'الرسالة مطلوبة';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset form
        setFormState({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      }, 1500);
    }
  };

  // FAQs data
  const faqs = [
    {
      question: 'كيف يمكنني الحصول على عرض سعر؟',
      answer: 'يمكنك الحصول على عرض سعر من خلال الاتصال بنا مباشرة أو ملء نموذج طلب عرض السعر في صفحة "احصل على عرض سعر".'
    },
    {
      question: 'ما هي مناطق تغطية خدماتكم؟',
      answer: 'نقدم خدماتنا في جميع مناطق المملكة العربية السعودية، بما في ذلك المدن الرئيسية مثل الرياض، جدة، الدمام، مكة، المدينة المنورة، وغيرها.'
    },
    {
      question: 'هل توفرون خدمة التغليف والتفريغ؟',
      answer: 'نعم، نوفر خدمة متكاملة تشمل التغليف، الفك، النقل، التركيب والتفريغ. يمكنك اختيار الخدمات التي تناسب احتياجاتك.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 brightness-50">
          <SafeImage
            src="/images/Furniture_moving_company.jpeg"
            alt="اتصل بنا"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-blue-600/50 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-2xl mb-6 inline-block">
                <div className="mb-6 inline-flex items-center justify-center h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm text-white mx-auto">
                  <FaHeadset className="h-10 w-10" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeIn">
                  نتشرف بالتواصل معكم
                </h1>
                <p className="text-xl text-white mb-6 max-w-2xl mx-auto animate-slideUp">
                  يسعدنا الرد على استفساراتكم وتقديم المساعدة في كل ما يتعلق بخدمات نقل العفش وتخزينه
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="tel:+966500000000" className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                    <FaPhone className="ml-2" /> اتصل الآن
                  </Link>
                  <Link href="#contact-form" className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-lg font-medium transition-colors">
                    ارسل رسالة
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-2" id="contact-form">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">أرسل رسالة</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">تم إرسال رسالتك بنجاح!</h3>
                  <p className="text-gray-600 mb-4">
                    شكراً للتواصل معنا. سنقوم بالرد عليك في أقرب وقت ممكن.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors"
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      الاسم الكامل <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                      placeholder="أدخل اسمك الكامل"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      البريد الإلكتروني <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                      placeholder="example@domain.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      رقم الهاتف (اختياري)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="05XXXXXXXX"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      الرسالة <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                      placeholder="اكتب رسالتك هنا..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        جاري الإرسال...
                      </>
                    ) : (
                      'إرسال الرسالة'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">معلومات التواصل</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">العنوان</h3>
                    <p className="text-gray-600">حي الملز، طريق الملك عبدالعزيز، الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">البريد الإلكتروني</h3>
                    <a href="mailto:info@example.com" className="text-blue-600 hover:underline">
                      info@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">رقم الهاتف</h3>
                    <a href="tel:+966500000000" className="text-blue-600 hover:underline">
                      +966 50 000 0000
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                    <FaClock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold">ساعات العمل</h3>
                    <p className="text-gray-600">السبت - الخميس: 9:00 صباحاً - 8:00 مساءً</p>
                    <p className="text-gray-600">الجمعة: مغلق</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-600 text-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">احصل على عرض سعر سريع</h2>
              <p className="mb-6">
                تحتاج عرض سعر سريع لخدمة نقل العفش؟ يمكنك الحصول على عرض سعر تفصيلي من خلال ملء النموذج الخاص.
              </p>
              <Link
                href="/get-a-free-quote"
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg inline-block transition-colors"
              >
                طلب عرض سعر
              </Link>
            </div>
          </div>
        </div>
        
        {/* Google Map */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">موقعنا</h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.3234507539267!2d46.726444276030774!3d24.713861275305195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sKing%20Abdulaziz%20Rd%2C%20Al%20Malaz%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1696847048396!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع الشركة على الخريطة"
              aria-label="موقع الشركة على الخريطة"
            ></iframe>
          </div>
        </div>
        
        {/* FAQs */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">الأسئلة الشائعة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover-lift">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-3 mt-1">
                    <FaQuestion className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 