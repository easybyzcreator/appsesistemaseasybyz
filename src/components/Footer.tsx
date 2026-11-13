/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const footerStrings = t('footer');
  const contactStrings = t('contact');

  return (
    <footer className="relative bg-[#030303] border-t border-white/5 py-12 px-6 md:px-12 md:py-16 overflow-hidden">
      {/* Soft background light */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[200px] bg-[#10B981]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-10 relative z-10">
        
        {/* Lado Esquerdo: Logo oficial da empresa e direitos autorais */}
        <div className="flex flex-col justify-between items-center md:items-start md:max-w-xs gap-4 text-center md:text-left">
          <div>
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block group cursor-pointer"
            >
              <img 
                src="/assets/logo-easybyz.png" 
                alt="Easy Byz Creator Logo" 
                className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-300" 
              />
            </a>
          </div>
          <p className="text-[11px] text-gray-500 font-mono leading-relaxed mt-2 select-none">
            {footerStrings.rights}
          </p>
        </div>

        {/* Centro: Redes Sociais Elegantes */}
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/apps.easybyzcreator/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-white/5 bg-white/2 flex items-center justify-center text-gray-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://www.facebook.com/apps.easybyzcreator" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-white/5 bg-white/2 flex items-center justify-center text-gray-400 hover:text-[#10B981] hover:border-[#10B981]/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all duration-300"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://wa.me/18038889018" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full border border-white/5 bg-white/2 flex items-center justify-center text-gray-400 hover:text-[#25D366] hover:border-[#25D366]/50 hover:shadow-[0_0_15px_rgba(37,211,102,0.25)] transition-all duration-300"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Lado Direito: Bloco de Contato em Destaque & Links de Políticas */}
        <div className="flex flex-col justify-center items-center md:items-end gap-6 text-center md:text-right">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#10B981] uppercase block mb-1">
              {contactStrings.supportTitle}
            </span>
            <a 
              href="mailto:contato@easybyzcreator.com"
              className="text-base sm:text-lg font-display font-black tracking-tight text-[#00f0ff] hover:text-[#10B981] hover:shadow-[0_0_10px_rgba(0,240,255,0.1)] transition-colors duration-300"
            >
              contato@easybyzcreator.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
