import { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { Sparkles, Eye, ToggleLeft, ToggleRight, Grid, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Transformation' | 'Spa' | 'Beauty'>('All');
  const [revealBeforeId, setRevealBeforeId] = useState<string[]>([]); // tracking toggled before-&-after views

  const categories: ('All' | 'Transformation' | 'Spa' | 'Beauty')[] = [
    'All',
    'Transformation',
    'Spa',
    'Beauty'
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const toggleReveal = (itemId: string) => {
    setRevealBeforeId(prev => 
      prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId]
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 font-sans text-white">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-gold-400 text-[10px] font-bold tracking-[0.4em] uppercase">
          <Eye className="h-4.5 w-4.5" />
          <span>TRANSFORMATION PORTFOLIO</span>
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl font-normal text-white mt-3 mb-6 tracking-tight leading-tight">
          Reflections <span className="italic">of</span> Perfection
        </h1>
        <p className="text-sm leading-relaxed text-white/70 font-light tracking-wide">
          A high-fidelity showcase of actual client transformations. Toggle the interactive controls on each card to examine the before-and-after beauty results.
        </p>
      </div>

      {/* Category Selection Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-none text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-350 cursor-pointer focus:outline-none ${
              selectedCategory === category
                ? 'bg-gold-400 text-black font-black'
                : 'bg-[#0A0A0A] border border-white/10 text-white/70 hover:bg-gold-400/10 hover:border-gold-400'
            }`}
            id={`gallery-filter-${category.toLowerCase()}`}
          >
            {category === 'All' ? 'Complete Portfolio' : `${category} views`}
          </button>
        ))}
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {filteredItems.map((item, idx) => {
          const isBeforeToggled = revealBeforeId.includes(item.id);
          const hasBeforeAfter = !!item.beforeImage;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-none border border-white/10 bg-[#0c0c0c] p-6 hover:border-gold-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual frame with slider/reveal */}
                <div className="relative aspect-video overflow-hidden rounded-none bg-neutral-950 border border-white/5">
                  <AnimatePresence mode="wait">
                    {hasBeforeAfter && isBeforeToggled ? (
                      /* BEFORE IMAGE VIEW */
                      <motion.img
                        key="before-view"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        src={item.beforeImage}
                        alt="Before treatment cosmetic alignment"
                        className="h-full w-full object-cover select-none rounded-none"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      /* AFTER / DEFAULT SHINY VIEW */
                      <motion.img
                        key="after-view"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        src={item.afterImage}
                        alt={item.title}
                        className="h-full w-full object-cover select-none rounded-none"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </AnimatePresence>

                  {/* Indicator labels */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {hasBeforeAfter && (
                      <span className={`rounded-none px-2.5 py-1 text-[8px] font-bold uppercase tracking-widest ${isBeforeToggled ? 'bg-red-500 text-white shadow' : 'bg-black/80 text-white/40 border border-white/10'}`}>
                        Before Treatment
                      </span>
                    )}
                    <span className={`rounded-none px-2.5 py-1 text-[8px] font-bold uppercase tracking-widest ${(!isBeforeToggled || !hasBeforeAfter) ? 'bg-gold-400 text-black shadow font-black' : 'bg-black/80 text-white/40 border border-white/10'}`}>
                      After Transformation
                    </span>
                  </div>

                  {/* Icon details overlay on hover */}
                  <div className="absolute top-4 right-4 rounded-none bg-black/80 backdrop-blur-md px-3 py-1 border border-white/10 text-[9px] font-bold text-gold-400 tracking-widest uppercase">
                    {item.category}
                  </div>
                </div>

                {/* Information Block */}
                <div className="mt-5">
                  <h3 className="font-serif text-2xl font-light text-white uppercase tracking-wider group-hover:text-gold-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-white/60 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Toggle switch controls for Before/After */}
              {hasBeforeAfter && (
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">
                    Review structural change:
                  </span>
                  <button
                    onClick={() => toggleReveal(item.id)}
                    className="flex items-center gap-2 rounded-none bg-[#0A0A0A] border border-white/10 px-4 py-2 text-[9px] font-bold tracking-[0.15em] text-[#f5eae4] uppercase hover:bg-gold-400/10 hover:text-gold-400 transition cursor-pointer"
                    id={`reveal-toggle-${item.id}`}
                  >
                    <span>{isBeforeToggled ? 'Reveal After Result' : 'Examine Prior state'}</span>
                    {isBeforeToggled ? (
                      <ToggleRight className="h-5 w-5 text-gold-400 shrink-0" />
                    ) : (
                      <ToggleLeft className="h-5 w-5 text-white/40 shrink-0" />
                    )}
                  </button>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Salon Space Highlight Banner */}
      <div className="mt-20 rounded-none border border-white/10 bg-[#0d0d0d] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold-400">THE PRIVATE HANGAR</span>
          <h4 className="font-serif text-3xl font-light text-white uppercase tracking-wide mt-2">Our Sterile Sanitary Code</h4>
          <p className="text-xs text-white/60 leading-relaxed mt-2 font-light">
            Every environment photograph represents our real Private Chambers at Royal Oasis Victoria Island. We preserve complete quietness and privacy standards, allowing individual cosmetic processes to proceed in total peace and security.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 shrink-0">
          <span className="px-3.5 py-2.5 rounded-none border border-gold-400/30 bg-gold-400/5 text-gold-400 text-[9px] font-bold uppercase tracking-widest">Suite 204 VIP Area</span>
          <span className="px-3.5 py-2.5 rounded-none border border-gold-400/30 bg-gold-400/5 text-gold-400 text-[9px] font-bold uppercase tracking-widest">ISO 5 Air Filters</span>
        </div>
      </div>

    </div>
  );
}
