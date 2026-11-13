/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { SHOWCASE_APPS } from '../data';
import { ShowcaseApp } from '../types';
import { 
  Sparkles, 
  Scissors, 
  User, 
  UtensilsCrossed, 
  Check, 
  TrendingUp, 
  ArrowRight,
  Calendar,
  Clock,
  MessageSquare,
  ShoppingCart,
  Flame,
  Utensils,
  Cake,
  Briefcase,
  Home,
  Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ShowcaseSectionProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export default function ShowcaseSection({ activeTab, setActiveTab }: ShowcaseSectionProps) {
  const { language } = useLanguage();
  const [demoToastVisible, setDemoToastVisible] = useState(false);

  const translatedShowcaseApps = SHOWCASE_APPS.map(app => {
    if (language === 'PT') return app;

    let name = app.name;
    let tagline = app.tagline;
    let description = app.description;
    let features = [...app.features];
    let stats = { ...app.stats };

    if (app.id === 'easy-beauty') {
      tagline = "Systems for Esthetics Clinics & Beauty Salons";
      description = "Organize your staff, combine multiple services in a single workflow, and eliminate double-booking errors with a fully automated dashboard.";
      features = [
        "Smart multi-screen scheduling",
        "Treatment packages and session tracking",
        "1-click WhatsApp confirmation",
        "Individualized service history per specialist"
      ];
      stats = {
        value: "Real-Time Availability",
        label: "No back-and-forth messages. Clients view, choose, and book 100% autonomously."
      };
    } else if (app.id === 'easy-nails') {
      tagline = "Uncomplicated Management for Nail Designers";
      description = "Specifically designed for the routine of Nail Designers. Centralize control of your sessions, optimize your time, and offer a fast, modern booking experience for your clients.";
      features = [
        "Digital menu of customized techniques and procedures",
        "Digital intake/anamnesis form integrated into client profiles",
        "Smart schedule tracking for maintenance",
        "Complete session history per client"
      ];
      stats = {
        value: "Your Schedule Organized",
        label: "Less time swapping messages, more time focused on your services."
      };
    } else if (app.id === 'easy-barber') {
      tagline = "Uncomplicated Management for Barbershops";
      description = "Centralize your barbershop schedule and optimize barbers' time. Your clients book in seconds and your team tracks everything in real time, without complications.";
      features = [
        "Dynamic queue dashboard or conventional booking",
        "Client-preferred barber selection option",
        "Digital catalog of customized services, cuts, and beards",
        "Individual schedule control per professional"
      ];
      stats = {
        value: "24/7 Availability",
        label: "Your client chooses the day, time, and barber 100% autonomously, even outside business hours."
      };
    } else if (app.id === 'easy-menu') {
      tagline = "Direct and Uncomplicated Digital Menu";
      description = "Ideal for those selling desserts, finger foods, snacks, or artisanal goods who need to organize their order workflow. Connect directly with your customers and keep 100% of your sales profits.";
      features = [
        "High-conversion, objective digital menu catalog",
        "Clean order organization via WhatsApp",
        "Simplified dashboard for item catalog management"
      ];
    } else if (app.id === 'easy-travel-guide') {
      tagline = "Exclusive App for Travel Agencies and Groups";
      description = "Replace printed handbooks and static PDFs with a modern, interactive app. Centralize itineraries, checklists, tickets, and crucial guidelines right in your passenger's hand, 100% offline.";
      features = [
        "Dynamic chronological day-by-day itinerary",
        "Digital wallet for tickets and QR codes",
        "Smart checklists for documents and luggage",
        "White-label customization with your brand"
      ];
      stats = {
        value: "100% Offline Experience",
        label: "NO REPETITIVE QUESTIONS ON WHATSAPP. THE PASSENGER ACCESSES EVERYTHING WITH ONE TAP, EVEN WITHOUT INTERNET SIGNAL OR IN FLIGHT."
      };
    } else if (app.id === 'easy-booking') {
      tagline = "Exclusive Booking System for Leisure & Vacation Properties";
      description = "Transform your reservation management into an automatic, professional, and 100% profitable process. Offer a high-standard experience to your guests — from stay simulation to check-in — with zero platform commissions.";
      features = [
        "Real-time date and rate simulator for guests",
        "ZERO booking commissions (100% of the profit is yours)",
        "Pre-configured message template center for check-in and house rules"
      ];
    } else if (app.id === 'easy-waxing') {
      tagline = "Efficient Scheduling for Hair Removal & Well-being";
      description = "Tailored specifically for hair removal clinics and beauty studios to organize their daily client workflow, granting clients total autonomy to book their own times and packages.";
      features = [
        "Smart control of waxing rooms and treatment stations",
        "Return filter and hair-growth tracker followups",
        "Digital anamnesis/intake form with skin sensitivity history",
        "Digital menu of waxing areas, packages, and methods"
      ];
    } else if (app.id === 'easy-plate-menu') {
      tagline = "Smart Menu for Meal Preps & Boxed Meals";
      description = "The ideal solution for healthy meal businesses, boxed lunches, and meal prep operations to organize order receipts cleanly, professionally, and with zero sales commissions.";
      features = [
        "Menu organization for boxed lunches and tailored meals",
        "Simple selection of sizes, options, and sides",
        "Scheduling and control of planned deliveries"
      ];
    } else if (app.id === 'easy-cake-menu') {
      tagline = "Exclusive Menu for Cake Shops & Custom Sweets";
      description = "Modernize your bakery orders. A smart menu system to receive complex and customized orders cleanly and in an organized manner.";
      features = [
        "Step-by-step guided custom party cake builder",
        "Order organization sorted by delivery deadlines",
        "Premium photo catalog showcase for cakes and party packages"
      ];
    } else if (app.id === 'easy-custom-system') {
      name = "Custom System / Other Niche";
      tagline = "Exclusive Systems & Corporate Platforms";
      description = "If your business model doesn't fit standard templates, we build the ideal solution. We map out your company's bottlenecks and structure a complete customized system to automate operations and scale your business.";
      features = [
        "Software engineering targeted to your actual business bottlenecks",
        "Custom admin panels and structured managerial reports",
        "Secure, scalable cloud database storage for your business"
      ];
    }

    return {
      ...app,
      name,
      tagline,
      description,
      features,
      stats
    };
  });

  const currentApp = translatedShowcaseApps.find(app => app.id === activeTab) || translatedShowcaseApps[0];

  // Map icon names to Lucide icon components
  const getIcon = (name: string, size = 20) => {
    switch (name) {
      case 'Sparkles': return <Sparkles size={size} className="text-[#00f0ff]" />;
      case 'Scissors': return <Scissors size={size} className="text-[#00f0ff]" />;
      case 'User': return <User size={size} className="text-[#00f0ff]" />;
      case 'UtensilsCrossed': return <UtensilsCrossed size={size} className="text-[#00f0ff]" />;
      case 'Flame': return <Flame size={size} className="text-[#00f0ff]" />;
      case 'Utensils': return <Utensils size={size} className="text-[#00f0ff]" />;
      case 'Cake': return <Cake size={size} className="text-[#00f0ff]" />;
      case 'Briefcase': return <Briefcase size={size} className="text-[#00f0ff]" />;
      case 'Home': return <Home size={size} className="text-[#00f0ff]" />;
      case 'Compass': return <Compass size={size} className="text-[#00f0ff]" />;
      default: return <Sparkles size={size} className="text-[#00f0ff]" />;
    }
  };

  return (
    <section className="py-24 px-6 relative bg-[#030303] overflow-hidden" id="showcase-section">
      {/* Decorative ambient blurred glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#00f0ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#0df]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Headings */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 pb-1 pt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
            <span className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase font-bold">
              {language === 'PT' ? 'PORTFÓLIO & VITRINE' : 'PORTFOLIO & COLLATERAL'}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white mb-4">
            {language === 'PT' ? 'Nossos Aplicativos & Sistemas' : 'Our Applications & Tailored Systems'}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light">
            {language === 'PT' 
              ? 'Chega de passar o dia inteiro preso respondendo mensagens repetitivas manualmente no WhatsApp ou SMS. Desenvolvemos soluções sob medida e aplicativos exclusivos com a sua marca para automatizar sua rotina e modernizar o seu atendimento.'
              : 'Stop wasting hours answering repetitive texts on WhatsApp. We design and launch bespoke applications and custom dashboard engines branded uniquely for your business to automate workflows and elevate client perception.'
            }
          </p>
        </div>

        {/* Tab Selection Row - responsive and beautifully structured */}
        <div className="mb-16 max-w-5xl mx-auto px-1">
          {/* Desktop structured rows: exactly 5 on top, 5 below */}
          <div className="hidden md:flex flex-col gap-3.5 items-center">
            {/* Row 1: First 5 apps */}
            <div className="flex justify-center gap-3.5 w-full">
              {translatedShowcaseApps.slice(0, 5).map((app) => {
                const isActive = app.id === activeTab;
                return (
                  <button
                    key={app.id}
                    id={`tab-btn-${app.id}`}
                    onClick={() => setActiveTab(app.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-sans text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#00f0ff]/20 to-[#0df]/10 text-white border border-[#00f0ff]/50 shadow-[0_0_20px_rgba(0,240,255,0.15)] shadow-inner font-bold' 
                        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    {getIcon(app.iconName, 15)}
                    <span>{app.name}</span>
                  </button>
                );
              })}
            </div>
            {/* Row 2: Remaining 5 apps */}
            <div className="flex justify-center gap-3.5 w-full">
              {translatedShowcaseApps.slice(5).map((app) => {
                const isActive = app.id === activeTab;
                return (
                  <button
                    key={app.id}
                    id={`tab-btn-${app.id}`}
                    onClick={() => setActiveTab(app.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-sans text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#00f0ff]/20 to-[#0df]/10 text-white border border-[#00f0ff]/50 shadow-[0_0_20px_rgba(0,240,255,0.15)] shadow-inner font-bold' 
                        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    {getIcon(app.iconName, 15)}
                    <span>{app.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile adaptive row with flex-wrap */}
          <div className="flex md:hidden flex-wrap items-center justify-center gap-2">
            {translatedShowcaseApps.map((app) => {
              const isActive = app.id === activeTab;
              return (
                <button
                  key={app.id}
                  id={`tab-btn-mobile-${app.id}`}
                  onClick={() => setActiveTab(app.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-2xl font-sans text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#00f0ff]/20 to-[#0df]/10 text-white border border-[#00f0ff]/50 shadow-[0_0_20px_rgba(0,240,255,0.15)] shadow-inner font-bold' 
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {getIcon(app.iconName, 15)}
                  <span>{app.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Display Board - Glassmorphic Showcase */}
        <div className="glass-panel rounded-3xl p-6 md:p-12 border border-white/5 relative overflow-hidden backdrop-blur-xl">
          {/* Subtle neon border top highlight */}
          <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              
              {/* Product Info Description (12 cols: 5) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/20">
                    {getIcon(currentApp.iconName, 22)}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#00f0ff] uppercase tracking-widest">
                    {currentApp.id === 'easy-custom-system' ? (language === 'PT' ? 'SISTEMA SOB MEDIDA' : 'CUSTOM SYSTEM') : currentApp.name}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3.5xl font-display font-bold text-white mb-4 tracking-tight leading-tight">
                  {currentApp.tagline}
                </h3>
                
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                  {currentApp.description}
                </p>

                {/* Key Features List */}
                <ul className="space-y-3 mb-8">
                  {currentApp.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm">
                      <div className="mt-0.5 p-0.5 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30">
                        <Check size={12} />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Stat Box Badge */}
                {!['easy-menu', 'easy-waxing', 'easy-plate-menu', 'easy-cake-menu', 'easy-custom-system', 'easy-booking'].includes(currentApp.id) && (
                  <div className="flex flex-col md:flex-row md:items-center gap-4 py-4 px-6 rounded-2xl bg-white/5 border border-white/5 mb-8 text-left">
                    <div className={`${currentApp.stats.value.length > 8 ? 'text-lg md:text-xl' : 'text-2xl md:text-3xl'} font-display font-extrabold text-[#00f0ff] tracking-tight drop-shadow-[0_0_10px_rgba(0,240,255,0.3)] min-w-[120px] md:min-w-[160px]`}>
                      {language === 'PT' 
                        ? currentApp.stats.value 
                        : currentApp.id === 'easy-beauty' 
                          ? 'Real-Time Availability' 
                          : currentApp.id === 'easy-nails'
                            ? 'Your Schedule Organized'
                            : currentApp.id === 'easy-barber'
                              ? '24/7 Availability'
                              : currentApp.stats.value}
                    </div>
                    <div className="text-sm text-white leading-relaxed font-normal uppercase font-medium tracking-wide">
                      {language === 'PT' 
                        ? currentApp.stats.label 
                        : currentApp.id === 'easy-beauty' 
                          ? 'No back-and-forth messages. Clients view, choose, and book 100% autonomously.' 
                          : currentApp.id === 'easy-nails' 
                            ? 'Less time swapping messages, more time focused on your services.' 
                            : currentApp.id === 'easy-barber'
                              ? 'Your client chooses the day, time, and barber 100% autonomously, even outside business hours.'
                              : currentApp.stats.label || 'Fewer unanswered texts & faster responses'}
                    </div>
                  </div>
                )}

                 {/* Action CTA Button */}
                 <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-2 w-full">
                   {currentApp.id === 'easy-custom-system' ? (
                     <button 
                       id={`cta-showcase-primary-${currentApp.id}`}
                       onClick={() => {
                         const el = document.getElementById('contact-section');
                         if (el) el.scrollIntoView({ behavior: 'smooth' });
                       }}
                       className="w-full sm:w-auto text-center justify-center group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#0df] text-[#030303] text-sm font-black tracking-wide transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:scale-[1.02] cursor-pointer"
                     >
                       <span>{language === 'PT' ? 'Solicitar Diagnóstico Gratuito' : 'Request Free Diagnostic'}</span>
                       <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                     </button>
                   ) : ['easy-beauty', 'easy-nails', 'easy-barber', 'easy-menu', 'easy-waxing', 'easy-plate-menu', 'easy-cake-menu', 'easy-booking', 'easy-travel-guide'].includes(currentApp.id) ? (
                     <>
                       <button 
                         id={`cta-showcase-primary-${currentApp.id}`}
                         onClick={() => {
                           const el = document.getElementById('contact-section');
                           if (el) el.scrollIntoView({ behavior: 'smooth' });
                         }}
                         className="w-full sm:w-auto text-center justify-center group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#0df] text-[#030303] text-sm font-black tracking-wide transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:scale-[1.02] cursor-pointer"
                       >
                         <span>{language === 'PT' ? 'Agendar Demonstração Gratuita' : 'Book Free Demonstration'}</span>
                         <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                       </button>

                       {['easy-beauty', 'easy-nails', 'easy-barber', 'easy-menu', 'easy-plate-menu', 'easy-waxing', 'easy-cake-menu', 'easy-booking', 'easy-travel-guide'].includes(currentApp.id) ? (
                         <a 
                           id={`cta-showcase-secondary-${currentApp.id}`}
                           href={
                             currentApp.id === 'easy-nails' 
                               ? "https://easynails.vercel.app/" 
                               : currentApp.id === 'easy-beauty'
                                 ? "https://easybeauty.vercel.app/"
                                 : currentApp.id === 'easy-barber'
                                 ? "https://easybarber-phi.vercel.app/"
                                 : currentApp.id === 'easy-menu'
                                    ? "https://easymenu-diy-usa.vercel.app/"
                                    : currentApp.id === 'easy-plate-menu'
                                      ? "https://easyplatemenu-diy.vercel.app/"
                                      : currentApp.id === 'easy-waxing'
                                         ? "https://easywaxing.vercel.app/"
                                         : currentApp.id === 'easy-booking'
                                           ? "https://easybooking-five.vercel.app/"
                                           : currentApp.id === 'easy-travel-guide'
                                             ? "https://easytravelguide.vercel.app/"
                                             : "https://easycakemenu.vercel.app/"
                           }
                           target="_blank"
                           rel="noopener noreferrer"
                           className="w-full sm:w-auto text-center justify-center inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 hover:border-[#00f0ff] hover:text-[#00f0ff] text-white text-sm font-bold transition-all duration-300 cursor-pointer"
                         >
                           <span>{language === 'PT' ? 'Ver Aplicativo Demonstrativo' : 'View Demo App'}</span>
                         </a>
                       ) : (
                         <button 
                           id={`cta-showcase-secondary-${currentApp.id}`}
                           onClick={() => {
                             setDemoToastVisible(true);
                             setTimeout(() => setDemoToastVisible(false), 5000);
                           }}
                           className="w-full sm:w-auto text-center justify-center inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 hover:border-[#00f0ff] hover:text-[#00f0ff] text-white text-sm font-bold transition-all duration-300 cursor-pointer"
                         >
                           <span>{language === 'PT' ? 'Ver Aplicativo Demonstrativo' : 'View Demo App'}</span>
                         </button>
                       )}
                     </>
                   ) : (
                     <button 
                       id={`cta-showcase-${currentApp.id}`}
                       onClick={() => {
                         const el = document.getElementById('contact-section');
                         if (el) el.scrollIntoView({ behavior: 'smooth' });
                       }}
                       className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#0df] text-[#030303] text-sm font-bold tracking-wide transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:scale-[1.02] cursor-pointer"
                     >
                       <span>{language === 'PT' ? 'Quero este sistema' : 'I want this system'}</span>
                       <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                     </button>
                   )}
                 </div>
               </div>
 
               {/* Product Interactive Visual Preview (12 cols: 7) */}
               <div className="lg:col-span-7 flex justify-center w-full">
                 <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-black/80 p-4 md:p-6 shadow-2xl relative overflow-hidden">
                   {/* Subtle layout grid background decorative overlay */}
                   <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,240,255,0.03),transparent_60%)] pointer-events-none" />
                   
                   {/* Dashboard top window controls */}
                   <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                     <div className="flex items-center gap-1.5">
                       <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                       <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                       <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                     </div>
                     <div className="px-3 py-1 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-gray-400">
                       localhost/app/{currentApp.id}
                     </div>
                     <div className="w-8" /> {/* Spacer */}
                   </div>
 
                   {/* Render Visual Mockup based on App profile */}
                   <div className="min-h-[280px] md:min-h-[340px] flex flex-col justify-between">
                     {currentApp.id === 'easy-menu' ? (
                        <MenuPracticeCard />
                      ) : currentApp.id === 'easy-beauty' ? (
                       <PracticeCard />
                     ) : currentApp.id === 'easy-nails' ? (
                       <NailsPracticeCard />
                     ) : currentApp.id === 'easy-barber' ? (
                       <BarberPracticeCard />
                     ) : currentApp.id === 'easy-waxing' ? (
                       <WaxingPracticeCard />
                     ) : currentApp.id === 'easy-plate-menu' ? (
                       <PlateMenuPracticeCard />
                     ) : currentApp.id === 'easy-cake-menu' ? (
                       <CakeMenuPracticeCard />
                      ) : currentApp.id === 'easy-booking' ? (
                        <BookingPracticeCard />
                      ) : currentApp.id === 'easy-travel-guide' ? (
                        <TravelPracticeCard />
                     ) : currentApp.id === 'easy-custom-system' ? (
                       <CustomSystemPracticeCard />
                     ) : (
                       <>
                         {currentApp.mockupType === 'calendar' && <CalendarMockup />}
                         {currentApp.mockupType === 'dashboard' && <DashboardMockup />}
                         {currentApp.mockupType === 'barber' && <BarberMockup />}
                         {currentApp.mockupType === 'menu' && <MenuMockup />}
                       </>
                     )}
                   </div>

                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>

      {/* Toast Notification for Iframe friendly UX */}
      <AnimatePresence>
        {demoToastVisible && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 bg-[#0c0c0c] border border-[#00f0ff]/30 p-4 rounded-2xl shadow-[0_4px_30px_rgba(0,240,255,0.15)] backdrop-blur-xl max-w-sm mr-2"
          >
            <div className="flex gap-3 text-left">
              <div className="w-8 h-8 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] flex items-center justify-center shrink-0">
                <Sparkles size={16} />
              </div>
              <div>
                <p className="text-xs font-bold text-white mb-0.5">{currentApp.name} Demo</p>
                <p className="text-xs text-gray-400">
                  {language === 'PT' 
                    ? 'Você está navegando na interface demonstrativa limpa! Preencha o diagnóstico ao lado para customizar o app com seus dados.' 
                    : 'You are browsing a clean interactive preview! Fill out the diagnostic form beside it to customize this application with your own data.'}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ============================================================================
   SUB-COMPONENTS: MICRO-INTERACTIVE UI PREVIEWS (Apple or top-tier design level)
   ============================================================================ */

/**
 * 1. Calendar Booking Mockup for Easy Beauty
 */
function CalendarMockup() {
  const { language } = useLanguage();
  const [selectedSlot, setSelectedSlot] = useState<string>('14:00');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const slots = ['10:00', '11:15', '14:00', '15:30', '17:00'];

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
            <Calendar size={14} className="text-[#00f0ff]" />
            {language === 'PT' ? 'Selecione o Horário (14 de Outubro)' : 'Select Time Slot (October 14)'}
          </h4>
          <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded">
            {language === 'PT' ? 'Livre hoje' : 'Available today'}
          </span>
        </div>

        {/* Visual Calendar Header */}
        <div className="grid grid-cols-5 gap-1.5 mb-4 text-center">
          {(language === 'PT' ? ['Ter', 'Qua', 'Qui', 'Sex', 'Sab'] : ['Tue', 'Wed', 'Thu', 'Fri', 'Sat']).map((d, i) => (
            <div key={d} className={`p-2 rounded-xl border text-xs ${i === 2 ? 'border-[#00f0ff]/40 bg-[#00f0ff]/5' : 'border-white/5 bg-white/2'}`}>
              <div className="text-gray-400 font-mono text-[9px] uppercase">{d}</div>
              <div className={`mt-0.5 font-bold ${i === 2 ? 'text-[#00f0ff]' : 'text-gray-200'}`}>{12 + i}</div>
            </div>
          ))}
        </div>

        {/* Professional service title */}
        <div className="p-3 rounded-xl bg-white/5 border border-white/5 mb-4 flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-white">
              {language === 'PT' ? 'Escova + Hidratação Orgânica' : 'Blow Dry + Organic Hydration'}
            </div>
            <div className="text-[10px] text-gray-400">
              {language === 'PT' ? 'Duração: 45 minutos • Cabelo' : 'Duration: 45 minutes • Hair'}
            </div>
          </div>
          <div className="text-xs font-mono font-bold text-[#00f0ff]">$120.00</div>
        </div>

        {/* Hour Slot Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-4">
          {slots.map((s) => {
            const isSelected = selectedSlot === s;
            return (
              <button
                key={s}
                onClick={() => setSelectedSlot(s)}
                className={`p-2 rounded-xl text-center text-xs font-mono font-semibold transition-all ${
                  isSelected 
                    ? 'bg-[#00f0ff] text-[#030303] shadow-[0_0_12px_#00f0ff] scale-[1.03]' 
                    : 'bg-white/5 border border-white/5 text-gray-300 hover:border-white/20'
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      {/* Confirmation simulation */}
      <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Clock size={14} className="text-gray-400" />
          <span className="text-xs text-gray-300 font-mono">
            {language === 'PT' ? (
              <>Selecionado: <strong className="text-[#00f0ff]">{selectedSlot}</strong> - Profissional: Gisele M.</>
            ) : (
              <>Selected: <strong className="text-[#00f0ff]">{selectedSlot}</strong> - Specialist: Gisele M.</>
            )}
          </span>
        </div>
        <button
          onClick={() => {
            setBookingConfirmed(true);
            setTimeout(() => setBookingConfirmed(false), 3000);
          }}
          className="w-full sm:w-auto px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-bold transition-all shadow-inner"
        >
          {bookingConfirmed 
            ? (language === 'PT' ? "✓ Agendado no Sistema!" : "✓ Booked in System!") 
            : (language === 'PT' ? "Confirmar Agendamento" : "Confirm Appointment")}
        </button>
      </div>
    </div>
  );
}

/**
 * 2. Revenue & Metrics dashboard simulator for Easy Nails
 */
function DashboardMockup() {
  const { language } = useLanguage();
  const [activeRange, setActiveRange] = useState<'week' | 'month'>('week');
  return (
    <div className="flex flex-col h-full justify-between gap-4">
      <div className="flex justify-between items-center">
        <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
          <TrendingUp size={14} className="text-[#00f0ff]" />
          {language === 'PT' ? 'Lucro Automatizado Fácil' : 'Easy Automated Cashflow'}
        </h4>
        <div className="flex p-0.5 bg-white/5 rounded-lg border border-white/5">
          <button 
            onClick={() => setActiveRange('week')}
            className={`px-2 py-0.5 text-[9px] font-mono rounded ${activeRange === 'week' ? 'bg-[#00f0ff] text-black font-bold' : 'text-gray-400'}`}
          >
            {language === 'PT' ? 'Semanas' : 'Weekly'}
          </button>
          <button 
            onClick={() => setActiveRange('month')}
            className={`px-2 py-0.5 text-[9px] font-mono rounded ${activeRange === 'month' ? 'bg-[#00f0ff] text-black font-bold' : 'text-gray-400'}`}
          >
            {language === 'PT' ? 'Mensal' : 'Monthly'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
          <div className="text-[10px] text-gray-400 font-mono uppercase">
            {language === 'PT' ? 'Unhas Feitas' : 'Nails Done'}
          </div>
          <div className="text-base font-bold text-white mt-1">112</div>
          <span className="text-[9px] text-emerald-400 font-mono">
            {language === 'PT' ? '↑ 18% este mês' : '↑ 18% this month'}
          </span>
        </div>
        <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
          <div className="text-[10px] text-gray-400 font-mono uppercase">
            {language === 'PT' ? 'Tickets Online' : 'Online Bookings'}
          </div>
          <div className="text-base font-bold text-white mt-1">$142.50</div>
          <span className="text-[9px] text-emerald-400 font-mono">
            {language === 'PT' ? 'Fidelizadas' : 'Retained'}
          </span>
        </div>
        <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
          <div className="text-[10px] text-gray-400 font-mono uppercase">
            {language === 'PT' ? 'Tempo Livre' : 'Time Saved'}
          </div>
          <div className="text-base font-bold text-white mt-1">
            {language === 'PT' ? '42 horas' : '42 hours'}
          </div>
          <span className="text-[9px] text-[#00f0ff] font-mono">
            {language === 'PT' ? 'Salvo no Whats' : 'Saved on Whats'}
          </span>
        </div>
      </div>

      {/* Modern Wave Bar Display */}
      <div className="bg-white/3 border border-white/5 p-4 rounded-xl flex flex-col justify-end min-h-[140px] relative">
        <div className="absolute top-2 left-3 text-[10px] text-gray-500 font-mono">
          {language === 'PT' ? 'Distribuição de Receita por manicures' : 'Revenue distribution by technician'}
        </div>
        
        <div className="flex items-end justify-between gap-1 h-20 pt-4">
          {[40, 65, 35, 80, 50, 95, 70, 85].map((val, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
              <div 
                className="w-full bg-gradient-to-t from-[#00f0ff]/40 to-[#00f0ff] rounded-t-sm shadow-[0_0_10px_rgba(0,240,255,0.2)]" 
                style={{ height: `${val}%` }}
              />
              <span className="text-[8px] text-gray-500 font-mono">P{idx + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * 3. Barber Queue timeline simulator for Easy Barber
 */
function BarberMockup() {
  const { language } = useLanguage();
  const [selectedSeat, setSelectedSeat] = useState<number>(0);
  const staff = [
    { 
      name: "Cadu Santos", 
      status: language === 'PT' ? "Em Atendimento" : "Currently Busy", 
      time: language === 'PT' ? "14:15 - Degradê" : "14:15 - Fade Cut", 
      icon: "✓" 
    },
    { 
      name: "Guilherme B.", 
      status: language === 'PT' ? "Livre em 10 min" : "Free in 10 min", 
      time: language === 'PT' ? "14:40 - Sombrancelha" : "14:40 - Eyebrows", 
      icon: "⏰" 
    },
    { 
      name: "Felipe Mendes", 
      status: language === 'PT' ? "Totalmente Livre" : "Completely Free", 
      time: language === 'PT' ? "Disponível Já" : "Available Now", 
      icon: "✔" 
    }
  ];

  return (
    <div className="flex flex-col h-full justify-between gap-4">
      <div>
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
            <User size={14} className="text-[#00f0ff]" />
            {language === 'PT' ? 'Gerente de Cadeiras & Profissionais' : 'Chair & Operator Manager'}
          </h4>
          <span className="text-[10px] font-mono text-gray-400">
            {language === 'PT' ? 'Total de 3 Operadores' : 'Total of 3 Operators'}
          </span>
        </div>

        <div className="space-y-2.5">
          {staff.map((p, idx) => {
            const isSelected = selectedSeat === idx;
            return (
              <div 
                key={p.name}
                onClick={() => setSelectedSeat(idx)}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  isSelected 
                    ? 'border-[#00f0ff]/50 bg-[#00f0ff]/5 shadow-[0_0_12px_rgba(0,240,255,0.05)]' 
                    : 'border-white/5 bg-white/2 hover:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-1.5 text-xs font-bold rounded-lg ${isSelected ? 'bg-[#00f0ff] text-black' : 'bg-white/10 text-white'}`}>
                      {p.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{p.name}</div>
                      <div className="text-[9px] text-gray-400 mt-0.5">{p.time}</div>
                    </div>
                  </div>
                  <div>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                      idx === 2 
                        ? 'bg-emerald-500/10 text-emerald-400' 
                        : idx === 1 
                          ? 'bg-yellow-500/10 text-yellow-400' 
                          : 'bg-white/5 text-gray-300'
                    }`}>
                      {p.status}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-3 bg-white/5 rounded-xl text-[11px] text-gray-300 border border-white/5 flex items-center justify-between">
        <span>{language === 'PT' ? 'Fila sincronizada com painel da TV da barbearia' : 'Queue synced with barbershop TV screen'}</span>
        <button className="text-[#00f0ff] font-bold text-[10px] tracking-wide uppercase hover:underline">
          {language === 'PT' ? 'Abrir Painel TV →' : 'Open TV Panel →'}
        </button>
      </div>
    </div>
  );
}

/**
 * 4. Interactive Restaurant Menu cart simulator for Easy Menu
 */
function MenuMockup() {
  const { language } = useLanguage();
  const [cartCount, setCartCount] = useState(1);
  const [isSending, setIsSending] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

  return (
    <div className="flex flex-col h-full justify-between gap-4">
      <div>
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
            <ShoppingCart size={14} className="text-[#00f0ff]" />
            {language === 'PT' ? 'Carrinho Digital de Delivery' : 'Digital Delivery Cart'}
          </h4>
          <span className="text-[10px] bg-red-400/15 text-red-400 px-2 py-0.5 border border-red-500/10 rounded font-bold uppercase">
            {language === 'PT' ? 'Sem Taxa 0% iFood' : 'Zero Fees 0% iFood'}
          </span>
        </div>

        {/* Selected food item card */}
        <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex gap-3 relative">
          <div className="w-14 h-14 rounded-lg bg-gray-800 flex items-center justify-center text-xl">
            🍔
          </div>
          <div className="flex-1">
            <h5 className="text-xs font-bold text-white">
              {language === 'PT' ? 'X-Burger Artesanal Max Duplo' : 'Double Artisanal Cheeseburger'}
            </h5>
            <p className="text-[10px] text-gray-400 mt-0.5">
              {language === 'PT' 
                ? 'Pão brioche, duas carnes de 150g, muito queijo cheddar.' 
                : 'Brioche bun, double 150g patties, loads of cheddar cheese.'}
            </p>
            <div className="flex items-center justify-between mt-2.5">
              <div className="flex items-center bg-white/5 rounded-md border border-white/10 px-1 py-0.5">
                <button 
                  onClick={() => setCartCount(Math.max(1, cartCount - 1))}
                  className="px-1 text-xs text-gray-300 hover:text-[#00f0ff]"
                >
                  -
                </button>
                <span className="px-2 text-xs font-mono font-bold text-white">{cartCount}</span>
                <button 
                  onClick={() => setCartCount(cartCount + 1)}
                  className="px-1 text-xs text-gray-300 hover:text-[#00f0ff]"
                >
                  +
                </button>
              </div>
              <span className="text-xs font-mono font-bold text-[#00f0ff]">
                ${(38.90 * cartCount).toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Integration indicators */}
        <div className="mt-3.5 space-y-1.5">
          <div className="flex items-center gap-2 justify-between text-[11px] text-gray-400 font-mono">
            <span>Subtotal</span>
            <span>${(38.90 * cartCount).toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-2 justify-between text-[11px] text-gray-400 font-mono">
            <span>
              {language === 'PT' ? 'Entrega Autônoma (3km)' : 'Local Delivery (3km)'}
            </span>
            <span className="text-[#00f0ff]">
              {language === 'PT' ? 'Grátis' : 'Free'}
            </span>
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={() => {
            setIsSending(true);
            setTimeout(() => {
              setIsSending(false);
              setOrderSent(true);
              setTimeout(() => setOrderSent(false), 3000);
            }, 1200);
          }}
          disabled={isSending}
          className="w-full py-2.5 rounded-xl bg-[#00f0ff] hover:bg-[#00f0ff]/90 text-black text-xs font-bold font-sans transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSending ? (
            <span className="animate-spin w-4 h-4 border-2 border-black border-t-transparent rounded-full" />
          ) : orderSent ? (
            language === 'PT' ? "✓ PEDIDO IMPRESSO NA COZINHA!" : "✓ ORDER PRINTED IN KITCHEN!"
          ) : (
            <>
              <MessageSquare size={14} />
              {language === 'PT' ? 'ENVIAR PEDIDO DIRETO NA COZINHA' : 'SEND ORDER DIRECTLY TO KITCHEN'}
            </>
          )}
        </button>
      </div>
    </div>
  );
}

/**
 * 5. Real Examples / Practical Possibilities Card for Easy Beauty
 */
function PracticeCard() {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col h-full justify-between text-left select-none">
      <div>
        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
          <Sparkles size={16} className="text-[#00f0ff]" />
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
            {language === 'PT' ? 'Exemplos Reais de Possibilidades Práticas' : 'Real Examples of Practical Features'}
          </h4>
        </div>
        
        <p className="text-sm font-bold text-white mb-3.5 leading-relaxed">
          {language === 'PT' ? 'O que o Easy Beauty faz pelo seu salão ou clínica na prática:' : 'What Easy Beauty does for your clinic or salon in practice:'}
        </p>
        
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Múltiplos Serviços no Mesmo Fluxo' : 'Multiple Services in One Flow'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Seu cliente pode agendar com profissionais diferentes para serviços distintos em uma única sessão. O sistema cruza os horários automaticamente, organizando o dia da sua equipe sem conflito de horários.'
                : 'Your client can book different professionals for distinct services in a single session. The system crosses schedules automatically, organizing your staff\'s day with no overlap.'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Controle de Janelas e Encaixes' : 'Gap & Fit Window Scheduling'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Autonomia para o seu time aproveitar cada minuto. Se um procedimento longo tem um tempo de pausa, o próprio profissional pode liberar esse intervalo específico no sistema para que outro cliente faça um agendamento rápido.'
                : 'Autonomy for your team to seize every minute. If a long procedure entails a pause time, the stylist can release that precise slot in the system for another quick booking.'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Customização Absoluta' : 'Total System Customization'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Regras de horários, pacotes de sessões e tratamentos adaptados exatamente à dinâmica da sua equipe.'
                : 'Unique operational rules, group session buffers, and treatment menus built to your precise workflow.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 6. Real Examples / Practical Possibilities Card for Easy Nails
 */
function NailsPracticeCard() {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col h-full justify-between text-left select-none">
      <div>
        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
          <Sparkles size={16} className="text-[#00f0ff]" />
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
            {language === 'PT' ? 'Exemplos Reais de Possibilidades Práticas' : 'Real Examples of Practical Features'}
          </h4>
        </div>
        
        <p className="text-sm font-bold text-white mb-3.5 leading-relaxed">
          {language === 'PT' ? 'O que o Easy Nails faz pela sua rotina na prática:' : 'What Easy Nails does for your routine in practice:'}
        </p>
        
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Filtro de Clientes para Retorno' : 'Client Recall Filters'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Monitore o tempo desde a última aplicação. Configure o período recomendado para a manutenção e localize rapidamente quem já precisa agendar a próxima sessão, facilitando o seu pós-atendimento.'
                : 'Monitor elapsed time since last application. Configure the recommended maintenance period and quickly locate who already needs to schedule their next session, streamlining post-service care.'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Comunicação Direta em 1 Clique' : 'Direct 1-Click Communication'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Sem taxas abusivas de disparo automatizado. Você tem um canal direto dentro do app para acionar o WhatsApp/SMS e enviar os alertas de horários ou manutenções, mantendo seus custos 100% fixos.'
                : 'No abusive automated broadcast fees. You have a direct channel inside the app to launch WhatsApp/SMS and send scheduling or maintenance alerts, keeping your costs 100% fixed.'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Tabela de Serviços Personalizada' : 'Custom Service Catalog'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Apresente seus serviços de forma profissional. Suas clientes visualizam o menu de opções disponíveis, entendem os valores e selecionam o procedimento correto no momento do agendamento.'
                : 'Present your services professionally. Your clients view the menu of available options, understand the rates, and select the correct procedure at the moment of booking.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 7. Real Examples / Practical Possibilities Card for Easy Barber
 */
function BarberPracticeCard() {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col h-full justify-between text-left select-none animate-fade-in">
      <div>
        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
          <Sparkles size={16} className="text-[#00f0ff]" />
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
            {language === 'PT' ? 'Exemplos Reais de Possibilidades Práticas' : 'Real Examples of Practical Features'}
          </h4>
        </div>
        
        <p className="text-sm font-bold text-white mb-3.5 leading-relaxed">
          {language === 'PT' ? 'O que o Easy Barber faz pela sua barbearia na prática:' : 'What Easy Barber does for your barbershop in practice:'}
        </p>
        
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Fim dos Gargalos de Finais de Semana' : 'No More Chaotic Weekends'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Seus clientes agendam o horário com antecedência e escolhem o barbeiro preferido direto no app. Acabe com as filas de espera físicas e a perda de clientes por demora no atendimento.'
                : 'Clients secure physical slots in advance and request their preferred barber straight in-app. Ditch walk-in queues and eliminate lost customers due to wait times.'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Gestão de Profissionais Independente' : 'Independent Barber Seats'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Cada barbeiro da sua equipe pode ter seu próprio painel de controle e horários conciliados, permitindo que a barbearia rode de forma organizada sem que você precise gerenciar mensagens manualmente.'
                : 'Every barber gets control of their personal schedule, individual splits, and availability blocks, allowing the venue to run cleanly without manual oversight.'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Controle de Retornos Facilitado' : 'Refined Client Haircut Cycles'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Monitore o ciclo médio de corte de cabelo e barba dos seus clientes e utilize os filtros para lembrar quem já está na hora de retornar, otimizando a organização da sua barbearia.'
                : 'Learn client return frequencies for trims and grooming. Use automated dashboard filters to recall customers due back, keeping bookings organized.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 8. Real Examples / Practical Possibilities Card for Easy Menu
 */
function MenuPracticeCard() {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col h-full justify-between text-left select-none animate-fade-in">
      <div>
        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
          <Sparkles size={16} className="text-[#00f0ff]" />
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
            {language === 'PT' ? 'Exemplos Reais de Possibilidades Práticas' : 'Real Examples of Practical Features'}
          </h4>
        </div>
        
        <p className="text-sm font-bold text-white mb-3.5 leading-relaxed">
          {language === 'PT' ? 'O que o Easy Menu faz pelo seu negócio na prática:' : 'What Easy Menu does for your food project in practice:'}
        </p>
        
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Foco na Simplicidade & Baixo Custo' : 'Lean & Cost-Effective Setup'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'A solução ideal, mais acessível e direta para quem está iniciando ou trabalha com um cardápio focado (como vendas exclusivas de doces, salgados ou lanches menores).'
                : 'A direct, affordable setup for startup chefs or restaurants with tight menus (selling pastries, sweet snacks, or small bites).'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Organização Sem Complicação' : 'Organized Order Pipelines'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Um cardápio digital objetivo para o seu cliente escolher os produtos e enviar o pedido direto para o seu sistema de forma limpa, eliminando a confusão de áudios e textos soltos no WhatsApp.'
                : 'Streamlined web catalog where clients select items and send clean cart orders directly, banishing chaotic voice notes and messy WhatsApp chats.'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Painel de Expedição Direto' : 'Direct Dispatch Control Board'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Monitore os pedidos recebidos em tempo real na sua tela, atualize a disponibilidade dos itens em segundos e gerencie suas entregas de forma centralizada.'
                : 'Watch incoming cart orders populate your dispatch stream. Switch out-of-stock items in seconds and organize deliveries in a single view.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Real Examples / Practical Possibilities Card for Easy Booking
 */
function BookingPracticeCard() {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col h-full justify-between text-left select-none animate-fade-in">
      <div>
        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
          <Sparkles size={16} className="text-[#00f0ff]" />
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
            {language === 'PT' ? 'Exemplos Reais de Possibilidades Práticas' : 'Real Examples of Practical Features'}
          </h4>
        </div>
        
        <p className="text-sm font-bold text-white mb-3.5 leading-relaxed">
          {language === 'PT' ? 'O que o Easy Booking faz pelo seu negócio na prática:' : 'What Easy Booking does for your property in practice:'}
        </p>
        
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Simulação de Estadia & Preços Dinâmicos' : 'Stay Simulation & Dynamic Pricing'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Seu hóspede escolhe as datas e calcula o valor exato da estadia na hora. O sistema aplica regras automáticas para dias de semana, finais de semana, feriados e taxa de limpeza.'
                : 'Your guest selects dates and calculates the exact stay value instantly. The system applies automatic rules for weekdays, weekends, holidays, and cleaning fees.'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Gestão de Calendário, Bloqueios & Tarifas' : 'Calendar Management, Blocks & Rates'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Altere valores sazonais e bloqueie datas para uso próprio ou manutenção com um clique. Mantenha controle total da disponibilidade do seu imóvel sem depender de intermediários.'
                : 'Change seasonal rates and block dates for personal use or maintenance with one click. Maintain full control of your property\'s availability without depending on intermediaries.'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Check-in Inteligente & Autonomia Total' : 'Smart Check-in & Complete Autonomy'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Agilize o atendimento enviando instruções pré-configuradas de check-in, senhas de fechadura eletrônica e regras da casa, entregando uma experiência de alto padrão sem perder horas no WhatsApp.'
                : 'Speed up guest service by sending pre-configured check-in guidelines, smart-lock codes, and house rules, delivering a premium experience without wasting hours on WhatsApp.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Real Examples / Practical Possibilities Card for Easy Travel Guide
 */
function TravelPracticeCard() {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col h-full justify-between text-left select-none animate-fade-in">
      <div>
        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
          <Sparkles size={16} className="text-[#00f0ff]" />
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
            {language === 'PT' ? 'Exemplos Reais de Possibilidades Práticas' : 'Real Examples of Practical Features'}
          </h4>
        </div>
        
        <p className="text-sm font-bold text-white mb-3.5 leading-relaxed">
          {language === 'PT' ? 'O que o Easy Travel Guide faz pela sua agência na prática:' : 'What Easy Travel Guide does for your agency in practice:'}
        </p>
        
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-[#00f0ff] mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Roteiro Completo Dia a Dia e Redução de Dúvidas' : 'Detailed Day-by-Day Itinerary & Reduced Inquiries'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Roteiro detalhado de cada dia, horários de encontro, dress code, recomendações e franquia de bagagem organizados 24/7. O passageiro acompanha o passo a passo da viagem sem precisar perguntar tudo no seu WhatsApp.'
                : 'Detailed daily itinerary, meeting times, dress code, recommendations, and baggage allowances organized 24/7. Passengers follow their journey step-by-step without having to ask everything on your WhatsApp.'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-[#00f0ff] mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Central de Embarque e Carteira Digital' : 'Departure Hub & Digital Wallet'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Espaço exclusivo para anexar e organizar passagens aéreas, seguros e vouchers de passeios. Seu cliente encontra qualquer documento de forma instantânea na hora do check-in.'
                : 'An exclusive space to attach and organize boarding passes, insurance policies, and tour vouchers. Your clients find any document instantly at check-in.'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-[#00f0ff] mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Marca Própria e Percepção Premium' : 'Custom Branding & Premium Perception'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Entregue o app como uma cortesia de alto valor percebido. O aplicativo carrega o ícone, o nome e a identidade da sua agência, transmitindo autoridade e inovação antes e durante a viagem.'
                : 'Offer the app as a high-value courtesy. The application displays your agency\'s icon, name, and identity, projecting authority and innovation before and during the trip.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 9. Real Examples / Practical Possibilities Card for Easy Waxing
 */
function WaxingPracticeCard() {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col h-full justify-between text-left select-none animate-fade-in">
      <div>
        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
          <Sparkles size={16} className="text-[#00f0ff]" />
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
            {language === 'PT' ? 'Exemplos Reais de Possibilidades Práticas' : 'Real Examples of Practical Features'}
          </h4>
        </div>
        
        <p className="text-sm font-bold text-white mb-3.5 leading-relaxed">
          {language === 'PT' ? 'O que o Easy Waxing faz pelo seu negócio na prática:' : 'What Easy Waxing does for your studio in practice:'}
        </p>
        
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Otimização de Salas e Macas' : 'Room & Treatment Station Optimization'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Monitore a ocupação dos seus espaços de atendimento em tempo real. Evite salas ociosas, gerencie os horários da sua equipe e garanta um fluxo dinâmico sem atrasos para as clientes.'
                : 'Monitor active treatment logs across all stations in real-time. Avoid idle rooms, balance stylist agendas, and guarantee low-delay services.'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Histórico & Ficha de Atendimento' : 'Secure Client Intake History'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Espaço centralizado para registrar as especificidades de cada cliente (como sensibilidade na pele ou tipo de cera utilizado), garantindo um atendimento seguro e padronizado.'
                : 'A private, digitized repository listing customer history, including previous styles, skin sensitivities, or products used, ensuring premium personal care.'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Filtro de Próxima Sessão' : 'Next Session & Return Filters'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Localize facilmente no painel quais clientes estão no período ideal de crescimento do pelo para a próxima depilação. Com um clique, você acessa o contato delas para sugerir o agendamento e manter a agenda sempre cheia.'
                : 'Easily track which customers are in their optimal hair-regrowth phase for their next waxing. Access contact info with one click to propose and secure timely bookings.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 10. Real Examples / Practical Possibilities Card for Easy Plate Menu
 */
function PlateMenuPracticeCard() {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col h-full justify-between text-left select-none animate-fade-in">
      <div>
        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
          <Sparkles size={16} className="text-[#00f0ff]" />
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
            {language === 'PT' ? 'Exemplos Reais de Possibilidades Práticas' : 'Real Examples of Practical Features'}
          </h4>
        </div>
        
        <p className="text-sm font-bold text-white mb-3.5 leading-relaxed">
          {language === 'PT' ? 'O que o Easy Plate Menu faz pelo seu negócio na prática:' : 'What Easy Plate Menu does for your meal preps in practice:'}
        </p>
        
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Foco em Marmitarias e Refeições' : 'Focus on Meal Prep & Delivery'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'A estrutura ideal para quem vende marmitas diárias, congelados ou planos semanais de alimentação.'
                : 'The perfect structure for those who sell daily meal boxes, frozen meals, or weekly nutrition subscription plans.'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Montagem Livre de Pratos' : 'Custom Meal Assembly'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Seu cliente monta a marmita escolhendo os acompanhamentos e porções ideais sem complicação e sem margem para erros.'
                : 'Your client builds their meal box by choosing the ideal sides and portions smoothly, leaving no room for assembly errors.'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Logística de Encomendas' : 'Order & Delivery Logistics'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Organize a produção e as entregas da semana sabendo exatamente o que foi agendado, direto pelo painel.'
                : 'Organize your weekly cooking and routing schedules by knowing exactly what has been requested, directly through the panel.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 11. Real Examples / Practical Possibilities Card for Easy Cake Menu
 */
function CakeMenuPracticeCard() {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col h-full justify-between text-left select-none animate-fade-in">
      <div>
        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
          <Sparkles size={16} className="text-[#00f0ff]" />
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
            {language === 'PT' ? 'Exemplos Reais de Possibilidades Práticas' : 'Real Examples of Practical Features'}
          </h4>
        </div>
        
        <p className="text-sm font-bold text-white mb-3.5 leading-relaxed">
          {language === 'PT' ? 'O que o Easy Cake Menu faz pelo seu negócio na prática:' : 'What Easy Cake Menu does for your bakery in practice:'}
        </p>
        
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Organização de Encomendas Customizadas' : 'Bespoke Order Configurations'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Perfeito para confeitarias e doceiras que trabalham com produtos personalizados. Seu cliente escolhe o tamanho, recheio e cobertura de forma guiada e sem erros.'
                : 'Perfect for sweet shops making tailored cakes. Walks clients through sizes, icing types, fillings, and structural designs error-free.'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Planejamento de Produção & Datas Festivas' : 'Holiday Prep & Batch Planners'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Centralize as ordens de pedidos por datas de entrega. Saiba exatamente o que precisa ser produzido para o final de semana ou feriados importantes com total antecedência.'
                : 'Consolidate deliveries by due date. Know exactly how many cake bases, cupcakes, or treats to produce for weekends and busy seasons.'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Vitrine Fotográfica Premium' : 'Premium Image Gallerias'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Exiba seus bolos de festa, doces finos e kits de forma altamente visual, valorizando o seu trabalho artesanal e facilitando a escolha do cliente.'
                : 'Display celebratory tier cakes, chocolate boxes, and setups in elegant, sleek cards to support high-end artisan value.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 12. Real Examples / Practical Possibilities Card for Custom System
 */
function CustomSystemPracticeCard() {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col md:flex-row h-full items-center justify-between gap-6 select-none animate-fade-in text-left">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
          <Briefcase size={16} className="text-[#00f0ff]" />
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300">
            {language === 'PT' ? 'PWA: SUCESSO PUBLICADO' : 'PWA: PUBLISHED SUCCESS'}
          </h4>
        </div>
        
        <p className="text-sm font-bold text-white mb-3.5 leading-relaxed">
          {language === 'PT' ? 'Caso de Estudo Real sob Medida: Pati Tour' : 'Real Bespoke Case Study: Pati Tour'}
        </p>
        
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Aplicativo Instalável Completo' : 'Complete Installable App'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Sistema de reservas online e roteiros turísticos operando como um aplicativo leve na mão do cliente.'
                : 'Online booking engine and tourism itineraries operating as a lightweight mobile app on client devices.'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {language === 'PT' ? 'Experiência Fluida e Offline-First' : 'Fluid & Offline-First Experience'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Navegação instantânea mesmo com conexões instáveis, ideal para roteiros de aventura ao ar livre.'
                : 'Instant navigation even in spotty connections, optimized for outdoor adventure tour bookings.'}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition-colors">
            <h5 className="text-base font-bold text-white mb-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              {language === 'PT' ? 'Design e Conversão Exclusivos' : 'Custom Conversion Design'}
            </h5>
            <p className="text-sm text-white leading-relaxed font-normal">
              {language === 'PT' 
                ? 'Look & feel moderno 100% alinhado com a identidade Pati Tour para capturar mais clientes.'
                : 'Modern look & feel 100% aligned with the Pati Tour brand to enhance authority and double bookings.'}
            </p>
          </div>
        </div>
      </div>

      {/* Styled Physical Mobile mockup with PWA screen */}
      <div className="flex-shrink-0 w-[180px] h-[320px] rounded-[32px] border-[6px] border-neutral-800 bg-neutral-950 relative shadow-[0_10px_35px_rgba(0,240,255,0.15)] overflow-hidden group flex flex-col md:mr-2">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4.5 bg-neutral-800 rounded-b-2xl z-20 flex items-center justify-center">
          <div className="w-7 h-1 bg-neutral-900 rounded-full mb-1" />
        </div>

        {/* Home bottom handle bar */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full z-20" />

        {/* PWA Screen Area */}
        <div className="w-full h-full relative z-10 overflow-hidden flex flex-col justify-between bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-white p-2.5 pt-6 select-none font-sans">
          {/* Status bar */}
          <div className="flex items-center justify-between text-[8px] font-mono text-gray-400 px-1 mb-1">
            <span>09:41</span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>5G</span>
            </div>
          </div>

          {/* Mini Header */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-2 mb-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-black tracking-tight text-white flex items-center gap-1">
                <Compass size={11} className="text-[#00f0ff]" />
                PATI TOUR
              </span>
              <span className="text-[8px] font-mono px-1.5 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] font-bold">
                PWA VIP
              </span>
            </div>
            <p className="text-[8px] text-gray-400 leading-tight">
              {language === 'PT' ? 'Foz do Iguaçu Adventure' : 'Adventure Travel Hub'}
            </p>
          </div>

          {/* Itinerary Cards */}
          <div className="space-y-1.5 flex-1 overflow-hidden">
            <div className="p-1.5 rounded-lg bg-white/5 border border-[#00f0ff]/20">
              <div className="flex items-center justify-between text-[8px] font-bold text-[#00f0ff]">
                <span>{language === 'PT' ? 'Dia 1: Cataratas' : 'Day 1: Waterfalls'}</span>
                <span className="text-[7px] text-[#10B981] font-mono">09:00</span>
              </div>
              <p className="text-[7px] text-gray-300 mt-0.5 leading-tight">
                {language === 'PT' ? 'Trilha & Mirante Principal' : 'Main Trail & Overlook'}
              </p>
            </div>

            <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
              <div className="flex items-center justify-between text-[8px] font-bold text-gray-200">
                <span>{language === 'PT' ? 'Dia 2: Macuco Safari' : 'Day 2: Safari Tour'}</span>
                <span className="text-[7px] text-gray-400 font-mono">14:30</span>
              </div>
              <p className="text-[7px] text-gray-400 mt-0.5 leading-tight">
                {language === 'PT' ? 'Passeio de Barco Aventura' : 'Adventure Boat Ride'}
              </p>
            </div>

            <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
              <span className="text-[7px] font-bold text-[#10B981]">
                {language === 'PT' ? '✓ Vouchers Anexados (3)' : '✓ Attached Vouchers (3)'}
              </span>
              <span className="text-[6px] font-mono text-gray-400 uppercase">Offline</span>
            </div>
          </div>

          {/* Mini Bottom Nav */}
          <div className="pt-2 pb-1 border-t border-white/10 flex items-center justify-around text-[8px] text-gray-400">
            <span className="text-[#00f0ff] font-bold">{language === 'PT' ? 'Roteiro' : 'Trip'}</span>
            <span>{language === 'PT' ? 'Vouchers' : 'Pass'}</span>
            <span>SOS</span>
          </div>

          {/* subtle high-contrast gloss overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

