// Available images in public/images/blog/
const AVAILABLE_BLOG_IMAGES = [
  'Furniture_Moving_Process.jpeg',
  'Furniture_Moving_in_Jeddah.jpeg',
  'Furniture_Moving_Services.jpeg',
  'Everything_You_Need_to_Know_About_Moving_Furniture_in_Dammam.jpeg',
  'Secure_Furniture_Storage_Services_in_Saudi_Arabia.jpeg',
  'Your_Guide_to_Efficiently_Arranging_Your_New_Home.jpeg',
  'Moving_Art_Pieces_and_Valuables.jpeg',
  'Guide_to Successful_Furniture_Moving.jpeg',
  'Does_Technology_Contribute_to_Improving_the_Furniture_Moving_Experience.jpeg',
  'Furniture_Insurance_During_Moving.jpeg',
  'Questions_You_Must_Ask_a_Moving_Company.jpeg',
  'Evaluating_Moving_Companies_in_2025.jpeg',
  'What_to_Do_with_Your_Unwanted_Items_Before_Moving_Furniture.jpeg',
  'Best_Neighborhoods_in_Riyadh_for_New_Housing.jpeg',
  'Moving_Furniture_in_Hot_Weather.jpeg',
  'Steps_to_Move_Furniture_Without_Damage.jpeg',
  'Golden_Tips_for_a_Stress-Free.jpeg',
  'Furniture_Moving_in_KSA.jpeg',
  'Furniture_Moving_Saudi_arabia.jpeg',
  'Cheapest_Moving_Company.jpeg',
  'Services_in_Furniture_Moving_Worth_the_Cost.jpeg',
  'Mistakes_to_Avoid_When_Choosing_a_Furniture_Moving_Company.jpeg',
  'Furniture_Moving_Prices_in_Saudi_Arabia.jpeg',
  'Best_Furniture_Moving_Company.jpeg',
  'Safely_Disassemble_and Assemble_Complex_Furniture.jpeg',
  'My_Experience_with_X_Moving_Company.jpeg',
  'Guide_to_Moving_Furniture_in_Riyadh.jpeg',
  'Handle_Bulky_and_Heavy_Furniture_During_a_Move.jpeg',
  'Ultimate_Checklist_Before_Moving_Day.jpeg',
  'Professional_Furniture_Packing.jpeg'
];

// Image mapping for non-existent images to available ones
const IMAGE_FALLBACK_MAP: Record<string, string> = {
  // Insurance related
  'furniture-insurance-moving.jpg': 'Furniture_Insurance_During_Moving.jpeg',
  'insurance-types-comparison.jpg': 'Services_in_Furniture_Moving_Worth_the_Cost.jpeg',
  'choosing-right-insurance.jpg': 'Best_Furniture_Moving_Company.jpeg',
  'damage-claim-process.jpg': 'Furniture_Moving_Process.jpeg',
  'intercity-moving-insurance.jpg': 'Furniture_Moving_Services.jpeg',
  'insurance-legal-framework.jpg': 'Questions_You_Must_Ask_a_Moving_Company.jpeg',
  'customers-insurance-experiences.jpg': 'My_Experience_with_X_Moving_Company.jpeg',
  'insurance-checklist.jpg': 'Ultimate_Checklist_Before_Moving_Day.jpeg',

  // Furniture assembly
  'safely-disassemble-assemble-furniture.jpg': 'Safely_Disassemble_and Assemble_Complex_Furniture.jpeg',
  'furniture-tools.jpg': 'Professional_Furniture_Packing.jpeg',
  'furniture-preparation.jpg': 'Furniture_Moving_Process.jpeg',
  'parts-documentation.jpg': 'Guide_to Successful_Furniture_Moving.jpeg',
  'bed-assembly.jpg': 'Safely_Disassemble_and Assemble_Complex_Furniture.jpeg',
  'complex-furniture-disassembly.jpg': 'Handle_Bulky_and_Heavy_Furniture_During_a_Move.jpeg',
  'furniture-troubleshooting.jpg': 'Questions_You_Must_Ask_a_Moving_Company.jpeg',
  'ikea-furniture-assembly.jpg': 'Safely_Disassemble_and Assemble_Complex_Furniture.jpeg',
  'professional-furniture-assembly.jpg': 'Professional_Furniture_Packing.jpeg',

  // Unwanted items
  'unwanted-items-solutions.jpg': 'What_to_Do_with_Your_Unwanted_Items_Before_Moving_Furniture.jpeg',
  'sorting-system.jpg': 'Your_Guide_to_Efficiently_Arranging_Your_New_Home.jpeg',
  'donation-centers.jpg': 'Services_in_Furniture_Moving_Worth_the_Cost.jpeg',
  'recycling-centers.jpg': 'Secure_Furniture_Storage_Services_in_Saudi_Arabia.jpeg',
  'sentimental-items-management.jpg': 'Moving_Art_Pieces_and_Valuables.jpeg',
  'decluttering-schedule.jpg': 'Ultimate_Checklist_Before_Moving_Day.jpeg',
  'professional-organizers.jpg': 'Your_Guide_to_Efficiently_Arranging_Your_New_Home.jpeg',

  // Moving day checklist
  'moving-day-checklist.jpg': 'Ultimate_Checklist_Before_Moving_Day.jpeg',
  'packing-process-checklist.jpg': 'Professional_Furniture_Packing.jpeg',

  // Technology
  'technology-furniture-moving.jpg': 'Does_Technology_Contribute_to_Improving_the_Furniture_Moving_Experience.jpeg',

  // General mapping for common missing images
  'furniture-wrapping-heat-protection.jpg': 'Moving_Furniture_in_Hot_Weather.jpeg',
  'office-company-furniture-moving-saudi-arabia.jpeg': 'Furniture_Moving_in_KSA.jpeg',
  'moving-budget-planning.jpg': 'Furniture_Moving_Prices_in_Saudi_Arabia.jpeg',
  'new-home-layout-planning.jpg': 'Your_Guide_to_Efficiently_Arranging_Your_New_Home.jpeg',
  'complete-timeline-furniture-moving.jpg': 'Furniture_Moving_Process.jpeg',
  'unpacking-organization.jpg': 'Your_Guide_to_Efficiently_Arranging_Your_New_Home.jpeg',
  'moving-furniture-dammam.jpg': 'Everything_You_Need_to_Know_About_Moving_Furniture_in_Dammam.jpeg',
  'dammam-neighborhoods-map.jpg': 'Best_Neighborhoods_in_Riyadh_for_New_Housing.jpeg',
  'humidity-protection-dammam.jpg': 'Safely_Disassemble_and Assemble_Complex_Furniture.jpeg',
  'moving-services-saudi-cities.jpg': 'Furniture_Moving_Services.jpeg',
  'furniture-moving-tips.jpg': 'Golden_Tips_for_a_Stress-Free.jpeg'
};

