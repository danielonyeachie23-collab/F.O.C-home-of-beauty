import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Shop from './components/Shop';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import { Service, Product, CartItem } from './types';
import { MessageSquare, Send, X, Check, Heart, Sparkles, Smile } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CEO_INFO } from './data';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  
  // Selection hook to auto-populate appointment bookings
  const [preselectedService, setPreselectedService] = useState<Service | null>(null);

  // WhatsApp Floating box states
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [showBubbleTip, setShowBubbleTip] = useState(true);
  const [chatLog, setChatLog] = useState<Array<{ sender: 'ceo' | 'user'; text: string; time: string }>>([
    {
      sender: 'ceo',
      text: 'Hello, darling! Welcome to FOC. I am Daniel, Founder & CEO. Are you looking to schedule some royal pampering or locate custom HD wigs today?',
      time: 'Just now'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // Auto scroll to top of page upon screen swaps
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activePage]);

  // Bubble tips vanish after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubbleTip(false);
    }, 8500);
    return () => clearTimeout(timer);
  }, []);

  // Sync Cart total quantity counting
  const cartCountCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Shortcut routing functions
  const handleBookServiceRoute = (service: Service) => {
    setPreselectedService(service);
    setActivePage('booking');
  };

  const handleQuickAddProduct = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  // Chat message submit simulator
  const handleChatSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userText = chatMessage;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setChatLog(prev => [...prev, { sender: 'user', text: userText, time: now }]);
    setChatMessage('');
    setIsTyping(true);

    // Simulate luxury bot reply
    setTimeout(() => {
      let ceoReply = '';
      const lower = userText.toLowerCase();

      if (lower.includes('wig') || lower.includes('hair') || lower.includes('lace')) {
        ceoReply = 'Ah, our Empress HD Wigs are magnificent! Sewn from 100% human virgin hair. You can view our live fittings inside the "Luxury Shop" page or schedule a bespoke suite consultation on the "Book Appointment" tab!';
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('much')) {
        ceoReply = 'Our pampering starts at $55 for our couture manicures, up to $250 for full Signature Brow Microblading. Take a look at the "Services & Pampering" sheet to evaluate benefits!';
      } else if (lower.includes('wax') || lower.includes('pedicure') || lower.includes('scrub') || lower.includes('appointment')) {
        ceoReply = 'Excellent taste! Our Royal Facial exfoliations and 24K Gold Body Scrub sessions are popular. I suggest securing your hour directly on the "Book Appointment" tab to choose tomorrow’s slots!';
      } else if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
        ceoReply = 'Hello to you! I hope your day is radiating confidence. Let me know if you would like me to spotlight any of our beauty therapies or boutique perfumes!';
      } else {
        ceoReply = 'Fascinating question! FOC is fully equipped to deliver premium services tailored specifically for you. I suggest reserving a slot on our Booking page or leaving a note on our Contact form so our lead esthetician can draft your treatment!';
      }

      setChatLog(prev => [...prev, { sender: 'ceo', text: ceoReply, time: now }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#f5eae4] flex flex-col justify-between selection:bg-gold-500 selection:text-black antialiased">
      
      {/* 1. Transparent Glass header */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        cartCount={cartCountCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* 2. Main Content Screens */}
      <main className="flex-1 bg-black">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Home
                setActivePage={setActivePage}
                onBookService={handleBookServiceRoute}
                onQuickAddProduct={handleQuickAddProduct}
              />
            </motion.div>
          )}

          {activePage === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Services onSelectService={handleBookServiceRoute} />
            </motion.div>
          )}

          {activePage === 'shop' && (
            <motion.div
              key="shop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Shop
                cart={cart}
                setCart={setCart}
                isCartOpen={isCartOpen}
                setIsCartOpen={setIsCartOpen}
              />
            </motion.div>
          )}

          {activePage === 'booking' && (
            <motion.div
              key="booking"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Booking
                preselectedService={preselectedService}
                clearPreselection={() => setPreselectedService(null)}
              />
            </motion.div>
          )}

          {activePage === 'gallery' && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Gallery />
            </motion.div>
          )}

          {activePage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <About />
            </motion.div>
          )}

          {activePage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 3. Global Luxury footer with CEO summary */}
      <Footer setActivePage={setActivePage} />

      {/* 4. PERSISTENT FLOATING WHATSAPP CHAT DRAWER */}
      <div className="fixed bottom-6 right-6 z-40 font-sans">
        
        {/* Floating Bubble Button */}
        <div className="flex flex-col items-end space-y-3.5">
          {/* Custom welcome bubble tip */}
          <AnimatePresence>
            {showBubbleTip && !isChatOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative rounded-2xl border border-gold-400/25 bg-[#090909] shadow-xl p-4.5 text-xs text-[#f5eae4] max-w-xs text-right select-none"
              >
                <button 
                  onClick={() => setShowBubbleTip(false)} 
                  className="absolute top-2 left-2 text-white/40 hover:text-white"
                >
                  <X className="h-3 w-3" />
                </button>
                <div className="flex items-center gap-1.5 justify-end text-gold-400 font-serif text-[10px] font-bold uppercase tracking-widest mb-1">
                  <span>Founder Daniel Desk</span>
                  <Sparkles className="h-3.5 w-3.5" />
                </div>
                <p className="leading-relaxed">
                  Hi beauty! Chat with me directly over WhatsApp. Ask for wig fittings! 🌸
                </p>
                {/* little indicator triangle absolute */}
                <div className="absolute right-6 -bottom-2 h-3.5 w-3.5 rotate-45 border-r border-b border-gold-400/20 bg-[#090909]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Core circular button */}
          <button
            onClick={() => {
              setIsChatOpen(!isChatOpen);
              setShowBubbleTip(false);
            }}
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gold-400 text-black hover:bg-gold-300 transition-all shadow-lg shadow-gold-500/20 active:scale-95 cursor-pointer focus:outline-none"
            id="whatsapp-floater-btn"
            title="Chat with Founder Daniel"
          >
            {/* Pulsating outline rings */}
            <span className="absolute inset-0 rounded-full border-2 border-gold-400/30 ring-4 ring-gold-400/5 group-hover:scale-110 transition duration-350" />
            
            {isChatOpen ? (
              <X className="h-6 w-6 stroke-[2.5px]" />
            ) : (
              <MessageSquare className="h-6 w-6 fill-current" />
            )}
            
            {/* Blinking notification dot */}
            {!isChatOpen && (
              <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5 rounded-full bg-rose-500 border border-black animate-pulse" />
            )}
          </button>
        </div>

        {/* Real-Time Simulated WhatsApp Chat Overlay */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="absolute bottom-18 right-0 w-80 sm:w-96 rounded-2xl border border-gold-500/10 bg-[#0c0c0c] shadow-2xl flex flex-col overflow-hidden"
              id="whatsapp-chat-box"
            >
              
              {/* Box Top Header */}
              <div className="bg-gradient-to-r from-gold-950 via-black to-gold-950 p-4 border-b border-gold-500/15 flex items-center justify-between">
                <div className="flex items-center space-x-3 text-left">
                  <div className="relative">
                    <img
                      src={CEO_INFO.image}
                      alt={CEO_INFO.name}
                      className="h-9 w-9 rounded-full object-cover border border-gold-400/40"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border border-black" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{CEO_INFO.name}</h4>
                    <p className="text-[9px] text-[#f5eae4]/60 flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-gold-400" />
                      <span>FOC Founder & CEO</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <span className="bg-emerald-500/15 text-emerald-400 text-[8px] font-bold px-2 py-0.5 rounded border border-emerald-500/20">
                    WHATSAPP ONLINE
                  </span>
                  <button 
                    onClick={() => setIsChatOpen(false)} 
                    className="text-white/40 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Chat Messages Body */}
              <div className="p-4 h-64 overflow-y-auto space-y-3.5 bg-[#090909] text-xs flex flex-col scrollbar-none">
                {chatLog.map((log, index) => {
                  const isCeo = log.sender === 'ceo';
                  return (
                    <div
                      key={index}
                      className={`flex flex-col max-w-[80%] ${isCeo ? 'self-start text-left' : 'self-end text-right'}`}
                    >
                      <div className={`p-3 rounded-xl leading-relaxed ${isCeo ? 'bg-white/5 border border-white/5 text-[#f5eae4]' : 'bg-gold-400 text-black font-medium'}`}>
                        {log.text}
                      </div>
                      <span className="text-[8px] text-white/30 mt-1 uppercase font-semibold">{log.time}</span>
                    </div>
                  );
                })}

                {/* Simulated CEO typing */}
                {isTyping && (
                  <div className="self-start flex space-x-1 p-2.5 rounded-lg bg-white/5 text-[9px] text-white/50 italic animate-pulse">
                    <Smile className="h-3.5 w-3.5 text-gold-400 shrink-0 mt-0.5" />
                    <span>Daniel is typing luxury advice...</span>
                  </div>
                )}
              </div>

              {/* Message Typing Form */}
              <form onSubmit={handleChatSend} className="p-3 border-t border-white/5 bg-black flex gap-2">
                <input
                  type="text"
                  required
                  placeholder="Ask and click send (e.g. wig prices, waxing appt?)"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="flex-1 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs text-white placeholder-white/30 focus:border-gold-400 focus:outline-none"
                  id="whatsapp-text-input"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-gold-400 p-2 text-black hover:bg-gold-300 transition duration-300 cursor-pointer shrink-0"
                  id="whatsapp-submit-btn"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>

            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </div>
  );
}
