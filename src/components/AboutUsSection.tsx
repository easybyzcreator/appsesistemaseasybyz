/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lightbulb, Users, HeartHandshake, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function AboutUsSection() {
  const { language } = useLanguage();

  const manifestoText = language === 'PT' 
    ? "Fundada por Patricia Guimarães, especialista que une a ciência do comportamento humano e a inovação tecnológica, a Easy Byz Creator é uma agência de soluções digitais dedicada a criar sistemas e aplicativos exclusivos para empreendedores que buscam eficiência e valorizam a própria marca.\n\nEntendemos que por trás de toda automação de sucesso existe uma estratégia de comunicação clara. Conectamos engenharia de processos, design minimalista e psicologia de consumo para construir ferramentas intuitivas que resolvem as dores reais da sua rotina — como a gestão de tempo e o atendimento manual repetitivo. Através de um ecossistema moderno e robusto, entregamos autonomia, padrão visual internacional e processos desenhados sob medida para que a sua empresa cresça no piloto automático e proporcione a melhor experiência para o seu cliente."
    : "Founded by Patricia Guimarães, a specialist merging the science of human behavior and technological innovation, Easy Byz Creator is a boutique digital solutions agency dedicated to building exclusive systems and mobile apps for entrepreneurs striving for peak efficiency and who truly value their own brand.\n\nWe understand that behind every successful automation stands a clear communication strategy. We bridge process engineering, minimalist design, and consumer psychology to deploy intuitive, custom-made systems that solve the real friction in your daily routine—such as time management and repetitive manual customer service. Powered by a modern and robust ecosystem, we deliver true autonomy, an elegant international design standard, and processes fully tailored so your company grows on autopilot while delivering an unbeatable modern experience to your end clients.";

  const pillars = [
    {
      id: "pillar-1",
      title: language === 'PT' ? "INOVAÇÃO" : "INNOVATION",
      desc: language === 'PT' ? "Engenharia de ponta para automatizar rotinas." : "State-of-the-art engineering to automate routines.",
      icon: <Lightbulb size={22} className="text-[#10B981]" />,
      glowColor: "hover:border-[#10B981]/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
    },
    {
      id: "pillar-2",
      title: language === 'PT' ? "PARCERIA" : "PARTNERSHIP",
      desc: language === 'PT' ? "Apoio constante para impulsionar seu crescimento." : "Constant support to drive your scale and authority.",
      icon: <Users size={22} className="text-[#00f0ff]" />,
      glowColor: "hover:border-[#00f0ff]/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
    },
    {
      id: "pillar-3",
      title: language === 'PT' ? "PSICOLOGIA" : "PSYCHOLOGY",
      desc: language === 'PT' ? "Design focado na melhor experiência e conversão." : "Design tailored for premium client conversion rates.",
      icon: <HeartHandshake size={22} className="text-[#10B981]" />,
      glowColor: "hover:border-[#10B981]/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
    }
  ];

  return (
    <section 
      id="about-us-section" 
      className="py-16 md:py-24 px-6 relative bg-[#030303] overflow-hidden border-t border-white/5"
    >
      {/* Background soft lighting glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-[#10B981]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-1/4 translate-y-1/2 w-[350px] h-[350px] bg-[#00f0ff]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Dynamic Header Tag */}
        <div className="text-center md:text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#10B981]/15 to-[#00f0ff]/15 border border-[#10B981]/25 mb-4 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span className="text-[10px] font-mono tracking-widest text-[#10B981] uppercase font-bold">
              {language === 'PT' ? 'QUEM SOMOS' : 'ABOUT US'}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white">
            {language === 'PT' ? 'Nossa História' : 'Our Story'}
          </h2>
        </div>

        {/* Desktop asymmetry columns (expanded to 12 columns to fit photo elegantly) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (Main Story & Founder Photo) */}
          <div 
            className="lg:col-span-8 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(0, 242, 254, 0.1)"
            }}
          >
            {/* Subtle premium light reflection line at the top */}
            <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
              {/* Left inner column: Manifesto Text */}
              <div className="md:col-span-7 flex flex-col justify-between h-full space-y-6">
                <div className="space-y-4">
                  {manifestoText.split("\n\n").map((para, pIdx) => (
                    <p 
                      key={pIdx} 
                      className="text-white text-sm md:text-base leading-relaxed font-sans font-normal antialiased"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <div className="pt-2">
                  <a 
                    href="https://patriciaguimaraes.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#10B981]/10 to-[#00f0ff]/10 hover:from-[#10B981]/25 hover:to-[#00f0ff]/25 text-white font-sans text-xs md:text-sm font-bold tracking-wide border border-[#10B981]/30 hover:border-[#00f0ff]/50 shadow-lg shadow-[#10B981]/5 transition-all duration-300 group/btn"
                  >
                    <span>{language === 'PT' ? 'Conhecer Minha Trajetória' : 'Explore My Journey'}</span>
                    <ArrowUpRight size={16} className="text-[#00f0ff] transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>

                {/* Nice decorative human signature subtitle */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center text-xs font-mono text-gray-500">
                  <span>EASY BYZ CREATOR</span>
                </div>
              </div>

              {/* Right inner column: Founder Photo */}
              <div className="md:col-span-5 flex flex-col items-center justify-center relative">
                {/* Visual ambient glow under the photograph */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#10B981]/15 to-[#00f0ff]/15 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 pointer-events-none" />
                
                <div className="relative group w-full max-w-[240px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900 flex items-center justify-center">
                  <img 
                    src="https://i.ibb.co/Vcpbvt7G/PATI.jpg" 
                    alt="Patricia Guimarães" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover brightness-[1.02] contrast-[1.01] transition-all duration-500 group-hover:scale-105 group-hover:brightness-105"
                  />
                  {/* Premium overlay frame gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/90 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating badge inside photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-white text-xs font-bold font-sans">Patricia Guimarães</p>
                    <p className="text-[#10B981] font-mono text-[9px] uppercase tracking-wider mt-0.5">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (40%: pillars) */}
          <div className="lg:col-span-4 flex flex-col justify-center gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className={`p-6 rounded-2xl bg-[#0a0a0a]/60 border border-white/5 cursor-default transition-all duration-300 flex items-start gap-4 ${pillar.glowColor}`}
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white/10 transition-colors duration-300">
                  {pillar.icon}
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="text-white font-mono text-xs font-black tracking-widest uppercase mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-white text-xs sm:text-sm leading-relaxed font-sans font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