// Function to get the correct image path
export function getImagePath(imagePath: string): string {
  // If it's already a full path starting with /images/blog/
  if (imagePath.startsWith('/images/blog/')) {
    const filename = imagePath.replace('/images/blog/', '');
    
    // Check if the image exists in our available images
    if (AVAILABLE_BLOG_IMAGES.includes(filename)) {
      return imagePath;
    }
    
    // Check if we have a fallback mapping
    if (IMAGE_FALLBACK_MAP[filename]) {
      return '/images/blog/' + IMAGE_FALLBACK_MAP[filename];
    }
    
    // Default fallback
    return '/images/blog/Furniture_Moving_Process.jpeg';
  }
  
  // If it's not a blog image path, return as is
  return imagePath;
}

// Function to validate if an image exists
export function isImageAvailable(imagePath: string): boolean {
  if (imagePath.startsWith('/images/blog/')) {
    const filename = imagePath.replace('/images/blog/', '');
    return AVAILABLE_BLOG_IMAGES.includes(filename);
  }
  return true; // Assume non-blog images are available
}

// قائمة صور المؤلفين المتوفرة فعلياً في المجلد
export const AVAILABLE_AUTHOR_IMAGES = [
  'Faisal_AlHarbi.png',
  'Noura_AlOtaibi.png'
];

