/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "PT" | "EN";

interface TranslationSchema {
  nav: {
    home: string;
    systems: string;
    benefits: string;
    contact: string;
    aboutUs: string;
    cta: string;
    mobileDivider: string;
  };
  hero: {
    badge: string;
    title1: string;
    titleGradient: string;
    subtitle: string;
    paragraph: string;
    primaryCta: string;
    quote: string;
    scroll: string;
  };
  showcase: {
    badge: string;
    title: string;
    subtitle: string;
    viewDemo: string;
    activeTitle: string;
    featuresTitle: string;
    impactLabel: string;
    ctaBtn: string;
  };
  benefits: {
    badge: string;
    title: string;
    subtitle: string;
    calculatorTitle: string;
    calculatorIntro: string;
    calcInputs: {
      staff: string;
      hours: string;
      value: string;
    };
    calcResult: {
      hoursSavedLabel: string;
      moneySavedLabel: string;
      yearlyLabel: string;
      equivalentLabel: string;
      hoursSuffix: string;
      moneyPrefix: string;
    };
  };
  branding: {
    badgeLeft: string;
    titleLeft: string;
    descriptionLeft: string;
    badgeRight: string;
    titleRight: string;
    descriptionRight: string;
    tagLeft: string;
    tagRight: string;
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    setupFee: string;
    setupFeeSubtitle: string;
    priceValue: string;
    priceMonth: string;
    billedAnnually: string;
    oneTimeFee: string;
    popularBadge: string;
    cta: string;
    features: {
      customDesign: string;
      adminPanel: string;
      notifications: string;
      support: string;
      hosting: string;
      domain: string;
      updates: string;
    };
    unlimitedTitle: string;
    unlimitedDesc: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    notFound: string;
    supportCta: string;
    items: Array<{ question: string; answer: string }>;
  };
  contact: {
    title: string;
    subtitle: string;
    supportTitle: string;
    supportDesc: string;
    form: {
      title: string;
      subtitle: string;
      nameLabel: string;
      namePlaceholder: string;
      whatsappLabel: string;
      whatsappPlaceholder: string;
      segmentLabel: string;
      emailLabel: string;
      emailPlaceholder: string;
      instaLabel: string;
      instaPlaceholder: string;
      systemLabel: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submitBtnSending: string;
      successTitle: string;
      successDesc: string;
      successBackBtn: string;
    };
    segments: Record<string, string>;
  };
  about: {
    badge: string;
    title: string;
    paragraph: string;
    footerTitle: string;
  };
  footer: {
    rights: string;
    security: string;
    terms: string;
    tagline: string;
  };
}

