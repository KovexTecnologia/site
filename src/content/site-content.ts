/**
 * Toda a copy da landing em um lugar so.
 *
 * Os NUMEROS e os TRABALHOS abaixo sao exemplos plausiveis para dar forma a pagina.
 * Substitua pelos dados reais da Kovex antes de publicar — metrica inventada em site
 * institucional queima confianca na primeira reuniao.
 */

export const hero = {
  eyebrow: "Kovex Tecnologia · Software sob medida",
  title: "Software sob medida para operações que o produto de prateleira não resolve.",
  lead: "Projetamos, construímos e sustentamos sistemas internos, integrações e aplicações web para empresas que precisam de um software que acompanha o processo — não o contrário.",
  primaryCta: { label: "Falar com um engenheiro", href: "#contato" },
  secondaryCta: { label: "Ver como trabalhamos", href: "#metodo" },
  spec: [
    { k: "Formato", v: "Squad dedicado ou projeto de escopo fechado" },
    { k: "Primeira entrega", v: "Homologação no ar em 4 a 6 semanas" },
    { k: "Stack", v: "TypeScript · React · Node · PostgreSQL · AWS" },
    { k: "Propriedade", v: "Código e infraestrutura no nome do cliente" },
  ],
};

/** PREENCHER com números auditáveis. */
export const stats = [
  { value: "40+", label: "sistemas entregues e em produção" },
  { value: "6", label: "semanas até a primeira versão utilizável" },
  { value: "9", label: "setores atendidos, do varejo à indústria" },
  { value: "100%", label: "do código e da infra no nome do cliente" },
];

export const services = [
  {
    id: "sistemas-internos",
    title: "Sistemas internos sob medida",
    body: "Back-offices, portais de cliente, painéis operacionais e o pedaço do processo que o seu ERP nunca cobriu. Construído em cima do fluxo que a sua equipe já executa.",
    bullets: [
      "Portais e áreas logadas",
      "Painéis operacionais e indicadores",
      "Fluxos de aprovação e trilha de auditoria",
    ],
  },
  {
    id: "integracoes",
    title: "Integrações e automação",
    body: "ERP, e-commerce, gateway de pagamento, transportadora, planilha de controle e a API do parceiro conversando entre si. Fim da digitação dupla e da conciliação manual.",
    bullets: [
      "APIs REST e webhooks",
      "Sincronismo de cadastro e ETL",
      "Rotinas automáticas de conciliação",
    ],
  },
  {
    id: "produto-digital",
    title: "Produto digital ponta a ponta",
    body: "Do desenho do problema ao produto em produção, com métrica de uso desde o primeiro dia. Para quem está lançando uma operação nova ou digitalizando um serviço.",
    bullets: [
      "Discovery e definição de escopo",
      "Design de interface e protótipo navegável",
      "Aplicação web e mobile",
    ],
  },
  {
    id: "modernizacao",
    title: "Modernização de legado",
    body: "Sistema em Delphi, VB, PHP antigo ou Access que ninguém mais quer manter. Migramos por partes, com a operação rodando, sem semana de parada.",
    bullets: [
      "Migração incremental por módulo",
      "Resgate da regra de negócio existente",
      "Saída do servidor local para a nuvem",
    ],
  },
];

export const method = [
  {
    step: "01",
    title: "Diagnóstico",
    duration: "1 semana · sem custo",
    body: "Sentamos com quem usa o sistema todo dia, mapeamos o processo real — não o do manual — e devolvemos escopo, riscos, arquitetura sugerida e faixa de investimento por escrito.",
  },
  {
    step: "02",
    title: "Desenho técnico",
    duration: "1 a 2 semanas",
    body: "Modelo de dados, arquitetura, pontos de integração e plano de entrega fatiado. Você aprova o que será construído antes de existir a primeira linha de código.",
  },
  {
    step: "03",
    title: "Construção em ciclos",
    duration: "ciclos de 2 semanas",
    body: "Ambiente de homologação no ar desde o primeiro ciclo. Sua equipe usa e critica o software funcionando a cada quinze dias — nada de demonstração em slide.",
  },
  {
    step: "04",
    title: "Operação e evolução",
    duration: "contínuo ou transferência",
    body: "Deploy, monitoramento, correção com prazo acordado e backlog de evolução. Ou repasse completo de código, infraestrutura e documentação para o seu time.",
  },
];

