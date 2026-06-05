import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Plus, Minus, Check, Map, Compass, Shield, Navigation } from 'lucide-react';
import { FAQS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  // Map simulated zoom
  const [mapZoom, setMapZoom] = useState(14);
  const [routeStart, setRouteStart] = useState('');
  const [simulatedRoute, setSimulatedRoute] = useState(false);

  // Form submit state
  const [messageSent, setMessageSent] = useState(false);
  const [formFields, setFormFields] = useState({ name: '', email: '', subject: 'Booking Request', message: '' });

  // FAQ collapsible state
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formFields.name && formFields.email && formFields.message) {
      setMessageSent(true);
      setFormFields({ name: '', email: '', subject: 'Booking Request', message: '' });
    }
  };

  const handleRouteSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    if (routeStart.trim()) {
      setSimulatedRoute(true);
    }
  };

  const handleResetRoute = () => {
    setRouteStart('');
    setSimulatedRoute(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 font-sans text-white">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-gold-400 text-[10px] font-bold tracking-[0.4em] uppercase">
          <MessageSquare className="h-4.5 w-4.5" />
          <span>CONTACT &amp; SUPPORT HUB</span>
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl font-normal text-white mt-3 mb-6 tracking-tight leading-tight">
          Connect <span className="italic">With</span> Royalty
        </h1>
        <p className="text-sm leading-relaxed text-white/70 font-light tracking-wide">
          Have an inquiry regarding luxury premium wig fittments, specific facial scrubs, or custom tattoo sketching? Reach our Victoria Island salon directly.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 mb-20">
        
        {/* LEFT COLUMN: Message form & Coordinates (7 cols) */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* A. Elegant Message Form */}
          <div className="rounded-none border border-white/10 bg-[#0c0c0c] p-6.5 sm:p-8">
            <h3 className="font-serif text-2xl font-light text-white uppercase tracking-wider mb-1">Direct Consulting Desk</h3>
            <p className="text-xs text-white/50 font-light mb-6">Dispatches a direct communication packet directly to our CEO reception dashboard.</p>

            {messageSent ? (
              <div className="rounded-none border border-gold-400 bg-gold-400/15 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-none bg-gold-400/10 border border-gold-400 text-gold-400 mx-auto mb-4">
                  <Check className="h-6 w-6 text-gold-400" />
                </div>
                <h4 className="font-serif text-xl font-bold text-white uppercase tracking-wider">Consultation Dispatched</h4>
                <p className="text-xs text-white/70 max-w-md mx-auto mt-2 leading-relaxed font-light">
                  Thank you for connecting. Our lead concierge will contact you over phone or email within 2 business hours to discuss your wellness goals.
                </p>
                <button
                  onClick={() => setMessageSent(false)}
                  className="mt-5 text-xs font-bold tracking-[0.2em] text-gold-400 hover:text-white uppercase"
                >
                  SEND ANOTHER TEXT MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="font-bold text-[9px] uppercase text-white/40 tracking-[0.15em]">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={formFields.name}
                      onChange={(e) => setFormFields({ ...formFields, name: e.target.value })}
                      className="rounded-none bg-[#0A0A0A] border border-white/10 p-3 text-xs text-white focus:border-gold-400 focus:outline-none placeholder-white/20 font-light"
                      placeholder="e.g. Sylvia Cole"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col space-y-1.5">
                    <label className="font-bold text-[9px] uppercase text-white/40 tracking-[0.15em]">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formFields.email}
                      onChange={(e) => setFormFields({ ...formFields, email: e.target.value })}
                      className="rounded-none bg-[#0A0A0A] border border-white/10 p-3 text-xs text-white focus:border-gold-400 focus:outline-none placeholder-white/20 font-light"
                      placeholder="e.g. sylvia@luxury.com"
                    />
                  </div>
                </div>

                {/* Subject Selection */}
                <div className="flex flex-col space-y-1.5">
                  <label className="font-bold text-[9px] uppercase text-white/40 tracking-[0.15em]">Subject Matter Inquiry</label>
                  <select
                    value={formFields.subject}
                    onChange={(e) => setFormFields({ ...formFields, subject: e.target.value })}
                    className="rounded-none bg-[#0A0A0A] border border-white/10 p-3 text-xs text-white focus:border-gold-400 focus:outline-none appearance-none cursor-pointer"
                  >
                    <option value="Booking Request" className="bg-[#111]">Wellness Appointment Inquiry</option>
                    <option value="Wig Curation" className="bg-[#111]">Premium Wig Fittings</option>
                    <option value="Signature Perfumes" className="bg-[#111]">Signature Fragrance notes</option>
                    <option value="Tattoo Consult" className="bg-[#111]">Custom Fine Line Tattoo Sketching</option>
                  </select>
                </div>

                {/* Message block */}
                <div className="flex flex-col space-y-1.5">
                  <label className="font-bold text-[9px] uppercase text-white/40 tracking-[0.15em]">Message Description</label>
                  <textarea
                    required
                    rows={4}
                    value={formFields.message}
                    onChange={(e) => setFormFields({ ...formFields, message: e.target.value })}
                    className="rounded-none bg-[#0A0A0A] border border-white/10 p-3 text-xs text-white focus:border-gold-400 focus:outline-none placeholder-white/20 font-light"
                    placeholder="Describe your questions or aesthetic preferences..."
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-none bg-gold-400 px-6 py-3.5 text-xs font-bold tracking-[0.2em] text-black uppercase hover:bg-gold-300 transition duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                  id="contact-form-submit-btn"
                >
                  <Send className="h-4 w-4" />
                  DISPATCH INQUIRY PACKET
                </button>
              </form>
            )}
          </div>

          {/* B. Contacts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5.5 rounded-none border border-white/10 bg-[#0c0c0c] flex items-start space-x-3.5">
              <Phone className="h-5 w-5 mt-0.5 text-gold-400 shrink-0" />
              <div className="text-xs">
                <h4 className="font-bold text-white uppercase tracking-wider text-[10px]">Voice Hotlines</h4>
                <p className="text-white/80 font-light mt-1"><a href="tel:+234800FOCBEAUTY" className="hover:text-gold-400 underline decoration-white/10">+234 800 FOC BEAUTY</a></p>
                <p className="text-white/40 text-[9px] mt-0.5">Complementary concierge support</p>
              </div>
            </div>

            <div className="p-5.5 rounded-none border border-white/10 bg-[#0c0c0c] flex items-start space-x-3.5">
              <Mail className="h-5 w-5 mt-0.5 text-gold-400 shrink-0" />
              <div className="text-xs">
                <h4 className="font-bold text-white uppercase tracking-wider text-[10px]">Emails Desk</h4>
                <p className="text-white/80 font-light mt-1 select-all break-all"><a href="mailto:danielonyeachie23@gmail.com" className="hover:text-gold-400 underline decoration-white/10">danielonyeachie23@gmail.com</a></p>
                <p className="text-white/40 text-[9px] mt-0.5">Inbox managed by assistants</p>
              </div>
            </div>

            <div className="p-5.5 rounded-none border border-white/10 bg-[#0c0c0c] flex items-start space-x-3.5">
              <MapPin className="h-5 w-5 mt-0.5 text-gold-400 shrink-0" />
              <div className="text-xs">
                <h4 className="font-bold text-white uppercase tracking-wider text-[10px]">Physical Hub</h4>
                <p className="text-white/80 font-light mt-1">Victoria Island, Lagos</p>
                <p className="text-white/40 text-[9px] mt-0.5">Suite 204 Royal Oasis Heights</p>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Interactive Simulated Map & Directions (5 cols) */}
        <div className="lg:col-span-5 space-y-10">
          
          {/* 1. Vector Map Interface */}
          <div className="rounded-none border border-white/10 bg-[#0c0c0c] p-5 flex flex-col justify-between h-full min-h-[500px]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg font-light text-white flex items-center gap-1.5 uppercase tracking-wider">
                    <Map className="h-4.5 w-4.5 text-gold-400" />
                    Interactive Map Portal
                  </h3>
                  <p className="text-[9px] text-white/50 font-light mt-1">Simulated Google Satellite Map vector tracking</p>
                </div>
                {/* Visual compass */}
                <div className="h-8 w-8 rounded-none border border-gold-400/20 bg-gold-950/25 flex items-center justify-center text-gold-400">
                  <Compass className="h-4 w-4 animate-spin-slow" />
                </div>
              </div>

              {/* Vector canvas portraying Victoria Island Lagos */}
              <div className="relative aspect-square sm:aspect-video md:aspect-square w-full rounded-none bg-[#090909] border border-white/5 overflow-hidden flex flex-col justify-between p-3.5 select-none">
                {/* Background Roads Grid Representation */}
                <div className="absolute inset-0 opacity-[0.14] scale-105 pointer-events-none">
                  {/* Styled lines representing lagos roads */}
                  <svg width="100%" height="100%" className="text-gold-400">
                    <line x1="0" y1="50" x2="500" y2="50" stroke="currentColor" strokeWidth="2" />
                    <line x1="50" y1="0" x2="50" y2="500" stroke="currentColor" strokeWidth="1" />
                    <line x1="0" y1="180" x2="500" y2="280" stroke="currentColor" strokeWidth="3" />
                    <line x1="150" y1="0" x2="350" y2="500" stroke="currentColor" strokeWidth="1" />
                    <line x1="420" y1="0" x2="420" y2="500" stroke="currentColor" strokeWidth="2" />
                    <line x1="0" y1="360" x2="500" y2="360" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>

                {/* Animated Route Line */}
                {simulatedRoute && (
                  <svg className="absolute inset-0 h-full w-full pointer-events-none">
                    <motion.path
                      d="M 50,180 Q 150,230 420,360"
                      fill="transparent"
                      stroke="#D4AF37"
                      strokeWidth="3.5"
                      strokeDasharray="8 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: 'easeOut' }}
                    />
                  </svg>
                )}

                {/* Satellite ocean color */}
                <div className="absolute bottom-0 right-0 h-28 w-28 bg-[#D4AF37]/5 rounded-tl-full blur-xl pointer-events-none" />

                {/* Legend Details */}
                <div className="relative z-10 flex flex-col justify-between h-full w-full">
                  <div className="flex justify-between items-start">
                    <div className="rounded-none bg-black/95 px-2.5 py-1 text-[8px] tracking-wider border border-white/10 text-white flex items-center gap-1">
                      <Shield className="h-3 w-3 text-gold-400" />
                      <span>GPS SECURED PORTAL</span>
                    </div>

                    {/* Scale tracker */}
                    <div className="rounded-none bg-black/95 px-2.5 py-1 text-[8px] border border-white/10 font-mono text-gold-400">
                      Zoom: {mapZoom}x
                    </div>
                  </div>

                  {/* MAP LABELS AND PINS */}
                  <div className="relative w-full h-full">
                    {/* FOC Prime PIN marker */}
                    <div className="absolute bottom-[20%] right-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                      {/* Pulse rings */}
                      <span className="absolute inline-flex h-10 w-10 rounded-none bg-gold-400/20 opacity-75 animate-ping" />
                      
                      <div className="relative rounded-none border border-gold-400 bg-black px-2 mt-1.5 py-1 flex items-center space-x-1 shadow-lg text-[9px] font-bold text-gold-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
                        <span>FOC Salon Hub (Suite 204)</span>
                      </div>
                    </div>

                    {/* Neighborhood Landmarks */}
                    <div className="absolute top-[20%] left-[10%] text-[8px] text-white/30 font-medium">Lagos Lagoon</div>
                    <div className="absolute bottom-[30%] left-[8%] text-[8px] text-white/30 font-medium">Falomo Overpass Road</div>
                    <div className="absolute top-[35%] right-[15%] text-[8px] text-white/30 font-medium">Victoria Island Mall</div>

                    {/* Dynamic Simulated User starting pin */}
                    {simulatedRoute && (
                      <div className="absolute top-[48%] left-[7%] flex flex-col items-center">
                        <div className="rounded-none border border-white/20 bg-[#0A0A0A] px-2.5 py-1 text-[8px] text-white">
                          Start GPS: {routeStart}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Lower zoom levers */}
                  <div className="flex justify-between items-center bg-black/95 p-2.5 rounded-none border border-white/10 mt-auto">
                    <div className="text-[9px] text-white/50">
                      Coordinates: <span className="font-mono text-gold-400">6.4281&deg; N, 3.4219&deg; E</span>
                    </div>
                    {/* Zoom Toggle */}
                    <div className="flex items-center space-x-1.5">
                      <button
                        onClick={() => setMapZoom(prev => Math.max(10, prev - 1))}
                        className="h-5 w-5 bg-white/5 border border-white/10 rounded-none flex items-center justify-center text-[10px] hover:text-gold-400 active:scale-95 transition"
                      >
                        -
                      </button>
                      <button
                        onClick={() => setMapZoom(prev => Math.min(20, prev + 1))}
                        className="h-5 w-5 bg-white/5 border border-white/10 rounded-none flex items-center justify-center text-[10px] hover:text-gold-400 active:scale-95 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated route builder */}
            <div className="mt-5 border-t border-white/10 pt-4 text-xs space-y-3.5">
              <p className="font-bold text-[9px] uppercase tracking-wider text-white/40">Plan secure vector directions</p>

              {simulatedRoute ? (
                <div className="rounded-none bg-gold-400/5 p-3.5 border border-gold-400/30 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[9px] uppercase font-bold text-gold-400 block tracking-wider">Fastest route active</span>
                    <p className="text-white mt-1">Estimated transport arrival: 14 mins from {routeStart}</p>
                  </div>
                  <button
                    onClick={handleResetRoute}
                    className="text-[9px] font-bold text-red-400 hover:text-white uppercase transition"
                  >
                    Reset GPS
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRouteSimulate} className="flex gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Enter starting location (e.g. Lekki Phase 1)"
                    value={routeStart}
                    onChange={(e) => setRouteStart(e.target.value)}
                    className="flex-1 rounded-none bg-[#0A0A0A] border border-white/10 px-3 py-2 text-xs text-white placeholder-white/30 focus:border-gold-400 outline-none"
                    id="route-origin-input"
                  />
                  <button
                    type="submit"
                    className="rounded-none bg-gold-400 px-4.5 py-2 text-[10px] font-bold tracking-widest text-black uppercase hover:bg-gold-300 transition flex items-center gap-1 shrink-0 cursor-pointer"
                    id="simulate-route-btn"
                  >
                    <Navigation className="h-3 w-3" />
                    Query Route
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* 2. FAQ section */}
      <div className="border-t border-white/10 pt-20">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">CONSULTATION ARCHIVES</span>
          <h2 className="font-serif text-3xl font-normal uppercase text-white mt-2">Frequently Discussed Queries</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIdx === index;
            return (
              <div
                key={index}
                className="rounded-none border border-white/10 bg-[#0c0c0c] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIdx(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5.5 text-left text-xs font-semibold tracking-wide text-white hover:text-gold-300 transition cursor-pointer focus:outline-none"
                  id={`faq-accordion-toggle-${index}`}
                >
                  <span className="font-serif text-base font-light tracking-wide text-white">{faq.question}</span>
                  <div className="h-7 w-7 rounded-none bg-white/5 flex items-center justify-center text-gold-400 border border-white/10">
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5.5 pb-5.5 text-xs text-white/60 leading-relaxed border-t border-white/10 pt-3 bg-[#0A0A0A]/50 font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
