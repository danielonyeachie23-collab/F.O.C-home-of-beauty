import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Star, ShieldCheck, Heart, Award, ArrowUpRight } from 'lucide-react';
import { SERVICES, PRODUCTS, TESTIMONIALS, HERO_IMAGE } from '../data';
import { Service, Product } from '../types';

interface HomeProps {
  setActivePage: (page: string) => void;
  onBookService: (service: Service) => void;
  onQuickAddProduct: (product: Product) => void;
}

export default function Home({ setActivePage, onBookService, onQuickAddProduct }: HomeProps) {
  // Grab a few featured elements for showcasing
  const featuredServices = SERVICES.slice(0, 3);
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="font-sans text-nude-100 overflow-hidden">
      
      {/* 1. Large Luxury Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center bg-black py-20 px-4">
        {/* Background Premium Image Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={HERO_IMAGE}
            alt="FOC Luxury Salon Background"
            className="h-full w-full object-cover opacity-35 scale-105 transition-transform duration-[12000ms] ease-out hover:scale-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-6"
          >
            {/* Soft gold pre-header */}
            <div className="inline-flex items-center gap-2 rounded-none border border-gold-400/30 bg-gold-950/30 px-5 py-2.5 text-[10px] font-bold tracking-[0.4em] text-gold-400 uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              <span>THE ULTIMATE BEAUTY SANCTUARY</span>
            </div>

            {/* Bold Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.1] lowercase">
              Welcome to <span className="text-gold-400 italic">FOC</span> – <br className="hidden md:inline"/>
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light italic text-[#f5eae4]/90 block mt-3 tracking-normal capitalize">
                The Home of <span className="text-gold-400 font-bold not-italic">Beauty World</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-white/70 font-light font-sans tracking-wide">
              Enhancing beauty, confidence, and luxury through premium services and curated products designed for the modern woman. Rejuvenate with specialized salon rituals.
            </p>

            {/* Premium CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              {/* Primary Call-to-action */}
              <button
                onClick={() => setActivePage('booking')}
                className="group relative flex w-full sm:w-64 items-center justify-center gap-2.5 rounded-none bg-gold-400 px-10 py-4.5 text-xs font-bold tracking-[0.25em] text-black uppercase shadow-lg shadow-gold-400/10 hover:bg-gold-300 transition-all duration-300 cursor-pointer"
                id="hero-book-btn"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Call-to-action */}
              <button
                onClick={() => setActivePage('shop')}
                className="flex w-full sm:w-64 items-center justify-center gap-2 rounded-none border border-white/30 bg-[#0A0A0A] px-10 py-4.5 text-xs font-bold tracking-[0.25em] text-white uppercase hover:bg-white/5 hover:border-gold-400 transition-all duration-300 cursor-pointer"
                id="hero-shop-btn"
              >
                Shop Collection
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 opacity-40">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-[9px] font-medium tracking-widest uppercase text-white/50">Victoria Island, Lagos</span>
        </div>
      </section>

      {/* 2. Core Pillars / Why FOC */}
      <section className="bg-[#0c0c0c] py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            
            {/* Pillar 1 */}
            <div className="flex flex-col items-center text-center p-10 rounded-none border border-white/5 bg-[#0e0e0e] hover:border-gold-400/30 transition-all duration-300 group">
              <div className="flex h-14 w-14 items-center justify-center rounded-none bg-gold-950/20 border border-gold-400/40 group-hover:bg-gold-400 group-hover:text-black transition-all">
                <Award className="h-6 w-6 text-gold-400 group-hover:text-black" />
              </div>
              <h3 className="mt-6 font-serif text-lg font-bold tracking-[0.2em] text-[#f5eae4] uppercase">Artisan Quality</h3>
              <p className="mt-3 text-xs leading-relaxed text-white/50 font-sans font-light">
                Every microbaling stroke, hair wig, and massage oil is sourced and executed according to premium global standards under precision sanitary control.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col items-center text-center p-10 rounded-none border border-white/5 bg-[#0e0e0e] hover:border-gold-400/30 transition-all duration-300 group">
              <div className="flex h-14 w-14 items-center justify-center rounded-none bg-gold-950/20 border border-gold-400/40 group-hover:bg-gold-400 group-hover:text-black transition-all">
                <ShieldCheck className="h-6 w-6 text-gold-400 group-hover:text-black" />
              </div>
              <h3 className="mt-6 font-serif text-lg font-bold tracking-[0.2em] text-[#f5eae4] uppercase">Trusted Confidence</h3>
              <p className="mt-3 text-xs leading-relaxed text-white/50 font-sans font-light">
                Aligning clients with tailored confidence, leaving individuals transformed both physically and mentally under our professional hands.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col items-center text-center p-10 rounded-none border border-white/5 bg-[#0e0e0e] hover:border-gold-400/30 transition-all duration-300 group">
              <div className="flex h-14 w-14 items-center justify-center rounded-none bg-gold-950/20 border border-gold-400/40 group-hover:bg-gold-400 group-hover:text-black transition-all">
                <Heart className="h-6 w-6 text-gold-400 group-hover:text-black" />
              </div>
              <h3 className="mt-6 font-serif text-lg font-bold tracking-[0.2em] text-[#f5eae4] uppercase">Luxury Care</h3>
              <p className="mt-3 text-xs leading-relaxed text-white/50 font-sans font-light">
                Dedicated personalized consultations with complimentary exotic beverages, comfortable private lounges, and customized skincare plans.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Featured Pampering Services Slider / Grid */}
      <section className="bg-black py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-7xl">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14">
            <div>
              <span className="text-[10px] font-bold tracking-[0.35em] text-gold-400 uppercase">INDULGENCE RITUALS</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-white mt-2">
                Featured <span className="italic">Beauty</span> & <span className="italic">Spa</span>
              </h2>
            </div>
            <button
              onClick={() => setActivePage('services')}
              className="mt-4 md:mt-0 flex items-center gap-1.5 text-xs font-bold tracking-[0.2em] text-gold-400 hover:text-white uppercase transition-colors cursor-pointer border-b border-gold-400 pb-1"
              id="view-all-services-link"
            >
              EXAMINE FULL SERVICES MENU
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="overflow-hidden rounded-none border border-white/10 bg-[#0c0c0c] transition-all duration-300 hover:border-gold-400/40 hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Image Wrap */}
                <div className="relative h-64 w-full overflow-hidden shrink-0">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 rounded-none bg-[#0A0A0A] px-3.5 py-1.5 border border-white/10 text-[9px] font-bold text-gold-400 tracking-[0.15em]">
                    {service.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-7 flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-gold-400">
                      {service.category}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl font-normal tracking-wide text-white">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-xs text-white/60 leading-relaxed font-light line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                    <span className="font-serif text-2xl font-normal text-gold-400">
                      ${service.price}
                    </span>
                    <button
                      onClick={() => onBookService(service)}
                      className="rounded-none bg-[#0A0A0A] border border-gold-400 px-5 py-2.5 text-[9px] font-bold tracking-[0.2em] text-gold-400 uppercase hover:bg-gold-400 hover:text-black hover:border-transparent transition"
                      id={`book-service-${service.id}`}
                    >
                      INSTANT BOOK
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Mini Promotional Spotlight with Luxury Video-like backdrop */}
      <section className="relative bg-[#0d0d0d] py-28 px-4 sm:px-6 lg:px-8 text-center border-t border-b border-white/5">
        {/* Soft geometric styling */}
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] opacity-5" />
        
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="text-[10px] font-bold tracking-[0.4em] text-white/50 uppercase">EMPOWERING CONFIDENCE</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-tight">
            Indulge In Luxury You <span className="italic">Truly</span> Deserve
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-xs sm:text-sm leading-relaxed text-white/60 font-light font-sans tracking-wide">
            FOC brings curated, globally acclaimed skincare therapy, authentic premium Brazilian HD lace wig solutions, and custom fine-line cosmetic pigmentation inside Victoria Island, Lagos.
          </p>
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setActivePage('about')}
              className="rounded-none border border-gold-400 bg-transparent px-8 py-3.5 text-[10px] font-bold tracking-[0.25em] text-gold-400 uppercase hover:bg-gold-400 hover:text-black transition-all duration-300 cursor-pointer"
              id="learn-foc-story-btn"
            >
              THE FOC VISIONARY STORY
            </button>
          </div>
        </div>
      </section>

      {/* 5. Featured Luxury Boutique Products */}
      <section className="bg-black py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14">
            <div>
              <span className="text-[10px] font-bold tracking-[0.35em] text-gold-400 uppercase">LA PETITE BOUTIQUE</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-white mt-2">
                Stately <span className="italic">Curation</span> Essentials
              </h2>
            </div>
            <button
              onClick={() => setActivePage('shop')}
              className="mt-4 md:mt-0 flex items-center gap-1.5 text-xs font-bold tracking-[0.2em] text-gold-400 hover:text-white uppercase transition duration-300 cursor-pointer border-b border-gold-400 pb-1"
              id="view-all-shop-link"
            >
              EXPLORE FULL BOUTIQUE STORE
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Catalog Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-none border border-white/10 bg-[#0a0a0a] p-5 transition-all duration-300 hover:border-gold-400/40"
              >
                {/* Visual Frame */}
                <div className="relative aspect-square overflow-hidden rounded-none bg-neutral-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {product.rating >= 4.9 && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 rounded-none bg-gold-400 px-2.5 py-1 text-[8px] font-black text-black uppercase tracking-wider">
                      <Star className="h-2.5 w-2.5 fill-current" />
                      Signature Item
                    </div>
                  )}
                </div>

                {/* Info block */}
                <div className="mt-5 flex items-start justify-between">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#f5eae4]/50">
                      {product.category}
                    </span>
                    <h3 className="mt-1 font-serif text-lg font-normal text-white leading-tight">
                      {product.name}
                    </h3>
                  </div>
                  <span className="font-serif text-lg font-normal text-gold-400 shrink-0">
                    ${product.price}
                  </span>
                </div>

                <p className="mt-2 text-xs text-white/50 leading-relaxed font-light line-clamp-2">
                  {product.description}
                </p>

                {/* Overlay buy button */}
                <button
                  onClick={() => onQuickAddProduct(product)}
                  className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-none bg-white/5 py-3 text-[9px] font-bold tracking-[0.2em] text-gold-400 border border-gold-400/20 group-hover:bg-gold-400 group-hover:text-black group-hover:border-transparent transition-all duration-300 cursor-pointer uppercase"
                  id={`quick-add-${product.id}`}
                >
                  ADD TO LUXURY CART
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Glowing Customer Testimonials */}
      <section className="bg-[#0A0A0A] border-t border-white/10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-[10px] font-bold tracking-[0.35em] text-gold-400 uppercase">THE CRITICS CORNER</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-white mt-2 mb-16">
            Reflections Of <span className="italic">Luxury</span>
          </h2>

          {/* Testimonial Cards Layout - Upgraded to elegant high-contrast design blocks */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-left">
            {TESTIMONIALS.map((testimonial, idx) => {
              // Extracting styling from the Design theme layout blocks:
              // Card 1: bg-white | Card 2: bg-[#F3E5E4] | Card 3: bg-[#E8D3C3] - All styled beautifully with black text
              const bgColors = [
                'bg-white text-black',
                'bg-[#F3E5E4] text-black',
                'bg-[#E8D3C3] text-black'
              ];
              const currentStyle = bgColors[idx % 3];

              return (
                <div
                  key={testimonial.id}
                  className={`relative rounded-none ${currentStyle} p-8 hover:brightness-95 transition-all duration-300 flex flex-col justify-between min-h-[300px]`}
                >
                  <div>
                    {/* Rating Stars */}
                    <div className="flex items-center space-x-1 mb-6 text-black">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-sm">★</span>
                      ))}
                    </div>
                    <p className="font-serif text-sm italic leading-relaxed font-light">
                      &ldquo;{testimonial.comment}&rdquo;
                    </p>
                  </div>

                  {/* Customer signature */}
                  <div className="mt-8 pt-5 border-t border-black/10">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.15em]">
                      {testimonial.name}
                    </h4>
                    <p className="text-[9px] font-bold tracking-widest opacity-60 mt-1 uppercase">{testimonial.role}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 inline-flex items-center gap-2 text-xs text-white/50 bg-white/5 px-4 py-2 border border-white/10 font-mono tracking-wider">
            <span>confidence rating:</span>
            <span className="flex items-center text-gold-400 font-bold gap-1">
              5.0 / 5.0 <Star className="h-3 w-3 fill-current" />
            </span>
            <span className="opacity-60">| BASED ON 280+ BOOKINGS</span>
          </div>
        </div>
      </section>

    </div>
  );
}
