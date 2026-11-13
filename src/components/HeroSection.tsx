/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: customDelay,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

const starsCoords = [
  { top: "8%", left: "12%", delay: "0.2s", size: "1px" },
  { top: "22%", left: "78%", delay: "1.2s", size: "1.5px" },
  { top: "14%", left: "54%", delay: "0.7s", size: "1.2px" },
  { top: "42%", left: "15%", delay: "2.1s", size: "1px" },
  { top: "58%", left: "88%", delay: "1.5s", size: "1.5px" },
  { top: "72%", left: "20%", delay: "0.5s", size: "1.2px" },
  { top: "82%", left: "64%", delay: "1.9s", size: "1.5px" },
  { top: "33%", left: "92%", delay: "2.5s", size: "1px" },
];

export default function HeroSection() {
  const { t, language } = useLanguage();
  const heroStrings = t('hero');

  return (
    <section
      className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center bg-[#030303] overflow-hidden py-24 px-6 border-b border-white/5"
      id="hero-scroll-section"
    >
      {/* 1. Subtle, clean space particles (static background) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        {starsCoords.map((star, idx) => (
          <div
            key={idx}
            className="absolute bg-white/45 rounded-full animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: "4s"
            }}
          />
        ))}
      </div>

      {/* 2. On-Load Glow & Official Logo Reveal (Strictly background layer) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none flex items-center justify-center">
        {/* Glowing atmospheric dual color light auras */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0, 0.85, 0.15],
            scale: [0.8, 1.06, 1.0]
          }}
          transition={{ 
            times: [0, 0.45, 1],
            duration: 2.2, 
            ease: "easeInOut"
          }}
          className="absolute w-[360px] h-[360px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] rounded-full bg-emerald-500/10 blur-[75px] sm:blur-[130px] md:blur-[180px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0, 0.85, 0.10],
            scale: [0.8, 1.06, 1.0]
          }}
          transition={{ 
            times: [0, 0.45, 1],
            duration: 2.2, 
            ease: "easeInOut"
          }}
          className="absolute w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[480px] md:h-[480px] rounded-full bg-cyan-500/6 blur-[55px] sm:blur-[95px] md:blur-[130px]"
        />

        {/* Official logo fades in, sharpens, and acts as an elegant backlit element */}
        <motion.img
          initial={{ opacity: 0, scale: 0.85, filter: "blur(10px) grayscale(50%)" }}
          animate={{ 
            opacity: [0, 1.0, 0.06],
            scale: [0.85, 1.05, 1.0],
            filter: ["blur(10px) grayscale(50%)", "blur(0px) grayscale(0%)", "blur(0px) grayscale(0%)"]
          }}
          transition={{ 
            times: [0, 0.45, 1],
            duration: 2.2, 
            ease: "easeInOut"
          }}
          src="/assets/logo-easybyz.png"
          alt="Easy Byz Official Watermark"
          className="w-[500px] h-[500px] sm:w-[580px] sm:h-[580px] md:w-[648px] md:h-[648px] max-w-none object-contain selection:bg-transparent"
        />
      </div>

      {/* 3. Concentrated, centered content block */}
      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center text-center mt-4">
        
        {/* On-Load Pill Badge (Stagger 1) */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 border border-emerald-500/25 mb-6 shadow-[0_0_15px_rgba(16,185,129,0.05)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#10B981] uppercase font-black">
            {heroStrings.badge}
          </span>
        </motion.div>

        {/* Elegant, Sophisticated Size-Reduced Headline (Stagger 2) */}
        <motion.h1
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.65}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-display font-extrabold tracking-tight leading-[1.2] text-white max-w-3xl px-2"
        >
          {heroStrings.title1}
          <span className="bg-gradient-to-r from-[#10B981] to-[#00f0ff] bg-clip-text text-transparent block sm:inline">
            {heroStrings.titleGradient}
          </span>
        </motion.h1>

        {/* Subtitle Accent (Stagger 3) */}
        <motion.p
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="mt-4 text-lg sm:text-xl md:text-2xl font-sans font-semibold tracking-wide text-white max-w-3xl px-4"
        >
          {heroStrings.subtitle}
        </motion.p>

        {/* Spacious, premium body description paragraph (Stagger 4) */}
        <motion.p
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          custom={0.95}
          className="mt-5 text-sm sm:text-base md:text-lg text-white leading-relaxed font-sans font-normal max-w-3xl px-4 md:px-6"
        >
          {heroStrings.paragraph}
        </motion.p>

        {/* Actions Button Group - Small, Discreet and Compact (Stagger 5) */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          custom={1.1}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 justify-center w-full px-4 max-w-md"
        >
          {/* Primary CTA (Smaller rounded rectangular button, discrete design height) */}
          <button
            id="hero-primary-cta"
            onClick={() => {
              const el = document.getElementById('contact-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#00f0ff] to-[#0df] text-neutral-950 font-bold text-[11px] tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.45)] hover:scale-[1.01] flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
          >
            <span>{heroStrings.primaryCta}</span>
            <span className="font-bold">→</span>
          </button>

          {/* Secondary CTA */}
          <button
            id="hero-secondary-cta"
            onClick={() => {
              const el = document.getElementById('showcase-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-bold text-[11px] tracking-wider uppercase border border-white/10 transition-all duration-300 hover:border-white/20 flex items-center justify-center gap-1 cursor-pointer"
          >
            <span>{language === 'PT' ? 'Explorar Sistemas' : 'Explore Systems'}</span>
          </button>
        </motion.div>

        {/* Minimalist Centered Quote Divider (Stagger 6) */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          custom={1.25}
          className="mt-8 max-w-sm border-t border-white/5 pt-5 w-full flex justify-center"
        >
          <p className="text-xs sm:text-sm text-white italic leading-relaxed font-sans px-4">
            {heroStrings.quote}
          </p>
        </motion.div>

      </div>

      {/* Elegant design framework frame accents */}
      <div className="absolute inset-0 border border-white/5 pointer-events-none m-4 md:m-8" />
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#10B981]/15 m-4 md:m-8" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#10B981]/15 m-4 md:m-8" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#10B981]/15 m-4 md:m-8" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#10B981]/15 m-4 md:m-8" />

      {/* Seamless transition gradient overlay to blend with #030303 */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none z-10" />
    </section>
  );
}