// Map of common image paths used in blog posts to actual available images
export const IMAGE_PATH_MAPPING: Record<string, string> = {
  // Direct mappings for specific files
  '/images/blog/moving-furniture-dammam.jpg': '/images/blog/Everything_You_Need_to_Know_About_Moving_Furniture_in_Dammam.jpeg',
  '/images/blog/dammam-neighborhoods-map.jpg': '/images/blog/Best_Neighborhoods_in_Riyadh_for_New_Housing.jpeg',
  '/images/blog/humidity-protection-dammam.jpg': '/images/blog/Safely_Disassemble_and Assemble_Complex_Furniture.jpeg',
  '/images/blog/moving-services-saudi-cities.jpg': '/images/blog/Furniture_Moving_Services.jpeg',
  '/images/blog/furniture-moving-tips.jpg': '/images/blog/Golden_Tips_for_a_Stress-Free.jpeg',
  '/images/blog/moving-day-checklist.jpg': '/images/blog/Ultimate_Checklist_Before_Moving_Day.jpeg',
  
  // صور تم اكتشاف أخطاء فيها
  '/images/Furniture_moving_Jeddah.jpeg': '/images/blog/Furniture_Moving_in_Jeddah.jpeg',
  '/images/Furniture_moving_Dammam.jpeg': '/images/blog/Everything_You_Need_to_Know_About_Moving_Furniture_in_Dammam.jpeg',
  
  // صور الشهادات
  '/images/testimonials/testimonial-1.jpg': '/images/testimonials/testimonial-1.jpg',
  '/images/testimonials/testimonial-2.jpg': '/images/testimonials/testimonial-2.jpg',
  '/images/testimonials/testimonial-3.jpg': '/images/testimonials/testimonial-3.jpg',
  '/images/testimonials/testimonial-4.jpg': '/images/testimonials/testimonial-4.jpg',
  '/images/testimonials/testimonial-5.jpg': '/images/testimonials/testimonial-5.jpg',
  '/images/testimonials/testimonial-6.jpg': '/images/testimonials/testimonial-6.jpg',
  '/images/testimonials/testimonial-7.jpg': '/images/testimonials/testimonial-7.jpg',
  '/images/testimonials/testimonial-8.jpg': '/images/testimonials/testimonial-8.jpg',
  '/images/testimonials/testimonial-9.jpg': '/images/testimonials/testimonial-9.jpg',
  
  // صور المؤلفين - التخطيط الاحتياطي إذا لم تكن الصورة موجودة في مجلد /images/author/
  '/images/author/Mohammed_AlOtaibi.png': '/images/blog/Furniture_Moving_in_Jeddah.jpeg',
  '/images/author/Khalid_AlHarthi.png': '/images/blog/Steps_to_Move_Furniture_Without_Damage.jpeg',
  '/images/author/Ahmed_Expert.png': '/images/blog/Guide_to Successful_Furniture_Moving.jpeg',
  '/images/author/Mohammed_AlShehri.png': '/images/blog/Everything_You_Need_to_Know_About_Moving_Furniture_in_Dammam.jpeg',
  '/images/author/Nora_AlHarbi.png': '/images/blog/Golden_Tips_for_a_Stress-Free.jpeg',
  '/images/author/Mohammed_AlDosari.png': '/images/blog/Furniture_Moving_Saudi_arabia.jpeg',
  '/images/author/Ahmad_AlQasim.png': '/images/blog/Does_Technology_Contribute_to_Improving_the_Furniture_Moving_Experience.jpeg',
  '/images/author/Turki_AlGhamdi.png': '/images/blog/Evaluating_Moving_Companies_in_2025.jpeg',
  '/images/author/Sarah_AlQahtani.png': '/images/blog/Secure_Furniture_Storage_Services_in_Saudi_Arabia.jpeg',
  '/images/author/Laila_AlFarsi.png': '/images/blog/Moving_Art_Pieces_and_Valuables.jpeg',
  '/images/author/Hala_AlShammari.png': '/images/blog/Your_Guide_to_Efficiently_Arranging_Your_New_Home.jpeg',
  '/images/author/Nasser_AlOtaibi.png': '/images/blog/Cheapest_Moving_Company.jpeg',
  '/images/author/Fahad_AlHazmi.png': '/images/blog/Furniture_Moving_in_KSA.jpeg',
  '/images/author/Saleh_AlShammari.png': '/images/blog/Questions_You_Must_Ask_a_Moving_Company.jpeg',
  '/images/author/Nasser_AlMuhanna.png': '/images/blog/Furniture_Moving_Process.jpeg',
  '/images/author/Huda_AlMutairi.png': '/images/blog/Professional_Furniture_Packing.jpeg',
  
  // مسارات صور المؤلفين الإضافية
  '/images/authors/riyadh-expert.jpg': '/images/blog/Guide_to_Moving_Furniture_in_Riyadh.jpeg',
  '/images/authors/pricing-specialist.jpg': '/images/blog/Furniture_Moving_Prices_in_Saudi_Arabia.jpeg',
  '/images/authors/jeddah-expert.jpg': '/images/blog/Furniture_Moving_in_Jeddah.jpeg',
  '/images/authors/insurance-expert.jpg': '/images/blog/Furniture_Insurance_During_Moving.jpeg',
  '/images/authors/moving-consultant.jpg': '/images/blog/Best_Furniture_Moving_Company.jpeg',
  '/images/authors/logistics-expert.jpg': '/images/blog/Furniture_Moving_Services.jpeg',
  '/images/authors/heavy-lifting-expert.jpg': '/images/blog/Handle_Bulky_and_Heavy_Furniture_During_a_Move.jpeg',
  '/images/authors/furniture-technician.jpg': '/images/blog/Safely_Disassemble_and Assemble_Complex_Furniture.jpeg',
  '/images/authors/organization-expert.jpg': '/images/blog/Your_Guide_to_Efficiently_Arranging_Your_New_Home.jpeg',
  '/images/authors/space-planning-expert.jpg': '/images/blog/Your_Guide_to_Efficiently_Arranging_Your_New_Home.jpeg',
  '/images/authors/consumer-protection.jpg': '/images/blog/Mistakes_to_Avoid_When_Choosing_a_Furniture_Moving_Company.jpeg',
  '/images/authors/cost-analyst.jpg': '/images/blog/Services_in_Furniture_Moving_Worth_the_Cost.jpeg',
  '/images/authors/ahmed.jpg': '/images/blog/My_Experience_with_X_Moving_Company.jpeg',

  // Common topic mappings
  'riyadh': '/images/blog/Guide_to_Moving_Furniture_in_Riyadh.jpeg',
  'jeddah': '/images/blog/Furniture_Moving_in_Jeddah.jpeg',
  'price': '/images/blog/Furniture_Moving_Prices_in_Saudi_Arabia.jpeg',
  'checklist': '/images/blog/Ultimate_Checklist_Before_Moving_Day.jpeg',
  'tips': '/images/blog/Golden_Tips_for_a_Stress-Free.jpeg',
  'packing': '/images/blog/Professional_Furniture_Packing.jpeg',
  'storage': '/images/blog/Secure_Furniture_Storage_Services_in_Saudi_Arabia.jpeg',
  'damage': '/images/blog/Safely_Disassemble_and Assemble_Complex_Furniture.jpeg',
  'heavy': '/images/blog/Handle_Bulky_and_Heavy_Furniture_During_a_Move.jpeg',
  'company': '/images/blog/Best_Furniture_Moving_Company.jpeg',
  'experience': '/images/blog/My_Experience_with_X_Moving_Company.jpeg',
  'cost': '/images/blog/Services_in_Furniture_Moving_Worth_the_Cost.jpeg',
  'cheap': '/images/blog/Cheapest_Moving_Company.jpeg',
  'furniture': '/images/blog/Furniture_Moving_Process.jpeg',
  'dammam': '/images/blog/Everything_You_Need_to_Know_About_Moving_Furniture_in_Dammam.jpeg',
};

