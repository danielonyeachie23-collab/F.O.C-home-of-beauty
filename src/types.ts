export interface Service {
  id: string;
  name: string;
  price: number;
  duration: string;
  category: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Premium Wigs' | 'Luxury Perfumes' | 'Decorative Pillows' | 'Men\'s Luxury Boxers' | 'Luxury Footwear';
  image: string;
  description: string;
  rating: number;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BookingDetails {
  serviceId: string;
  date: string;
  timeSlot: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  notes?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  beforeImage?: string;
  afterImage: string;
  category: 'Beauty' | 'Spa' | 'Transformation' | 'Product';
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