/** PREENCHER: trocar por casos reais (com autorização do cliente) ou remover a seção. */
export const works = [
  {
    sector: "Distribuição",
    title: "ERP integrado a três marketplaces",
    body: "Pedido, estoque e nota fiscal sincronizados em tempo real entre o ERP e os canais de venda.",
    result: "18 mil pedidos por mês deixaram de passar por digitação manual",
    stack: "Node · PostgreSQL · filas",
  },
  {
    sector: "Saúde",
    title: "Portal de agendamento e ficha clínica",
    body: "Agenda unificada de sete unidades, com confirmação por WhatsApp e prontuário enxuto.",
    result: "Queda de 31% nas faltas em consultas agendadas",
    stack: "Next.js · Prisma · AWS",
  },
  {
    sector: "Indústria",
    title: "Apontamento de produção no chão de fábrica",
    body: "Coleta em tablet, offline-first, sincronizando com o ERP assim que a rede volta.",
    result: "Fechamento de ordem de produção caiu de 2 dias para 4 horas",
    stack: "PWA offline · Node · SQL Server",
  },
];

export const stack = [
  {
    group: "Interface",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "React Native"],
  },
  {
    group: "Servidor",
    items: ["Node.js", "NestJS", "Python", "REST", "GraphQL"],
  },
  {
    group: "Dados",
    items: ["PostgreSQL", "SQL Server", "Redis", "Prisma", "BigQuery"],
  },
  {
    group: "Infraestrutura",
    items: ["AWS", "Vercel", "Docker", "Terraform", "GitHub Actions"],
  },
  {
    group: "Qualidade",
    items: ["Testes automatizados", "Observabilidade", "Code review", "LGPD desde o desenho"],
  },
];

export const differentiators = [
  {
    title: "Time sênior, sem repasse",
    body: "Quem participa da reunião é quem escreve o código. A entrega não é terceirizada para um subcontratado que você nunca vai conhecer.",
  },
  {
    title: "Escopo fechado por etapa",
    body: "Você contrata fatias com preço e prazo definidos. Se quiser parar ao fim de um ciclo, para — com tudo que foi feito até ali funcionando.",
  },
  {
    title: "Sem refém de fornecedor",
    body: "Repositório, contas de nuvem e documentação nascem no nome da sua empresa. Trocar de parceiro vira uma decisão, não uma migração.",
  },
];

export const faq = [
  {
    q: "Quanto custa um projeto com a Kovex?",
    a: "Depende do escopo, mas trabalhamos com dois formatos: projeto de escopo fechado, orçado após o diagnóstico, e squad dedicado com valor mensal fixo. O diagnóstico inicial é gratuito e termina com uma faixa de investimento por escrito, antes de qualquer contrato.",
  },
  {
    q: "Em quanto tempo eu vejo a primeira versão funcionando?",
    a: "Entre 4 e 6 semanas na maior parte dos projetos. Colocamos um ambiente de homologação no ar já no primeiro ciclo de duas semanas, com uma fatia útil do sistema — normalmente o fluxo que mais consome tempo da sua equipe hoje.",
  },
  {
    q: "O código-fonte fica comigo?",
    a: "Sim, integralmente. O repositório e as contas de infraestrutura são abertos no nome da sua empresa desde o início, e o contrato prevê cessão total de direitos sobre o que for desenvolvido, junto com a documentação técnica.",
  },
  {
    q: "Vocês trabalham por hora ou por escopo fechado?",
    a: "Os dois. Escopo fechado funciona bem quando o problema já está claro; squad dedicado com horas mensais funciona melhor na evolução contínua de um produto. Recomendamos o formato no fim do diagnóstico, com a justificativa.",
  },
  {
    q: "Depois da entrega, quem mantém o sistema?",
    a: "Você escolhe. Existe contrato de sustentação com prazo de resposta acordado, monitoramento e backlog de evolução — ou fazemos a transferência completa para a sua equipe interna, com período de acompanhamento e treinamento.",
  },
  {
    q: "Atendem empresas fora de São Paulo?",
    a: "Sim. Operamos de forma remota para todo o Brasil, com rituais de projeto em vídeo e visitas presenciais quando entender a operação no local é indispensável — comum em indústria e logística.",
  },
];

export const contact = {
  eyebrow: "Contato",
  title: "Comece pelo diagnóstico. Ele é gratuito e termina em documento.",
  lead: "Conte o que está travando hoje. Respondemos em até um dia útil com uma primeira leitura do problema e a proposta de agenda para a conversa técnica.",
  assurances: [
    "Resposta em até 1 dia útil",
    "A primeira conversa é técnica, não comercial",
    "Seus dados não são compartilhados com terceiros",
  ],
};
