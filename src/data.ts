import { Service, Product, GalleryItem, Testimonial, FAQItem } from './types';

export const HERO_IMAGE = '/src/assets/images/foc_hero_1780652620643.png';
export const PHYSICAL_SALON_IMAGE = '/src/assets/images/foc_physical_salon_1780833961974.png';

export const SERVICES: Service[] = [
  // FACIALS CATEGORY
  {
    id: 's-facial-treatment',
    name: 'Facial Treatment',
    price: 12000,
    duration: '45 Mins',
    category: 'Facials',
    description: 'Experience our signature therapeutic facial treatment. Below is our exclusive aesthetic guide showcasing our soothing deep steam cleansing, gentle physical exfoliation, and advanced botanical hydration masks.',
    benefits: ['Cleanses and unclogs deep dermal pores', 'Promotes healthy skin elasticity and cell repair', 'Soothes, calms, and hydrates sensitive outer layers', 'Restores natural, radiant luxury glow instantly'],
    image: '',
    video: '/facial_treatment.mp4'
  },

  // NAILS CATEGORY
  {
    id: 's-nails-classic',
    name: 'Nails',
    price: 5000,
    duration: '60 Mins',
    category: 'Nails',
    description: 'Bespoke custom nail styling and professional art designs. Includes precision cuticle care, professional preparation, expert gel or acrylic applications, and meticulous hand-painted details tailored to your custom style.',
    benefits: ['Premium non-toxic durable gel materials', 'Meticulous detailed custom line art', 'Long-lasting high-gloss mirror shine', 'Full-service luxury hand pampering care'],
    image: '/src/assets/images/IMG_20260605_170543.jpg'
  },

  // PEDICURE CATEGORY
  {
    id: 's-pedi-basic',
    name: 'Pedicure',
    price: 10000,
    duration: '40 Mins',
    category: 'Pedicure',
    description: 'Quick nail tidying and conditioning. Includes botanical soap soak, precise shaping, cuticle pushing, standard pumice scrubbing, and moisturizing cream.',
    benefits: ['Trims and styles nails cleanly', 'Softens rough cuticles', 'Lifts dry skin surface', 'Leaves toes fully nourished'],
    image: '/src/assets/images/IMG_20260605_173151.jpg'
  },

  // WAXING CATEGORY
  {
    id: 's-waxing',
    name: 'Waxing',
    price: 15000,
    duration: '30 Mins',
    category: 'Waxing',
    description: 'Professional body hair removal using premium gentle wax formulas. Safely, sanitarily, and smoothly removes hair from the roots for long-lasting performance.',
    benefits: ['Quick, professional hair removal', 'Less painful premium wax formulas', 'Zero razor bumps or skin irritation', 'Slower, finer hair regrowth cycles'],
    image: '',
    video: '/waxing_video.mp4'
  },

  // MASSAGE CATEGORY
  {
    id: 's-massage-relaxation',
    name: 'Relaxation Massage',
    price: 25000,
    duration: '60 Mins',
    category: 'Massage',
    description: 'Pure stress relief. Smooth, long-gliding strokes with light-to-medium physical pressure, fully customized with soothing organic lavender aromatherapy.',
    benefits: ['Lowers physical cortisol stress', 'Enhances deep slate sleep cycles', 'Calms nervous system anxiety', 'Soothing full-body tranquility'],
    image: ''
  },

  // BRACES CATEGORY
  {
    id: 's-braces',
    name: 'Fashionable Braces',
    price: 50000,
    duration: '90 Mins',
    category: 'Braces',
    description: 'Professional orthodontic bracket placement and alignment services. Uses premium biocompatible brackets and advanced positioning tech to start your journey to a perfect smile.',
    benefits: ['High precision professional placement', 'Premium hygienic brace brackets', 'Comfortable, secure adhesive bonding', 'Expert guidance on long-term dental care'],
    image: '/src/assets/images/IMG_20260605_173416.jpg'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p-luxury-wig-1',
    name: 'FOC World Empress HD Lace Silk Wig',
    price: 499000,
    category: 'Premium Wigs',
    image: '/src/assets/images/foc_burgundy_wig_1780834512063.png',
    description: 'Crafted from 100% Brazilian human virgin hair. Features a thin, undetectable HD Swiss lace front allowing multi-directional parting and a beautifully natural hairline.',
    rating: 5.0,
    featured: true
  },
  {
    id: 'p-perfume-1',
    name: 'Riggs London Body Spray & Premium Mists',
    price: 8000,
    category: 'Luxury Perfumes',
    image: '/src/assets/images/riggs_collection_1780858604927.png',
    description: 'Elevate your daily fragrance trail. Featuring the premium Riggs London Perfumed Deodorant Body Spray collection (including Only, Oud, and Armour, 250ml) and our highly sought-after Signature Rose Vanilla body mist.',
    rating: 4.9,
    featured: true
  },
  {
    id: 'p-pillow-1',
    name: 'Silk Satin Pillowcase Duo',
    price: 65000,
    category: 'Decorative Pillows',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=600',
    description: 'Protect your delicate hair and skin from friction. Sewn with ultra-weightless mulberry silk with elegant gold trim, adding a decadent feel to your majestic sleep sanctuary.',
    rating: 4.8,
    featured: false
  },
  {
    id: 'p-men-boxers-1',
    name: 'Noble Modal Boxer Brief Set (Pack of 3)',
    price: 55000,
    category: "Men's Luxury Boxers",
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=600',
    description: 'Pure, breathable comfort for gentlemen. Tailored with silk-infused premium modal fibers that contour seamlessly. Finished with a gold jacquard woven emblem belt.',
    rating: 4.7,
    featured: false
  },
  {
    id: 'p-footwear-1',
    name: 'Aurelia Metallic Stilettos',
    price: 180000,
    category: 'Luxury Footwear',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600',
    description: 'Stripe your stride with luxury. Exquisite high heels featuring gold metallic hardware, soft leather cushioned insoles, and a show-stopping sleek strap silhouette.',
    rating: 4.9,
    featured: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Flawless Microblading Definition',
    beforeImage: 'https://images.unsplash.com/photo-1522337094326-98755044d168?auto=format&fit=crop&q=80&w=300&q=50&blur=5',
    afterImage: 'https://images.unsplash.com/photo-1522337094326-98755044d168?auto=format&fit=crop&q=80&w=600',
    category: 'Transformation',
    description: 'Full aesthetic symmetry achieved through microscopic hair-stroke pigments matching standard luxury standards.'
  },
  {
    id: 'g-2',
    title: 'The Serenity Therapy Space',
    afterImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600',
    category: 'Spa',
    description: 'Our luxurious private massage chambers, optimized with ambient warm lighting, heated tables, and soothing acoustics.'
  },
  {
    id: 'g-3',
    title: 'Braces Smile Transformation',
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=300&q=50&blur=10',
    afterImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600',
    category: 'Transformation',
    description: 'Precision bracket placement and structural alignment resulting in a beautifully structured, radiant smile.'
  },
  {
    id: 'g-4',
    title: 'Couture Hand Gel Sculpting',
    afterImage: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600',
    category: 'Beauty',
    description: 'Intricate detail paintwork and strengthening overlay finished with high-gloss mirror-shine formula.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Genevieve Carter',
    role: 'Vogue Nigeria Contributor',
    rating: 5,
    comment: 'FOC World is an experience unlike any other. The attention to detail is flawless. The proprietary treatments and Relaxation Massage made my skin feel unbelievably smooth, and their signature perfumes have become my absolute favorite daily scent.',
    date: '2 weeks ago'
  },
  {
    id: 't-2',
    name: 'Dr. Evelyn Peters',
    role: 'Aesthetic Dermatologist',
    rating: 5,
    comment: 'As a dermatologist, I am extremely particular about skincare treatments. FOC World’s Deep Cleansing Facial uses incredibly high-end skin active agents and state-of-the-art procedures. My absolute recommendation for premium wellness.',
    date: '1 month ago'
  },
  {
    id: 't-3',
    name: 'Kofi Mensah',
    role: 'Gentleman Grooming Client',
    rating: 5,
    comment: 'Absolutely superb. I regularly book the relaxation massage after grueling gym cycles, and their luxurious silk modal boxers offer unparalleled daily comfort and luxurious fit. FOC World is the master of self-care.',
    date: '3 weeks ago'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I prepare for my Facial Treatment or Relaxation Massage session?',
    answer: 'We recommend arriving 10 minutes early in comfortable loose clothing. For facials, please arrive with a clean face if possible. Hydrate well before and after your treatment for maximum benefit.',
    category: 'Beauty'
  },
  {
    question: 'How long do the FOC World Empress HD Lace wigs last?',
    answer: 'With proper luxury care, our 100% Brazilian human virgin hair wigs can easily last between 1 to 2+ years. We provide an exclusive silk-lined storage box and detailed wash instructions with every wig purchase.',
    category: 'Products'
  },
  {
    question: 'How long does a Fashionable Braces appointment take?',
    answer: 'A standard professional bracket placement session takes about 90 to 120 minutes. Our certified specialists apply premium biocompatible materials and custom alignments to ensure precise positioning and clinical comfort.',
    category: 'Services'
  },
  {
    question: 'Can I cancel or reschedule my beauty appointment?',
    answer: 'Yes, appointments can be easily rescheduled or cancelled via your confirmation email or our physical desk up to 24 hours prior to your slot time with absolutely no penalty fees.',
    category: 'Booking'
  }
];

export const CEO_INFO = {
  name: 'Febe',
  title: 'Founder & Chief Executive Officer',
  quote: 'True luxury lies in the confidence you carry. FOC World was born from a vision to redefine beauty as an empowering, decadent sanctuary—where premium self-care meets modern sophistication.',
  bio: 'Our CEO is a highly acclaimed entrepreneur passionate about setting global standards in high-end cosmetic styling and therapeutic treatments. Under her visionary leadership, FOC World has evolved into a luxurious sanctuary for elite clientele seeking unparalleled beauty services, premium hair solutions, and majestic fragrance curations.',
  image: '/src/assets/images/foc_ceo_official.jpeg'
};
