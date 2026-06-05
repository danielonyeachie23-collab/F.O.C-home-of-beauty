import { Service, Product, GalleryItem, Testimonial, FAQItem } from './types';

export const HERO_IMAGE = '/src/assets/images/foc_hero_1780652620643.png';

export const SERVICES: Service[] = [
  {
    id: 's-facial-scrub',
    name: 'Royal Facial Scrub & Hydration',
    price: 85,
    duration: '60 Mins',
    category: 'Beauty Services',
    description: 'A deep exfoliating mud scrub followed by high-frequency hydration. Removes dead skin cells, unclogs pores, and infuses essential botanical oils for that everlasting golden hour glow.',
    benefits: ['Deep cleanse and blackhead removal', 'Promotes cellular regeneration', 'Brightens and evens skin tone', 'Intense moisture lock-in'],
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-body-scrub',
    name: '24K Gold Body Scrub & Buff',
    price: 150,
    duration: '90 Mins',
    category: 'Beauty Services',
    description: 'Indulge in our signature luxury body polish. Concocted with fine mineral crystals, brown sugar, and organic sweet almond oil to polish your skin to silky perfection.',
    benefits: ['Full body detoxification', 'Smooths rough elbows and knees', 'Improves lymphatic circulation', 'Leaves skin with a velvet finish'],
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-waxing',
    name: 'Silk Touch Body Waxing',
    price: 65,
    duration: '45 Mins',
    category: 'Beauty Services',
    description: 'Gentle, premium-grade hypoallergenic warm beeswax removes hair effortlessly from the root. Infused with soothing chamomile extract to keep any post-wax redness away.',
    benefits: ['Up to 4 weeks of completely hair-free skin', 'Prevents ingrown hair formation', 'Ultra-gentle formulation for sensitive skin', 'Slowing of future hair growth'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-pedicure',
    name: 'Premium Paraffin Pedicure',
    price: 75,
    duration: '60 Mins',
    category: 'Beauty Services',
    description: 'Treat your feet to an aromatic warm foot bath, gentle salt exfoliation, cuticle care, deep-massage, and a warm paraffin mask that softens even the roughest heels.',
    benefits: ['Deeply relieves joint stiffness', 'Heals dry and cracked feet', 'Premium gel polish finish', 'Rejuvenating leg reflexology massage'],
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-manicure',
    name: 'Couture Gel Manicure',
    price: 55,
    duration: '45 Mins',
    category: 'Beauty Services',
    description: 'Precision nail shaping, cuticle therapy, hand massage, and long-lasting luxury gel varnish. Sculpted by our high-end specialists matching your exact aesthetic preference.',
    benefits: ['Flawless chip-free nails for 3+ weeks', 'Strengthens natural nail plate', 'Bespoke high-end polish selection', 'Relieving warm hand butter massage'],
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-teeth-whitening',
    name: 'Laser Precision Teeth Whitening',
    price: 199,
    duration: '45 Mins',
    category: 'Beauty Services',
    description: 'Bring back your bright, confident smile with our modern non-invasive LED laser whitening. Lift stains from coffee, wine, and tobacco safely without tooth enamel wear.',
    benefits: ['Up to 8 shades lighter in one session', 'Enamel-safe, zero sensitivity formula', 'Instant cosmetic transformation', 'Long-lasting professional results'],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-hot-stones',
    name: 'Healing Hot Stone Ritual',
    price: 160,
    duration: '80 Mins',
    category: 'Spa Treatments',
    description: 'Melt away severe muscle tension using heated volcanic basalt stones placed systematically along crucial energy centers. Promotes deep state physical and mental tranquility.',
    benefits: ['Deep, therapeutic tissue relaxation', 'Soothes chronic muscle spasms', 'Increases blood vessel expansion', 'Reduces psychological stress and anxiety'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-aromatherapy',
    name: 'Serenity Aromatherapy Massage',
    price: 120,
    duration: '60 Mins',
    category: 'Spa Treatments',
    description: 'Our standard for serene self-care. Combining Swedish strokes with organic lavender, ylang-ylang, and frankincense extracts custom-blended by our aromatherapists.',
    benefits: ['Reduces systemic body inflammation', 'Enhances deep REM sleep quality', 'Relieves tension headaches', 'Restores overall emotional equilibrium'],
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-fine-line-tattoo',
    name: 'Elegance Fine Line Tattooing',
    price: 110,
    duration: 'Varies',
    category: 'Tattoo Services',
    description: 'Specializing in delicate, minimal, ultra-clean fine line, script, and geometric tattooing. Every piece is precision-drafted in a pristine, medical-level sterile studio environment.',
    benefits: ['Custom luxury stencil designing included', 'High contrast premium charcoal ink', 'Minimal trauma, ultra-fast heal times', 'Unmatched botanical care packaging'],
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-microblading',
    name: 'Signature Eyebrow Microblading',
    price: 250,
    duration: '120 Mins',
    category: 'Tattoo Services',
    description: 'Ditch the makeup pencils. Our microblading specialist embeds high-grade pigments to create hair-like strokes that fill sparse areas, defining your symmetric, beautiful brow framing.',
    benefits: ['Saves time on morning cosmetics routine', 'Waterproof, sweatproof elegant brows', 'Tailored pigment to match hair tone', 'Natural looking semi-permanent results'],
    image: 'https://images.unsplash.com/photo-1522337094326-98755044d168?auto=format&fit=crop&q=80&w=600'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p-luxury-wig-1',
    name: 'FOC Empress HD Lace Silk Wig',
    price: 499,
    category: 'Premium Wigs',
    image: '/src/assets/images/foc_wig_1780652638464.png',
    description: 'Crafted from 100% Brazilian human virgin hair. Features a thin, undetectable HD Swiss lace front allowing multi-directional parting and a beautifully natural hairline.',
    rating: 5.0,
    featured: true
  },
  {
    id: 'p-perfume-1',
    name: 'Noire Gold Eau De Parfum',
    price: 145,
    category: 'Luxury Perfumes',
    image: '/src/assets/images/foc_perfume_1780652655596.png',
    description: 'An enchanting, long-lasting scent blending rare black orchids, dark plum, gold cedarwood, and warm vanilla absolute. Projects an aura of supreme confidence and allure.',
    rating: 4.9,
    featured: true
  },
  {
    id: 'p-pillow-1',
    name: 'Silk Satin Pillowcase Duo',
    price: 65,
    category: 'Decorative Pillows',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=600',
    description: 'Protect your delicate hair and skin from friction. Sewn with ultra-weightless mulberry silk with elegant gold trim, adding a decadent feel to your majestic sleep sanctuary.',
    rating: 4.8,
    featured: false
  },
  {
    id: 'p-men-boxers-1',
    name: 'Noble Modal Boxer Brief Set (Pack of 3)',
    price: 55,
    category: "Men's Luxury Boxers",
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=600',
    description: 'Pure, breathable comfort for gentlemen. Tailored with silk-infused premium modal fibers that contour seamlessly. Finished with a gold jacquard woven emblem belt.',
    rating: 4.7,
    featured: false
  },
  {
    id: 'p-footwear-1',
    name: 'Aurelia Metallic Stilettos',
    price: 180,
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
    title: 'Laser Teeth Whitening Miracle',
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=300&q=50&blur=10',
    afterImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600',
    category: 'Transformation',
    description: 'Removal of severe coffee staining, brightening up by 7 complete shades in a single safe 45-minute treatment.'
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
    comment: 'FOC is an experience unlike any other. The attention to detail is flawless. The 24K Gold Body Scrub made my skin feel unbelievably smooth, and their signature perfumes have become my absolute favorite daily scent.',
    date: '2 weeks ago'
  },
  {
    id: 't-2',
    name: 'Dr. Evelyn Peters',
    role: 'Aesthetic Dermatologist',
    rating: 5,
    comment: 'As a dermatologist, I am extremely particular about skincare treatments. FOC’s Royal Facial uses incredibly high-end biocompatible ingredients and state-of-the-art procedures. My absolute recommendation for premium wellness.',
    date: '1 month ago'
  },
  {
    id: 't-3',
    name: 'Kofi Mensah',
    role: 'Gentleman Grooming Client',
    rating: 5,
    comment: 'Absolutely superb. I regularly book the hot stones massage after grueling gym cycles, and their luxurious silk modal boxers offer unparalleled daily comfort and luxurious fit. FOC is the master of self-care.',
    date: '3 weeks ago'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I prepare for my 24K Gold Body Scrub session?',
    answer: 'We recommend arriving 10 minutes early in comfortable loose clothing. Avoid heavy shaving or waxing within 24 hours of your scrub to prevent skin sensitivity. Hydrate well before and after your treatment.',
    category: 'Beauty'
  },
  {
    question: 'How long do the FOC Empress HD Lace wigs last?',
    answer: 'With proper luxury care, our 100% Brazilian human virgin hair wigs can easily last between 1 to 2+ years. We provide an exclusive silk-lined storage box and detailed wash instructions with every wig purchase.',
    category: 'Products'
  },
  {
    question: 'Is laser teeth whitening safe for sensitive dental enamel?',
    answer: 'Absolutely. We utilize modern cold-LED light technology paired with a pH-balanced, desensitizing whitening gel. This completely protects the outer enamel layer while comfortably lifting heavy sub-surface stains.',
    category: 'Services'
  },
  {
    question: 'Can I cancel or reschedule my beauty appointment?',
    answer: 'Yes, appointments can be easily rescheduled or cancelled via your confirmation email or our physical desk up to 24 hours prior to your slot time with absolutely no penalty fees.',
    category: 'Booking'
  }
];

export const CEO_INFO = {
  name: 'Onyeachie Daniel', // FOC CEO representation / matching the user email and custom aesthetic
  title: 'Founder & Chief Executive Officer',
  quote: 'True luxury lies in the confidence you carry. FOC was born from a vision to redefine beauty as an empowering, decadent sanctuary—where premium self-care meets modern sophistication.',
  bio: 'Our CEO is a highly acclaimed entrepreneur passionate about setting global standards in high-end cosmetic styling and therapeutic treatments. Under her visionary leadership, FOC has evolved into a luxurious sanctuary for elite clientele seeking unparalleled beauty services, premium hair solutions, and majestic fragrance curations.',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600' // Elegant female executive / entrepreneur
};
