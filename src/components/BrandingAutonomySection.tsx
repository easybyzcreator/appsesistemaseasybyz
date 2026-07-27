/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, Sliders } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function BrandingAutonomySection() {
  const { t } = useLanguage();
  const branding = t('branding');

  return (
    <section 
      id="brand-autonomy-section" 
      className="py-16 px-6 relative bg-transparent border-t border-white/5"
    >
      {/* Decorative background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#00f0ff]/2 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* CARD ESQUERDO: Foco em Branding & Valor de Marca */}
          <div 
            id="branding-card"
            className="glass-panel glass-panel-hover rounded-3xl p-8 md:p-10 flex flex-col justify-between group bg-[#0a0a0a]/40"
          >
            <div>
              {/* Visual Icon Badge */}
              <div className="w-12 h-12 rounded-2xl bg-[#10B981]/5 border border-[#10B981]/10 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(16,185,129,0.03)] group-hover:border-[#10B981]/30 transition-colors duration-300">
                <Award className="text-[#10B981]" size={24} />
              </div>

              <h3 className="text-xl md:text-3xl font-display font-black tracking-tight text-white mb-5">
                {branding.titleLeft}
              </h3>
              
              <p className="text-white text-sm md:text-base leading-relaxed font-sans font-normal">
                {branding.descriptionLeft}
              </p>
            </div>

            {/* Premium detail line */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest text-[#10B981] uppercase font-bold">
                {branding.tagLeft}
              </span>
            </div>
          </div>

          {/* CARD DIREITO: Foco em Autonomia & Painel de Controle */}
          <div 
            id="autonomy-card"
            className="glass-panel glass-panel-hover rounded-3xl p-8 md:p-10 flex flex-col justify-between group bg-[#0a0a0a]/40"
          >
            <div>
              {/* Ciano tag \& Icon */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#00f0ff]/5 border border-[#00f0ff]/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.03)] group-hover:border-[#00f0ff]/30 transition-colors duration-300">
                  <Sliders className="text-[#00f0ff]" size={24} />
                </div>
                
                <div className="px-3 py-1 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20">
                  <span className="text-[9px] font-mono font-black tracking-widest text-[#00f0ff] uppercase">
                    {branding.badgeRight}
                  </span>
                </div>
              </div>

              <h3 className="text-xl md:text-3xl font-display font-black tracking-tight text-white mb-5">
                {branding.titleRight}
              </h3>
              
              <p className="text-white text-sm md:text-base leading-relaxed font-sans font-normal">
                {branding.descriptionRight}
              </p>
            </div>

            {/* Premium detail line */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase font-bold">
                {branding.tagRight}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
