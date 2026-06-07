import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Sparkles, Send, CheckCircle } from 'lucide-react';
import { CEO_INFO } from '../data';

interface FooterProps {
  setActivePage: (page: string) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const [emailValue, setEmailValue] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValue.trim()) {
      setSubscribed(true);
      setEmailValue('');
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#070707] pt-20 pb-12 font-sans overflow-hidden">
      {/* Background Decorative Ambient Light */}
      <div className="absolute top-0 right-1/4 -z-10 h-72 w-72 rounded-none bg-gold-400/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 -z-10 h-96 w-96 rounded-none bg-[#f5eae4]/2 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Brand Presentation Column */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-3xl font-light tracking-[0.25em] text-gold-400 uppercase">FOC</span>
                <Sparkles className="h-4.5 w-4.5 text-gold-400" />
              </div>
              <span className="text-[9px] font-bold tracking-[0.4em] text-white/40 uppercase mt-1">
                HOME OF BEAUTY WORLD
              </span>
            </div>
            
            <p className="text-sm leading-relaxed text-white/70 font-light max-w-sm">
              An epicentre where custom aesthetic artistry meets complete physical pampering. Handcrafted for souls that seek elegance, ultimate beauty, and luxurious self-care.
            </p>

            {/* CEO Quote Card */}
            <div className="rounded-none border border-white/10 bg-[#0c0c0c] p-6">
              <blockquote className="text-xs italic text-white/90 leading-relaxed font-serif">
                &ldquo;{CEO_INFO.quote}&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center space-x-3">
                <img 
                  src={CEO_INFO.image} 
                  alt={CEO_INFO.name} 
                  className="h-8 w-8 rounded-none object-cover border border-gold-400/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-[10px] font-bold tracking-[0.15em] text-gold-400 uppercase">{CEO_INFO.name}</h4>
                  <p className="text-[9px] text-[#f5eae4]/40 font-light">{CEO_INFO.title}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigate Links Column */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col space-y-5">
            <h3 className="font-serif text-[11px] font-bold tracking-[0.25em] text-gold-400 uppercase">The Sanctuary</h3>
            <div className="flex flex-col space-y-3 text-xs uppercase tracking-widest font-semibold">
              <button onClick={() => setActivePage('home')} className="w-fit text-left text-white/60 hover:text-gold-400 transition-colors cursor-pointer" id="footer-link-home">Welcome Home</button>
              <button onClick={() => setActivePage('services')} className="w-fit text-left text-white/60 hover:text-gold-400 transition-colors cursor-pointer" id="footer-link-services">Premium pampering</button>
              <button onClick={() => setActivePage('shop')} className="w-fit text-left text-white/60 hover:text-gold-400 transition-colors cursor-pointer" id="footer-link-shop">Boutique Corner</button>
              <button onClick={() => setActivePage('booking')} className="w-fit text-left text-white/60 hover:text-gold-400 transition-colors cursor-pointer" id="footer-link-booking">Schedule Grace</button>
              <button onClick={() => setActivePage('gallery')} className="w-fit text-left text-white/60 hover:text-gold-400 transition-colors cursor-pointer" id="footer-link-gallery">Transformations</button>
              <button onClick={() => setActivePage('blog')} className="w-fit text-left text-white/60 hover:text-gold-400 transition-colors cursor-pointer" id="footer-link-blog">Luxury Archives</button>
            </div>
          </div>

          {/* Contact coordinates */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col space-y-5">
            <h3 className="font-serif text-[11px] font-bold tracking-[0.25em] text-gold-400 uppercase">Coordinates</h3>
            <ul className="flex flex-col space-y-4 text-xs font-light text-white/70">
              <li className="flex items-start space-x-3 leading-relaxed">
                <MapPin className="h-4 w-4 mt-0.5 text-gold-400 shrink-0" />
                <span>Suite 204, Royal Oasis Heights, Beauty Boulevard Road, Victoria Island, Lagos</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold-400 shrink-0" />
                <a href="tel:+2348148149158" className="hover:text-gold-400 transition-colors">08148149158</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold-400 shrink-0" />
                <a href="mailto:foccworld@gmail.com" className="hover:text-gold-400 transition-colors break-all">foccworld@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4 lg:col-span-2 flex flex-col space-y-5">
            <h3 className="font-serif text-[11px] font-bold tracking-[0.25em] text-gold-400 uppercase">Elegance Club</h3>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Stay forever informed of limited-edition fragrances, wig drops, and exclusive wellness hours.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 rounded-none bg-gold-400/10 p-3.5 text-gold-400 border border-gold-400/30">
                <CheckCircle className="h-4 w-4 shrink-0 text-gold-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.1em]">Welcome To Club</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    className="w-full rounded-none bg-[#0A0A0A] border border-white/10 px-3.5 py-3 text-xs text-white placeholder-white/20 focus:border-gold-400 focus:outline-none transition font-light"
                    id="newsletter-email-input"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 flex h-9 w-9 items-center justify-center rounded-none bg-gold-400 text-black hover:bg-gold-300 transition-colors focus:outline-none cursor-pointer"
                    id="newsletter-submit-btn"
                  >
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Lower copyright row */}
        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/30 space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} FOC Beauty World. Elegantly Protected.</p>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setActivePage('contact')}
              className="hover:text-gold-400 transition-colors cursor-pointer"
              id="footer-faq-shortcut"
            >
              Consulting FAQs
            </button>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1 hover:text-gold-400 transition-colors"
            >
              <Instagram className="h-3.5 w-3.5" />
              <span>foc_beautyworld</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
