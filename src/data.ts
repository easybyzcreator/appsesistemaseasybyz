/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShowcaseApp, Benefit, Testimonial } from './types';

export const SHOWCASE_APPS: ShowcaseApp[] = [
  {
    id: "easy-beauty",
    name: "Easy Beauty",
    tagline: "Sistemas para Clínicas de Estética & Salões de Beleza",
    description: "Organize sua equipe, combine múltiplos serviços em um só fluxo e elimine os erros de agendamento cruzado com um painel totalmente automatizado.",
    iconName: "Sparkles",
    features: [
      "Agendamento inteligente multitela",
      "Controle de pacotes de tratamento e sessões",
      "Confirmação por WhatsApp em 1 clique",
      "Histórico individualizado de serviços por especialista."
    ],
    mockupType: "calendar",
    stats: {
      label: "Sem vaivém de mensagens. O cliente vê, escolhe e agenda de forma 100% autônoma.",
      value: "Disponibilidade em Tempo Real"
    }
  },
  {
    id: "easy-nails",
    name: "Easy Nails",
    tagline: "Gestão Descomplicada para Nail Designers",
    description: "Desenvolvido especificamente para a rotina de Nail Designers. Centralize o controle dos seus atendimentos, otimize seu tempo e ofereça uma experiência de agendamento rápida e moderna para suas clientes.",
    iconName: "Scissors",
    features: [
      "Menu digital de técnicas e procedimentos personalizados",
      "Ficha de anamnese digital integrada ao perfil da cliente",
      "Controle inteligente de prazos para manutenção",
      "Histórico completo de atendimentos por cliente"
    ],
    mockupType: "dashboard",
    stats: {
      label: "Menos tempo trocando mensagens, mais tempo focada nos seus atendimentos.",
      value: "Sua Agenda Organizada"
    }
  },
  {
    id: "easy-barber",
    name: "Easy Barber",
    tagline: "Gestão Descomplicada para Barbearias",
    description: "Centralize a agenda da sua barbearia e otimize o tempo dos profissionais. Seus clientes agendam em segundos e seu time acompanha tudo em tempo real, sem complicação.",
    iconName: "User",
    features: [
      "Painel de fila dinâmica ou agendamento convencional",
      "Escolha de barbeiro preferido pelo cliente",
      "Menu digital de serviços, cortes e barbas personalizados",
      "Controle individual de horários por profissional"
    ],
    mockupType: "barber",
    stats: {
      label: "Seu cliente escolhe o dia, o horário e o barbeiro de forma 100% autônoma, mesmo fora do horário comercial.",
      value: "Disponibilidade 24/7"
    }
  },
  {
    id: "easy-menu",
    name: "Easy Menu",
    tagline: "Cardápio Digital Direto e Descomplicado",
    description: "Ideal para quem vende doces, salgados, lanches ou produtos artesanais e precisa organizar a rotina de pedidos. Conecte-se direto com seu cliente e mantenha 100% do lucro das suas vendas.",
    iconName: "UtensilsCrossed",
    features: [
      "Cardápio digital objetivo de alta conversão",
      "Organização limpa de pedidos via WhatsApp",
      "Painel de controle simplificado de itens"
    ],
    mockupType: "menu",
    stats: {
      label: "",
      value: ""
    }
  },
  {
    id: "easy-travel-guide",
    name: "Easy Travel Guide",
    tagline: "Aplicativo Exclusivo para Agências de Viagem e Grupos",
    description: "Substitua o manual impresso e os PDFs estáticos por um aplicativo moderno e interativo. Centralize roteiros, checklists, passagens e orientações cruciais na palma da mão do seu passageiro, com funcionamento 100% offline.",
    iconName: "Compass",
    features: [
      "Roteiro dinâmico e cronológico dia a dia",
      "Carteira digital de bilhetes e QR Codes",
      "Checklists inteligentes de documentos e bagagem",
      "Personalização White Label com a sua marca"
    ],
    mockupType: "travel",
    stats: {
      label: "SEM PERGUNTAS REPETITIVAS NO WHATSAPP. O PASSAGEIRO ACESSA TUDO COM UM TOQUE, MESMO SEM SINAL DE INTERNET OU EM VOOS.",
      value: "Experiência 100% Offline"
    }
  },
  {
    id: "easy-booking",
    name: "Easy Booking",
    tagline: "Sistema Exclusivo de Reservas para Imóveis de Lazer & Temporada",
    description: "Transforme a gestão das suas reservas em um processo automático, profissional e 100% lucrativo. Ofereça uma experiência de alto padrão para o seu hóspede — da simulação da estadia ao check-in — sem pagar comissões para plataformas.",
    iconName: "Home",
    features: [
      "Simulador de diárias e datas em tempo real para o hóspede",
      "Taxa ZERO de comissão por reserva (100% do lucro é seu)",
      "Central de mensagens prontas para check-in e regras da casa"
    ],
    mockupType: "calendar",
    stats: {
      label: "",
      value: ""
    }
  },
  {
    id: "easy-waxing",
    name: "Easy Waxing",
    tagline: "Agendamento Eficiente para Depilação & Bem-Estar",
    description: "Desenvolvido sob medida para clínicas e estúdios de depilação organizarem o fluxo de atendimentos diários, dando total autonomia para os clientes agendarem seus próprios horários e pacotes.",
    iconName: "Sparkles",
    features: [
      "Controle inteligente de salas e macas de depilação",
      "Filtro de retorno e acompanhamento de crescimento do pelo",
      "Ficha de anamnese digital com histórico de sensibilidade",
      "Menu digital de áreas, pacotes e métodos de depilação"
    ],
    mockupType: "calendar",
    stats: {
      label: "",
      value: ""
    }
  },
  {
    id: "easy-plate-menu",
    name: "Easy Plate Menu",
    tagline: "Cardápio Inteligente para Marmitarias & Meal Preps",
    description: "A solução ideal para negócios de alimentação saudável, marmitas e refeições planejadas organizarem o recebimento de pedidos de forma limpa, profissional e sem comissões por vendas.",
    iconName: "UtensilsCrossed",
    features: [
      "Organização de cardápios para marmitas e refeições",
      "Escolha simples de tamanhos, opções e acompanhamentos",
      "Agendamento e controle de entregas programadas"
    ],
    mockupType: "menu",
    stats: {
      label: "",
      value: ""
    }
  },
  {
    id: "easy-cake-menu",
    name: "Easy Cake Menu",
    tagline: "Cardápio Exclusivo para Confeitarias & Doces Sob Medida",
    description: "Modernize as encomendas da sua confeitaria. Um cardápio inteligente para receber pedidos complexos e personalizados de forma limpa e organizada.",
    iconName: "UtensilsCrossed",
    features: [
      "Montagem guiada de bolos de festa passo a passo",
      "Organização de encomendas por datas de entrega",
      "Vitrine fotográfica premium para bolos e kits"
    ],
    mockupType: "menu",
    stats: {
      label: "",
      value: ""
    }
  },
  {
    id: "easy-custom-system",
    name: "Sistema Customizado / Outro Nicho",
    tagline: "Sistemas Exclusivos e Plataformas Corporativas",
    description: "Se o seu modelo de negócio não se encaixa em aplicativos tradicionais, nós desenvolvemos a solução ideal. Mapeamos os gargalos da sua empresa e estruturamos um sistema completo, do seu jeito, para automatizar processos internos e escalar sua operação.",
    iconName: "Briefcase",
    features: [
      "Engenharia de software focada na dor real do seu modelo de negócio",
      "Painéis administrativos personalizados e relatórios gerenciais estruturados",
      "Armazenamento de dados seguro e escalável para a sua empresa"
    ],
    mockupType: "dashboard",
    stats: {
      label: "",
      value: ""
    }
  }
];

