import { Service, Product, GalleryItem, Testimonial, FAQItem } from './types';

export const HERO_IMAGE = '/src/assets/images/foc_hero_1780652620643.png';
export const PHYSICAL_SALON_IMAGE = '/src/assets/images/foc_physical_salon_1780833961974.png';

export const SERVICES: Service[] = [
  // FACIALS CATEGORY
  {
    id: 's-facial-basic',
    name: 'Basic Facial',
    price: 14000,
    duration: '45 Mins',
    category: 'Facials',
    description: 'A soothing and refreshing introductory facial. Includes deep steam cleaning, gentle physical exfoliation, face massage, and a balancing botanical hydration mask.',
    benefits: ['Cleanses skin pores', 'Gentle blackhead removal', 'Soothes and hydrates skin cell layers', 'Restores natural glow'],
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-facial-classic',
    name: 'Classic Facial',
    price: 15000,
    duration: '60 Mins',
    category: 'Facials',
    description: 'Our core therapeutic facial. Combines expert structural pore extractions, intensive fruit enzyme mask, and high-frequency active botanical serum infusion.',
    benefits: ['Deep therapeutic facial treatment', 'Promotes healthy skin elasticity', 'Intense moisture lock-in', 'Clears build-up of daily impurities'],
    image: 'https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-facial-brighthing',
    name: 'Brighthing Facial',
    price: 16000,
    duration: '60 Mins',
    category: 'Facials',
    description: 'Highly effective brightening session formulated with active Vitamin C complex, white mulberry extracts, and non-irritating lactic peel to lift dull skin cells.',
    benefits: ['Brightens and balances skin tone', 'Conquers hyperpigmentation spots', 'Provides immediate radiant glow', 'Protects skin against environmental pollution'],
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-facial-fruit-hydrating',
    name: 'Fruit Hydrating Facial',
    price: 16000,
    duration: '60 Mins',
    category: 'Facials',
    description: 'Treat your senses with natural berry, melon, and cucumber extracts blended with low-molecular hyaluronic acid to deeply quench parched skin.',
    benefits: ['Delivers powerful hydration boost', 'Replenishes trace skin vitamins', 'Calms redness of sensitive skin', 'Plumps fine dehydration lines'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-facial-deep-cleansing',
    name: 'Deep Cleansing Facial',
    price: 18000,
    duration: '75 Mins',
    category: 'Facials',
    description: 'The ultimate detox for cellular pores. Designed specifically to remove severe blackheads, excessive sebum, acne trigger points, and old cellular build-up.',
    benefits: ['Meticulous manually refined extractions', 'High-frequency antibacterial massage', 'Minimizes pore diameter visibility', 'Calms oily skin layers and blemishes'],
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-facial-deman-planing',
    name: 'Deman Planing',
    price: 27000,
    duration: '50 Mins',
    category: 'Facials',
    description: 'Dermaplaning exfoliation. Meticulously scrapes away old surface skin layers and vellus hair (peach fuzz) utilizing a specialized clinical surgical blade.',
    benefits: ['Extremely smooth skin canvas result', 'Enables flawless cosmetic applications', 'Enhances dermal serum absorption by 300%', 'Instant dramatic skin refortification'],
    image: 'https://images.unsplash.com/photo-1522337094326-98755044d168?auto=format&fit=crop&q=80&w=600'
  },

  // PEDICURE CATEGORY
  {
    id: 's-pedi-basic',
    name: 'Basic Pedicure',
    price: 12000,
    duration: '40 Mins',
    category: 'Pedicure',
    description: 'Quick nail tidying and conditioning. Includes botanical soap soak, precise shaping, cuticle pushing, standard pumice scrubbing, and moisturizing cream.',
    benefits: ['Trims and styles nails cleanly', 'Softens rough cuticles', 'Lifts dry skin surface', 'Leaves toes fully nourished'],
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-pedi-organic',
    name: 'Organic Pedicure',
    price: 14000,
    duration: '50 Mins',
    category: 'Pedicure',
    description: 'An eco-friendly therapeutic foot retreat. Nourishes skin with organic essential oils, sugarcane brown scrubs, nourishing honey massage milk, and zero-chemical clay wraps.',
    benefits: ['All organic plant active ingredients', 'Deeply therapeutic foot massage', 'Soothes active leg muscles', 'Exquisite natural premium polish finish'],
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-pedi-paraffin',
    name: 'Paraffin Pedicure',
    price: 16000,
    duration: '60 Mins',
    category: 'Pedicure',
    description: 'Unwind as feet are enveloped in therapeutic warm liquefied paraffin wax. Seals in moisture, softens calluses completely, and treats tired joints.',
    benefits: ['Relieves joint stiffness and arthritis', 'Deep lock-in hydration for dry heels', 'Increases blood circulation', 'Silky, completely soft skin feel'],
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-pedi-cornfeet',
    name: 'Corn Feet Therapy',
    price: 16000,
    duration: '60 Mins',
    category: 'Pedicure',
    description: 'Specialized clinic feet restoration focusing on careful removal of painful hard corns, rough calluses, and thick scales using safe, sterile tools.',
    benefits: ['Professional corn and scaling clearing', 'Relieves walking friction discomfort', 'Smoothes and repairs calloused skin', 'Preventive foot wellness counselling'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-pedi-softing-exfoliating',
    name: 'Softing & Exfoliating Pedicure',
    price: 18000,
    duration: '60 Mins',
    category: 'Pedicure',
    description: 'A lavish dual exfoliating scrub using active alpha-hydroxy fruit acids and natural sea salts to intensely buff and soften the toughest feet skin.',
    benefits: ['Clears dead cellular debris seamlessly', 'Brightens and evens leg skin tone', 'Intense reflexology foot massage', 'Restores soft, youthful skin feel'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600'
  },

  // WAXING CATEGORY
  {
    id: 's-wax-sugar',
    name: 'Sugar Waxing',
    price: 9000,
    duration: '30 Mins',
    category: 'Waxing',
    description: 'Traditional hair removal utilizing local all-natural paste of boiled sugar, lemon, and water. Extracts hair from roots in natural direction of growth.',
    benefits: ['Less painful than standard wax', 'Zero chemicals or skin irritation', 'Gentle exfoliation for sensitive skin', 'Slower hair regrowth cycles'],
    image: 'https://images.unsplash.com/photo-1522337094326-98755044d168?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-wax-underarm',
    name: 'Under Arm Waxing',
    price: 14000,
    duration: '20 Mins',
    category: 'Waxing',
    description: 'Fast and sanitary underarm hair clearing. Uses specialized warm azulene wax containing chamomile extracts to reduce redness and keep skin smooth.',
    benefits: ['Quick, long-lasting hair removal', 'No razor bumps or shadow markings', 'Locks out sweat glands irritation', 'Smoother and fairer underarms'],
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-wax-bikini',
    name: 'Bikini Waxing',
    price: 12000,
    duration: '30 Mins',
    category: 'Waxing',
    description: 'Pragmatic, tidy bikini-line hair styling. Employs elastic standard hard wax suited for coarse hair in hypersensitive regions.',
    benefits: ['High precision contour styling', 'Meticulous root extraction', 'Zero dynamic razor scrapes', 'Smooth skin for up to 4 complete weeks'],
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-wax-fullbody',
    name: 'Full Body Wax',
    price: 40000,
    duration: '90 Mins',
    category: 'Waxing',
    description: 'Complete systemic hair contour clearing. Smooths limbs, arms, lines, shoulders, back, and stomach folder layers beautifully using premium wax formulas.',
    benefits: ['Full body absolute grooming', 'Stops persistent ingrown hair nodes', 'Exfoliates skin dynamically in one go', 'Reduces hair growth volume over sessions'],
    image: 'https://images.unsplash.com/photo-1522337094326-98755044d168?auto=format&fit=crop&q=80&w=600'
  },

  // SCRUB CATEGORY
  {
    id: 's-scrub-classic',
    name: 'Classic Scrub',
    price: 25000,
    duration: '45 Mins',
    category: 'Scrub',
    description: 'Full-body aromatic salt or sugar scrub treatment. Gently removes cellular buildup, opens skin respiration, and stimulates lymph node flow.',
    benefits: ['Rejuvenates exhausted skin', 'Improves body cellular respiration', 'Stimulates lymphatic flow', 'Silky, moisturized epidermis'],
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-scrub-sugar-salt',
    name: 'Sugar & Salt Scrub',
    price: 30000,
    duration: '60 Mins',
    category: 'Scrub',
    description: 'Our dual-action polish. Brown sugar hydrates and softens, while fine marine magnesium crystals deep-cleanse pores and replenish essential minerals.',
    benefits: ['Simultaneous deep buffers and hydrators', 'Imbues skin with vital magnesium', 'Highly uniform skin texture polishing', 'Blended in sweet rich almond oil infusions'],
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-scrub-moroccan',
    name: 'Moroccan Hammam Scrub',
    price: 35000,
    duration: '75 Mins',
    category: 'Scrub',
    description: 'Authentic Maghreb bathing. Uses native Beldi black soap (eucalyptus olive oil extract), thorough skin clearing using an authentic Kessa glove, and steam infusion.',
    benefits: ['Traditional deep pore decontamination', 'Increases blood oxygen levels', 'Intense full-body exfoliation', 'Removes deep embedded metabolic toxins'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-scrub-youghouts',
    name: 'Youghouts Scrub Session',
    price: 40000,
    duration: '75 Mins',
    category: 'Scrub',
    description: 'Luxury probiotic yogurt-infused body scrub. Rich lactic acid gently dissolves skin cells while live cultures nourish and protect your dermal biome.',
    benefits: ['Restores skin pH acid mantle', 'Intensely brightens cellular layers', 'Calms chronic skin irritation', 'Unmatched anti-inflammatory skin softness'],
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600'
  },

  // MASSAGE CATEGORY
  {
    id: 's-massage-body-steaming',
    name: 'Body Steaming',
    price: 28000,
    duration: '45 Mins',
    category: 'Massage',
    description: 'Step into our private thermostatic steam cabin. Combines high-pressure damp mist with eucalyptus and pine essential oils to open pores and airways.',
    benefits: ['Deep airway and bronchial relief', 'Intense cellular toxic sweating', 'Relaxes muscle spasms instantly', 'Prepares body perfectly for further massages'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-massage-relaxation',
    name: 'Relaxation Massage',
    price: 25000,
    duration: '60 Mins',
    category: 'Massage',
    description: 'Pure stress relief. Smooth, long-gliding strokes with light-to-medium physical pressure, fully customized with soothing organic lavender aromatherapy.',
    benefits: ['Lowers physical cortisol stress', 'Enhances deep slate sleep cycles', 'Calms nervous system anxiety', 'Soothing full-body tranquility'],
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-massage-deeptissue',
    name: 'Deep Tissue Massage',
    price: 30000,
    duration: '60 Mins',
    category: 'Massage',
    description: 'Therapeutic and structure-focused. Direct firm pressure on deep chronic muscle knots, myofascial lines, and tight tendons safely.',
    benefits: ['Unwinds chronic shoulder and neck tension', 'Eases sore gym workout muscles', 'Improves posture joint mobility', 'Breaks down stiff fibrous tissue blocks'],
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-massage-swedish',
    name: 'Swedish Massage',
    price: 30000,
    duration: '60 Mins',
    category: 'Massage',
    description: 'Classical full-body Swedish strokes integrating circular rubbing (friction), passive kneading (petrissage), and gentle rhythm tapping to revitalize systemic energy.',
    benefits: ['Increases blood serum oxygenation', 'Drains metabolic fluid waste', 'Soothes chronic fatigue states', 'Elevates mental clarity and wellness'],
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-massage-eriotic',
    name: 'Eriotic Therapeutic Session',
    price: 38000,
    duration: '75 Mins',
    category: 'Massage',
    description: 'Our proprietary sensual therapeutic ritual. Combines specialized high-quality essential botanical oils, feather-light strokes, and warm soothing compress alignments to awaken inner energy and dissolve mental strain.',
    benefits: ['Dissolves deep psychic tension', 'Awakens cosmic life force energy', 'Imparts a deep state of total mental bliss', 'Ultra-luxurious VIP private treatment'],
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-massage-foc-special',
    name: 'Foc Special',
    price: 100000,
    duration: '150 Mins',
    category: 'Massage',
    description: 'The crowning luxury experience. A complete royal wellness journey combining private herbal steaming, an intensive organic scrub, warm stones Swedish massage, Vitamin C facial therapy, and custom refreshments.',
    benefits: ['The absolute gold standard in self-care', 'Includes custom premium take-home aromatic oils', 'Unparalleled VIP attention from senior specialists', 'Total cognitive and physical absolute rebirth'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=600'
  },

  // TEETH WHITENING CATEGORY
  {
    id: 's-teeth-1st',
    name: '1st Procedure Teeth Whitening',
    price: 30000,
    duration: '45 Mins',
    category: 'Teeth Whitening',
    description: 'Laser cosmetic activation. Employs cold blue LED light technology paired with advanced carbamide gel to lift dark coffee, wine, and tea stains comfortably.',
    benefits: ['Lifts stains up to 6 shades lighter', 'Safe, desensitizing gel formula', 'Instant social transformation', 'Preserves protective enamel outer layers'],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-teeth-2nd',
    name: 'Second Appointment Teeth Whitening',
    price: 35000,
    duration: '45 Mins',
    category: 'Teeth Whitening',
    description: 'Recommended supplementary session to seal stain resistance shields, lock in brightening color values, and guarantee prolonged pristine white glow.',
    benefits: ['Ensures long-term white durability', 'Deep-seals micro enamel pores', 'Enhances shade brightness level further', 'Provides fresh, self-confident breath flow'],
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's-teeth-clearners',
    name: 'Clearners Job',
    price: 40000,
    duration: '60 Mins',
    category: 'Teeth Whitening',
    description: 'Comprehensive dental hygiene and deep tartar removal. Ultrasonic scaling removes stubborn plaque build-up, and fine abrasive mineral pastes polish teeth surfaces.',
    benefits: ['Flawless deep tartar and plaque clearing', 'Polishes surfaces to glossy mirror smoothness', 'Supports dental gums line safety', 'Removes oral bad breath nodes completely'],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p-luxury-wig-1',
    name: 'FOC Empress HD Lace Silk Wig',
    price: 499000,
    category: 'Premium Wigs',
    image: '/src/assets/images/foc_burgundy_wig_1780834512063.png',
    description: 'Crafted from 100% Brazilian human virgin hair. Features a thin, undetectable HD Swiss lace front allowing multi-directional parting and a beautifully natural hairline.',
    rating: 5.0,
    featured: true
  },
  {
    id: 'p-perfume-1',
    name: 'Noire Gold Eau De Parfum',
    price: 145000,
    category: 'Luxury Perfumes',
    image: '/src/assets/images/foc_perfume_1780652655596.png',
    description: 'An enchanting, long-lasting scent blending rare black orchids, dark plum, gold cedarwood, and warm vanilla absolute. Projects an aura of supreme confidence and allure.',
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
    comment: 'FOC is an experience unlike any other. The attention to detail is flawless. The Classic Scrub made my skin feel unbelievably smooth, and their signature perfumes have become my absolute favorite daily scent.',
    date: '2 weeks ago'
  },
  {
    id: 't-2',
    name: 'Dr. Evelyn Peters',
    role: 'Aesthetic Dermatologist',
    rating: 5,
    comment: 'As a dermatologist, I am extremely particular about skincare treatments. FOC’s Deep Cleansing Facial uses incredibly high-end skin active agents and state-of-the-art procedures. My absolute recommendation for premium wellness.',
    date: '1 month ago'
  },
  {
    id: 't-3',
    name: 'Kofi Mensah',
    role: 'Gentleman Grooming Client',
    rating: 5,
    comment: 'Absolutely superb. I regularly book the deep tissue massage after grueling gym cycles, and their luxurious silk modal boxers offer unparalleled daily comfort and luxurious fit. FOC is the master of self-care.',
    date: '3 weeks ago'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I prepare for my Sugar & Salt Scrub session?',
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
  name: 'Onyeachie Daniel',
  title: 'Founder & Chief Executive Officer',
  quote: 'True luxury lies in the confidence you carry. FOC was born from a vision to redefine beauty as an empowering, decadent sanctuary—where premium self-care meets modern sophistication.',
  bio: 'Our CEO is a highly acclaimed entrepreneur passionate about setting global standards in high-end cosmetic styling and therapeutic treatments. Under her visionary leadership, FOC has evolved into a luxurious sanctuary for elite clientele seeking unparalleled beauty services, premium hair solutions, and majestic fragrance curations.',
  image: '/src/assets/images/ceo_portrait_1780696236207.png'
};
