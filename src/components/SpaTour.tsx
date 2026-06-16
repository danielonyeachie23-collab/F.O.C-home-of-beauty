import React, { useRef, useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Maximize, 
  Calendar, 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  Volume1,
  Compass,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SpaTourProps {
  setActivePage: (page: string) => void;
}

export default function SpaTour({ setActivePage }: SpaTourProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showInteractionPrompt, setShowInteractionPrompt] = useState(true);

  // Auto-play on mount (browsers allow muted auto-play)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log('Autoplay blocked initially, waiting for user interaction:', error);
          setIsPlaying(false);
        });
    }
  }, []);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      // If we clicked play, we can safely attempt to unmute or at least respect current mute state
    }
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    const newMutedState = !isMuted;
    videoRef.current.muted = newMutedState;
    setIsMuted(newMutedState);
    if (showInteractionPrompt) {
      setShowInteractionPrompt(false);
    }
  };

  const handleUnmuteAndRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsMuted(false);
    setIsPlaying(true);
    setShowInteractionPrompt(false);
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 0;
    setCurrentTime(current);
    setProgress(total > 0 ? (current / total) * 100 : 0);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration || 0);
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const clickPercentage = clickX / width;
    const newTime = clickPercentage * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    setProgress(clickPercentage * 100);
  };

  const handleMaximize = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if ((videoRef.current as any).webkitRequestFullscreen) {
      (videoRef.current as any).webkitRequestFullscreen();
    } else if ((videoRef.current as any).msRequestFullscreen) {
      (videoRef.current as any).msRequestFullscreen();
    }
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Highlights and expect list of the FOC Spa
  const expectItems = [
    {
      title: "Cozy Luminescent Staging",
      desc: "Soft light ring therapy, tranquil blue/pink flora garlands, and positive affirmations in a private suite."
    },
    {
      title: "Specialized Facial Beds",
      desc: "Pristine white linens, customized neck pillows, and ergonomic designs to ensure physical relaxation."
    },
    {
      title: "Advanced Therapy Equipment",
      desc: "Clinical-grade LED face shields, multi-nozzle steaming stations, and premium skin treatment serums."
    },
    {
      title: "Professional Estheticians",
      desc: "Proactive care that meets global skin treatment, waxing, and massage standards."
    }
  ];

  return (
    <div className="min-h-screen bg-black font-sans text-nude-100 flex flex-col items-center">
      
      {/* Immersive Atmospheric Hero Header */}
      <section className="relative w-full overflow-hidden bg-black py-16 px-4 md:py-20 border-b border-gold-500/10">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-12 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-gold-400/5 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-amber-500/5 blur-[150px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-none border border-gold-400/20 bg-gold-950/20 px-4 py-2 text-[9px] font-bold tracking-[0.35em] text-gold-400 uppercase mb-5">
            <Sparkles className="h-3 w-3" />
            <span>FOC WORLD VIP SPA RETREAT</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white mb-4 lowercase">
            Step into the <span className="text-gold-400 italic">Sanctuary</span>
          </h1>
          
          <p className="mx-auto max-w-xl text-xs sm:text-sm text-white/60 font-light tracking-wide leading-relaxed">
            Welcome, darling. Tour our luxurious Lugbe sanctuary from the comfort of your screen. 
            Immerse yourself in areola lighting, professional treatment tables, and restorative skincare.
          </p>
        </div>
      </section>

      {/* Main Container - Center Cinematic Video Section */}
      <section className="w-full max-w-5xl px-4 sm:px-6 py-10 flex flex-col lg:flex-row gap-10 items-stretch">
        
        {/* Left hand Column: Interactive Theatre Box */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="relative w-full max-w-[420px] mx-auto aspect-[9/16] bg-[#0c0c0c] border border-gold-400/20 shadow-2xl overflow-hidden rounded-sm group/player transition-all duration-300 hover:border-gold-400/40">
            
            {/* Core HTML5 Video Tag */}
            <video
              ref={videoRef}
              src="/spa_video.mp4"
              loop
              playsInline
              webkit-playsinline="true"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className="w-full h-full object-cover"
              onClick={handlePlayPause}
            />

            {/* Glowing Ambient Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/40 pointer-events-none" />

            {/* Tap to Unmute Overlay Warning / Prompt */}
            <AnimatePresence>
              {showInteractionPrompt && isMuted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={handleUnmuteAndRestart}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-[2px] cursor-pointer z-20 p-6 text-center"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="h-16 w-16 flex items-center justify-center rounded-full bg-gold-400 text-black shadow-lg shadow-gold-500/20 mb-4"
                  >
                    <Volume2 className="h-7 w-7 animate-pulse" />
                  </motion.div>
                  <h4 className="font-serif text-lg font-light text-white uppercase tracking-wider mb-2">Unmute With Audio</h4>
                  <p className="text-[10px] text-gold-400 tracking-widest font-bold uppercase mb-1">TAP TO ENTER TOUR</p>
                  <p className="text-[11px] text-[#f5eae4]/60 font-light max-w-xs leading-normal">
                    Experience our premium spa ambiance with comforting high-fidelity audio enabled.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Subtle Playing indicator badge (glowing top rail) */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ${isPlaying ? 'block' : 'hidden'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white bg-black/50 border border-white/10 px-2 py-1 rounded-sm backdrop-blur-sm">
                {isPlaying ? "Exclusive Tour Live" : "Paused"}
              </span>
            </div>

            {/* Deluxe Media Controller HUD Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4.5 bg-gradient-to-t from-black via-black/90 to-transparent flex flex-col space-y-3 opacity-100 group-hover/player:opacity-100 transition-opacity duration-300 z-10">
              
              {/* Custom Double-layered scrub Progress Slider */}
              <div 
                onClick={handleProgressBarClick}
                className="relative h-1.5 w-full bg-white/15 cursor-pointer rounded-full overflow-hidden"
              >
                <div 
                  className="absolute top-0 left-0 h-full bg-gold-400 rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Controls bar */}
              <div className="flex items-center justify-between">
                
                {/* Left side actions */}
                <div className="flex items-center space-x-3.5">
                  <button
                    onClick={handlePlayPause}
                    className="text-white hover:text-gold-400 transition-colors focus:outline-none cursor-pointer"
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-current" />}
                  </button>

                  <button
                    onClick={handleRestart}
                    className="text-white/70 hover:text-white transition-colors focus:outline-none cursor-pointer"
                    title="Restart"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>

                  <div className="text-[10px] text-white/50 font-mono">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </div>

                {/* Right side actions */}
                <div className="flex items-center space-x-4">
                  {/* Volume indicators and toggler */}
                  <button
                    onClick={handleToggleMute}
                    className="text-white hover:text-gold-400 transition-colors focus:outline-none cursor-pointer"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="h-5 w-5 text-rose-400" />
                    ) : (
                      <Volume2 className="h-5 w-5 text-gold-400" />
                    )}
                  </button>

                  <button
                    onClick={handleMaximize}
                    className="text-white/60 hover:text-white transition-colors focus:outline-none cursor-pointer"
                    title="Open Fullscreen"
                  >
                    <Maximize className="h-4.5 w-4.5" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* Right hand Column: Welcoming description, What they will see, & Booking Invitation */}
        <div className="flex-1 lg:max-w-md flex flex-col justify-between py-2">
          
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-bold tracking-[0.3em] text-gold-400 block">THE ARCHITECTURE OF COMFORT</span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-light tracking-wide leading-tight">
                Authentic, Calming, and Decadently Royal
              </h2>
            </div>
            
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
              Every corner of our <strong>FOC World SPA</strong> was designed iteratively to construct physical comfort. 
              The video tour showcases the actual suite located at our Lugbe headquarters in Abuja. Here is a curated guide to what you should expect upon stepping inside:
            </p>

            {/* List of features with premium bullet blocks */}
            <div className="space-y-4 pt-1">
              {expectItems.map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="mt-1 h-5 w-5 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-4 animate-pulse duration-1000 w-4 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">{item.title}</h4>
                    <p className="text-[11px] text-white/50 font-light mt-0.5 leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Little physical highlight locator tag */}
            <div className="p-3 bg-white/5 border border-white/5 rounded-none flex items-center gap-3">
              <MapPin className="h-4.5 w-4.5 text-gold-400 shrink-0" />
              <div className="text-[10px] text-white/60 font-light leading-snug">
                Located inside the main <strong>FOC World Luxury Suite</strong>. Easily accessible with secure gated parking facilities.
              </div>
            </div>
          </div>

          {/* Invitation Booking Action Frame */}
          <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
            <div className="text-[10px] text-white/40 tracking-wider font-light uppercase">
              Ready to secure your individual suite booking?
            </div>
            
            <button
              onClick={() => setActivePage('booking')}
              className="w-full relative flex items-center justify-center gap-2.5 bg-gold-400 hover:bg-gold-300 text-black py-4 text-xs font-bold tracking-[0.25em] uppercase transition-all duration-300"
              id="spa-tour-book-btn"
            >
              <span>Schedule Spa Treatment Now</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            
            <div className="text-center">
              <span className="text-[9px] text-[#f5eae4]/30 font-light block">
                Prices start at ₦15,000. Real-time slot reservation confirms instantly.
              </span>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
