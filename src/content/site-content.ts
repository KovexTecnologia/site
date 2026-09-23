/**
 * Toda a copy da home em um lugar so.
 *
 * Regra do arquivo: nada de numero, cliente ou prazo que a Kovex nao possa
 * mostrar numa reuniao. O site anterior tinha metricas e cases de exemplo — o
 * primeiro cliente que perguntasse por eles derrubava a confianca inteira.
 */

export const hero = {
  eyebrow: "Empresa de software",
  titleStart: "Criamos produtos próprios.",
  titleEnd: "E construímos o seu.",
  lead: "A Kovex desenvolve e mantém software próprio, como o MakerDesk, e leva essa mesma experiência para projetos sob medida de outras empresas — do desenho à operação.",
  primaryCta: { label: "Fale sobre seu projeto", href: "#contato" },
  secondaryCta: { label: "Conheça os produtos", href: "#produtos" },
};

/** Indice editorial logo abaixo do hero. */
export const index = [
  {
    number: "01",
    label: "Produtos",
    body: "Software próprio, vendido por assinatura.",
    href: "#produtos",
  },
  {
    number: "02",
    label: "Serviços",
    body: "Desenvolvimento sob medida, consultoria e sustentação.",
    href: "#servicos",
  },
  {
    number: "03",
    label: "Como trabalhamos",
    body: "Conversa, proposta por escrito e entregas em etapas.",
    href: "#como-trabalhamos",
  },
];

export type Product = {
  id: string;
  name: string;
  tagline: string;
  status: "Em operação" | "Em breve";
  description: string;
  features: string[];
  audience: string;
  model: string;
  url: string;
  urlLabel: string;
  /** Marca do produto, servida de /public/products. */
  logo: string;
};

/**
 * Produtos da Kovex. Para lancar um novo, adicione um item aqui — a secao,
 * o rodape e o JSON-LD leem desta lista.
 */
export const products: Product[] = [
  {
    id: "makerdesk",
    name: "MakerDesk",
    tagline: "Gestão para negócios de impressão 3D",
    status: "Em operação",
    description:
      "Plataforma para quem vive de impressão 3D. Calcula o custo real de cada peça e sugere o preço com a margem escolhida, gera orçamentos em PDF e organiza encomendas, materiais, equipe e caixa em um só lugar.",
    features: [
      "Custo e preço por peça",
      "Orçamentos em PDF",
      "Encomendas e estoque de materiais",
      "Catálogo público com link próprio",
      "Equipe com níveis de acesso",
      "Fluxo de caixa",
    ],
    audience: "Makers, ateliês e estúdios de impressão 3D",
    model: "Assinatura, com plano gratuito",
    url: "https://www.makerdesk.com.br",
    urlLabel: "makerdesk.com.br",
    logo: "/products/makerdesk.svg",
  },
];

export const productsNote =
  "Outros produtos estão em desenvolvimento e entram nesta lista quando forem lançados.";

export const services = [
  {
    number: "01",
    title: "Software sob medida",
    body: "Sistemas desenhados a partir do processo da sua empresa, e não o contrário: áreas de cliente, painéis internos, automações e o pedaço da operação que nenhum sistema pronto cobre.",
    items: [
      "Sistemas web e painéis internos",
      "Aplicativos para celular",
      "Integrações entre sistemas e APIs",
    ],
  },
  {
    number: "02",
    title: "Consultoria em tecnologia",
    body: "Para decidir antes de gastar. Avaliamos um sistema que já existe, uma proposta de fornecedor ou a arquitetura de um produto novo, e devolvemos a recomendação por escrito.",
    items: [
      "Revisão de arquitetura e código",
      "Escolha de tecnologia e fornecedor",
      "Plano de evolução de sistemas",
    ],
  },
  {
    number: "03",
    title: "Sustentação e suporte",
    body: "Software em produção precisa de alguém olhando. Cuidamos de correções, atualizações, monitoramento e da evolução do sistema depois que ele entra no ar.",
    items: [
      "Correções e pequenas evoluções",
      "Monitoramento e atualizações",
      "Hospedagem e infraestrutura",
    ],
  },
];

/** Tecnologias em uso de verdade nos produtos da Kovex — nao listar o que nao usamos. */
export const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Supabase",
  "Stripe",
  "Docker",
];

export const steps = [
  {
    number: "01",
    title: "Conversa",
    body: "Você explica o problema e nós fazemos as perguntas difíceis. Às vezes a melhor resposta é não construir nada — e dizemos isso.",
  },
  {
    number: "02",
    title: "Proposta por escrito",
    body: "Escopo, prazo, valor e o que fica de fora, num documento. Nada começa sem estar claro para os dois lados.",
  },
  {
    number: "03",
    title: "Construção em etapas",
    body: "Entregas curtas, com uma versão para testar desde cedo. Você acompanha o sistema funcionando, não uma apresentação.",
  },
  {
    number: "04",
    title: "Operação",
    body: "Colocamos no ar e seguimos cuidando. Ou entregamos tudo documentado para o seu time assumir.",
  },
];

export const principles = [
  {
    title: "Operamos o que construímos",
    body: "Mantemos nosso próprio produto em produção. Sabemos o que dá trabalho depois do lançamento e projetamos pensando nisso.",
  },
  {
    title: "Quem conversa é quem desenvolve",
    body: "Sem intermediário entre você e o código. A decisão técnica é explicada por quem vai executá-la.",
  },
  {
    title: "O que é seu fica com você",
    body: "Código, domínio e contas de infraestrutura ficam no nome da sua empresa desde o primeiro dia.",
  },
];

export const contact = {
  title: "Vamos conversar.",
  lead: "Conte o que você precisa: um sistema novo, uma segunda opinião técnica ou alguém para cuidar de um software que já existe.",
  supportNote: {
    text: "Já usa o MakerDesk? O suporte do produto é pelo",
    email: "suporte@makerdesk.com.br",
  },
  subjects: [
    "Projeto sob medida",
    "Consultoria",
    "Sustentação de um sistema",
    "Produtos Kovex",
    "Outro assunto",
  ],
};
