import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, Plus, Minus, Trash2, X, CreditCard, Sparkles, Star, Package, Check } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product, CartItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface ShopProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

export default function Shop({ cart, setCart, isCartOpen, setIsCartOpen }: ShopProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Premium Wigs' | 'Luxury Perfumes' | 'Decorative Pillows' | 'Men\'s Luxury Boxers' | 'Luxury Footwear'>('All');
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  // Checkout states
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'Lagos',
    notes: ''
  });

  const categories: ('All' | 'Premium Wigs' | 'Luxury Perfumes' | 'Decorative Pillows' | 'Men\'s Luxury Boxers' | 'Luxury Footwear')[] = [
    'All',
    'Premium Wigs',
    'Luxury Perfumes',
    'Decorative Pillows',
    'Men\'s Luxury Boxers',
    'Luxury Footwear'
  ];

  // Match search filter + category selection
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
    // Open the cart globally to display immediate luxurious feedback
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, amount: number) => {
    setCart((prev) => {
      return prev.map(item => {
        if (item.product.id === productId) {
          const nextQ = item.quantity + amount;
          return nextQ > 0 ? { ...item, quantity: nextQ } : item;
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const handleRemoveItem = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  // Pricing math
  const subtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }, [cart]);

  const deliveryFee = subtotal > 200 ? 0 : 25; // Complimentary above $200
  const grandTotal = subtotal + deliveryFee;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (deliveryInfo.name && deliveryInfo.phone && deliveryInfo.address) {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
    }
  };

  const handleResetOrder = () => {
    setCart([]);
    setCheckoutComplete(false);
    setIsCartOpen(false);
    setDeliveryInfo({ name: '', phone: '', address: '', city: 'Lagos', notes: '' });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 font-sans text-nude-100">
      
      {/* 1. Header Hero section */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 text-gold-400 text-[10px] font-bold tracking-[0.4em] uppercase">
          <ShoppingBag className="h-4.5 w-4.5" />
          <span>FOC COUTURE LINE</span>
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl font-normal text-white mt-3 mb-6 tracking-tight leading-tight">
          The <span className="italic">Luxury</span> Curation
        </h1>
        <p className="text-sm leading-relaxed text-white/70 font-light tracking-wide">
          Bespoke 100% human virgin wigs, majestic French blended parfums, silk satin sheets, and elite fashion accessories hand-selected by our founder.
        </p>
      </div>

      {/* 2. Control Row: Filters & Search */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-3 rounded-none text-[10px] font-bold tracking-[0.2em] uppercase transition-all whitespace-nowrap cursor-pointer focus:outline-none border ${
                selectedCategory === category
                  ? 'bg-gold-400 text-black border-gold-400'
                  : 'bg-[#0A0A0A] border-white/10 text-white/70 hover:border-gold-400 hover:text-white'
              }`}
              id={`shop-tab-${category.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Text Search element */}
        <div className="relative min-w-[280px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/45" />
          <input
            type="text"
            placeholder="Search wigs, fragrance notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-none bg-[#0A0A0A] border border-white/10 pl-10 pr-4 py-3.5 text-xs text-white placeholder-white/40 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30 transition-all font-light"
            id="product-search-input"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gold-400 hover:text-white font-bold"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* 3. Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 rounded-none border border-white/10 bg-[#0c0c0c]">
          <Package className="h-10 w-10 text-gold-400/50 mx-auto mb-4" />
          <h3 className="font-serif text-lg font-bold text-gold-400 uppercase tracking-wider">No Curation Matches</h3>
          <p className="text-xs text-white/50 max-w-md mx-auto mt-2 font-light">
            We couldn't locate any products matching your specific query. Try adjusting your categories or spellcheck.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => {
            const isHovered = hoveredProductId === product.id;
            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(null)}
                className="group flex flex-col justify-between overflow-hidden rounded-none border border-white/10 bg-[#0c0c0c] p-5 transition-all duration-300 hover:border-gold-400/40 hover:-translate-y-0.5"
              >
                <div>
                  {/* Image Holder */}
                  <div className="relative aspect-square overflow-hidden rounded-none bg-neutral-950">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Floating gold stars badge for high-rating */}
                    {product.rating >= 4.9 && (
                      <div className="absolute top-3 left-3 flex items-center gap-1 rounded-none bg-gold-400 px-2.5 py-1 text-[8px] font-black text-black uppercase tracking-wider">
                        <Star className="h-3 w-3 fill-current text-white" />
                        Best Seller
                      </div>
                    )}
                  </div>

                  {/* Brand Category & Star Score */}
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-gold-400">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-current text-gold-400" />
                      <span className="text-[10px] font-bold text-white/70">{product.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Name Title */}
                  <h3 className="mt-1.5 font-serif text-2xl font-light text-white leading-snug group-hover:text-gold-400 transition-colors">
                    {product.name}
                  </h3>

                  {/* Description body */}
                  <p className="mt-2.5 text-xs text-white/60 leading-relaxed font-light">
                    {product.description}
                  </p>
                </div>

                {/* Purchase Button Frame */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-bold text-white/30 block uppercase tracking-wider">Bespoke price</span>
                    <span className="font-serif text-2xl font-normal text-gold-400">${product.price}</span>
                  </div>
                  
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center justify-center gap-1.5 rounded-none bg-gold-400 px-5 py-3 text-[10px] font-bold tracking-[0.15em] text-black uppercase hover:bg-gold-300 transition duration-300 cursor-pointer"
                    id={`buy-${product.id}`}
                  >
                    <Plus className="h-3.5 w-3.5" />
                    ADD TO CART
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 4. Global Sliding Shopping Cart Drawer Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="relative z-50">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!isCheckingOut) setIsCartOpen(false);
              }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Panel slider */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-[#0A0A0A] border-l border-white/10 shadow-2xl"
            >
              
              {/* Header Box */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-gold-400" />
                  <h2 className="font-serif text-xl font-normal text-gold-400 uppercase tracking-widest">The Elegance Bag</h2>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="rounded-none bg-white/5 p-2.5 border border-white/10 hover:bg-gold-400 hover:text-black transition-colors cursor-pointer focus:outline-none"
                  id="close-cart-drawer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Dynamic View switching based on state */}
              {checkoutComplete ? (
                /* CHECKOUT SUCCESS RECEIPT SCREEN */
                <div className="flex flex-1 flex-col items-center justify-center p-8 text-center font-sans">
                  <div className="flex h-16 w-16 items-center justify-center rounded-none bg-gold-400/15 border border-gold-400 text-gold-400 animate-bounce mb-6">
                    <Check className="h-8 w-8 text-gold-400" />
                  </div>
                  <h3 className="font-serif text-2xl font-light text-white uppercase tracking-wider">Order Dispatched</h3>
                  <p className="mt-2 text-[9px] text-gold-400 tracking-[0.2em] uppercase font-bold">FOC E-Shop Elite Club</p>
                  
                  <div className="w-full mt-8 p-5.5 rounded-none bg-white/[0.02] border border-white/10 text-left text-xs space-y-3">
                    <p className="text-white/40 uppercase tracking-widest text-[9px] font-bold border-b border-white/10 pb-2">Delivery Summary</p>
                    <div className="flex justify-between"><span className="text-white/50">Client Name:</span> <span className="font-semibold text-white">{deliveryInfo.name}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Phone Node:</span> <span className="text-white">{deliveryInfo.phone}</span></div>
                    <div className="flex justify-between"><span className="text-white/50">Address Hub:</span> <span className="text-white/90 text-right font-light italic max-w-[200px]">{deliveryInfo.address}, {deliveryInfo.city}</span></div>
                    <div className="flex justify-between border-t border-white/10 pt-3 font-semibold text-gold-300"><span className="text-white">Total Charge:</span> <span>${grandTotal}</span></div>
                  </div>

                  <p className="mt-6 text-xs text-white/50 leading-relaxed font-light max-w-sm">
                    Thank you for shopping with FOC Beauty World. Our boutique dispatch department will contact you over WhatsApp or phone to confirm the delivery hour within Victoria Island.
                  </p>

                  <button
                    onClick={handleResetOrder}
                    className="mt-8 flex w-full items-center justify-center rounded-none bg-gold-400 py-3.5 text-xs font-bold tracking-[0.2em] text-black uppercase hover:bg-gold-300 transition duration-300 cursor-pointer"
                    id="checkout-success-continue"
                  >
                    CONTINUE CURATION EXPLORATION
                  </button>
                </div>

              ) : isCheckingOut ? (
                /* ACTIVE BILLING SHIPPING FORM */
                <form onSubmit={handleCheckoutSubmit} className="flex flex-1 flex-col justify-between p-6 overflow-y-auto">
                  <div className="space-y-6">
                    <div className="border-b border-white/10 pb-4">
                      <h3 className="font-serif text-xl font-normal text-white uppercase tracking-wider">Elite Dispatch Logistics</h3>
                      <p className="text-xs text-white/50 font-light mt-1">Please provide delivery coordinates to calculate secure transport courier routing.</p>
                    </div>

                    <div className="space-y-4 text-xs">
                      {/* Name input */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="font-bold tracking-[0.15em] uppercase text-white/50 text-[9px]">Consignee Full Name</label>
                        <input
                          type="text"
                          required
                          value={deliveryInfo.name}
                          onChange={(e) => setDeliveryInfo({ ...deliveryInfo, name: e.target.value })}
                          className="rounded-none bg-[#0A0A0A] border border-white/10 p-3 text-white focus:border-gold-400/50 focus:outline-none placeholder-white/20 font-light text-xs"
                          placeholder="e.g. Genevieve Carter"
                        />
                      </div>

                      {/* Phone input */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="font-bold tracking-[0.15em] uppercase text-white/50 text-[9px]">WhatsApp / Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={deliveryInfo.phone}
                          onChange={(e) => setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })}
                          className="rounded-none bg-[#0A0A0A] border border-white/10 p-3 text-white focus:border-gold-400/50 focus:outline-none placeholder-white/20 font-light text-xs"
                          placeholder="e.g. +234 812 345 6789"
                        />
                      </div>

                      {/* Address area */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="font-bold tracking-[0.15em] uppercase text-white/50 text-[9px]">Delivery Estate & Suite Address</label>
                        <textarea
                          required
                          rows={3}
                          value={deliveryInfo.address}
                          onChange={(e) => setDeliveryInfo({ ...deliveryInfo, address: e.target.value })}
                          className="rounded-none bg-[#0A0A0A] border border-white/10 p-3 text-white focus:border-gold-400/50 focus:outline-none placeholder-white/20 font-light text-xs"
                          placeholder="Suite, building street address, Victoria Island / Lekki"
                        />
                      </div>

                      {/* Notes area */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="font-bold tracking-[0.15em] uppercase text-white/50 text-[9px]">Special Handling Instructions (Optional)</label>
                        <input
                          type="text"
                          value={deliveryInfo.notes}
                          onChange={(e) => setDeliveryInfo({ ...deliveryInfo, notes: e.target.value })}
                          className="rounded-none bg-[#0A0A0A] border border-white/10 p-3 text-white focus:border-gold-400/50 focus:outline-none placeholder-white/20 font-light text-xs"
                          placeholder="e.g. Leave with royal concierge, or fragile glass package handles"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Pricing and form buttons */}
                  <div className="mt-8 pt-4 border-t border-white/10 space-y-4">
                    <div className="space-y-2.5 text-xs text-white/60">
                      <div className="flex justify-between"><span>Luxury Items subotal:</span> <span className="font-serif text-white">${subtotal}</span></div>
                      <div className="flex justify-between"><span>Secured transport couriers:</span> <span className="font-serif text-white">{deliveryFee === 0 ? 'Complimentary' : `$${deliveryFee}`}</span></div>
                      <div className="flex justify-between font-bold text-gold-300 border-t border-white/10 pt-2 text-sm"><span>Total checkout sum:</span> <span className="font-serif font-bold">${grandTotal}</span></div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setIsCheckingOut(false)}
                        className="flex-1 rounded-none bg-[#0a0a0a] border border-white/10 py-3.5 text-xs font-bold tracking-widest text-white uppercase text-center hover:bg-white/5"
                      >
                        BACK TO CART
                      </button>
                      <button
                        type="submit"
                        className="flex-1 rounded-none bg-gold-400 py-3.5 text-xs font-bold tracking-widest text-black uppercase text-center hover:bg-gold-300 transition duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                        id="submit-checkout-form"
                      >
                        <CreditCard className="h-4 w-4" />
                        COMPLETE ORDER
                      </button>
                    </div>
                  </div>
                </form>

              ) : (
                 /* GENERAL CART CONTENT LIST */
                <div className="flex flex-1 flex-col justify-between p-6">
                  {cart.length === 0 ? (
                    <div className="flex flex-1 flex-col items-center justify-center text-center">
                      <ShoppingBag className="h-12 w-12 text-gold-400/40 mb-3" />
                      <h3 className="font-serif text-xl font-normal text-gold-400 uppercase tracking-widest">Your Bag Is Void</h3>
                      <p className="text-xs text-white/50 max-w-xs mx-auto mt-2 leading-relaxed font-light">
                        Add human wigs, signature gold perfumes, or luxurious satin pillows to initiate confidence empowerment.
                      </p>
                      <button
                        onClick={() => setIsCartOpen(false)}
                        className="mt-6 rounded-none border border-gold-400 bg-transparent px-5 py-2.5 text-[9px] font-bold tracking-[0.2em] text-gold-400 uppercase hover:bg-gold-400 hover:text-black transition cursor-pointer"
                      >
                        BROWSE SHOP OPTIONS
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Products List */}
                      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
                        {cart.map((item) => (
                          <div
                            key={item.product.id}
                            className="flex items-center gap-4 border-b border-white/5 pb-4"
                          >
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="h-16 w-16 rounded-none object-cover bg-neutral-900 border border-white/10 shrink-0"
                              referrerPolicy="no-referrer"
                            />
                            
                            <div className="flex-1 text-xs">
                              <h4 className="font-serif text-base font-normal text-white line-clamp-1">{item.product.name}</h4>
                              <p className="text-gold-400 mt-0.5 font-semibold font-serif">${item.product.price} each</p>
                              
                              <div className="mt-2.5 flex items-center justify-between">
                                {/* Quantity Toggles */}
                                <div className="flex items-center space-x-2 bg-[#0A0A0A] border border-white/15 rounded-none px-1 py-0.5">
                                  <button
                                    onClick={() => handleUpdateQuantity(item.product.id, -1)}
                                    className="p-1 hover:text-gold-400 transition"
                                  >
                                    <Minus className="h-3 w-3" />
                                  </button>
                                  <span className="text-[10px] font-bold px-1 text-white">{item.quantity}</span>
                                  <button
                                    onClick={() => handleUpdateQuantity(item.product.id, 1)}
                                    className="p-1 hover:text-gold-400 transition"
                                  >
                                    <Plus className="h-3 w-3" />
                                  </button>
                                </div>
 
                                {/* Trash */}
                                <button
                                  onClick={() => handleRemoveItem(item.product.id)}
                                  className="text-white/30 hover:text-red-400 p-1 cursor-pointer transition"
                                  title="Remove product"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
 
                      {/* Footer Totals */}
                      <div className="pt-4 border-t border-white/10 space-y-4">
                        <div className="space-y-2 text-xs text-white/60">
                          <div className="flex justify-between"><span>Items Subtotal:</span> <span className="font-serif text-white">${subtotal}</span></div>
                          <div className="flex justify-between"><span>Secured Courier Transport:</span> <span className="font-serif text-white">{deliveryFee === 0 ? 'Complimentary' : `$${deliveryFee}`}</span></div>
                          {deliveryFee > 0 && (
                            <p className="text-[9px] text-gold-400/80 italic text-right font-bold tracking-wider">ADD ${200 - subtotal} MORE FOR COMPLIMENTARY TRANSPORT.</p>
                          )}
                          <div className="flex justify-between font-bold text-gold-350 border-t border-white/10 pt-2 text-sm"><span>Total Bill:</span> <span className="font-serif font-black text-white">${grandTotal}</span></div>
                        </div>
 
                        {/* Order action button */}
                        <button
                          onClick={() => setIsCheckingOut(true)}
                          className="flex w-full items-center justify-center gap-1.5 rounded-none bg-gold-400 py-4 text-xs font-bold tracking-[0.2em] text-black uppercase hover:bg-gold-300 transition duration-300 cursor-pointer"
                          id="proceed-checkout-btn"
                        >
                          PROCEED TO SECURE COURIER CHECKOUT
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
