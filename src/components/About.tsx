import { Sparkles, Heart, Award, ShieldCheck, CheckSquare } from 'lucide-react';
import { CEO_INFO } from '../data';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 font-sans text-white">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-gold-400 text-[10px] font-bold tracking-[0.4em] uppercase">
          <Award className="h-4.5 w-4.5" />
          <span>OUR STORY &amp; PHILOSOPHY</span>
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl font-normal text-white mt-3 mb-6 tracking-tight leading-tight">
          Crafting <span className="italic">Sovereign</span> Grace
        </h1>
        <p className="text-sm leading-relaxed text-white/70 font-light tracking-wide">
          An intimate chronicle of FOC—how a vision of unwavering self-care and confidence evolved into Victoria Island’s premier luxury aesthetic destination.
        </p>
      </div>

      {/* Narrative grid (Text and image) */}
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 items-center mb-24">
        {/* Left column: CEO spotlight */}
        <div className="relative">
          {/* Decorative frame elements to represent high-end beauty brand */}
          <div className="absolute -top-4 -left-4 h-full w-full rounded-none border-2 border-gold-400/20 -z-10" />
          <img
            src={CEO_INFO.image}
            alt={CEO_INFO.name}
            className="rounded-none shadow-xl shadow-gold-500/5 object-cover w-full max-h-[500px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-6 right-6 left-6 rounded-none border border-white/10 bg-[#0A0A0A]/90 backdrop-blur-md p-5 text-left">
            <h4 className="font-serif text-lg font-light text-white uppercase tracking-wider">{CEO_INFO.name}</h4>
            <p className="text-[10px] text-gold-400 font-bold uppercase tracking-[0.2em] mt-1">{CEO_INFO.title}</p>
          </div>
        </div>

        {/* Right column: narrative */}
        <div className="space-y-6">
          <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-gold-400">MESSAGE FROM THE CEO</span>
          <blockquote className="font-serif text-2xl sm:text-3xl italic text-white/90 leading-relaxed font-light">
            &ldquo;{CEO_INFO.quote}&rdquo;
          </blockquote>
          
          <div className="h-[1px] w-20 bg-gold-400" />

          <p className="text-sm leading-relaxed text-white/70 font-light tracking-wide">
            {CEO_INFO.bio}
          </p>
          
          <p className="text-sm leading-relaxed text-white/60 font-light italic">
            FOC, meaning Family Of Confidence, represents our firm oath to the transformational power of self-care. We believe entering our doors isn’t merely a cosmetic routine—it is a sacred investment in your physical confidence, mental grounding, and absolute pampering.
          </p>
        </div>
      </div>

      {/* Core Brand Commitments / Bento pillars */}
      <div className="border-t border-white/10 pt-20 mb-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">THE OATH OF EXCELLENCE</span>
          <h2 className="font-serif text-3xl font-normal uppercase text-white mt-2 tracking-wide">Our Commitments To Luxury</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Commitment 1 */}
          <div className="rounded-none border border-white/10 bg-[#0c0c0c] p-8 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-none bg-gold-400/10 text-gold-400 border border-gold-400/30 mb-5">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-light text-white tracking-wide uppercase">Uncompromised Sterile Safety</h3>
              <p className="mt-3 text-xs leading-relaxed text-white/60 font-light">
                Our tools undergo strict, hospital-grade autoclave sterilization processes. Every microblading syringe, laser crystal, and massage table sheet is single-use or pristinely desinfected.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-1.5 text-[9px] text-gold-400 uppercase font-bold tracking-widest">
              <CheckSquare className="h-3.5 w-3.5" />
              <span>Full Medical Compliance</span>
            </div>
          </div>

          {/* Commitment 2 */}
          <div className="rounded-none border border-white/10 bg-[#0c0c0c] p-8 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-none bg-gold-400/10 text-gold-400 border border-gold-400/30 mb-5">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-light text-white tracking-wide uppercase">Premium Curated Actives</h3>
              <p className="mt-3 text-xs leading-relaxed text-white/60 font-light">
                We reject standard, cheap sulfate cosmetic formulas. FOC partners with French perfumers, premium organic oil mills, and advanced dermal labs to source active gold scrubs and desensitizing gels.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-1.5 text-[9px] text-gold-400 uppercase font-bold tracking-widest">
              <CheckSquare className="h-3.5 w-3.5" />
              <span>Premium Ingredient Sourcing</span>
            </div>
          </div>

          {/* Commitment 3 */}
          <div className="rounded-none border border-white/10 bg-[#0c0c0c] p-8 flex flex-col justify-between">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-none bg-gold-400/10 text-gold-400 border border-gold-400/30 mb-5">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl font-light text-white tracking-wide uppercase">Elite Customer Satisfaction</h3>
              <p className="mt-3 text-xs leading-relaxed text-white/60 font-light">
                From the moment you arrive, you receive absolute royalty status. We provide private changing lockers, heated relaxation recliners, custom aromatherapy notes, and complimentary mocktail sips.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-1.5 text-[9px] text-gold-400 uppercase font-bold tracking-widest">
              <CheckSquare className="h-3.5 w-3.5" />
              <span>VIP Guest Status Always</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
