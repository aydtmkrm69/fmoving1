'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    moveDate: '',
    moveType: '',
    moveFrom: '',
    moveTo: '',
    items: {
      bedroom: 0,
      livingRoom: 0,
      diningRoom: 0,
      kitchen: 0,
      bathroom: 0,
      other: 0
    },
    services: {
      packing: false,
      assembly: false,
      storage: false,
      cleaning: false
    },
    additionalInfo: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const moveTypes = [
    { id: 'residential', label: 'نقل سكني' },
    { id: 'commercial', label: 'نقل تجاري' },
    { id: 'international', label: 'نقل دولي' },
    { id: 'storage', label: 'تخزين' }
  ];

  const saudiCities = [
    'الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة', 'الدمام', 'الخبر', 
    'الظهران', 'الجبيل', 'الأحساء', 'الطائف', 'أبها', 'خميس مشيط', 
    'تبوك', 'حائل', 'نجران', 'بريدة', 'القصيم', 'الخرج', 'سكاكا', 'عرعر'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        services: {
          ...formData.services,
          [name.split('.')[1]]: checkbox.checked
        }
      });
    } else if (name.startsWith('items.')) {
      const itemName = name.split('.')[1];
      setFormData({
        ...formData,
        items: {
          ...formData.items,
          [itemName]: parseInt(value) || 0
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
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
    
    if (!formData.name.trim()) {
      newErrors.name = 'الاسم مطلوب';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    } else if (!/^\d{9,10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'يرجى إدخال رقم هاتف صحيح';
    }
    
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'يرجى إدخال بريد إلكتروني صحيح';
    }
    
    if (!formData.moveDate) {
      newErrors.moveDate = 'تاريخ النقل مطلوب';
    }
    
    if (!formData.moveType) {
      newErrors.moveType = 'نوع النقل مطلوب';
    }
    
    if (!formData.moveFrom) {
      newErrors.moveFrom = 'مكان النقل من مطلوب';
    }
    
    if (!formData.moveTo) {
      newErrors.moveTo = 'مكان النقل إلى مطلوب';
    }
    
    const totalItems = Object.values(formData.items).reduce((sum, count) => sum + count, 0);
    if (totalItems === 0) {
      newErrors.items = 'يرجى تحديد عدد القطع المراد نقلها';
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
        setFormData({
          name: '',
          phone: '',
          email: '',
          moveDate: '',
          moveType: '',
          moveFrom: '',
          moveTo: '',
          items: {
            bedroom: 0,
            livingRoom: 0,
            diningRoom: 0,
            kitchen: 0,
            bathroom: 0,
            other: 0
          },
          services: {
            packing: false,
            assembly: false,
            storage: false,
            cleaning: false
          },
          additionalInfo: ''
        });
      }, 1500);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-center text-green-500 mb-6">
                <FaCheckCircle className="w-16 h-16" />
              </div>
              <h1 className="text-2xl font-bold text-center mb-4">تم استلام طلبك بنجاح!</h1>
              <p className="text-gray-600 text-center mb-6">
                شكراً لك! سيقوم فريقنا بالتواصل معك في أقرب وقت ممكن لتقديم عرض سعر مفصل.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-700 text-sm">
                  <strong>ملاحظة:</strong> سيتم التواصل معك خلال 24 ساعة من تقديم الطلب.
                </p>
              </div>
              <div className="text-center">
                <Link 
                  href="/"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors"
                >
                  العودة إلى الصفحة الرئيسية
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative py-16 bg-blue-600">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/Furniture_moving_company.jpeg"
            alt="خلفية نقل العفش"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">احصل على عرض سعر مجاني</h1>
            <p className="text-xl max-w-3xl mx-auto">
              املأ النموذج أدناه للحصول على عرض سعر مفصل لخدمات نقل العفش بدون أي التزام
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <h2 className="text-2xl font-bold text-blue-600 col-span-full mb-4">المعلومات الشخصية</h2>
                  
                  {/* Personal Information */}
                  <div>
                    <label htmlFor="name" className="block font-medium text-gray-700 mb-1">
                      الاسم الكامل <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                      placeholder="أدخل اسمك الكامل"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block font-medium text-gray-700 mb-1">
                      رقم الهاتف <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                      placeholder="05XXXXXXXX"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                  
                  <div className="col-span-full">
                    <label htmlFor="email" className="block font-medium text-gray-700 mb-1">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                      placeholder="example@domain.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  <h2 className="text-2xl font-bold text-blue-600 col-span-full mb-4 mt-6">تفاصيل النقل</h2>
                  
                  {/* Move Details */}
                  <div>
                    <label htmlFor="moveDate" className="block font-medium text-gray-700 mb-1">
                      تاريخ النقل المفضل <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="moveDate"
                      name="moveDate"
                      value={formData.moveDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.moveDate ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    />
                    {errors.moveDate && (
                      <p className="text-red-500 text-sm mt-1">{errors.moveDate}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="moveType" className="block font-medium text-gray-700 mb-1">
                      نوع النقل <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="moveType"
                      name="moveType"
                      value={formData.moveType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.moveType ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    >
                      <option value="">اختر نوع النقل</option>
                      {moveTypes.map(type => (
                        <option key={type.id} value={type.id}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    {errors.moveType && (
                      <p className="text-red-500 text-sm mt-1">{errors.moveType}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="moveFrom" className="block font-medium text-gray-700 mb-1">
                      النقل من <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="moveFrom"
                      name="moveFrom"
                      value={formData.moveFrom}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.moveFrom ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    >
                      <option value="">اختر المدينة</option>
                      {saudiCities.map(city => (
                        <option key={`from-${city}`} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    {errors.moveFrom && (
                      <p className="text-red-500 text-sm mt-1">{errors.moveFrom}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="moveTo" className="block font-medium text-gray-700 mb-1">
                      النقل إلى <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="moveTo"
                      name="moveTo"
                      value={formData.moveTo}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.moveTo ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400`}
                    >
                      <option value="">اختر المدينة</option>
                      {saudiCities.map(city => (
                        <option key={`to-${city}`} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    {errors.moveTo && (
                      <p className="text-red-500 text-sm mt-1">{errors.moveTo}</p>
                    )}
                  </div>
                  
                  <h2 className="text-2xl font-bold text-blue-600 col-span-full mb-4 mt-6">قطع الأثاث</h2>
                  
                  {/* Furniture Items */}
                  <div className="col-span-full">
                    {errors.items && (
                      <div className="flex items-center mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <FaExclamationTriangle className="text-red-500 mr-2" />
                        <p className="text-red-500 text-sm">{errors.items}</p>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="items.bedroom" className="block font-medium text-gray-700 mb-1">
                          غرف النوم
                        </label>
                        <input
                          type="number"
                          id="items.bedroom"
                          name="items.bedroom"
                          min="0"
                          value={formData.items.bedroom}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="items.livingRoom" className="block font-medium text-gray-700 mb-1">
                          غرف المعيشة
                        </label>
                        <input
                          type="number"
                          id="items.livingRoom"
                          name="items.livingRoom"
                          min="0"
                          value={formData.items.livingRoom}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="items.diningRoom" className="block font-medium text-gray-700 mb-1">
                          غرف الطعام
                        </label>
                        <input
                          type="number"
                          id="items.diningRoom"
                          name="items.diningRoom"
                          min="0"
                          value={formData.items.diningRoom}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="items.kitchen" className="block font-medium text-gray-700 mb-1">
                          المطبخ
                        </label>
                        <input
                          type="number"
                          id="items.kitchen"
                          name="items.kitchen"
                          min="0"
                          value={formData.items.kitchen}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="items.bathroom" className="block font-medium text-gray-700 mb-1">
                          الحمامات
                        </label>
                        <input
                          type="number"
                          id="items.bathroom"
                          name="items.bathroom"
                          min="0"
                          value={formData.items.bathroom}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="items.other" className="block font-medium text-gray-700 mb-1">
                          قطع أخرى
                        </label>
                        <input
                          type="number"
                          id="items.other"
                          name="items.other"
                          min="0"
                          value={formData.items.other}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-blue-600 col-span-full mb-4 mt-6">خدمات إضافية</h2>
                  
                  {/* Additional Services */}
                  <div className="col-span-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="services.packing"
                          name="services.packing"
                          checked={formData.services.packing}
                          onChange={handleChange}
                          className="w-5 h-5 text-blue-600 rounded-md mr-2"
                        />
                        <label htmlFor="services.packing" className="text-gray-700">
                          خدمات التغليف
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="services.assembly"
                          name="services.assembly"
                          checked={formData.services.assembly}
                          onChange={handleChange}
                          className="w-5 h-5 text-blue-600 rounded-md mr-2"
                        />
                        <label htmlFor="services.assembly" className="text-gray-700">
                          فك وتركيب الأثاث
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="services.storage"
                          name="services.storage"
                          checked={formData.services.storage}
                          onChange={handleChange}
                          className="w-5 h-5 text-blue-600 rounded-md mr-2"
                        />
                        <label htmlFor="services.storage" className="text-gray-700">
                          خدمات التخزين
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="services.cleaning"
                          name="services.cleaning"
                          checked={formData.services.cleaning}
                          onChange={handleChange}
                          className="w-5 h-5 text-blue-600 rounded-md mr-2"
                        />
                        <label htmlFor="services.cleaning" className="text-gray-700">
                          خدمات التنظيف
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-span-full mt-4">
                    <label htmlFor="additionalInfo" className="block font-medium text-gray-700 mb-1">
                      معلومات إضافية
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="اذكر أي معلومات إضافية ترغب في إخبارنا بها"
                    ></textarea>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-600">
                    بالنقر على زر إرسال الطلب، أنت توافق على سياسة الخصوصية الخاصة بنا وتسمح لنا بالاتصال بك لتقديم عرض السعر.
                  </p>
                </div>
                
                <div className="text-center">
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
                      'إرسال الطلب'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">لماذا تختار خدماتنا؟</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">سرعة الاستجابة</h3>
              <p className="text-gray-600">
                نرد على طلبات عروض الأسعار خلال 24 ساعة كحد أقصى
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">خدمة مؤمنة</h3>
              <p className="text-gray-600">
                جميع خدماتنا مؤمنة بالكامل لضمان سلامة ممتلكاتك
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">أسعار تنافسية</h3>
              <p className="text-gray-600">
                عروض أسعار واضحة وشفافة دون أي رسوم خفية
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 