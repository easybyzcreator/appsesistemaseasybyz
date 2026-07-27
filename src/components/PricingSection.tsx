/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function PricingSection() {
  const { t, language } = useLanguage();
  const pricing = t('pricing');

  const benefits = language === 'PT' ? [
    "Zero taxas ocultas ou adicionais",
    "Taxa única inicial de design & setup",
    "Contrato de 12 meses com valor fixo",
    "Suporte humanizado direto via WhatsApp"
  ] : [
    "Zero hidden fees or percentages",
    "Simple one-time design & setup fee",
    "Comfy 12-month contract with a flat rate",
    "Instant direct WhatsApp / Text support"
  ];

  return (
    <section 
      id="pricing-section" 
      className="py-12 md:py-16 px-6 relative bg-[#030303] border-t border-white/5"
    >
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#10B981]/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Symmetric 2-column desktop layout, stack on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Text & Context (5 of 12 columns) */}
          <div className="lg:col-span-5 text-left flex flex-col items-start justify-center">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span className="text-[10px] font-mono tracking-widest text-[#10B981] uppercase font-bold">
                {language === 'PT' ? "INVESTIMENTO LEVE E PREVISÍVEL" : "AFFORDABLE & PREDICTABLE INVESTMENT"}
              </span>
            </div>
            
            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-display font-extrabold tracking-tight text-white mb-4 leading-tight">
              {language === 'PT' ? (
                <>
                  Mensalidade <span className="bg-gradient-to-r from-[#10B981] to-[#00f0ff] bg-clip-text text-transparent">fixa</span>, sem taxas surpresas
                </>
              ) : (
                <>
                  Flat rate <span className="bg-gradient-to-r from-[#10B981] to-[#00f0ff] bg-clip-text text-transparent">pricing</span>, no surprise fees
                </>
              )}
            </h2>
            
            {/* Paragraph Description */}
            <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed max-w-lg font-light">
              {language === 'PT' 
                ? "Custo fixo garantido, livre de taxas por venda ou surpresas na fatura. Tecnologia acessível de verdade para o pequeno e microempreendedor."
                : "Predictable flat fee, completely free from commissions, hidden percentages, or surprise invoices. Real technology made accessible."}
            </p>
          </div>

          {/* Right Column: The Compact Price Card (7 of 12 columns) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end w-full">
            <div className="glass-panel w-full max-w-2xl rounded-2xl p-6 md:p-8 border border-white/5 bg-[#0a0a0a]/60 shadow-[0_0_40px_rgba(16,185,129,0.02)] relative overflow-hidden">
              
              {/* Card top row: Price and MOST POPULAR badge */}
              <div className="flex items-center justify-between mb-2">
                
                {/* Price Display */}
                <div className="flex flex-col items-start gap-0.5">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest font-bold">
                    {language === 'PT' ? "A partir de" : "Starting at"}
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl md:text-4xl font-display font-black text-white tracking-tight">
                      $49.90
                    </span>
                    <span className="text-sm font-mono text-[#10B981] font-bold">
                      {language === 'PT' ? "/mês" : "/month"}
                    </span>
                  </div>
                </div>

                {/* Most popular badge on top */}
                <div>
                  <span className="px-2.5 py-0.5 text-[8px] font-black font-mono tracking-widest text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20 rounded-full">
                    {pricing.popularBadge}
                  </span>
                </div>
              </div>

              {/* Sub-price Details / Terms */}
              <p className="text-[9px] md:text-[10px] text-gray-500 font-mono tracking-wide uppercase font-bold mb-5 leading-normal pb-4 border-b border-white/5">
                {language === 'PT'
                  ? "ASSINATURA ANUAL COM RENOVAÇÃO AUTOMÁTICA / CONFIGURAÇÃO PERSONALIZADA INICIAL: A PARTIR DE $ 399 (TAXA ÚNICA)"
                  : "ANNUAL SUBSCRIPTION WITH AUTO-RENEWAL / INITIAL CUSTOM CONFIGURATION: FROM $ 399 (ONE-TIME FEE)"}
              </p>

              {/* Compact CTA Button row */}
              <div className="mb-5">
                <button
                  id="pricing-cta-btn"
                  onClick={() => {
                    const el = document.getElementById('contact-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#10B981] to-[#00f0ff] text-neutral-950 text-xs font-black tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:scale-[1.01] cursor-pointer"
                >
                  <span>{pricing.cta}</span>
                  <ArrowRight size={13} />
                </button>
              </div>

              {/* 4 Benefits with green check icons arranged in modern, smart 2x2 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-left">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 py-0.5">
                    <div className="w-4 h-4 rounded-full bg-[#10B981]/10 border border-[#10B981]/15 flex items-center justify-center text-[#10B981] shrink-0">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span className="text-xs text-gray-300 font-sans font-light">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Centralized optimized footnote with minimal space */}
        <div className="mt-8 text-center">
          <p className="text-[10px] text-gray-500 max-w-3xl mx-auto leading-relaxed font-mono opacity-80">
            {language === 'PT' 
              ? "* É possível incluir sistema de pagamento integrado via Stripe no seu aplicativo para receber direto dos clientes. Recursos de pagamento e taxas de configuração adicionais sob consulta na sua consultoria."
              : "* Dynamic integrated checkout system powered with Stripe is optionally configurable inside your application so you receive funds straight from customers. Integration options and setup details are mapped out live during your boarding call."
            }
          </p>
        </div>

      </div>
    </section>
  );
}
