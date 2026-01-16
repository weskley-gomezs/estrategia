
import React from 'react';
import { Phase } from './types';
import { 
  BarChart3, 
  Users, 
  MessageSquare, 
  Workflow, 
  BookOpen, 
  CheckCircle2, 
  Zap,
  TrendingUp,
  Target
} from 'lucide-react';

export const PHASES: Phase[] = [
  {
    number: 1,
    title: "Diagnóstico de LTV",
    objective: "Identificar onde o dinheiro está sendo perdido no relacionamento.",
    tasks: [
      "Mapeamento da jornada do cliente",
      "Identificação de pontos de ruído e desgaste",
      "Análise da comunicação atual do time",
      "Auditoria de canais digitais e mensagens"
    ],
    result: ["Mapa claro das falhas que reduzem LTV"]
  },
  {
    number: 2,
    title: "Arquitetura de Relacionamento",
    objective: "Criar ordem onde hoje existe improviso.",
    tasks: [
      "Definição de pontos de contato estratégicos",
      "Estruturação do 'o que comunicar' em cada etapa",
      "Padronização de quem fala e quando fala",
      "Criação de fluxos de boas-vindas e acompanhamento"
    ],
    result: ["Menos ruído", "Mais previsibilidade", "Mais confiança"]
  },
  {
    number: 3,
    title: "Educação Estratégica",
    objective: "Transformar cliente leigo em cliente consciente.",
    tasks: [
      "Criação de conteúdos educativos recorrentes",
      "Explicação transparente de processos",
      "Alinhamento de expectativas preventivo",
      "Reforço de valor constante pós-venda"
    ],
    result: ["Menos reclamação", "Menos comparação", "Mais retenção"]
  },
  {
    number: 4,
    title: "Automação Inteligente",
    objective: "Garantir consistência sem sobrecarregar o time.",
    tasks: [
      "Automatização de mensagens-chave",
      "Organização de fluxos em WhatsApp e Instagram",
      "Conexão entre educação e processo digital",
      "Implementação de gatilhos automáticos de valor"
    ],
    result: ["Time mais leve", "Cliente mais seguro", "Processo rodando sozinho"]
  },
  {
    number: 5,
    title: "Ativação de LTV",
    objective: "Extrair o valor que já existe na base de clientes.",
    tasks: [
      "Mensagens de reforço de valor percebido",
      "Preparação estratégica para renovação",
      "Gatilhos para pedidos de indicação",
      "Fortalecimento da autoridade da marca"
    ],
    result: ["Cliente permanece", "Cliente indica", "Cliente defende"]
  }
];

export const DELIVERABLES = [
  { icon: <Workflow className="text-orange-500" />, title: "Estrutura de relacionamento" },
  { icon: <MessageSquare className="text-orange-500" />, title: "Processos de comunicação" },
  { icon: <BookOpen className="text-orange-500" />, title: "Conteúdo educativo estratégico" },
  { icon: <Zap className="text-orange-500" />, title: "Automação básica e funcional" },
  { icon: <TrendingUp className="text-orange-500" />, title: "Acompanhamento e ajustes" },
];

export const TARGET_AUDIENCE = [
  { icon: <CheckCircle2 className="text-orange-500" />, title: "Escolas e Educação" },
  { icon: <CheckCircle2 className="text-orange-500" />, title: "Clínicas de Saúde" },
  { icon: <CheckCircle2 className="text-orange-500" />, title: "Imobiliárias" },
  { icon: <CheckCircle2 className="text-orange-500" />, title: "Escritórios de Advocacia/Contabilidade" },
  { icon: <CheckCircle2 className="text-orange-500" />, title: "Serviços de Assinatura/Recorrentes" },
];
