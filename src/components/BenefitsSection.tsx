/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CORE_BENEFITS } from '../data';
import { useLanguage } from '../LanguageContext';
import { 
  CalendarDays, 
  MessageCircle, 
  TrendingUp, 
  BellRing,
  Zap,
  X,
  Check,
  ClipboardList
} from 'lucide-react';

export default function BenefitsSection() {
  const { language } = useLanguage();

  const translatedCoreBenefits = CORE_BENEFITS.map(benefit => {
    if (language === 'PT') return benefit;

    let badge = benefit.badge;
    let title = benefit.title;
    let description = benefit.description;

    if (benefit.id === 'autonomous-booking') {
      badge = "Independence";
      title = "Autonomous Booking 24/7";
      description = "Get appointment reservations 24/7, even late at night, without forcing your staff to manually reply to messages.";
    } else if (benefit.id === 'whatsapp-automation') {
      badge = "Deep Focus";
      title = "Say Goodbye to Manual Texting (WhatsApp / SMS)";
      description = "Professionalize your brand. Have your own custom application with service catalogs, rates, and slots elegantly displayed, letting clients book 100% automatically.";
    } else if (benefit.id === 'glass-dashboard') {
      badge = "Organization";
      title = "Centralized Error-Free Routine";
      description = "Stop losing information in scattered notes or loose chats. Keep track of all bookings or orders in a single, intuitive dashboard to manage your day with ultimate peace of mind.";
    } else if (benefit.id === 'push-reminders') {
      badge = "Stability";
      title = "Unlimited Preset Text Templates";
      description = "Stop manually typing the identical templates. Create unique pre-formatted confirmations to send directly to your clients with a single tap, decreasing sudden appointment cancellations.";
    }

    return {
      ...benefit,
      badge,
      title,
      description
    };
  });

  const getBenefitIcon = (name: string) => {
    switch (name) {
      case 'CalendarDays': return <CalendarDays className="text-[#00f0ff]" size={24} />;
      case 'MessageCircle': return <MessageCircle className="text-[#00f0ff]" size={24} />;
      case 'TrendingUp': return <TrendingUp className="text-[#00f0ff]" size={24} />;
      case 'ClipboardList': return <ClipboardList className="text-[#00f0ff]" size={24} />;
      case 'BellRing': return <BellRing className="text-[#00f0ff]" size={24} />;
      default: return <Zap className="text-[#00f0ff]" size={24} />;
    }
  };

  return (
    <section className="py-24 px-6 relative bg-[#030303] border-t border-white/5" id="benefits-section">
      {/* Dynamic ambient grid background decorative lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Glowing neon mesh backgrounds */}
      <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-[#00f0ff]/3 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Headings */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
            <span className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase font-bold">
              {language === 'PT' ? 'VANTAGENS REAIS' : 'REAL BENEFITS'}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
            {language === 'PT' ? 'Por que sair do manual?' : 'Why step away from manual work?'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light">
            {language === 'PT' 
              ? 'Seu tempo vale ouro. Parar o que você está fazendo na linha de frente do seu negócio para responder mensagens e agendamentos no WhatsApp limita o seu crescimento. Veja como a automação transforma sua rotina:'
              : 'Your time is valuable. Stopping active client servicing just to coordinate appointment texts on WhatsApp caps your business growth. See how elegant automation revamps your daily operations:'
            }
          </p>
        </div>

        {/* Benefits Grid (4 pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {translatedCoreBenefits.map((benefit, idx) => (
            <div 
              key={benefit.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/5 flex flex-col justify-between"
            >
              <div>
                {/* Icon wrapper with soft neon cyan glow */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00f0ff]/10 to-transparent border border-[#00f0ff]/20 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,240,255,0.05)]">
                  {getBenefitIcon(benefit.iconName)}
                </div>

                <div className="text-[9px] font-mono tracking-wider text-[#00f0ff] uppercase mb-1.5 font-bold">
                  {benefit.badge}
                </div>
                
                <h3 className="text-lg md:text-xl font-display font-bold text-white mb-3">
                  {benefit.title}
                </h3>

                <p className="text-white text-sm sm:text-base leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>

              {/* Minimal decoration */}
              <div className="mt-6 pt-4 border-t border-white/3 text-[10px] font-mono text-gray-500 flex justify-between items-center">
                <span>{language === 'PT' ? 'RECURSO INCLUSO' : 'FEATURE INCLUDED'}</span>
                <span className="text-[#00f0ff]/30">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Market Comparison Premium Table */}
        <div className="pt-16 mt-16 border-t border-white/5">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00f0ff]/5 border border-[#00f0ff]/20 mb-4">
              <span className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase">
                {language === 'PT' ? 'Comparativo' : 'Comparison'}
              </span>
            </div>
            <h3 className="text-2xl md:text-4xl font-display font-extrabold tracking-tight text-white mb-3">
              {language === 'PT' ? 'Seu Negócio, Suas Regras' : 'Your Business, Your Rules'}
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              {language === 'PT' 
                ? 'Descubra por que ter um aplicativo personalizado com a sua marca é o próximo nível para a sua operação profissional.'
                : 'Discover why having a custom branded mobile application is the next evolution for your professional workflow.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Generic Platforms Card */}
            <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent relative overflow-hidden flex flex-col justify-between opacity-80 hover:opacity-100 transition-opacity duration-300">
              <div>
                <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                    <X size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-red-400">
                      {language === 'PT' ? 'Plataformas Terceirizadas' : 'Third-Party Sites'}
                    </span>
                    <h4 className="text-lg font-display font-bold text-gray-300">
                      {language === 'PT' ? 'APLICATIVOS GENÉRICOS' : 'GENERIC PLATFORMS'}
                    </h4>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <span className="text-xs font-mono text-gray-600 font-bold bg-white/5 px-2 py-0.5 rounded-md">01</span>
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-white mb-1.5">
                        {language === 'PT' ? 'Identidade Visual' : 'Visual Identity'}
                      </h5>
                      <p className="text-sm text-white leading-relaxed font-normal">
                        {language === 'PT' 
                          ? 'O cliente vê o logotipo, as cores e os anúncios de outros concorrentes enquanto tenta agendar com você.'
                          : 'Clients see logos, colors, and competitor ads while attempting to book an appointment with you.'}
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <span className="text-xs font-mono text-gray-600 font-bold bg-white/5 px-2 py-0.5 rounded-md">02</span>
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-white mb-1.5">
                        {language === 'PT' ? 'Modelo de Cobrança' : 'Pricing Model'}
                      </h5>
                      <p className="text-sm text-white leading-relaxed font-normal">
                        {language === 'PT' 
                          ? 'Cobram taxas por agendamento ou comissões disfarçadas sobre o seu faturamento à medida que você cresce.'
                          : 'They take booking commissions or disguised cuts on your gross revenue as your operation expands.'}
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <span className="text-xs font-mono text-gray-600 font-bold bg-white/5 px-2 py-0.5 rounded-md">03</span>
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-white mb-1.5">
                        {language === 'PT' ? 'Retenção de Clientes' : 'Client Retention'}
                      </h5>
                      <p className="text-sm text-white leading-relaxed font-normal">
                        {language === 'PT' 
                          ? 'Sua lista de clientes fica presa na base deles, facilitando que o usuário encontre outros profissionais na mesma região.'
                          : 'Your customer list is locked in their ecosystem, nudging users to explore other local professionals.'}
                      </p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <span className="text-xs font-mono text-gray-600 font-bold bg-white/5 px-2 py-0.5 rounded-md">04</span>
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-white mb-1.5">
                        {language === 'PT' ? 'Suporte e Ajustes' : 'Support & Control'}
                      </h5>
                      <p className="text-sm text-white leading-relaxed font-normal">
                        {language === 'PT' 
                          ? 'Atendimento automatizado por robôs e layouts estáticos que você não pode customizar se a sua rotina mudar.'
                          : 'Boring robot menus and rigid layouts you cannot easily customize when your schedule changes.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 text-[10px] font-mono text-gray-500 text-center">
                {language === 'PT' ? 'Limita o seu crescimento e esvazia sua margem de lucro.' : 'Stifles your brand authority and bites into your final profit margin.'}
              </div>
            </div>

            {/* Premium Custom App Card */}
            <div className="rounded-3xl p-6 md:p-8 bg-gradient-to-b from-[#00f0ff]/10 via-[#00f0ff]/5 to-black border border-[#00f0ff]/20 relative overflow-hidden flex flex-col justify-between shadow-[0_0_50px_rgba(0,240,255,0.05)] hover:shadow-[0_0_60px_rgba(0,240,255,0.1)] transition-all duration-300">
              {/* Highlight glass effect */}
              <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-[1px] pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f0ff]/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8 border-b border-[#00f0ff]/10 pb-4 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/35 flex items-center justify-center text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                      <Check size={18} />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#00f0ff] font-bold">
                        {language === 'PT' ? '100% Exclusivo' : '100% Exclusive'}
                      </span>
                      <h4 className="text-lg font-display font-extrabold text-white">
                        {language === 'PT' ? 'SEU APLICATIVO PREMIUM' : 'YOUR PREMIUM APP'}
                      </h4>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-[#00f0ff]/15 text-[#00f0ff] px-2.5 py-1 rounded-full border border-[#00f0ff]/20 uppercase font-black tracking-widest">
                    EASY BYZ
                  </span>
                </div>

                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <span className="text-xs font-mono text-[#00f0ff] font-bold bg-[#00f0ff]/10 px-2 py-0.5 rounded-md border border-[#00f0ff]/10">01</span>
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
                        {language === 'PT' ? 'Identidade Visual' : 'Visual Identity'}
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff]" />
                      </h5>
                      <p className="text-sm text-white leading-relaxed font-normal">
                        {language === 'PT' 
                          ? 'Experiência 100% exclusiva e limpa com a sua marca, suas cores e seu logotipo. Posicionamento de alto valor para o seu cliente.'
                          : 'A completely exclusive, clean interface presenting only your logo and brand guidelines. High premium status.'}
                      </p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <span className="text-xs font-mono text-[#00f0ff] font-bold bg-[#00f0ff]/10 px-2 py-0.5 rounded-md border border-[#00f0ff]/10">02</span>
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
                        {language === 'PT' ? 'Modelo de Cobrança' : 'Fixed Flat Price'}
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff]" />
                      </h5>
                      <p className="text-sm text-white leading-relaxed font-normal">
                        {language === 'PT' 
                          ? 'Mensalidade fixa justa. Todo o lucro do seu trabalho vai direto para o seu bolso, sem taxas surpresas ou comissões.'
                          : 'Just a fair, flat monthly fee. All of your hard-earned revenue stays immediately in your pocket, with zero commissions.'}
                      </p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <span className="text-xs font-mono text-[#00f0ff] font-bold bg-[#00f0ff]/10 px-2 py-0.5 rounded-md border border-[#00f0ff]/10">03</span>
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
                        {language === 'PT' ? 'Retenção de Clientes' : 'Client Ownership'}
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff]" />
                      </h5>
                      <p className="text-sm text-white leading-relaxed font-normal">
                        {language === 'PT' 
                          ? 'O banco de dados é totalmente seu. Um canal direto e exclusivo entre o seu negócio e o seu cliente fiel.'
                          : 'The entire client database belongs strictly to you. Create a solid, private channel straight to your repeat clients.'}
                      </p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <span className="text-xs font-mono text-[#00f0ff] font-bold bg-[#00f0ff]/10 px-2 py-0.5 rounded-md border border-[#00f0ff]/10">04</span>
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
                        {language === 'PT' ? 'Suporte e Ajustes' : 'Human Onboarding'}
                        <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff]" />
                      </h5>
                      <p className="text-sm text-white leading-relaxed font-normal">
                        {language === 'PT' 
                          ? 'Assessoria e acompanhamento humano direto para configurar o sistema exatamente para as necessidades da sua rotina.'
                          : 'Dedicated human advisors to adjust calendar blocks, pricing schemas, and features as your operation scales.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#00f0ff]/10 text-[10px] font-mono text-[#00f0ff] text-center font-bold tracking-wide relative z-10">
                {language === 'PT' ? 'Acelera o seu crescimento com total controle e independência.' : 'Accelerates your authority with complete administrative independence.'}
              </div>
            </div>

          </div>

          {/* Action CTA Button */}
          <div className="mt-12 text-center animate-fade-in">
            <button
              id="cta-market-comparison"
              onClick={() => {
                const el = document.getElementById('contact-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#0df] text-[#030303] text-sm font-black tracking-wide transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:scale-[1.02] cursor-pointer"
            >
              <span>{language === 'PT' ? 'Quero Meu Aplicativo Personalizado' : 'I Want My Custom Branded App'}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
