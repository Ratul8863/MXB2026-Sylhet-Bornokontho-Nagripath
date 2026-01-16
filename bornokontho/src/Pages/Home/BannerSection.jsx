import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import bannerimg from '../../assets/Banner.jpeg';

const BannerSection = () => {
  return (
    <section className="relative min-h-[85vh] md:h-[90vh] w-full overflow-hidden flex items-center justify-center bg-[#0f0e0c]">
      
      {/* --- BACKGROUND WITH PARALLAX & OVERLAY --- */}
      <div 
        className="absolute inset-0 z-0 bg-fixed"
        style={{
          backgroundImage: `url("${bannerimg}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4) sepia(0.2)', 
        }}
      />
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#0f0e0c] z-[1]" />

      {/* --- HERO CONTENT --- */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-[#c2a24a]/30 bg-[#c2a24a]/5 backdrop-blur-md mb-6 md:mb-8"
        >
          <Sparkles size={12} className="text-[#c2a24a]" />
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[#c2a24a]">
            Reviving the Ancient Script
          </span>
        </motion.div>

        {/* Main Title - Responsive font sizes */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif text-[#f5f0e6] leading-[1.1] md:leading-[0.85] mb-6 md:mb-8"
        >
          Welcome to <br className="hidden sm:block" />
          <span className="text-[#c2a24a]">Nagripath</span>
        </motion.h1>

        {/* Subtext - Max-width adjusted for mobile */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-[300px] sm:max-w-md md:max-w-2xl mx-auto text-gray-400 text-sm md:text-lg lg:text-xl font-light leading-relaxed mb-8 md:mb-12 px-2"
        >
          Discover the profound beauty of the Sylheti Nagri script. Our platform 
          serves as a digital bridge between a rich cultural past and the future generation.
        </motion.p>

        {/* Action Buttons - Stacked on mobile, side-by-side on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <Link
            to="/show"
            className="w-full sm:w-auto group relative px-8 md:px-10 py-4 md:py-5 bg-[#c2a24a] text-black font-black uppercase text-[10px] md:text-xs tracking-[0.2em] rounded-full overflow-hidden transition-all hover:bg-white text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Explore Letters <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            to="/history"
            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 border border-[#c2a24a]/30 text-[#f5f0e6] font-black uppercase text-[10px] md:text-xs tracking-[0.2em] rounded-full hover:bg-[#c2a24a]/10 transition-all backdrop-blur-sm text-center"
          >
            Our Legacy
          </Link>
        </motion.div>

      </div>

      {/* --- SCROLL INDICATOR - Smaller on mobile --- */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <div className="w-px h-8 md:h-12 bg-gradient-to-b from-[#c2a24a] to-transparent" />
        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-[#c2a24a]/60 font-sans">Scroll</span>
      </motion.div>

    </section>
  );
};

export default BannerSection;