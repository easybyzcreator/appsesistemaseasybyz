/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navStrings = t('nav');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: navStrings.home, target: 'hero-scroll-section' },
    { label: navStrings.systems, target: 'showcase-section' },
    { label: navStrings.benefits, target: 'benefits-section' },
    { label: navStrings.aboutUs, target: 'about-us-section' },
    { label: navStrings.contact, target: 'contact-section' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'py-4 bg-[#030303] border-b border-white/5 shadow-2xl' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 font-display font-extrabold text-xl tracking-tight text-white group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#10B981] to-[#00f0ff] flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-transform duration-300 group-hover:scale-105">
            <span className="text-black font-extrabold text-sm font-mono">E</span>
          </div>
          <span className="font-display font-black text-lg">
            EASYBYZ <span className="text-[#10B981] font-light font-sans text-xs uppercase tracking-widest block sm:inline sm:ml-1 text-left sm:text-right">Creator</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-400">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.target)}
              className="hover:text-white transition-colors cursor-pointer relative py-1.5 group font-medium font-sans text-xs uppercase tracking-wider"
            >
              <span>{item.label}</span>
              {/* Animated underline indicator */}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#10B981] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Desktop CTA & Language Button */}
        <div className="hidden md:flex items-center gap-5">
          {/* Elegant pill style Language Selector */}
          <div className="inline-flex items-center rounded-full bg-white/5 border border-white/10 p-0.5 gap-1 shadow-inner">
            <button
              onClick={() => setLanguage('PT')}
              className={`px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider transition-all cursor-pointer ${
                language === 'PT' 
                  ? 'bg-gradient-to-r from-[#10B981] to-[#00f0ff] text-neutral-950 font-bold shadow-md' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLanguage('EN')}
              className={`px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider transition-all cursor-pointer ${
                language === 'EN' 
                  ? 'bg-gradient-to-r from-[#10B981] to-[#00f0ff] text-neutral-950 font-bold shadow-md' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <button
            id="nav-cta-btn"
            onClick={() => scrollToSection('contact-section')}
            className="group px-4 py-2 text-[10px] font-black tracking-widest uppercase rounded-lg border border-[#00f0ff]/30 text-[#00f0ff] hover:bg-[#00f0ff]/10 hover:text-white hover:border-[#00f0ff] transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.08)] cursor-pointer font-mono"
          >
            {navStrings.cta}
          </button>
        </div>

        {/* Mobile Hamburger menu toggle */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Quick Lang selection for Mobile */}
          <div className="inline-flex items-center rounded-full bg-white/5 border border-white/10 p-0.5 gap-0.5">
            <button
              onClick={() => setLanguage('PT')}
              className={`px-2 py-0.5 rounded-full text-[9px] font-bold transition-all ${
                language === 'PT' ? 'bg-[#10B981] text-black font-extrabold' : 'text-gray-400'
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLanguage('EN')}
              className={`px-2 py-0.5 rounded-full text-[9px] font-bold transition-all ${
                language === 'EN' ? 'bg-[#10B981] text-black font-extrabold' : 'text-gray-400'
              }`}
            >
              EN
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-400 hover:text-white cursor-pointer"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 w-full h-[100dvh] px-6 pt-28 pb-10 flex flex-col justify-between md:hidden border-t border-white/5 shadow-3xl overflow-y-auto"
          style={{ backgroundColor: 'rgba(3, 3, 3, 0.9)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', zIndex: 9999 }}
        >
          {/* Explicit Mobile Menu Close Button */}
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Fechar menu"
          >
            <X size={26} className="text-white" />
          </button>

          <nav className="flex flex-col gap-6 text-lg font-bold text-gray-300">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.target)}
                className="text-left py-2 border-b border-white/5 hover:text-white transition-colors text-sm uppercase tracking-wider font-semibold font-sans"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="space-y-4">
            <button
              onClick={() => scrollToSection('contact-section')}
              className="w-full text-center block py-4 rounded-xl bg-gradient-to-r from-[#10B981] to-[#00f0ff] text-black font-extrabold text-xs uppercase tracking-widest shadow-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
            >
              {language === 'PT' ? 'Falar com Desenvolvedor' : 'Talk to Developer'}
            </button>
            <div className="text-center text-[10px] text-gray-500 font-mono">
              {navStrings.mobileDivider}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
