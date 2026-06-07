import React, { useState } from 'react';
import { Search, Play, Pause, Calendar, Clock, User, ArrowLeft, MessageSquare, Send, CheckCircle, Sparkles, Film, Heart, Share2, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CEO_INFO } from '../data';

interface BlogPost {
  id: string;
  title: string;
  category: 'Beauty Trends' | 'Skincare Advice' | 'Self-Care Routines' | 'Product Spotlight';
  author: string;
  readTime: string;
  publishDate: string;
  image: string;
  videoUrl?: string;
  summary: string;
  likes: number;
  views: number;
  tags: string[];
  content: string[];
}

const INITIAL_POSTS: BlogPost[] = [
  {
    id: 'b-1',
    title: 'The Art of the 24K Gold Polish',
    category: 'Self-Care Routines',
    author: 'Onyeachie Daniel',
    readTime: '4 Mins',
    publishDate: 'June 05, 2026',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-skin-care-routine-of-a-beautiful-woman-43301-large.mp4',
    summary: 'Uncover the centuries-old secrets of organic gold exfoliation, cellular skin repair, and lymphatic circulation at our Victoria Island Sanctuary.',
    likes: 124,
    views: 450,
    tags: ['Gold Therapy', 'Exfoliation', 'Victoria Island', 'Wellness Rituals'],
    content: [
      'In the realm of grand cosmetology, few substances are held in such high-prized spiritual regard as pure gold. At FOC, we have transformed standard dermal scraping into a majestic 24K Gold Polish ritual designed to optimize both physical dermis breathing and psychological quietness.',
      'Our physical procedure centers around raw botanical active binders. We commence by steaming the skin contours with organic lavender and eucalyptus vapor, expanding the pores gently to permit cellular dust extraction. This is immediately followed by applying our high-grade mineral and brown sugar scrub scrub infused with micro-pulverized gold flakes.',
      'Why gold? Gold acts as a natural biocompatible catalyst. It stimulates cellular microcirculation, aiding the lymphatic framework in expelling daily metabolic gridlock. Underneath, young collagen and elastin layers wake up, returning a radiant glow to your complexion that lasts for up to ten days post-treatment.',
      'To experience this pristine ritual to its absolute capacity, we suggest reserving our Signature Suite 204 private cabin. Let yourself drift away on heated massage pads while our lead aesthetic team administers customized dermal pampering paired with refreshing non-alcoholic mocktail sips.'
    ]
  },
  {
    id: 'b-2',
    title: 'Unveiling Empress HD Lace Mastery',
    category: 'Product Spotlight',
    author: 'Onyeachie Daniel',
    readTime: '3 Mins',
    publishDate: 'May 28, 2026',
    image: 'https://images.unsplash.com/photo-1522337094326-98755044d168?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-touching-her-healthy-hair-43407-large.mp4',
    summary: 'Our signature Empress lace melt. Discover why premium Swiss HD lace is the ultimate investment for an undetectable, queen-like crown.',
    likes: 98,
    views: 312,
    tags: ['HD Lace', 'Virgin Hair', 'Elite Wigs', 'Empress Crown'],
    content: [
      'An empress is defined by her crown. In the current luxury hair marketplace, achieving absolute design realism requires more than default synthetic fibers. It demands raw, masterfully aligned human virgin hair meticulously knotted into an undetectable, glass-thin lace skin.',
      'Standard Swiss laces often leave behind noticeable white cast lines or feel rigid against sensitive scalp lines. At FOC, our newly launched Empress HD Lace series utilizes hyper-transparent, thin-grade Swiss gauze that is virtually translucent under high-definition cameras.',
      'Each wig item undergoes eighty hours of hand-ventilated crafting. Each individual follicle is double-knotted with correct physical directional orientation, which allows you to part your crown freely—whether high-pony sweeps, dramatic center splits, or delicate braided configurations.',
      'To safeguard this precious asset, our custom packages come wrapped inside high-density, gold-stamped silk lining storage drawers. Read further to see our custom wash guides and essential botanical oil hair sprays developed to preserve healthy, silky shine.'
    ]
  },
  {
    id: 'b-3',
    title: 'Meltdown: The Volcanic Stone Ritual',
    category: 'Self-Care Routines',
    author: 'Onyeachie Daniel',
    readTime: '5 Mins',
    publishDate: 'May 15, 2026',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
    summary: 'How heated basalt volcanic elements realign deep energy meridians to completely eliminate psychological stress and modern fatigue.',
    likes: 145,
    views: 520,
    tags: ['Volcanic Rock', 'Chakra Balance', 'Deep Tissue', 'Lagos Spa'],
    content: [
      'Stress is not merely a mental condition; it is a physical accumulation of metabolic tension within the fascia. When conventional soft massage strokes are not enough to reach dense, rigid knot systems, we look back to ancient geology.',
      'Our Hot Stone Ritual employs authentic, hand-gathered volcanic basalt stones. These dense rocks are prized for their high iron content, which permits them to retain a constant therapeutic temperature. They are heated at a precise, skin-safe water climate and coated in cold-pressed sweet almond oil.',
      'By placing these thermal elements systematically along your spine, palms, and chakra points, heat penetrates up to five centimeters into the muscle fibers. This heat expansion relaxes rigid blood vessels, multiplying fresh oxygen delivery while releasing locked nerve signals in the brain.',
      'We complete this thermal experience with slow, deep-tissue sliding techniques and soothing lavender aromatherapy drops, delivering a deep sensation of weightlessness.'
    ]
  },
  {
    id: 'b-4',
    title: 'Adaptive Hydration for Coastal Climes',
    category: 'Skincare Advice',
    author: 'Onyeachie Daniel',
    readTime: '4 Mins',
    publishDate: 'April 30, 2026',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-skin-treatment-oil-dropper-close-up-45731-large.mp4',
    summary: 'As the Atlantic moisture sweeps over Lagos, adapt your skin regime: A definitive guide to barrier-safe mud exfoliation.',
    likes: 112,
    views: 398,
    tags: ['Coals Climes', 'Moisturizers', 'Lagos Heat', 'Hydration Guide'],
    content: [
      'Living in coastal areas like Victoria Island brings unique benefits, but it also subjects your precious skin to constant ocean salt, high humidity, and sun radiation. Default heavy creams usually lock in moisture, but they can easily clog pores in coastal climates.',
      'To maintain that desired matte yet brilliantly radiant gold glow, we advise shifting toward biocompatible hyaluronic gel serums. These absorb instantly into the skin without adding heavy, pore-blocking oil matrices.',
      'We recommend exfoliating twice a week with a mineral clay scrub. This gently lifts away ambient sand particles and excess sebum, letting your skin cells breathe. Follow this with high-performance botanical toners to keep your skin refreshed and balanced.',
      'At FOC, we tailor our high-frequency facials to match individual humidity exposure. Meet with our on-site estheticians to design a customized botanical skin guide.'
    ]
  },
  {
    id: 'b-5',
    title: 'Noire Gold: Decanting True Allure',
    category: 'Product Spotlight',
    author: 'Onyeachie Daniel',
    readTime: '3 Mins',
    publishDate: 'April 18, 2026',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800',
    summary: 'Step behind our premium formulation desk with French masters to understand the sensual black orchid chemistry behind Noire Gold.',
    likes: 85,
    views: 290,
    tags: ['Eau De Parfum', 'Luxury Scent', 'Orchid Absolute', 'French Formulations'],
    content: [
      'A true luxury fragrance is not just about smell; it is a signature of your confidence. Our newly decanted Noire Gold Eau De Parfum is designed to evoke absolute sophistication and poise.',
      'Developed alongside expert French perfumers, the opening notes feature deep wild plum paired with spicy golden saffron. The fragrance slowly settles into rare black orchid absolute, followed by sweet absolute vanilla and warm cedarwood.',
      'Unlike low-concentration colognes, Noire Gold is an intense Eau De Parfum. It projects beautifully and lingers elegantly on skin and fine satin linens for up to twenty-four hours.',
      'We invite you to experience the elegant Noire Gold collection at our Victoria Island showroom lobby, or order a sovereign sample bottle alongside any active product order.'
    ]
  },
  {
    id: 'b-6',
    title: 'The Graceful Minimalism of Fine Line Ink',
    category: 'Beauty Trends',
    author: 'Onyeachie Daniel',
    readTime: '5 Mins',
    publishDate: 'March 12, 2026',
    image: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800',
    summary: 'Delicate, permanent, poetic. Discover the artistic resurgence of ultra-thin geometric stencil tattoos defining contemporary luxury statement.',
    likes: 130,
    views: 480,
    tags: ['Fine Line Tattoo', 'Minimalist Ink', 'Body Art', 'Sterile Beauty'],
    content: [
      'Tattoo art has transitioned from alternative subcultures into high-end beauty. High-society clients now request delicate, minimalist body art as an elegant fashion statement.',
      'FOC of Confidence hosts a pristine, medical-level sterile parlor. We utilize imported charcoal ink with microscopic single-needles, keeping skin trauma virtually non-existent.',
      'Whether you are looking for thin geometric bands, delicate script lettering, or minimal botanical silhouettes, our resident artists customize each design with pristine care.',
      'Fine line tattooing requires proper aftercare. We provide complimentary natural oils with every session to ensure perfect healing and crisp, beautiful lines.'
    ]
  }
];

