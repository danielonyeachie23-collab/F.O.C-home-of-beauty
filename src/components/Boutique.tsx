import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ShoppingBag, 
  Check, 
  MessageSquare, 
  X, 
  ArrowRight, 
  Info, 
  Flame, 
  Eye,
  Heart,
  Grid
} from 'lucide-react';

interface BoutiqueItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  highlights: string[];
  specs: { label: string; value: string }[];
}

export default function Boutique() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<BoutiqueItem | null>(null);

  const categories = [
    'All',
    'Luxury Wigs',
    'Elite Perfumes',
    'Premium Bedding',
    'Gentlemen Wear',
    'Skincare & Supplements',
    'Home Wellness',
    'Elite Eyewear'
  ];

  const boutiqueItems: BoutiqueItem[] = [
    {
      id: 'b-wigs-1',
      name: 'FOC Empress HD Lace Silk Wig',
      category: 'Luxury Wigs',
      description: 'Handcrafted with absolute precision from 100% human virgin hair. Designed with an undetectable, ultra-thin Swiss HD lace base that blends seamlessly with all skin tones allowing comfortable, multi-directional parting.',
      image: '/src/assets/images/IMG_20260605_174230.jpg',
      highlights: [
        '100% Remy Unprocessed Virgin Hair',
        'Transparent HD Swiss Lace Front',
        'Pre-plucked natural hairline with baby hair',
        'Heat resistant & multi-style versatile styling'
      ],
      specs: [
        { label: 'Origin', value: '100% Raw Human Hair' },
        { label: 'Cap Size', value: 'Medium Adjustable Elastic' },
        { label: 'Lace Material', value: 'Undetectable HD Swiss' }
      ]
    },
    {
      id: 'b-wigs-2',
      name: 'Luxe Human Hair Extensions & Bundles',
      category: 'Luxury Wigs',
      description: 'Double-drawn premium human hair wefts carrying full cuticle alignment. Delivers outstanding, voluminous thickness from root to tips with zero shedding or micro-tangling.',
      image: '/src/assets/images/foc_hair_extension.jpg',
      highlights: [
        'Double-drawn luxury full thickness representation',
        'Strictly intact cuticles for natural shine',
        'Can be colored, bleached, and heat-styled',
        'Excellent high-density luxury weight'
      ],
      specs: [
        { label: 'Bundle Type', value: 'Double Drawn Weft' },
        { label: 'Texture Option', value: 'Silky Straight / Deep Wave' },
        { label: 'Lifespan', value: 'Up to 2+ Years with proper care' }
      ]
    },
    {
      id: 'b-perfumes-1',
      name: 'Riggs London Premium Body Spray & Fragrance Mists',
      category: 'Elite Perfumes',
      description: 'Leave an unforgettable dynamic scent trail. Our curated collection includes Riggs London premium perfumed body spray scents (Only, Oud, Armour, 250ml) paired with our custom-blended, sweet-scented Signature Rose Vanilla body fragrance mists.',
      image: '/src/assets/images/IMG_20260605_173005.jpg',
      highlights: [
        'Highly concentrated premium French formulation',
        'Ultra long-lasting 24-hour odor defense shielding',
        'Exquisite blend of warm vanilla, velvet rose, and oud notes',
        'Non-staining formulation suitable for delicate fabrics'
      ],
      specs: [
        { label: 'Volume', value: '250ml Premium Spray Cans' },
        { label: 'Scent Sensation', value: 'Sweet / Warm Woody Oud' },
        { label: 'Formula', value: 'Enriched with natural botanical oils' }
      ]
    },
    {
      id: 'b-duvet-1',
      name: 'Imperial Thermal Down Duvet',
      category: 'Premium Bedding',
      description: 'The ultimate weightless comfort experience. Padded with high-loft, hypoallergenic white goose down wrapped in a highly breathable 800-thread-count long-staple cotton satin barrier.',
      image: '/src/assets/images/foc_duvet.jpg',
      highlights: [
        'Hypoallergenic light loft goose micro-down fill',
        '800-Thread-count long-staple combed cotton shell',
        'Thermal smart control design keeps you rested in comfort',
        'Baffle box layout prevents inner shifting or clumping'
      ],
      specs: [
        { label: 'Size', value: 'Super King / Queen Size Dimensions' },
        { label: 'Material', value: '100% Long-Staple Eqyptian Cotton' },
        { label: 'Thread Count', value: '800 TC Satin Weave' }
      ]
    },
    {
      id: 'b-bedcover-1',
      name: 'High Thread-Count Luxury Satin Bed Covers',
      category: 'Premium Bedding',
      description: 'Reconcile elegance with comfortable recovery. Sleek silk-satin blended sheet layouts structured to limit hair frizz, defend skin hydration, and offer top-tier sleep hygiene.',
      image: '/src/assets/images/foc_satin_bed_covers.jpg',
      highlights: [
        'Smooth skin-friendly hypoallergenic satin fabrics',
        'Generous, rich, fade-resistant gloss dye finishing',
        'Frictionless material avoids morning hair knots',
        'Set includes: 1 Fitted sheet, 1 Flat sheet, & 2 matching cases'
      ],
      specs: [
        { label: 'Sizes', value: 'King / Double Bed Dimensions' },
        { label: 'Composition', value: 'Bespoke Mulberry Silk & Combed Cotton' },
        { label: 'Texture', value: 'Super soft silk satin glide' }
      ]
    },
    {
      id: 'b-pillow-1',
      name: 'Orthopedic Microfiber Soft Pillow Duo',
      category: 'Premium Bedding',
      description: 'Custom soft orthopedic fiber pillows formulated to respond to muscle postures. Gently cradles the cervical spine while resisting any packing or long-term flattening.',
      image: '/src/assets/images/foc_pillow.jpg',
      highlights: [
        'Siliconized soft cluster hollow-fiber fill',
        'Promotes therapeutic spinal alignments',
        'Resilient shape-holding bounce structure',
        'Includes dust-mite defense double lining wrappers'
      ],
      specs: [
        { label: 'Fibers', value: 'Premium Grade Siliconized Microfiber' },
        { label: 'Dimensions', value: '20" x 30" Royal Comfort Profile' },
        { label: 'Care', value: 'Fully machine-washable gentle spin' }
      ]
    },
    {
      id: 'b-boxers-1',
      name: 'Noble Silk-Infused Modal Boxers (Pack of 3)',
      category: 'Gentlemen Wear',
      description: 'Formulated specifically for active comfort. Spun from sustainably-sourced modal yarn infused with luxury raw silks to preserve structural softness and skin breathability all day long.',
      image: '/src/assets/images/foc_boxers.jpg',
      highlights: [
        'Premium natural raw wood modal with satin touch',
        'Flatlock-stitched seams limit friction entirely',
        'Wide contour comfortable jacquard elastic band',
        'Highly moisture-wicking and hyper-hygienic'
      ],
      specs: [
        { label: 'Quantity', value: 'Pack of 3 Essential Luxury Shades' },
        { label: 'Material', value: '92% Micro-Modal, 8% Premium Silk Spa' },
        { label: 'Tailoring', value: 'Ergonomic comfortable design pouch' }
      ]
    },
    {
      id: 'b-singlet-1',
      name: 'Pure Combed Cotton Ribbed Singlets',
      category: 'Gentlemen Wear',
      description: 'The definitive luxury basic undershirt. Manufactured with high-precision combed ribbed cotton which acts as a gentle second skin under fine tailored formal shirts.',
      image: '/src/assets/images/foc_singlets.jpg',
      highlights: [
        'Combed cotton provides double regular yarn softness',
        'Classic stretch rib knit contours body shapes safely',
        'Slightly elongated length ensures it stays neatly tucked',
        'Durable reinforced seams prevent shape distortion'
      ],
      specs: [
        { label: 'Fabric', value: '100% Luxury Combed Ribbed Cotton' },
        { label: 'Fit Type', value: 'Tailored Sculpt Athletic Silhouette' },
        { label: 'Colors', value: 'Classic Alabaster / Ink Onyx' }
      ]
    },
    {
      id: 'b-oil-1',
      name: 'Aura Scalp Revitalizing Growth Potion',
      category: 'Skincare & Supplements',
      description: 'Banish thinning hair with our ultra-concentrated organic scalp elixir. Loaded with premium organic extracts including rosemary, Jamaican black castor oil, biotin, and ancient ginger roots.',
      image: '/src/assets/images/foc_hair_oil.jpg',
      highlights: [
        'Accelerates hair follicle division for rapid regrowth',
        'Deeply nourishes damaged shafts to limit breakage',
        'Soothes persistent dry scalp scaling and itchiness',
        'Completely free of silicones, mineral oils, and sulfates'
      ],
      specs: [
        { label: 'Key Ingredients', value: 'Rosemary, Biotin, Castor Oil, Vitamin E' },
        { label: 'Use', value: 'A few drops massaged gently 3x weekly' },
        { label: 'Suitable For', value: 'All hair types, locs, and lace braids' }
      ]
    },

    {
      id: 'b-soap-1',
      name: 'Premium Skin Supplements',
      category: 'Skincare & Supplements',
      description: 'Nourish, brighten, and rejuvenate your skin from within. This premium collection includes our professional-grade Super Collagen, Gluta 900000, Omega Fish Oils, and active brightening gummies designed to enhance elasticity, smooth hyperpigmentation, and restore a youthful cellular glow.',
      image: '/src/assets/images/foc_supplements.jpeg',
      highlights: [
        'Premium formulated collagen, glutathione, and active skin vitamins',
        'Targets hyperpigmentation, stubborn knuckles, and uneven tone from within',
        'Improves dermal elasticity, deep tissue hydration, and overall cell defense',
        '100% certified clinical ingredients with strict manufacturing hygienic standards'
      ],
      specs: [
        { label: 'Categories', value: 'Collagen, Glutathione Bottles, Whitening Gummies' },
        { label: 'Daily Dose', value: 'As recommended on bottle (usually 1-2 daily)' },
        { label: 'Suitable For', value: 'All skin types desiring brilliant, confidence-boosting radiance' }
      ]
    },
    {
      id: 'b-diffuser-1',
      name: 'Premium Exotic Reed Diffuser Bouquet',
      category: 'Home Wellness',
      description: 'Infuse your living spaces with long-lasting, sophisticated elegance. This premium collection of Nedens and Air Magic reed diffusers releases a delicate, continuous scent through natural rattan reeds.',
      image: '/src/assets/images/foc_diffuser.jpg',
      highlights: [
        'Natural rattan reed sticks for continuous cold diffusion',
        'Formulated with premium botanical essential oil blends',
        'Long-lasting aromatherapeutic action for up to 12 weeks',
        'Zero flame, electricity, or maintenance required'
      ],
      specs: [
        { label: 'Volume', value: '110ml pack featuring curated botanical scents' },
        { label: 'Ingredients', value: 'Natural Essential Oils & Organic Solvents' },
        { label: 'Origin', value: 'Premium manufactured with European elegance standards' }
      ]
    },
    {
      id: 'b-sunshade-1',
      name: 'Elite Polarized Oversized Sunshades',
      category: 'Elite Eyewear',
      description: 'Protect your vision in absolute style. Beautifully oversized geometric sunglasses crafted with impact-resistant polarized lenses that completely filter glare and harsh Nigeria sunbeams.',
      image: '/src/assets/images/foc_sunshades.jpg',
      highlights: [
        'Optically precise lenses with 100% UV400 blocking',
        'Oversized glamorous thick acetate frames',
        'Sleek gold-plated hinges and signature temple accents',
        'Includes designer protective felt drawer chest case'
      ],
      specs: [
        { label: 'Protection', value: 'Complete UVA & UVB filtration' },
        { label: 'Material', value: 'High grade hypoallergenic Cellulose Acetate' },
        { label: 'Includes', value: 'Leatherette hard-shell carrying case & cloth' }
      ]
    }
  ];

  const filteredItems = selectedCategory === 'All'
    ? boutiqueItems
    : boutiqueItems.filter(item => item.category === selectedCategory);

  const handleWhatsappInquiry = (item: BoutiqueItem) => {
    const text = `Hello Febe! I am on the FOC World website and would like to inquire about purchasing the luxury "${item.name}" from your Boutique. Could you please provide availability and consultation details?`;
    const url = `https://wa.me/2348000000000?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-[#050505] min-h-screen text-[#f5eae4] font-sans pb-24">
      {/* Visual background atmospheric elements */}
      <div className="absolute inset-x-0 h-96 bg-gradient-to-b from-[#181308]/20 to-transparent pointer-events-none z-0" />
      <div className="absolute top-48 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gold-400/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Hero Header */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-12 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-1.5 rounded-none border border-gold-400/20 bg-gold-950/20 px-4 py-2 text-[9px] font-bold tracking-[0.35em] text-gold-400 uppercase mb-5">
            <Sparkles className="h-3.5 w-3.5 text-gold-400" />
            <span>FOC WORLD OFFICIAL SHOWROOM</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white lowercase">
            The <span className="text-gold-400 italic font-medium">Boutique</span> Collection
          </h1>
          
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold-400 to-transparent my-6" />

          <p className="max-w-2xl text-xs sm:text-sm text-white/70 font-light leading-relaxed tracking-wider">
            Explore our curated sanctuary of premium lifestyle goods, beauty treatments, luxury bedding, and custom fashion apparel. Each piece is handpicked by Febe to cultivate ultimate wellness and high-end elegance.
          </p>
        </motion.div>
      </section>

      {/* Category Filter Pills */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 mb-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 border-b border-white/5 pb-6">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all duration-300 rounded-none border cursor-pointer focus:outline-none ${
                  isSelected 
                    ? 'bg-gold-400 text-black border-gold-400 shadow-md shadow-gold-400/10' 
                    : 'bg-white/5 text-[#f5eae4]/70 border-white/10 hover:border-gold-400/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col bg-[#0a0a0a] border border-white/5 hover:border-gold-400/30 overflow-hidden transition-all duration-300 shadow-xl"
              >
                {/* Selective Image Showcase Frame (Highly curated for items with explicit customer assets) */}
                {(item.id === 'b-wigs-1' || item.id === 'b-wigs-2' || item.id === 'b-perfumes-1' || item.id === 'b-duvet-1' || item.id === 'b-bedcover-1' || item.id === 'b-pillow-1' || item.id === 'b-boxers-1' || item.id === 'b-singlet-1' || item.id === 'b-oil-1' || item.id === 'b-soap-1' || item.id === 'b-diffuser-1' || item.id === 'b-sunshade-1') && (
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#060606] border-b border-white/5">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/10 to-transparent opacity-80" />
                  </div>
                )}

                {/* Info & CTA Frame */}
                <div className="flex flex-1 flex-col p-6 space-y-4 text-left">
                  <div className="flex items-center justify-between border-b border-white/[0.04] pb-3">
                    <span className="bg-gold-950/40 border border-gold-400/20 text-gold-400 text-[8px] font-bold px-2.5 py-1 uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-normal text-white group-hover:text-gold-400 transition-colors tracking-wide">
                    {item.name}
                  </h3>
                  
                  <p className="text-xs text-white/60 font-light leading-relaxed flex-1 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="pt-2 flex gap-2">
                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:border-gold-400 hover:bg-gold-950/20 text-[#f5eae4] text-[9px] font-bold tracking-widest uppercase py-3 transition-all duration-300 cursor-pointer"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      View Details
                    </button>
                    <button
                      onClick={() => handleWhatsappInquiry(item)}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-gold-400 hover:bg-gold-300 text-black text-[9px] font-bold tracking-widest uppercase py-3 transition-all duration-300 cursor-pointer"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      Inquire
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Luxury Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`relative w-full ${(selectedProduct.id === 'b-wigs-1' || selectedProduct.id === 'b-wigs-2' || selectedProduct.id === 'b-perfumes-1' || selectedProduct.id === 'b-duvet-1' || selectedProduct.id === 'b-bedcover-1' || selectedProduct.id === 'b-pillow-1' || selectedProduct.id === 'b-boxers-1' || selectedProduct.id === 'b-singlet-1' || selectedProduct.id === 'b-oil-1' || selectedProduct.id === 'b-soap-1' || selectedProduct.id === 'b-diffuser-1' || selectedProduct.id === 'b-sunshade-1') ? 'max-w-4xl' : 'max-w-2xl'} bg-[#090909] border border-gold-400/20 shadow-2xl p-6 sm:p-8 lg:p-10 max-h-[90vh] overflow-y-auto overflow-x-hidden scrollbar-none`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-2 border border-white/10 cursor-pointer focus:outline-none z-10"
              >
                <X className="h-4 sm:h-5 w-4 sm:w-5" />
              </button>

              <div className={(selectedProduct.id === 'b-wigs-1' || selectedProduct.id === 'b-wigs-2' || selectedProduct.id === 'b-perfumes-1' || selectedProduct.id === 'b-duvet-1' || selectedProduct.id === 'b-bedcover-1' || selectedProduct.id === 'b-pillow-1' || selectedProduct.id === 'b-boxers-1' || selectedProduct.id === 'b-singlet-1' || selectedProduct.id === 'b-oil-1' || selectedProduct.id === 'b-soap-1' || selectedProduct.id === 'b-diffuser-1' || selectedProduct.id === 'b-sunshade-1') ? "grid grid-cols-1 md:grid-cols-2 gap-8 items-start" : "flex flex-col text-left space-y-6"}>
                {(selectedProduct.id === 'b-wigs-1' || selectedProduct.id === 'b-wigs-2' || selectedProduct.id === 'b-perfumes-1' || selectedProduct.id === 'b-duvet-1' || selectedProduct.id === 'b-bedcover-1' || selectedProduct.id === 'b-pillow-1' || selectedProduct.id === 'b-boxers-1' || selectedProduct.id === 'b-singlet-1' || selectedProduct.id === 'b-oil-1' || selectedProduct.id === 'b-soap-1' || selectedProduct.id === 'b-diffuser-1' || selectedProduct.id === 'b-sunshade-1') && (
                  <div className="relative aspect-square w-full bg-zinc-900 border border-white/5 overflow-hidden">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 bg-gold-400 text-black text-[8px] font-bold px-3 py-1 uppercase tracking-widest">
                      {selectedProduct.category}
                    </span>
                  </div>
                )}

                {/* Product Detail Content */}
                <div className="flex flex-col text-[#f5eae4] text-left space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-bold tracking-[0.25em] text-gold-400 uppercase">FOC World Elite Standard</span>
                    <span className="bg-gold-950/40 border border-gold-400/20 text-gold-400 text-[8px] font-bold px-2.5 py-1 uppercase tracking-widest">
                      {selectedProduct.category}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-wide leading-tight">
                    {selectedProduct.name}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Highlights section */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-bold tracking-[0.15em] text-white uppercase flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                    Premium Features
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {selectedProduct.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-white/60 font-light">
                        <Check className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specs Table */}
                <div className="border-t border-b border-white/5 py-4 space-y-2">
                  <h4 className="text-[10px] font-bold tracking-[0.15em] text-white uppercase">Product Specifications</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-2">
                    {selectedProduct.specs.map((spec, index) => (
                      <div key={index} className="flex justify-between border-b border-white/[0.04] pb-1.5 text-xs">
                        <span className="text-white/40 font-light">{spec.label}</span>
                        <span className="text-white/80 font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action row */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => handleWhatsappInquiry(selectedProduct)}
                    className="flex-1 flex items-center justify-center gap-2.5 bg-gold-400 hover:bg-gold-500 text-black text-[10px] font-bold tracking-widest uppercase py-4.5 transition-all duration-300 cursor-pointer"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Inquire via WhatsApp
                  </button>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="border border-white/20 hover:border-white text-white/80 hover:text-white text-[10px] font-bold tracking-widest uppercase py-4.5 px-6 transition-all duration-300 cursor-pointer"
                  >
                    Return to Catalog
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
