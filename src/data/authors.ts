import { Author } from '../types/blog';

export const authors: Author[] = [
  {
    id: 'author-1',
    name: 'محمد أحمد',
    bio: 'خبير في مجال نقل العفش مع خبرة تزيد عن 10 سنوات في السوق السعودي',
    image: '/images/author/Faisal_AlHarbi.png',
    credentials: [
      'شهادة في إدارة الخدمات اللوجستية',
      'عضو جمعية النقل السعودية',
      'خبير معتمد في تقييم خدمات النقل'
    ]
  },
  {
    id: 'author-2',
    name: 'سارة العمري',
    bio: 'متخصصة في تنظيم وإدارة عمليات نقل العفش للشركات والمؤسسات',
    image: '/images/author/Noura_AlOtaibi.png',
    credentials: [
      'ماجستير في إدارة الأعمال',
      'شهادة في إدارة المشاريع PMP',
      'خبرة 8 سنوات في مجال نقل العفش'
    ]
  }
]; 