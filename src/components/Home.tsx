import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Star, ShieldCheck, Heart, Award, CheckCircle2, Clock, DollarSign, Eye } from 'lucide-react';
import { TESTIMONIALS, HERO_IMAGE, PHYSICAL_SALON_IMAGE, SERVICES } from '../data';

interface HomeProps {
  setActivePage: (page: string) => void;
}

export default function Home({ setActivePage }: HomeProps) {

  return (
    <div className="font-sans text-nude-100 overflow-hidden">
      
      {/* 1. Large Luxury Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center bg-black py-20 px-4">
        {/* Background Premium Luxury Image and Grid Overlay */}
        <div className="absolute inset-0 overflow-hidden bg-black z-0 pointer-events-none">
          {/* Background Ambient Luxury Image */}
          <img
            src="/src/assets/images/IMG_20260605_170447.jpg"
            alt="FOC World Luxury Sanctuary Background"
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full object-cover opacity-60 scale-100 transition-all duration-[6000ms] ease-out hover:scale-105"
          />

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          {/* Glowing ambient radial gold dust spots */}
          <div className="absolute top-1/2 left-1/4 h-96 w-96 rounded-full bg-gold-400/5 blur-[120px] mix-blend-screen animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-amber-500/5 blur-[150px] mix-blend-screen" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-transparent to-black/85" />
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
              Welcome to <span className="text-gold-400 italic">FOC World</span> – <br className="hidden md:inline"/>
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
                onClick={() => setActivePage('services')}
                className="flex w-full sm:w-64 items-center justify-center gap-2 rounded-none border border-white/30 bg-[#0A0A0A] px-10 py-4.5 text-xs font-bold tracking-[0.25em] text-white uppercase hover:bg-white/5 hover:border-gold-400 transition-all duration-300 cursor-pointer"
                id="hero-services-btn"
              >
                Explore Services
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Locator Indicator */}
        <div className="absolute bottom-6 left-6 md:left-12 flex flex-wrap items-center gap-4 z-20">
          <div className="flex items-center gap-1.5 opacity-60">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-[9px] font-medium tracking-widest uppercase text-white/50">Lugbe, Abuja</span>
          </div>
        </div>

        {/* Elegant boutique label */}
        <div className="absolute bottom-6 right-6 md:right-12 z-20 flex items-center gap-1.5 bg-black/80 border border-white/10 px-4 py-2 rounded-none shadow-2xl backdrop-blur-md">
          <span className="text-[10px] font-bold tracking-[0.2em] text-gold-400 uppercase select-none flex items-center gap-1.5">
            FOC World BOUTIQUE & SALON
          </span>
        </div>
      </section>

      {/* 2. Core Pillars / Why FOC World */}
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
              <div className="flex h-14 w-14 items-center justify-center rounded-none bg-[#0a0a0a] border border-gold-400/40 group-hover:bg-gold-400 group-hover:text-black transition-all">
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

      {/* 4. The FOC World Visionary Story */}
      <section className="relative bg-[#0d0d0d] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-b border-white/5 overflow-hidden text-center">
        {/* Soft geometric styling background */}
        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-0 h-[400px] w-[400px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-none border border-gold-400/30 bg-gold-950/20 px-3 py-1.5 text-[9px] font-bold tracking-[0.25em] text-gold-400 uppercase">
            <Sparkles className="h-3.5 w-3.5 shrink-0" />
            <span>THE FOC WORLD VISIONARY STORY</span>
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-tight lowercase">
            redefining self-care with <span className="text-gold-400 italic">decadent confidence</span>
          </h2>
          
          <p className="mx-auto mt-6 text-sm leading-relaxed text-white/70 font-light font-sans tracking-wide max-w-3xl">
            FOC World represents the <strong>Family of Confidence</strong>. Founded on an unwavering vision to challenge standard, dry cosmetic routines, we have built a beautiful, high-fidelity physical oasis in federal housing Lugbe, Abuja. We bring together globally certified skincare technology, exquisite spa services, medically hygienic orthodontics, and therapeutic bodywork to pamper your physical frame and bolster your personal aura.
          </p>
          
          <div className="pt-2">
            <button 
              onClick={() => setActivePage('about')}
              className="text-[10px] font-bold tracking-[0.2em] text-gold-400 hover:text-gold-300 transition-colors uppercase border-b border-gold-400/30 pb-1"
              id="home-story-read-link"
            >
              Read Our Full Heritage Journey &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* 5. Immersive Spa Video Tour Promo Section */}
      <section className="relative bg-black py-20 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="mx-auto max-w-5xl rounded-none border border-gold-400/20 bg-[#070707] p-8 md:p-14 relative overflow-hidden group hover:border-gold-400/40 transition-all duration-500">
          
          {/* Subtle Golden Glow Spot in back */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-gold-400/5 blur-[100px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-14">
            <div className="flex-1 text-left space-y-4">
              <div className="inline-flex items-center gap-1.5 rounded-none border border-gold-400/25 bg-gold-950/20 px-3 py-1.5 text-[9px] font-bold tracking-[0.25em] text-gold-400 uppercase">
                <Sparkles className="h-3 w-3 shrink-0" />
                <span>EXQUISITE VISUAL TOUR AVAILABLE</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-tight">
                Embark on an Indulgent <span className="text-gold-400 italic">Spa Virtual Walkthrough</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed max-w-2xl font-sans">
                Witness our state-of-the-art facility in federal housing Lugbe first-hand. Explore our luminescent facial tables, certified skincare solutions, and quiet calming spaces. Play with soft audio included.
              </p>
            </div>
            
            <div className="shrink-0 w-full md:w-auto flex flex-col items-center">
              <button
                onClick={() => setActivePage('spa-tour')}
                className="w-full md:w-auto relative flex items-center justify-center gap-3 bg-gold-400 hover:bg-gold-300 text-black px-10 py-5 text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300 shadow-xl shadow-gold-400/5 select-none active:scale-95 cursor-pointer"
                id="home-spa-tour-cta"
              >
                <span>ENTER VIRTUAL TOUR 🎥</span>
              </button>
              <span className="text-[9px] text-white/30 font-mono mt-3 uppercase tracking-widest animate-pulse">Length: 0:13 | Lo-Fi Music Inside</span>
            </div>
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
