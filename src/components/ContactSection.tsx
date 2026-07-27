/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent, useEffect } from 'react';
import { 
  Send, 
  MessageSquare, 
  Mail, 
  CheckCircle2 
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface ContactSectionProps {
  selectedAppId: string;
  setSelectedAppId: (id: string) => void;
}

export default function ContactSection({ selectedAppId, setSelectedAppId }: ContactSectionProps) {
  const { t, language } = useLanguage();
  const contactStrings = t('contact');
  const formStrings = contactStrings.form;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    whatsapp: '',
    businessType: 'Salão de Beleza',
    interest: selectedAppId,
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sendMethod, setSendMethod] = useState<'whatsapp' | 'sms'>('whatsapp');

  // Sync state if selectedAppId changes from ShowcaseSection
  useEffect(() => {
    setFormData(prev => {
      let matchedBusiness = prev.businessType;
      switch (selectedAppId) {
        case 'easy-beauty': matchedBusiness = 'Clínica de Estética'; break;
        case 'easy-nails': matchedBusiness = 'Nail Designer / Esmalteria'; break;
        case 'easy-barber': matchedBusiness = 'Barbearia'; break;
        case 'easy-menu': matchedBusiness = 'Restaurante / Delivery'; break;
        case 'easy-waxing': matchedBusiness = 'Depilação / Estética'; break;
        case 'easy-plate-menu': matchedBusiness = 'Restaurante / Delivery'; break;
        case 'easy-cake-menu': matchedBusiness = 'Confeitaria / Doceria'; break;
        case 'easy-custom-system': matchedBusiness = 'Sistema Customizado / Outro Nicho'; break;
      }
      return { 
        ...prev, 
        interest: selectedAppId,
        businessType: matchedBusiness
      };
    });
  }, [selectedAppId]);

  const getInterestName = (id: string) => {
    switch (id) {
      case 'easy-beauty': return 'Easy Beauty';
      case 'easy-nails': return 'Easy Nails';
      case 'easy-barber': return 'Easy Barber';
      case 'easy-menu': return 'Easy Menu';
      case 'easy-waxing': return 'Easy Waxing';
      case 'easy-plate-menu': return 'Easy Plate Menu';
      case 'easy-cake-menu': return 'Easy Cake Menu';
      case 'easy-custom-system': return language === 'PT' ? 'Sistema Customizado' : 'Custom System';
      default: return id;
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const interestLabel = getInterestName(formData.interest);
    const translatedSegment = contactStrings.segments[formData.businessType] || formData.businessType;

    let messageText = '';
    if (language === 'PT') {
      messageText = `Oi Pati! Tudo bem? Acabei de preencher a solicitação de diagnóstico no site Easy Byz Creator. Aqui estão as minhas informações:\n\n` +
        `• *Nome:* ${formData.name}\n` +
        `• *WhatsApp/Celular:* ${formData.whatsapp}\n` +
        `• *Segmento:* ${translatedSegment}\n` +
        `• *E-mail:* ${formData.email}\n` +
        `• *Instagram:* ${formData.instagram}\n` +
        `• *Sistema de Interesse:* ${interestLabel}\n` +
        `• *Mensagem:* ${formData.message || 'Nenhuma mensagem adicional'}`;
    } else {
      messageText = `Hi Pati! I just filled out the diagnostic request on the Easy Byz Creator website. Here is my information:\n\n` +
        `• *Name:* ${formData.name}\n` +
        `• *WhatsApp/Phone:* ${formData.whatsapp}\n` +
        `• *Segment:* ${translatedSegment}\n` +
        `• *Business Email:* ${formData.email}\n` +
        `• *Instagram:* ${formData.instagram}\n` +
        `• *System of Interest:* ${interestLabel}\n` +
        `• *Additional Note:* ${formData.message || 'No additional message'}`;
    }

    let url = '';
    if (sendMethod === 'whatsapp') {
      url = `https://wa.me/18038889018?text=${encodeURIComponent(messageText)}`;
    } else {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const separator = isIOS ? '&' : '?';
      url = `sms:+18038889018${separator}body=${encodeURIComponent(messageText)}`;
    }

    try {
      window.open(url, '_blank');
    } catch (err) {
      window.location.href = url;
    }

    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        instagram: '',
        whatsapp: '',
        businessType: 'Salão de Beleza',
        interest: selectedAppId,
        message: ''
      });
      // Reset confirmation after 4 seconds
      setTimeout(() => setSubmitted(false), 4000);
    }, 1200);
  };

  // Dual-language value-proposition items
  const valuePropositions = language === 'PT' ? [
    "Desenvolvimento rápido (entrega entre 5 a 7 dias para os aplicativos da linha Easy)",
    "Projetos e sistemas sob medida para qualquer nicho empresarial",
    "Mensalidade fixa justa, sem comissões por agendamento",
    "Assessoria e acompanhamento completo na configuração",
    "Suporte humanizado direto via WhatsApp"
  ] : [
    "Rapid development cycle (deployment in 5 to 7 days for the core Easy line)",
    "Bespoke software systems designed and scoped for any enterprise niche",
    "Predictable flat fee, completely free from commissions",
    "Complimentary onboarding training and continuous support",
    "Friendly developer access via text / WhatsApp directly"
  ];

  return (
    <section className="py-24 px-6 relative bg-[#030303] border-t border-white/5" id="contact-section">
      {/* Glow highlight behind form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#10B981]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Side (12 cols: 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span className="text-[10px] font-mono tracking-widest text-[#10B981] uppercase font-bold">
                  {contactStrings.title}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white mb-6 leading-tight">
                {language === 'PT' ? (
                  <>
                    Leve o seu negócio <br />
                    <span className="text-[#10B981] drop-shadow-[0_0_20px_rgba(16,185,129,0.15)]">para outro nível.</span>
                  </>
                ) : (
                  <>
                    Take your business <br />
                    <span className="text-[#10B981] drop-shadow-[0_0_20px_rgba(16,185,129,0.15)]">to another level.</span>
                  </>
                )}
              </h2>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-sans font-light">
                {language === 'PT' 
                  ? "Cada negócio é único. Nossos especialistas vão entender a rotina do seu dia a dia, mapear suas necessidades e estruturar o aplicativo ou sistema totalmente personalizado com a sua marca para rodar no piloto automático. Deixe seus dados para analisarmos seu projeto e desenharmos a sua solução."
                  : "Every operation is completely unique. Our specialists will study your daily workflows, map your critical pain points, and build a custom system branded entirely to your company, running fully on autopilot. Submit your query so we can build your plan."
                }
              </p>

              {/* Value propositions */}
              <div className="space-y-4 mb-8">
                {valuePropositions.map((item, id) => (
                  <div key={id} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981] flex items-center justify-center text-[10px] font-bold">
                      ✓
                    </div>
                    <span className="text-xs text-gray-300 font-medium font-sans">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro details contact */}
            <div className="border-t border-white/5 pt-8 space-y-4">
              <a 
                href="mailto:contato@easybyzcreator.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#00f0ff] transition-colors group cursor-pointer"
              >
                <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-[#00f0ff]">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-mono uppercase font-bold">E-mail</div>
                  <div className="text-xs font-semibold text-gray-200 mt-0.5 group-hover:underline">contato@easybyzcreator.com</div>
                </div>
              </a>

              <a 
                href="https://wa.me/18038889018?text=Oi%20Pati%2C%20tudo%20bem%3F%20Vi%20o%20site%20da%20Easy%20Byz%20Creator%20e%20quero%20saber%20como%20posso%20ter%20uma%20solu%C3%A7%C3%A3o%20personalizada%20para%20modernizar%20o%20meu%20neg%C3%B3cio." 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#10B981] transition-colors group cursor-pointer"
              >
                <div className="p-2 rounded-lg bg-[#25d366]/10 border border-[#25d366]/20 text-[#10B981]">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-mono uppercase font-bold">{contactStrings.supportTitle}</div>
                  <div className="text-xs font-semibold text-gray-200 mt-0.5 group-hover:underline">+1 (803) 888-9018</div>
                </div>
              </a>
            </div>

          </div>

          {/* Form Side with Glassmorphism */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden backdrop-blur-2xl bg-[#070707]/80">
              
              {/* Submission Confirmation screen */}
              {submitted && (
                <div className="absolute inset-0 bg-[#030303]/95 backdrop-blur-md z-30 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] mb-4 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-display font-black text-white mb-2">
                    {formStrings.successTitle}
                  </h4>
                  <p className="text-sm text-gray-300 max-w-sm mb-6 leading-relaxed font-sans">
                    {formStrings.successDesc}
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#10B981] font-mono tracking-widest uppercase hover:underline cursor-pointer"
                  >
                    {formStrings.successBackBtn}
                  </button>
                </div>
              )}

              <h3 className="text-lg md:text-xl font-display font-black text-white mb-1">
                {formStrings.title}
              </h3>
              <p className="text-xs text-gray-400 mb-6 font-sans">
                {formStrings.subtitle}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Input 1: Nome completo */}
                <div>
                  <label htmlFor="form-name" className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1.5 font-bold">
                    {formStrings.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={formStrings.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white text-sm transition-all focus:outline-none focus:border-[#10B981] focus:bg-white/8 font-medium font-sans"
                  />
                </div>

                {/* Grid row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Input 2: WhatsApp */}
                  <div>
                    <label htmlFor="form-whatsapp" className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1.5 font-bold">
                      {formStrings.whatsappLabel}
                    </label>
                    <input
                      type="tel"
                      id="form-whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder={formStrings.whatsappPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white text-sm transition-all focus:outline-none focus:border-[#10B981] focus:bg-white/8 font-medium font-sans"
                    />
                  </div>

                  {/* Input 3: Segmento */}
                  <div>
                    <label htmlFor="form-business" className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1.5 font-bold">
                      {formStrings.segmentLabel}
                    </label>
                    <select
                      id="form-business"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white text-sm transition-all focus:outline-none focus:border-[#10B981] focus:bg-white/8 font-medium appearance-none cursor-pointer font-sans"
                    >
                      {Object.entries(contactStrings.segments).map(([ptVal, localizedVal]) => (
                        <option key={ptVal} className="bg-[#0c0c0c] text-white" value={ptVal}>
                          {localizedVal}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Grid row 2: E-mail da Empresa & Instagram */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Input: E-mail da Empresa */}
                  <div>
                    <label htmlFor="form-email" className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1.5 font-bold">
                      {formStrings.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={formStrings.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white text-sm transition-all focus:outline-none focus:border-[#10B981] focus:bg-white/8 font-medium font-sans"
                    />
                  </div>

                  {/* Input: Instagram da Empresa */}
                  <div>
                    <label htmlFor="form-instagram" className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1.5 font-bold">
                      {formStrings.instaLabel}
                    </label>
                    <input
                      type="text"
                      id="form-instagram"
                      required
                      value={formData.instagram}
                      onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                      placeholder={formStrings.instaPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white text-sm transition-all focus:outline-none focus:border-[#10B981] focus:bg-white/8 font-medium font-sans"
                    />
                  </div>
                </div>

                {/* Input 4: Select Product System */}
                <div>
                  <label htmlFor="form-interest" className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1.5 font-bold">
                    {formStrings.systemLabel}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'easy-beauty', label: 'Easy Beauty' },
                      { id: 'easy-nails', label: 'Easy Nails' },
                      { id: 'easy-barber', label: 'Easy Barber' },
                      { id: 'easy-menu', label: 'Easy Menu' },
                      { id: 'easy-waxing', label: 'Easy Waxing' },
                      { id: 'easy-plate-menu', label: 'Easy Plate Menu' },
                      { id: 'easy-cake-menu', label: 'Easy Cake Menu' },
                      { id: 'easy-custom-system', label: language === 'PT' ? 'Sistema Customizado' : 'Custom System' }
                    ].map((app) => {
                      const isSelected = formData.interest === app.id;
                      return (
                        <button
                          key={app.id}
                          type="button"
                          id={`form-btn-interest-${app.id}`}
                          onClick={() => {
                            setFormData({ ...formData, interest: app.id });
                            setSelectedAppId(app.id);
                          }}
                          className={`p-2.5 rounded-lg text-xs font-semibold text-center border transition-all cursor-pointer font-sans ${
                            isSelected 
                              ? 'border-[#10B981]/50 bg-[#10B981]/10 text-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.05)]' 
                              : 'border-white/5 bg-white/2 hover:border-white/10 text-gray-300'
                          }`}
                        >
                          {app.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Input 5: Mensagem adicional */}
                <div>
                  <label htmlFor="form-message" className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1.5 font-bold">
                    {formStrings.messageLabel}
                  </label>
                  <textarea
                    id="form-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={formStrings.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white text-sm transition-all focus:outline-none focus:border-[#10B981] focus:bg-white/8 font-medium font-sans"
                  />
                </div>

                {/* Send Method Toggle selection */}
                <div className="space-y-2 mb-6">
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-400 mb-1.5 font-bold">
                    {language === 'PT' ? "COMO PREFERE ENVIAR OS DADOS?" : "HOW DO YOU PREFER TO SEND THE DATA?"}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSendMethod('whatsapp')}
                      className={`p-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer flex items-center justify-center gap-2 font-sans ${
                        sendMethod === 'whatsapp'
                          ? 'border-[#10B981]/50 bg-[#10B981]/10 text-[#10B981] shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                          : 'border-white/5 bg-white/2 hover:border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${sendMethod === 'whatsapp' ? 'bg-[#10B981]' : 'bg-gray-600'}`} />
                      {language === 'PT' ? "Via WhatsApp" : "Via WhatsApp"}
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setSendMethod('sms')}
                      className={`p-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer flex items-center justify-center gap-2 font-sans ${
                        sendMethod === 'sms'
                          ? 'border-[#00f0ff]/50 bg-[#00f0ff]/10 text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                          : 'border-white/5 bg-white/2 hover:border-white/10 text-gray-400 hover:text-white'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${sendMethod === 'sms' ? 'bg-[#00f0ff]' : 'bg-gray-600'}`} />
                      {language === 'PT' ? "Via SMS / Mensagem" : "Via SMS / Text Message"}
                    </button>
                  </div>
                </div>

                {/* Submit Button with beautiful glowing effects */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="submit-contact-btn"
                    disabled={isSubmitting}
                    className="w-full group py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#10B981] to-[#00f0ff] text-neutral-950 text-xs font-black tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-[1.01] active:translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-wait"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 rounded-full border-2 border-neutral-950 border-t-transparent animate-spin" />
                        <span>{formStrings.submitBtnSending}</span>
                      </>
                    ) : (
                      <span className="flex items-center gap-1">
                        {formStrings.submitBtn}
                      </span>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
