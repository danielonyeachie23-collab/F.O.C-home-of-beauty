import { useState } from 'react';
import { Menu, X, ShoppingBag, Calendar, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({ activePage, setActivePage, cartCount, onCartClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services & Pampering' },
    { id: 'shop', label: 'Luxury Shop' },
    { id: 'booking', label: 'Book Appointment' },
    { id: 'gallery', label: 'Transformation Gallery' },
    { id: 'about', label: 'About FOC' },
    { id: 'contact', label: 'Contact & FAQ' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold-500/10 bg-black/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <button
          onClick={() => setActivePage('home')}
          className="group flex items-center space-x-3 cursor-pointer focus:outline-none"
          id="header-logo-btn"
        >
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-3xl font-normal italic tracking-widest text-gold-400 transition-colors uppercase group-hover:text-gold-300">
              FOC
            </span>
            <Sparkles className="h-4.5 w-4.5 text-gold-400 transition-transform group-hover:rotate-12" />
          </div>
          <div className="hidden sm:block h-4 w-[1px] bg-white/30" />
          <span className="hidden sm:block font-sans text-[9px] font-bold tracking-[0.25em] text-white/60 group-hover:text-white/80 uppercase">
            HOME OF BEAUTY WORLD
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`relative px-3 py-2 font-sans text-[10px] font-bold tracking-[0.18em] uppercase transition-colors duration-300 cursor-pointer focus:outline-none ${
                  isActive ? 'text-gold-400' : 'text-[#f5eae4]/70 hover:text-gold-400'
                }`}
                id={`nav-${item.id}`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-line"
                    className="absolute bottom-0 left-3 right-3 h-[1px] bg-gold-400"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Widgets */}
        <div className="flex items-center space-x-4">
          {/* Quick Booking Shortcut */}
          <button
            onClick={() => setActivePage('booking')}
            className="hidden lg:flex items-center gap-2 rounded-none border border-gold-400 bg-transparent px-5 py-2.5 text-[10px] font-bold tracking-[0.2em] text-gold-400 uppercase hover:bg-gold-400 hover:text-black transition-all duration-300 cursor-pointer focus:outline-none"
            id="quick-book-btn"
          >
            <Calendar className="h-3 w-3 shrink-0" />
            BOOK APPOINTMENT
          </button>

          {/* Interactive Cart Bag Toggle */}
          <button
            onClick={onCartClick}
            className="relative flex h-10 w-10 items-center justify-center rounded-none bg-white/5 hover:bg-gold-400 hover:text-black text-[#f5eae4] transition-all cursor-pointer focus:outline-none border border-white/10"
            id="shopping-bag-icon-btn"
            title="Open Luxury Cart"
          >
            <ShoppingBag className="h-4 w-4" />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-none bg-gold-400 text-[9px] font-black text-black border border-black"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile Hamburguer Drawer Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-none bg-white/5 hover:bg-gold-400 hover:text-black border border-white/10 text-white md:hidden cursor-pointer focus:outline-none"
            id="mobile-menu-burger"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Slide-in */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-gold-500/10 bg-black md:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-2 p-5">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActivePage(item.id);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-3 text-left font-sans text-xs font-semibold tracking-widest uppercase rounded-none transition-colors cursor-pointer focus:outline-none ${
                      isActive ? 'bg-gold-950/40 text-gold-400 border-l-2 border-gold-400' : 'text-nude-200 hover:bg-white/5'
                    }`}
                    id={`mobile-nav-${item.id}`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={() => {
                  setActivePage('booking');
                  setIsOpen(false);
                }}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-none bg-gold-400 py-3 text-xs font-bold text-black uppercase hover:bg-gold-300 transition-colors cursor-pointer"
                id="mobile-quick-book-btn"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
