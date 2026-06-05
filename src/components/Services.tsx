import { useState } from 'react';
import { SERVICES } from '../data';
import { Service } from '../types';
import { Clock, Star, Sparkles, Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesProps {
  onSelectService: (service: Service) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Beauty Services' | 'Spa Treatments' | 'Tattoo Services'>('All');

  const categories: ('All' | 'Beauty Services' | 'Spa Treatments' | 'Tattoo Services')[] = [
    'All',
    'Beauty Services',
    'Spa Treatments',
    'Tattoo Services'
  ];

  const filteredServices = selectedCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === selectedCategory);

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 font-sans text-white">
      
      {/* Editorial Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-gold-400 text-[10px] font-bold tracking-[0.4em] uppercase">
          <Sparkles className="h-4 w-4" />
          <span>ESTHETIC MENU</span>
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl font-normal text-white mt-3 mb-6 tracking-tight leading-tight">
          Redefine <span className="italic">Your</span> Self-Care
        </h1>
        <p className="text-sm leading-relaxed text-white/70 font-light tracking-wide">
          Our specialists combine high-grade biocompatible active agents, warm basalt volcanic stones, and hand-sculpted pigmentation techniques inside our Victoria Island studio.
        </p>
      </div>

      {/* Styled Luxury Tab Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-none text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-350 cursor-pointer focus:outline-none border ${
              selectedCategory === category
                ? 'bg-gold-400 text-black border-gold-400'
                : 'bg-[#0A0A0A] border-white/10 text-white/70 hover:border-gold-400 hover:text-white'
            }`}
            id={`category-filter-${category.replace(/\s+/g, '-').toLowerCase()}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {filteredServices.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="flex flex-col sm:flex-row gap-6 bg-[#0c0c0c] border border-white/10 p-6.5 rounded-none hover:border-gold-400/50 transition-all duration-300 group"
          >
            {/* Fluid Image Box */}
            <div className="relative w-full sm:w-52 h-48 sm:h-auto overflow-hidden rounded-none shrink-0">
              <img
                src={service.image}
                alt={service.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center space-x-1.5 rounded-none bg-[#0A0A0A] px-2.5 py-1 border border-white/10 text-[9px] font-bold text-gold-400 tracking-wider">
                <Clock className="h-3 w-3" />
                <span>{service.duration}</span>
              </div>
            </div>

            {/* Content Details Block */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-gold-400">
                    {service.category}
                  </span>
                  <span className="font-serif text-2xl font-normal text-gold-400">
                    ${service.price}
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl font-light text-white mt-1 group-hover:text-gold-400 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-xs text-white/60 font-light mt-2.5 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Benefits Bulletins */}
                <div className="mt-4 flex flex-col space-y-1.5">
                  <span className="text-[9px] uppercase font-bold tracking-[0.15em] text-white/40">Core Benefits:</span>
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start space-x-2 text-[11px] text-white/80 leading-tight">
                      <Check className="h-3.5 w-3.5 text-gold-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Button */}
              <button
                onClick={() => onSelectService(service)}
                className="mt-6 flex w-full sm:w-fit items-center justify-center gap-1 px-5 py-2.5 rounded-none bg-transparent border border-gold-400 text-[9px] font-bold tracking-[0.2em] text-gold-400 uppercase hover:bg-gold-400 hover:text-black hover:border-transparent transition duration-350 group/btn cursor-pointer"
                id={`book-detail-${service.id}`}
              >
                SCHEDULE SESSION
                <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bespoke Footnote Quality Guarantee */}
      <div className="mt-20 rounded-none border border-white/10 bg-[#0c0c0c] p-8 text-center max-w-3xl mx-auto">
        <Star className="h-6 w-6 text-gold-400 mx-auto mb-3" />
        <h4 className="font-serif text-xl font-bold text-gold-400 uppercase tracking-wider">The FOC Quality Guarantee</h4>
        <p className="text-xs text-white/60 font-light max-w-xl mx-auto mt-2 leading-relaxed">
          Every session uses pristine, single-use sterilized tools, high-frequency ozone therapy, and organic botanists extracts. Our primary objective is your complete sanctuary experience and confidence transformation.
        </p>
      </div>

    </div>
  );
}
