/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Plus, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t, language } = useLanguage();
  const faq = t('faq');

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq-section" 
      className="py-24 px-6 relative bg-transparent border-t border-white/5"
    >
      {/* Subtle details background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#00f0ff]/1 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/5 border border-[#00f0ff]/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
            <span className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase font-bold">
              {faq.badge}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight text-white mb-4">
            {faq.title}
          </h2>
          
          <p className="text-white font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            {faq.subtitle}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 mb-16">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                id={`faq-item-${index}`}
                className="rounded-2xl border border-white/5 bg-black/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                <button
                  id={`faq-btn-${index}`}
                  onClick={() => handleToggle(index)}
                  className="w-full text-left px-6 py-5 md:py-6 flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <span className="text-sm md:text-base font-bold text-white group-hover:text-[#00f0ff] transition-colors duration-200">
                    {item.question}
                  </span>
                  
                  <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-[#00f0ff] group-hover:bg-[#00f0ff]/10 group-hover:border-[#00f0ff]/25 transition-all duration-300">
                    <motion.div
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Plus size={16} strokeWidth={3} />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm md:text-base text-white leading-relaxed font-sans border-t border-white/[0.03]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Call-to-Action Card */}
        <div className="glass-panel rounded-2xl p-6 md:p-8 border border-white/5 bg-gradient-to-r from-white/[0.01] to-transparent text-center max-w-xl mx-auto flex flex-col items-center gap-4">
          <p className="text-base md:text-lg text-white font-semibold font-sans">
            {faq.notFound}
          </p>
          
          <a
            href="https://wa.me/18038889018?text=Ol%C3%A1%20Pati%21%20Estava%20lendo%20as%20d%C3%BAvidas%20frequentes%20no%20site%20e%20gostaria%20de%20um%20suporte%20personalizado%20para%20entender%20melhor%20uma%20quest%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            id="faq-support-wa-btn"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02]"
          >
            <MessageCircle size={16} className="text-[#00f0ff]" />
            <span>{faq.supportCta}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