export const CORE_BENEFITS: Benefit[] = [
  {
    id: "autonomous-booking",
    title: "Agendamento Autônomo 24/7",
    description: "Seu cliente agenda o horário perfeito de domingo a domingo, inclusive de madrugada, sem precisar de resposta humana da sua equipe.",
    iconName: "CalendarDays",
    badge: "Independência"
  },
  {
    id: "whatsapp-automation",
    title: "Adeus Mensagens Manuais (WhatsApp / SMS)",
    description: "Profissionalize seu negócio. Tenha um aplicativo próprio com todos os seus serviços, valores e horários expostos de forma clara, permitindo que o cliente resolva tudo de forma 100% automatizada.",
    iconName: "MessageCircle",
    badge: "Foco Total"
  },
  {
    id: "glass-dashboard",
    title: "Rotina Centralizada e Sem Erros",
    description: "Pare de perder informações em anotações ou conversas soltas. Tenha o controle de todos os agendamentos ou pedidos realizados em um único lugar, organizados de forma intuitiva para você gerenciar o seu dia com tranquilidade.",
    iconName: "ClipboardList",
    badge: "ORGANIZAÇÃO"
  },
  {
    id: "push-reminders",
    title: "Mensagens Pré-Configuradas Ilimitadas",
    description: "Chega de digitar o mesmo texto dezenas de vezes. Tenha modelos prontos e personalizados para enviar aos seus clientes com um clique, organizando sua rotina de confirmações e reduzindo as ausências drasticamente.",
    iconName: "BellRing",
    badge: "ESTABILIDADE"
  }
];

export const ENTERPRISE_STATS = [
  { label: "Horas salvas de atendimento por mês", value: "84h" },
  { label: "Redução de faltas não avisadas", value: "95%" },
  { label: "Clientes que preferem agendar sozinhos", value: "88%" },
  { label: "Aumento na recorrência de clientes", value: "2.3x" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Arthur Santos",
    business: "Proprietário do Barber Club",
    quote: "Antes o WhatsApp era um inferno na sexta e sábado. Hoje o cliente chega com o horário reservado, o barbeiro já sabe o corte, e eu só passo o Pix. Mudou o jogo.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80&referrerpolicy=no-referrer",
    impactResult: "+22h salvas por semana"
  },
  {
    id: "testimonial-2",
    name: "Mariana Rezende",
    business: "Fundadora do Beauty & Concept",
    quote: "A comissão das minhas manicures era fonte de dor de cabeça todo domingo. O sistema calcula tudo instantaneamente. O suporte deles é excelente.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80&referrerpolicy=no-referrer",
    impactResult: "+38% de faturamento"
  }
];