interface Comment {
  id: string;
  author: string;
  text: string;
  date: string;
  avatar?: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_POSTS);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  // Custom video player states
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // Comments state managed interactively per post
  const [commentsMap, setCommentsMap] = useState<Record<string, Comment[]>>({
    'b-1': [
      { id: 'c-1', author: 'Genevieve Carter', text: 'This facial is absolutely glorious! I get it before my fashion events and the glow is spectacular.', date: '1 day ago' },
      { id: 'c-2', author: 'Dr. Evelyn Peters', text: 'Stunning breakdown of the skin cellular response to gold minerals. Spot on!', date: '3 days ago' }
    ]
  });
  
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  const categories = ['All', 'Beauty Trends', 'Skincare Advice', 'Self-Care Routines', 'Product Spotlight'];

  // Handle Like count toggling
  const handleLikePost = (postId: string) => {
    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        // Toggle view logic
        return { ...p, likes: p.likes + 1 };
      }
      return p;
    }));
    if (selectedPost && selectedPost.id === postId) {
      setSelectedPost(prev => prev ? { ...prev, likes: prev.likes + 1 } : null);
    }
  };

  // Comments submit handler
  const handleAddComment = (e: React.FormEvent, postId: string) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) return;

    const newComment: Comment = {
      id: `c-custom-${Date.now()}`,
      author: newCommentName,
      text: newCommentText,
      date: 'Just now'
    };

    setCommentsMap(prev => ({
      ...prev,
      [postId]: [newComment, ...(prev[postId] || [])]
    }));

    setNewCommentName('');
    setNewCommentText('');
    setCommentSubmitted(true);
    setTimeout(() => setCommentSubmitted(false), 3000);
  };

  // Filtering Logic
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 font-sans text-white">
      
      {/* 1. Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-gold-400 text-[10px] font-bold tracking-[0.4em] uppercase">
          <Sparkles className="h-4.5 w-4.5" />
          <span>FOC LUXURY ARCHIVES</span>
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl font-normal text-white mt-4 mb-6 tracking-tight leading-none uppercase">
          The Journal <span className="italic font-light text-gold-400">of</span> Grace
        </h1>
        <p className="text-sm leading-relaxed text-white/70 font-light tracking-wide max-w-2xl mx-auto">
          Delve into beauty innovations, master skincare guidelines, organic self-care rituals, and hotspots of high-end cosmetic styling. Handcrafted weekly by FOC Specialists.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Post list with categories and search */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Quick Category Tab Bar + Search Input */}
          <div className="space-y-6 bg-[#0c0c0c] border border-white/10 p-6 rounded-none">
            
            {/* Search inputs */}
            <div className="relative">
              <Search className="absolute left-4 top-3.5 h-4.5 w-4.5 text-white/30" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search beauty trends, self-care routines, or specific tags..."
                className="w-full rounded-none bg-[#0a0a0a] border border-white/10 pl-11 pr-4 py-3 text-xs text-white placeholder-white/25 focus:border-gold-400 focus:outline-none transition font-light"
                id="blog-search-bar"
              />
            </div>

            {/* Elegant categories */}
            <div className="flex flex-wrap gap-2 pt-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-none text-[9px] font-bold tracking-[0.2em] uppercase transition cursor-pointer focus:outline-none ${
                      isActive
                        ? 'bg-gold-400 text-black font-black'
                        : 'bg-[#0a0a0a] border border-white/5 text-white/50 hover:bg-gold-400/10 hover:text-gold-400'
                    }`}
                    id={`blog-category-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Posts list grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-[#0c0c0c] border border-white/10 p-10 rounded-none">
              <Film className="h-10 w-10 text-gold-400/40 mx-auto mb-4 animate-pulse" />
              <h3 className="font-serif text-lg font-normal uppercase tracking-wider text-white">No Articles Discovered</h3>
              <p className="text-xs text-white/50 mt-2 font-light">We could not locate any aesthetic entries matching your specifications. Please revise search query.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-6 px-6 py-3 bg-gold-400 text-black text-xs font-bold tracking-widest uppercase hover:bg-gold-300 transition rounded-none"
              >
                Reset Criteria
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => {
                const showVideoPlay = !!post.videoUrl;
                return (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="group border border-white/10 bg-[#0c0c0c] hover:border-gold-400/40 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer overflow-hidden"
                    onClick={() => {
                      setSelectedPost(post);
                      setIsVideoPlaying(false);
                      setCommentSubmitted(false);
                      // Track Simulated View increase
                      setPosts(prev => prev.map(p => p.id === post.id ? { ...p, views: p.views + 1 } : p));
                    }}
                    id={`blog-post-card-${post.id}`}
                  >
                    <div>
                      {/* Image Frame */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-black select-none">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        {/* Interactive overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                        
                        {/* Video indication */}
                        {showVideoPlay && (
                          <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/85 border border-gold-400/30 px-2 py-1 text-[8px] font-bold text-gold-400 tracking-widest uppercase">
                            <Film className="h-3 w-3 animate-pulse" />
                            <span>HD VIDEO</span>
                          </div>
                        )}

                        <span className="absolute bottom-3 left-3 text-[8px] font-bold uppercase tracking-widest bg-gold-400 text-black px-2 py-0.5">
                          {post.category}
                        </span>
                      </div>

                      {/* Info Block */}
                      <div className="p-6 space-y-3.5">
                        <div className="flex items-center gap-4 text-[9px] text-white/40 uppercase tracking-widest">
                          <span className="flex items-center gap-1 font-semibold text-gold-400">
                            <Calendar className="h-3 w-3" />
                            {post.publishDate}
                          </span>
                          <span className="flex items-center gap-1 font-light">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="font-serif text-xl font-normal uppercase text-white group-hover:text-gold-400 transition-colors tracking-wide leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-xs leading-relaxed text-white/60 font-light line-clamp-3">
                          {post.summary}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Status panel */}
                    <div className="px-6 pb-6 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] uppercase tracking-widest text-white/40 font-semibold group-hover:bg-[#0f0f0f] transition">
                      <div className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5 text-gold-400" />
                        <span>By {post.author}</span>
                      </div>
                      
                      <div className="flex items-center gap-3.5">
                        <span className="flex items-center gap-0.5 hover:text-rose-400 transition cursor-pointer" onClick={(e) => {
                          e.stopPropagation();
                          handleLikePost(post.id);
                        }}>
                          <Heart className="h-3.5 w-3.5 fill-current text-rose-500" />
                          <span className="font-mono text-[9px] text-white/50">{post.likes}</span>
                        </span>
                        <span className="flex items-center gap-0.5">
                          <Eye className="h-3.5 w-3.5 text-white/30" />
                          <span className="font-mono text-[9px] text-white/50">{post.views}</span>
                        </span>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          )}

        </div>

        {/* Right Sidebar Column */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Spotlight Spotlight card */}
          <div className="border border-white/10 bg-[#0c0c0c] p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-bold block">EDITORIAL DESK</span>
              <Sparkles className="h-3.5 w-3.5 text-gold-400" />
            </div>

            <div className="text-center space-y-4">
              <img
                src={CEO_INFO.image}
                alt={CEO_INFO.name}
                className="h-28 w-28 object-cover border-2 border-gold-400 mx-auto select-none"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="font-serif text-lg font-light text-white uppercase tracking-wider">{CEO_INFO.name}</h4>
                <p className="text-[9px] text-gold-400 uppercase font-bold tracking-[0.15em] mt-1">{CEO_INFO.title}</p>
              </div>
              <blockquote className="text-xs italic text-white/60 leading-relaxed font-serif max-w-xs mx-auto">
                &ldquo;Self-care is a sovereign oath. The Luxury Archives serve to document this transformational passage.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* Elegant email sign-up */}
          <div className="p-6 bg-[#0a0a0a] border border-white/10 space-y-4 text-center">
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-gold-400 block pb-1 border-b border-white/5">ARCHIVE DISPATCHES</span>
            <h4 className="font-serif text-xl font-normal text-white uppercase tracking-wider">Join FOC Privilege List</h4>
            <p className="text-xs text-white/50 leading-relaxed font-light">
              Receive notifications for newly published aesthetic articles, fragrance drops, and suite reservation slot updates directly across Lagos.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="rounded-none bg-gold-400/10 p-4 text-gold-400 border border-gold-400/30 text-xs text-center"
              >
                <CheckCircle className="h-6 w-6 text-gold-400 mx-auto mb-2" />
                <span className="font-bold uppercase tracking-wider">Coordinates Registered</span>
              </motion.div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (newsletterEmail.trim()) setSubscribed(true); }} className="space-y-3">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter luxury email address"
                  className="w-full rounded-none bg-[#0c0c0c] border border-white/10 px-4 py-3 text-xs text-center text-white placeholder-white/20 focus:border-gold-400 focus:outline-none font-light"
                  id="blog-sidebar-newsletter-email"
                />
                <button
                  type="submit"
                  className="w-full rounded-none bg-gold-400 py-3 text-xs font-bold tracking-[0.15em] text-black uppercase hover:bg-gold-300 transition duration-300 cursor-pointer"
                  id="blog-newsletter-submit"
                >
                  SUBSCRIBE AUTONOMOUSLY
                </button>
              </form>
            )}
          </div>

          {/* Popular Tags cloud */}
          <div className="border border-white/10 bg-[#0c0c0c] p-6 space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-white">Popular Topic Tags</h4>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['HD Lace', 'Gold Therapy', 'Wellness Rituals', 'Victoria Island', 'Lagos Spa', 'Orchid Absolute', 'Body Art', 'Hydration Guide'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="text-[9px] bg-[#0a0a0a] border border-white/5 text-white/60 px-3 py-1.5 hover:text-gold-400 hover:border-gold-400/30 transition cursor-pointer uppercase tracking-wider font-semibold"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* 2. LIGHT BOX INTERACTIVE ARTICLE READER */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8"
            id="blog-lightbox-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="relative w-full max-w-4xl bg-[#0c0c0c] border border-white/15 overflow-hidden shadow-2xl flex flex-col md:flex-row h-fit max-h-[90vh]"
              id="blog-article-modal"
            >
              
              {/* Left frame: Image / Premium Video Player */}
              <div className="w-full md:w-1/2 bg-black relative flex flex-col justify-center min-h-[300px] md:min-h-full">
                
                {postHasVideo(selectedPost) ? (
                  /* PREMIUM VIDEO LOOP WITH CONTROLS */
                  <div className="relative w-full h-full min-h-[300px] flex items-center bg-black">
                    <video
                      id="blog-media-player"
                      className="absolute inset-0 w-full h-full object-cover select-none"
                      src={selectedPost.videoUrl}
                      loop
                      muted
                      playsInline
                      autoPlay={isVideoPlaying}
                    />
                    
                    {/* Dark aesthetic backdrop filter when paused */}
                    {!isVideoPlaying && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <button
                          onClick={() => {
                            setIsVideoPlaying(true);
                            const vidElement = document.getElementById('blog-media-player') as HTMLVideoElement;
                            if (vidElement) vidElement.play();
                          }}
                          className="h-16 w-16 bg-gold-400 hover:bg-gold-300 rounded-none border border-black text-black flex items-center justify-center transition cursor-pointer shadow-xl shadow-gold-500/10"
                        >
                          <Play className="h-8 w-8 fill-current translate-x-0.5" />
                        </button>
                      </div>
                    )}

                    {/* Interactive video banner panel overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs bg-black/80 px-4 py-2 border border-white/10 backdrop-blur-md z-10">
                      <span className="text-gold-400 uppercase font-bold tracking-widest text-[9px] flex items-center gap-1">
                        <Film className="h-3.5 w-3.5" /> Live Therapy Tutorial
                      </span>
                      <button
                        onClick={() => {
                          const vidElement = document.getElementById('blog-media-player') as HTMLVideoElement;
                          if (vidElement) {
                            if (isVideoPlaying) {
                              vidElement.pause();
                              setIsVideoPlaying(false);
                            } else {
                              vidElement.play();
                              setIsVideoPlaying(true);
                            }
                          }
                        }}
                        className="text-[9px] uppercase font-bold tracking-wider text-white hover:text-gold-400 font-mono"
                      >
                        {isVideoPlaying ? 'PAUSE LOOP' : 'PLAY LOOP'}
                      </button>
                    </div>
                  </div>
                ) : (
                  /* STANDARD GRAPHIC HERO IMAGE */
                  <div className="relative w-full h-full min-h-[300px] bg-black">
                    <img
                      src={selectedPost.image}
                      alt={selectedPost.title}
                      className="absolute inset-0 w-full h-full object-cover select-none"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-black/10 to-transparent" />
                  </div>
                )}

                {/* Close Button on mobile inside graphic */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 left-4 bg-black/90 p-2 border border-white/10 hover:text-gold-400 cursor-pointer block md:hidden z-10"
                >
                  <ArrowLeft className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* Right frame: Detailed text content scroll pane */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh] md:max-h-[90vh] space-y-8 text-left">
                
                {/* Header panel */}
                <div className="space-y-4">
                  
                  {/* Top status bar with close buttons */}
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] uppercase font-bold tracking-[0.2em] bg-gold-400 text-black px-2 py-0.5">
                      {selectedPost.category}
                    </span>
                    <button
                      onClick={() => setSelectedPost(null)}
                      className="bg-white/5 border border-white/10 hover:border-gold-400 hover:text-gold-400 px-3 py-1.5 text-[9px] font-bold tracking-widest uppercase transition cursor-pointer"
                      id="close-lightbox-btn"
                    >
                      CLOSE READER
                    </button>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white uppercase tracking-tight leading-tight pt-1">
                    {selectedPost.title}
                  </h2>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] uppercase tracking-widest text-white/40 border-b border-white/10 pb-4 font-semibold">
                    <span className="flex items-center gap-1 font-bold text-gold-400">
                      <Calendar className="h-3.5 w-3.5" /> {selectedPost.publishDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {selectedPost.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-3.5 w-3.5" /> By {selectedPost.author}
                    </span>
                  </div>

                  {/* Article main text */}
                  <div className="space-y-4 text-xs font-light text-white/80 leading-relaxed tracking-wide pt-2">
                    {selectedPost.content.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  {/* Liked state widget */}
                  <div className="pt-4 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {selectedPost.tags.map((tag) => (
                        <span key={tag} className="text-[9px] text-white/40 bg-white/5 border border-white/5 px-2 py-1 uppercase font-semibold">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => handleLikePost(selectedPost.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[10px] font-bold uppercase tracking-wider hover:bg-rose-500/20 transition cursor-pointer rounded-none"
                    >
                      <Heart className="h-3.5 w-3.5 fill-current text-rose-500 animate-pulse" />
                      <span>{selectedPost.likes} Likes</span>
                    </button>
                  </div>

                </div>

                {/* Live Comments Form & Feed Block */}
                <div className="border-t border-white/10 pt-6 space-y-5">
                  <div className="flex items-center gap-1.5">
                    <MessageSquare className="h-4.5 w-4.5 text-gold-400" />
                    <h3 className="font-serif text-lg font-normal uppercase tracking-wider text-white">Live Comments Inbox</h3>
                  </div>

                  {/* Alert panel for success feedback */}
                  {commentSubmitted && (
                    <div className="text-[10px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-2.5 text-center font-semibold uppercase tracking-wider">
                      Consultation Comment Saved Safely
                    </div>
                  )}

                  {/* Comments inputs */}
                  <form onSubmit={(e) => handleAddComment(e, selectedPost.id)} className="space-y-3.5 bg-[#0a0a0a] p-4.5 border border-white/5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        value={newCommentName}
                        onChange={(e) => setNewCommentName(e.target.value)}
                        placeholder="Guest Name (e.g. Genevieve)"
                        className="rounded-none bg-[#0c0c0c] border border-white/10 p-2.5 text-xs text-white placeholder-white/20 focus:border-gold-400 focus:outline-none focus:ring-0 font-light"
                      />
                    </div>
                    <textarea
                      required
                      value={newCommentText}
                      onChange={(e) => setNewCommentText(e.target.value)}
                      placeholder="Share your beauty opinions, skincare inquiries, and self-care questions..."
                      rows={2}
                      className="w-full rounded-none bg-[#0c0c0c] border border-white/10 p-2.5 text-xs text-white placeholder-white/20 focus:border-gold-400 focus:outline-none focus:ring-0 font-light"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-none bg-gold-400 py-2.5 text-xs font-bold tracking-widest text-black uppercase hover:bg-gold-300 transition duration-300 cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Send className="h-3.5 w-3.5" />
                      SUBMIT FEEDBACK
                    </button>
                  </form>

                  {/* Active list feed */}
                  <div className="space-y-3 max-h-48 overflow-y-auto scrollbar-none">
                    {(commentsMap[selectedPost.id] || []).length === 0 ? (
                      <p className="text-[10px] text-white/30 italic text-center">No client inquiries submitted yet. Be the first!</p>
                    ) : (
                      (commentsMap[selectedPost.id] || []).map((comm) => (
                        <div key={comm.id} className="p-3 bg-white/[0.01] border border-white/5 space-y-1.5 text-left">
                          <div className="flex items-center justify-between text-[9px] uppercase tracking-wider">
                            <span className="font-bold text-gold-400">{comm.author}</span>
                            <span className="text-white/30 font-semibold">{comm.date}</span>
                          </div>
                          <p className="text-xs font-light text-white/70 leading-relaxed">
                            {comm.text}
                          </p>
                        </div>
                      ))
                    )}
                  </div>

                </div>

              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

function postHasVideo(post: BlogPost): boolean {
  return !!post.videoUrl;
}