/**
 * Get a suitable image for the given topic or keyword
 * @param topic A topic or keyword to find an image for
 * @returns The path to a suitable image
 */
export function getImageForTopic(topic: string): string {
  // Convert to lowercase for comparison
  const lcTopic = topic.toLowerCase();
  
  // Check for topic matches
  for (const [key, value] of Object.entries(IMAGE_PATH_MAPPING)) {
    if (lcTopic.includes(key.toLowerCase())) {
      return value;
    }
  }
  
  // If no match found, return a default image
  return '/images/blog/Furniture_Moving_Process.jpeg';
}

/**
 * Get a fallback image based on a string seed
 * @param seed Any string to use as a seed
 * @returns Path to an image
 */
export function getFallbackImage(seed: string): string {
  // Create a simple hash of the seed string
  const seedHash = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  // Use the hash to select an image
  const imageIndex = seedHash % AVAILABLE_BLOG_IMAGES.length;
  return `/images/blog/${AVAILABLE_BLOG_IMAGES[imageIndex]}`;
}

/**
 * Resolves an image path to ensure it points to an existing image
 * @param path The original image path
 * @param fallbackSeed A seed string to use for fallback selection
 * @returns A path to a valid image
 */
export function resolveImagePath(path: string, fallbackSeed: string = 'default'): string {
  // معالجة خاصة لصور المؤلفين - استخدام صور المؤلفين المتاحة دائمًا
  if (path.startsWith('/images/author/')) {
    // استخدام صورة مؤلف موجودة بناءً على الاسم
    const authorHash = fallbackSeed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const authorIndex = authorHash % AVAILABLE_AUTHOR_IMAGES.length;
    const authorImage = `/images/author/${AVAILABLE_AUTHOR_IMAGES[authorIndex]}`;
    return authorImage;
  }
  
  // If the path is already mapped, use the mapping
  if (path in IMAGE_PATH_MAPPING) {
    return IMAGE_PATH_MAPPING[path];
  }
  
  // If the path starts with /images/blog/, check if it's a valid path
  if (path.startsWith('/images/blog/')) {
    const filename = path.split('/').pop() || '';
    
    // If the filename exists in our available images, use it
    if (AVAILABLE_BLOG_IMAGES.includes(filename)) {
      return path;
    }
    
    // Try to find a topic match from the filename
    for (const topic of Object.keys(IMAGE_PATH_MAPPING)) {
      if (filename.toLowerCase().includes(topic.toLowerCase())) {
        return IMAGE_PATH_MAPPING[topic];
      }
    }
  }
  
  // If we got here, use a fallback image
  const fallbackImage = getFallbackImage(fallbackSeed);
  return fallbackImage;
} 