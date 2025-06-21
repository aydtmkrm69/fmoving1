'use client';

import Image from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  caption?: string;
}

export default function BlogImage({ 
  src, 
  alt, 
  width = 800, 
  height = 400, 
  className = '',
  priority = false,
  caption
}: ImageProps) {
  // تحديد المسار الصحيح للصورة مع mapping شامل للصور المتنوعة
  let imageSrc = src;
  
  // خريطة شاملة للصور المختلفة
  const imageMapping: { [key: string]: string } = {
    // صور خطوات النقل
    'safe-furniture-moving-steps.jpg': '/images/blog/Steps_to_Move_Furniture_Without_Damage.jpeg',
    'furniture-moving-steps.jpg': '/images/blog/Steps_to_Move_Furniture_Without_Damage.jpeg',
    
    // صور مواد التغليف والتعبئة
    'furniture-packing-materials.jpg': '/images/blog/Professional_Furniture_Packing.jpeg',
    'professional-packing-materials.jpg': '/images/blog/Professional_Furniture_Packing.jpeg',
    'packing-secrets.jpg': '/images/blog/Professional_Furniture_Packing.jpeg',
    
    // صور الفك والتركيب
    'furniture-disassembly-process.jpg': '/images/blog/Safely_Disassemble_and Assemble_Complex_Furniture.jpeg',
    'furniture-assembly.jpg': '/images/blog/Safely_Disassemble_and Assemble_Complex_Furniture.jpeg',
    'disassemble-furniture.jpg': '/images/blog/safely-disassemble-assemble-furniture.jpg',
    
    // صور ترتيب الشاحنة والنقل
    'truck-loading-arrangement.jpg': '/images/blog/Furniture_Moving_Process.jpeg',
    'loading-truck.jpg': '/images/blog/Furniture_Moving_Process.jpeg',
    'furniture-transport.jpg': '/images/blog/Furniture_Moving_Services.jpeg',
    
    // صور ترتيب المنزل الجديد
    'furniture-installation-new-home.jpg': '/images/blog/Your_Guide_to_Efficiently_Arranging_Your_New_Home.jpeg',
    'new-home-arrangement.jpg': '/images/blog/Your_Guide_to_Efficiently_Arranging_Your_New_Home.jpeg',
    'home-organization.jpg': '/images/blog/Your_Guide_to_Efficiently_Arranging_Your_New_Home.jpeg',
    
    // صور النقل الناجح
    'successful-furniture-moving.jpg': '/images/blog/Furniture_Moving_Services.jpeg',
    'successful-move.jpg': '/images/blog/Guide_to_Successful_Furniture_Moving.jpeg',
    
    // صور الأسعار والتكاليف
    'furniture-moving-costs.jpg': '/images/blog/Furniture_Moving_Prices_in_Saudi_Arabia.jpeg',
    'moving-prices.jpg': '/images/blog/Furniture_Moving_Prices_in_Saudi_Arabia.jpeg',
    
    // صور اختيار الشركات
    'choosing-moving-company.jpg': '/images/blog/Best_Furniture_Moving_Company.jpeg',
    'best-moving-company.jpg': '/images/blog/Best_Furniture_Moving_Company.jpeg',
    'moving-company-selection.jpg': '/images/blog/Best_Furniture_Moving_Company.jpeg',
    
    // صور النقل في الطقس الحار
    'hot-weather-moving.jpg': '/images/blog/Moving_Furniture_in_Hot_Weather.jpeg',
    'summer-moving.jpg': '/images/blog/Moving_Furniture_in_Hot_Weather.jpeg',
    
    // صور الأحياء والمناطق
    'riyadh-neighborhoods.jpg': '/images/blog/Best_Neighborhoods_in_Riyadh_for_New_Housing.jpeg',
    'riyadh-moving-guide.jpg': '/images/blog/Guide_to_Moving_Furniture_in_Riyadh.jpeg',
    'comprehensive-guide-riyadh-moving.jpg': '/images/blog/comprehensive-guide-riyadh-moving.jpg',
    
    // صور جدة والدمام
    'jeddah-moving.jpg': '/images/blog/Furniture_Moving_in_Jeddah.jpeg',
    'dammam-moving.jpg': '/images/blog/Everything_You_Need_to_Know_About_Moving_Furniture_in_Dammam.jpeg',
    
    // صور التخزين
    'furniture-storage.jpg': '/images/blog/Secure_Furniture_Storage_Services_in_Saudi_Arabia.jpeg',
    'storage-services.jpg': '/images/blog/Secure_Furniture_Storage_Services_in_Saudi_Arabia.jpeg',
    
    // صور النصائح والأخطاء
    'moving-mistakes.jpg': '/images/blog/Mistakes_to_Avoid_When_Choosing_a_Furniture_Moving_Company.jpeg',
    'golden-tips.jpg': '/images/blog/Golden_Tips_for_a_Stress-Free.jpeg',
    'stress-free-moving-tips.jpg': '/images/blog/stress-free-moving-tips.jpg',
    
    // صور التأمين
    'furniture-insurance.jpg': '/images/blog/Furniture_Insurance_During_Moving.jpeg',
    'furniture-insurance-moving.jpg': '/images/blog/furniture-insurance-moving.jpg',
    
    // صور التكنولوجيا
    'technology-moving.jpg': '/images/blog/Does_Technology_Contribute_to_Improving_the_Furniture_Moving_Experience.jpeg',
    'technology-furniture-moving.jpg': '/images/blog/technology-furniture-moving.jpg',
    
    // صور القطع الثمينة
    'valuables-moving.jpg': '/images/blog/Moving_Art_Pieces_and_Valuables.jpeg',
    'art-pieces-moving.jpg': '/images/blog/Moving_Art_Pieces_and_Valuables.jpeg',
    
    // صور قائمة المراجعة
    'moving-checklist.jpg': '/images/blog/Ultimate_Checklist_Before_Moving_Day.jpeg',
    'moving-day-checklist.jpg': '/images/blog/moving-day-checklist.jpg',
    
    // صور الأثاث الثقيل
    'heavy-furniture.jpg': '/images/blog/Handle_Bulky_and_Heavy_Furniture_During_a_Move.jpeg',
    'bulky-furniture-moving.jpg': '/images/blog/Handle_Bulky_and_Heavy_Furniture_During_a_Move.jpeg',
    
    // صور الأشياء غير المرغوبة
    'unwanted-items.jpg': '/images/blog/What_to_Do_with_Your_Unwanted_Items_Before_Moving_Furniture.jpeg',
    'unwanted-items-solutions.jpg': '/images/blog/unwanted-items-solutions.jpg',
    
    // صور تقييم الشركات
    'evaluating-companies.jpg': '/images/blog/Evaluating_Moving_Companies_in_2025.jpeg',
    'company-evaluation.jpg': '/images/blog/Evaluating_Moving_Companies_in_2025.jpeg',
    
    // صور الأسئلة المهمة
    'important-questions.jpg': '/images/blog/Questions_You_Must_Ask_a_Moving_Company.jpeg',
    'questions-moving-company.jpg': '/images/blog/Questions_You_Must_Ask_a_Moving_Company.jpeg',
    
    // صور تجارب العملاء
    'customer-experience.jpg': '/images/blog/My_Experience_with_X_Moving_Company.jpeg',
    'moving-testimonials.jpg': '/images/blog/My_Experience_with_X_Moving_Company.jpeg',
    
    // صور أرخص الخدمات
    'cheapest-moving.jpg': '/images/blog/Cheapest_Moving_Company.jpeg',
    'budget-moving.jpg': '/images/blog/Cheapest_Moving_Company.jpeg',
    
    // صور الخدمات الإضافية
    'additional-services.jpg': '/images/blog/Services_in_Furniture_Moving_Worth_the_Cost.jpeg',
    'moving-services-cost.jpg': '/images/blog/Services_in_Furniture_Moving_Worth_the_Cost.jpeg'
  };
  
  // البحث في المسارات المختلفة
  for (const [key, value] of Object.entries(imageMapping)) {
    if (src.includes(key)) {
      imageSrc = value;
      break;
    }
  }
  
  // إذا لم يتم العثور على تطابق، تحقق من المسار
  if (!imageSrc.startsWith('/images/blog/') && !imageMapping[src]) {
    // استخدم صورة افتراضية مناسبة
    imageSrc = '/images/blog/Furniture_Moving_Process.jpeg';
  }
  
  return (
    <figure className="my-8">
      <div className={`relative overflow-hidden rounded-lg ${className}`}>
        <Image
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-full"
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          unoptimized={true}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
} 