const translations: Record<Language, TranslationSchema> = {
  PT: {
    nav: {
      home: "Início",
      systems: "Nossos Sistemas",
      benefits: "Vantagens",
      contact: "Contato",
      aboutUs: "Sobre Nós",
      cta: "Orçamento Rápido",
      mobileDivider: "★ Automação inteligente para micro negócios",
    },
    hero: {
      badge: "AUTOMAÇÃO INTELIGENTE",
      title1: "Impulsione seu negócio ",
      titleGradient: "de forma única.",
      subtitle: "Automatize e saia do manual.",
      paragraph:
        "Desenvolvemos aplicativos personalizados e sistemas sob medida para organizar a sua rotina, modernizar o seu atendimento e valorizar o seu modelo de negócio. Oferecemos uma vitrine completa de soluções prontas para barbearias, salões, clínicas e deliveries escalarem sem complicação, além de criarmos projetos flexíveis adaptados exatamente para a realidade de qualquer modelo de negócio.",
      primaryCta: "Solicite seu App Personalizado",
      quote:
        '"Chega de planilhas e anotações soltas. Seu negócio merece tecnologia."',
      scroll: "ROLE PARA EXPLORAR",
    },
    showcase: {
      badge: "PRONTOS PARA RODAR",
      title: "Escolha a base ideal para o seu nicho",
      subtitle:
        "Nossos sistemas prontos servem como ponto de partida altamente otimizado. Customizamos cada recurso, cor e funcionalidade especificamente para a identidade da sua marca.",
      viewDemo: "Visualizar Interface Ativa",
      activeTitle: "NOTIFICAÇÕES ATIVAS",
      featuresTitle: "Recursos Prontos Inclusos",
      impactLabel: "Métrica de Impacto Real",
      ctaBtn: "Solicitar Demonstração Deste Sistema →",
    },
    benefits: {
      badge: "POR QUE ESCOLHER A GENTE?",
      title: "Seu negócio em outro patamar de eficiência",
      subtitle:
        "Oferecemos tecnologia robusta sem complicações. Ferramentas elegantes criadas especificamente para o pequeno empreendedor faturar mais e recuperar o controle do tempo.",
      calculatorTitle: "Calculadora de Economia de Tempo & Dinheiro",
      calculatorIntro:
        "Veja na ponta do lápis o impacto financeiro de automatizar seu atendimento manual.",
      calcInputs: {
        staff: "Profissionais no time",
        hours: "Horas gastas por dia respondendo clientes",
        value: "Meta de valor médio da sua hora de trabalho",
      },
      calcResult: {
        hoursSavedLabel: "Tempo Recuperado / Mês",
        moneySavedLabel: "Economia Convertida / Mês",
        yearlyLabel: "Sob um escopo anual, isso representa",
        equivalentLabel: "Mais tempo livre para focar em crescimento e estratégia.",
        hoursSuffix: "horas",
        moneyPrefix: "R$",
      },
    },
    branding: {
      tagLeft: "PRESENÇA DIGITAL EXCLUSIVA",
      badgeLeft: "CONFIANÇA & CRÉDITO",
      titleLeft: "Construa uma marca forte que os seus clientes valorizem",
      descriptionLeft:
        "Ter o seu próprio aplicativo personalizado eleva o nível do seu atendimento e gera fidelidade. Deixe uma impressão marcante e profissional desde o primeiro contato, faça com que seus clientes voltem com muito mais frequência e construa um negócio sólido do qual você realmente se orgulhe.",
      tagRight: "SISTEMA INTEGRADO E EM TEMPO REAL",
      badgeRight: "AUTONOMIA TOTAL",
      titleRight: "O controle do seu aplicativo totalmente nas suas mãos",
      descriptionRight:
        "Um painel administrativo intuitivo e completo, feito para quem não quer perder tempo com sistemas difíceis. Altere preços, adicione novos serviços, atualize os produtos do seu menu ou ajuste os horários da sua equipe em tempo real. Acesse o seu painel de gerenciamento exclusivo de onde estiver — pelo celular, tablet ou computador — e mantenha seu negócio atualizado de forma simples, sem depender de ninguém.",
    },
    pricing: {
      badge: "INVESTIMENTO LEVE E PREVISÍVEL",
      title: "Soluções corporativas a preços de MEI",
      subtitle:
        "Custo fixo garantido, livre de taxas por venda ou surpresas na fatura. Tecnologia acessível de verdade para o pequeno e microempreendedor.",
      setupFee: "Taxa única de configuração & design",
      setupFeeSubtitle: "Apenas no primeiro mês",
      priceValue: "$ 49.90",
      priceMonth: "/mês",
      billedAnnually: "Assinatura anual com renovação automática",
      oneTimeFee: "Configuração Personalizada Inicial: A partir de $ 369 (Taxa única)",
      popularBadge: "MAIS VENDIDO",
      cta: "Quero Meu App Exclusivo →",
      features: {
        customDesign: "Aplicativo exclusivo com sua logo, cores e fotos",
        adminPanel: "Painel de controle intuitivo para gerenciar tudo",
        notifications: "Lembretes e confirmações ilimitados via WhatsApp",
        support: "Suporte prioritário via WhatsApp direto com desenvolvedor",
        hosting: "Hospedagem segura inclusa de alta velocidade",
        domain: "Domínio exclusivo personalizado incluído",
        updates: "Atualizações de segurança e manutenção gratuitas",
      },
      unlimitedTitle: "Precisa de recursos ilimitados ou múltiplos locais?",
      unlimitedDesc:
        "Se o seu negócio possui requisitos avançados, integrações complexas ou gerência multi-unidade, criamos escopos especiais sob demanda. Fale com um especialista para receber um projeto de engenharia sob medida de ponta a ponta.",
    },
    faq: {
      badge: "PERGUNTAS FREQUENTES",
      title: "Tudo o que você precisa saber antes de começar",
      subtitle:
        "Respondemos de forma direta e sem rodeios às principais dúvidas dos nossos parceiros.",
      notFound:
        "Não encontrou o que procurava? Fale com nossa equipe de suporte.",
      supportCta: "Chamar no Chat",
      items: [
        {
          question:
            "Eu preciso entender de tecnologia para configurar o aplicativo?",
          answer:
            "De jeito nenhum. Nós cuidamos de todo o trabalho duro e entregamos o aplicativo personalizado pronto para o seu uso. Você só precisa nos passar as informações básicas do seu negócio e nossa equipe estrutura tudo com a sua identidade visual.",
        },
        {
          question:
            "O aplicativo serve tanto para serviços (como salões) quanto para alimentação?",
          answer:
            "Sim! Desenvolvemos soluções específicas para cada modelo de negócio. Temos versões focadas em agendamento de horários (como o Easy Beauty, Easy Barber, Easy Nails e Easy Waxing) e versões desenhadas perfeitamente para gestão de cardápios, encomendas e marmitarias (como o Easy Menu, Easy Plate Menu e Easy Cake Menu).",
        },
        {
          question: "Quanto tempo leva para o meu aplicativo ficar pronto?",
          answer:
            "O processo é extremamente ágil. Após o envio das informações e materiais do seu negócio, entregamos o seu sistema personalizado e pronto para uso em um prazo de 5 a 7 dias.",
        },
        {
          question:
            "Se eu precisar mudar um preço ou um horário, eu mesmo consigo fazer?",
          answer:
            "Com certeza. Você terá acesso exclusivo a um painel administrativo super intuitivo, onde poderá alterar valores, incluir novos produtos ou serviços e ajustar os horários da sua equipe em segundos, diretamente pelo seu celular ou computador, sem depender de ninguém.",
        },
        {
          question: "Vou receber ajuda para aprender a mexer no sistema?",
          answer:
            "Com certeza. Nosso compromisso não termina na entrega. Você contará com assessoria e acompanhamento completo da nossa equipe para garantir que você e seu time dominem o painel administrativo e tirem o máximo proveito do aplicativo.",
        },
        {
          question:
            "Como funciona o modelo de cobrança? Existem taxas surpresas?",
          answer:
            "Não trabalhamos com letras miúdas ou comissões por agendamento/pedido. Você paga apenas uma taxa única inicial de configuração e depois mantém uma mensalidade fixa garantida por um contrato anual de 12 meses, com renovação automática. Todos os recursos essenciais e notificações já estão inclusos.",
        },
        {
          question:
            "Como funciona o envio de lembretes e confirmações para os clientes?",
          answer:
            "O sistema gera mensagens inteligentes pré-configuradas. Você consegue dispará-las manualmente para seus clientes com apenas um clique. Esse modelo inteligente garante que você tenha mensagens ilimitadas sem precisar pagar taxas adicionais de servidores externos de API, mantendo seu custo previsível.",
        },
        {
          question: "Posso receber pagamentos integrados direto pelo aplicativo?",
          answer:
            "Sim! Oferecemos a possibilidade de integração com o sistema Stripe para que seus clientes paguem direto no app. Esse recurso e a taxa de configuração adicional podem ser consultados diretamente com nosso especialista durante a sua consultoria.",
        },
      ],
    },
    contact: {
      title: "ENTRE EM CONTATO",
      subtitle: "Comece a modernizar suas operações hoje mesmo",
      supportTitle: "SUPORTE & CONSULTORIA",
      supportDesc:
        "Precisa de ajuda ou deseja fechar o pedido por chamada? Nosso canal direto está sempre disponível.",
      form: {
        title: "Agende uma Demonstração e Diagnóstico Gratuito",
        subtitle:
          "Fale direto com os nossos desenvolvedores para tirar sua dúvida ou marcar uma chamada ao vivo.",
        nameLabel: "Seu Nome Completo *",
        namePlaceholder: "Ex: Pedro Henrique Silva",
        whatsappLabel: "WhatsApp / Celular *",
        whatsappPlaceholder: "Ex: +1 (803) 888-9018",
        segmentLabel: "Segmento do Negócio",
        emailLabel: "E-Mail da Empresa *",
        emailPlaceholder: "Ex: contato@suaempresa.com",
        instaLabel: "Instagram da Empresa *",
        instaPlaceholder: "Ex: @suaempresa",
        systemLabel: "Sistema de Interesse Principal",
        messageLabel: "Mensagem Adicional (Opcional)",
        messagePlaceholder:
          "Conte resumidamente seu maior objetivo ou obstáculo atual...",
        submitBtn: "SOLICITAR MINHA REUNIÃO DE DIAGNÓSTICO →",
        submitBtnSending: "Enviando...",
        successTitle: "Pedido Enviado com Sucesso!",
        successDesc:
          "Nossa equipe já recebeu as informações e entrará em contato via WhatsApp nas próximas 2 horas. Prepare-se para automatizar seu negócio!",
        successBackBtn: "Enviar outra solicitação",
      },
      segments: {
        "Salão de Beleza": "Salão de Beleza",
        Barbearia: "Barbearia",
        "Nail Designer / Esmalteria": "Nail Designer / Esmalteria",
        "Restaurante / Delivery": "Restaurante / Delivery",
        "Clínica de Estética": "Clínica de Estética",
        "Depilação / Estética": "Depilação / Estética",
        "Confeitaria / Doceria": "Confeitaria / Doceria",
        "Sistema Customizado / Outro Nicho": "Sistema Customizado / Outro Nicho",
      },
    },
    about: {
      badge: "AGÊNCIA DE SOLUÇÕES",
      title: "Easy Byz Creator",
      paragraph:
        "Não somos apenas uma plataforma de sistemas. Somos uma agência parceira de tecnologia e comunicação para micro e pequenos empreendedores. Unimos nossa expertise em processos e psicologia de consumo para criar ferramentas intuitivas que eliminam o trabalho manual e valorizam a sua marca própria.",
      footerTitle: "QUEM SOMOS",
    },
    footer: {
      rights: "© 2026 Easy Byz Creator. Todos os direitos reservados.",
      security: "Segurança dos Dados",
      terms: "Termos de Uso",
      tagline: "Made for Dreamers",
    },
  },
  EN: {
    nav: {
      home: "Home",
      systems: "Our Systems",
      benefits: "Benefits",
      contact: "Contact",
      aboutUs: "About Us",
      cta: "Quick Quote",
      mobileDivider: "★ Smart automation for micro businesses",
    },
    hero: {
      badge: "SMART AUTOMATION",
      title1: "Boost your business ",
      titleGradient: "in a unique way.",
      subtitle: "Automate and leave manuals behind.",
      paragraph:
        "We develop custom applications and tailor-made systems to organize your routine, modernize your service, and elevate your unique business model. We offer a complete showcase of ready-to-go solutions for barber shops, salons, clinics, and deliveries to scale smoothly, besides creating flexible projects perfectly adapted to the reality of any other industry.",
      primaryCta: "Request Your Custom App",
      quote:
        '"No more spreadsheets and loose notes. Your business deserves professional technology."',
      scroll: "SCROLL TO EXPLORE",
    },
    showcase: {
      badge: "READY TO RUN",
      title: "Choose the perfect foundation for your niche",
      subtitle:
        "Our ready-to-go systems serve as highly optimized starting points. We customize every single feature, color, and option specifically to fit your brand identity.",
      viewDemo: "View Active Interface",
      activeTitle: "ACTIVE NOTIFICATIONS",
      featuresTitle: "Included Ready-to-Use Features",
      impactLabel: "Real-World Impact Metric",
      ctaBtn: "Request a Demo of This System →",
    },
    benefits: {
      badge: "WHY CHOOSE US?",
      title: "Elevate your business to new efficiency levels",
      subtitle:
        "We provide robust technology without the headaches. Sleek, powerful tools built specifically for micro and small business owners to earn more and reclaim their precious time.",
      calculatorTitle: "Time & Money Savings Calculator",
      calculatorIntro:
        "Calculate the exact financial impact of automating your manual operations.",
      calcInputs: {
        staff: "Staff members in your team",
        hours: "Hours spent daily responding to customers",
        value: "Average target value of your hourly work",
      },
      calcResult: {
        hoursSavedLabel: "Reclaimed Time / Month",
        moneySavedLabel: "Converted Savings / Month",
        yearlyLabel: "On an annual scope, this represents an outstanding",
        equivalentLabel: "More free time to focus on growth and strategic moves.",
        hoursSuffix: "hours",
        moneyPrefix: "$",
      },
    },
    branding: {
      tagLeft: "EXCLUSIVE DIGITAL PRESENCE",
      badgeLeft: "TRUST & AUTHORITY",
      titleLeft: "Build a strong brand that your customers value",
      descriptionLeft:
        "Having your own custom mobile application takes your client experience to the next level and breeds lifetime loyalty. Leave a memorable and highly professional branding impression from day one, make clients return far more often, and secure a solid business you are truly proud of.",
      tagRight: "INTEGRATED & REAL-TIME SYSTEM",
      badgeRight: "FULL AUTONOMY",
      titleRight: "Full control of your application entirely in your hands",
      descriptionRight:
        "An intuitive and complete administrative dashboard, made for those who don't want to waste time with difficult systems. Change prices, introduce new services, dynamically update menu items, or adjust staff hours in real time. Access your exclusive management panel from anywhere—mobile, tablet, or desktop—and keep your business running smoothly, without relying on anyone.",
    },
    pricing: {
      badge: "AFFORDABLE & PREDICTABLE INVESTMENT",
      title: "Enterprise solutions at micro-business pricing",
      subtitle:
        "Predictable flat fee, completely free from commissions, hidden percentages, or surprise invoices. Real technology made accessible.",
      setupFee: "One-time setup & custom design fee",
      setupFeeSubtitle: "Only during the first month",
      priceValue: "$ 49.90",
      priceMonth: "/month",
      billedAnnually: "Annual subscription with auto-renewal",
      oneTimeFee: "Initial Custom Configuration: From $ 369 (One-time fee)",
      popularBadge: "MOST POPULAR",
      cta: "Get My Exclusive App →",
      features: {
        customDesign: "Exclusive app featuring your logo, branding, and photos",
        adminPanel: "Intuitive drag-and-drop dashboard to manage everything",
        notifications: "Unlimited customized reminders and booking notifications",
        support: "Priority WhatsApp/SMS support directly with developers",
        hosting: "High-speed and secure container cloud hosting included",
        domain: "Personalized custom domain name registration included",
        updates: "Complimentary security updates and ongoing server maintenance",
      },
      unlimitedTitle: "Need unlimited custom fields or multiple locations?",
      unlimitedDesc:
        "If your operation has advanced enterprise configurations, third-party integrations, or multi-location inventory, we tailor custom scopes on demand. Speak directly with a software specialist to draft a bespoke end-to-end plan.",
    },
    faq: {
      badge: "FREQUENTLY ASKED QUESTIONS",
      title: "Everything you need to know before getting started",
      subtitle:
        "Clear, direct, and straightforward answers to our partners' most frequent questions.",
      notFound: "Didn't find what you were looking for? Contact support.",
      supportCta: "Message in Chat",
      items: [
        {
          question: "Do I need technical skills to set up the application?",
          answer:
            "Not at all. We handle all the heavy lifting and deliver your personalized application fully configured and ready for production. You only need to share your basic business details and our engineering team builds it under your precise identity.",
        },
        {
          question: "Does the app support both services and food ordering?",
          answer:
            "Yes! We design specific modules for each distinct model. We have booking-centric layouts (Easy Beauty, Easy Barber, Easy Nails, Easy Waxing) and menu/catering/meal-prep administrative interfaces (Easy Menu, Easy Plate Menu, Easy Cake Menu).",
        },
        {
          question: "How long until my mobile system is fully live?",
          answer:
            "Our development cycle is extremely optimized. Following the transmission of your core assets and business hours, we compile and deliver your bespoke system ready to deploy in 5 to 7 business days.",
        },
        {
          question: "Can I update pricing or schedules on my own instantly?",
          answer:
            "Absolutely. You gain secure administrative access to an extremely user-friendly panel. You can adjust service rates, activate seasonal menu items, or shift operator schedules in a matter of seconds directly from your phone or PC.",
        },
        {
          question: "Will I receive training to confidently operate the system?",
          answer:
            "Absolutely. Our relationship doesn't stop at deployment. You receive complete live training and continuous documentation so your team masters the administrative panel from day one.",
        },
        {
          question: "How does billing work? Are there any hidden fees?",
          answer:
            "We have a strict zero-comission policy. No percentage cuts from your bookings or order revenue. You simply pay a clear, single initial setup fee and then keep a flat rate monthly fee guaranteed under a comfortable annual agreement.",
        },
        {
          question: "How do reminders and confirmations reach the end users?",
          answer:
            "The system constructs pre-built smart templates. You can dispatch them manually to clients with a single tap. This lightweight layout provides unlimited reminders without forcing you to pay expensive external API or server fees.",
        },
        {
          question: "Can I receive integrated debit/credit card payments?",
          answer:
            "Yes! We offer native Stripe integration so customers pay securely inside your system. This premium add-on feature and its setup configuration are available to review with our specialists during your free onboarding call.",
        },
      ],
    },
    contact: {
      title: "GET IN TOUCH",
      subtitle: "Elevate and modernize your workflow today",
      supportTitle: "SUPPORT & CONSULTING",
      supportDesc:
        "Need help or want to talk to our development team on a call? Our direct line is always open.",
      form: {
        title: "Book a Free Demonstration & Digital Assessment",
        subtitle:
          "Connect directly with our software engineers to answer your questions or map out a customized system.",
        nameLabel: "Your Full Name *",
        namePlaceholder: "e.g., John Miller",
        whatsappLabel: "Cell / WhatsApp *",
        whatsappPlaceholder: "e.g., +1 (803) 888-9018",
        segmentLabel: "Business Segment",
        emailLabel: "Business Email *",
        emailPlaceholder: "e.g., contact@yourcompany.com",
        instaLabel: "Business Instagram *",
        instaPlaceholder: "e.g., @yourcompany",
        systemLabel: "Main System of Interest",
        messageLabel: "Additional Note (Optional)",
        messagePlaceholder:
          "Briefly share your primary goal or current paint points...",
        submitBtn: "BOOK MY FREE ASSESSMENT CALL →",
        submitBtnSending: "Sending...",
        successTitle: "Request Submitted Successfully!",
        successDesc:
          "Our engineering team has received your information and will reach out via WhatsApp/text within 2 hours. Let's grow your brand!",
        successBackBtn: "Submit another request",
      },
      segments: {
        "Salão de Beleza": "Hair & Beauty Salon",
        Barbearia: "Barbershop",
        "Nail Designer / Esmalteria": "Nail Salon & Studio",
        "Restaurante / Delivery": "Restaurant & Food Delivery",
        "Clínica de Estética": "Aesthetics & Medical Spa",
        "Depilação / Estética": "Waxing & Body Wellness",
        "Confeitaria / Doceria": "Cake Shop & Bakery",
        "Sistema Customizado / Outro Nicho": "Custom Software Solution",
      },
    },
    about: {
      badge: "DIGITAL SOLUTIONS AGENCY",
      title: "Easy Byz Creator",
      paragraph:
        "We are not just a systems platform. We are a direct partner agency of technology and communication for micro and small business owners. We unite our expertise in processes and consumer psychology to create intuitive tools that eliminate manual work and elevate your own brand.",
      footerTitle: "ABOUT US",
    },
    footer: {
      rights: "© 2026 Easy Byz Creator. All rights reserved.",
      security: "Data Safety & Security",
      terms: "Terms of Use",
      tagline: "Made for Dreamers",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <T extends keyof TranslationSchema>(key: T) => TranslationSchema[T];
  tNested: (keyPath: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("PT");

  const t = <T extends keyof TranslationSchema>(key: T): TranslationSchema[T] => {
    return translations[language][key];
  };

  const tNested = (keyPath: string): any => {
    const keys = keyPath.split(".");
    let current: any = translations[language];
    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        return keyPath; // fallback
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tNested }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
