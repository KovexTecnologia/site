import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/site'

/**
 * Textos das páginas de serviço (fase 4 do plano de SEO). Como em `conteudo.ts`,
 * mudança de texto passa por aprovação antes de entrar aqui. Os números são só
 * compromissos confirmados pelo Paulo: 4 a 6 semanas e 30 dias de correções, e, em
 * sites, os prazos de 1 e 2 semanas e a landing page a partir de R$ 200 (2026-10-22).
 *
 * `destaques` e `etapas.lista` são opcionais: sem eles, a página usa os da home.
 */
export type ConteudoServico = {
  /** endereço da página: canonical, sitemap, trilha e JSON-LD */
  caminho: string
  title: string
  description: string
  /** mensagem pronta do WhatsApp, dizendo de que página a pessoa veio */
  whatsapp: string
  /** nome curto na trilha */
  trilha: string
  /** o termo de busca, que entra no H1 como rótulo, acima da frase */
  rotulo: string
  frase: string
  abertura: string
  /** a faixa de fatos da abertura */
  destaques?: readonly string[]
  paraQuem: { titulo: string; exemplos: readonly string[]; texto: readonly string[] }
  etapas: {
    titulo: string
    texto: string
    nota: string
    lista?: readonly { nome: string; texto: string }[]
  }
  /** o MakerDesk como prova do serviço, com a tela do app, a do painel ou a do site */
  prova: { tela: 'app' | 'painel' | 'site'; titulo: string; texto: readonly string[]; nota: string }
  /** `destaque` é uma linha de preço em evidência, logo abaixo do título */
  preco: { titulo: string; destaque?: string; texto: string; fatores: readonly string[]; fecho: string }
  condicoes: readonly { nome: string; texto: string }[]
  perguntas: { titulo: string; itens: readonly { pergunta: string; resposta: string }[] }
}

/** Decisões de 2026-10-22: sem preço, prazo da home com as lojas depois, app do MakerDesk como prova. */
export const APLICATIVOS: ConteudoServico = {
  caminho: '/desenvolvimento-de-aplicativos',
  title: 'Desenvolvimento de aplicativos para iPhone e Android · Kovex',
  description:
    'Aplicativo sob medida para iPhone e Android, para seus clientes agendarem, pedirem e pagarem sozinhos. Primeira versão em 4 a 6 semanas e valor fechado.',
  whatsapp:
    'Olá, Kovex! Vim pela página de aplicativos. Tenho uma ideia de app e quero entender por onde começar.',
  trilha: 'Aplicativos',
  rotulo: 'Desenvolvimento de aplicativos para iPhone e Android',
  frase: 'Seu negócio no celular do seu cliente.',
  abertura:
    'A Kovex cria aplicativos sob medida para empreendedores que querem atender pelo celular. Um app só, para iPhone e Android, começando pelo essencial e crescendo com o seu negócio.',

  paraQuem: {
    titulo: 'Um app para seus clientes resolverem sozinhos.',
    exemplos: [
      'Agendar um horário sem esperar você responder.',
      'Fazer o pedido e pagar pelo próprio app.',
      'Acompanhar o pedido e receber um aviso quando ele andar.',
      'Ver o histórico e repetir o último pedido com um toque.',
    ],
    texto: [
      'Se hoje tudo isso passa pelo seu WhatsApp, uma mensagem de cada vez, o app tira esse trabalho das suas mãos e deixa o cliente resolver na hora que ele quiser.',
      'Quando faz sentido, o app vem com um painel para você: pedidos, agenda e clientes num lugar só, no computador ou no celular.',
    ],
  },

  etapas: {
    titulo: 'Como a gente desenvolve o seu app.',
    texto: 'O mesmo caminho de todo projeto da Kovex: primeiro o essencial, depois camada por camada.',
    nota: 'Num app, "no ar" quer dizer instalado no seu celular para testar. A publicação na App Store e no Google Play vem logo depois e passa pela análise da Apple e do Google, que têm o prazo deles.',
  },

  prova: {
    tela: 'app',
    titulo: 'Um app que a gente construiu e mantém.',
    texto: [
      'O MakerDesk, sistema de gestão da Kovex para negócios de impressão 3D, tem app para iPhone e Android. É um código só para os dois aparelhos, ligado ao mesmo sistema da versão para computador: o que a oficina registra no celular aparece também no computador.',
      'Pelo app, a oficina acompanha o faturamento, cadastra encomendas e orçamentos e consulta clientes, produtos e materiais.',
    ],
    nota: 'O app do MakerDesk ainda não está nas lojas. A tela é de uma conta de demonstração, com dados fictícios.',
  },

  preco: {
    titulo: 'Quanto custa um aplicativo?',
    texto:
      'Depende do que entra na primeira versão. O valor é fechado por escopo: depois da conversa gratuita, você recebe por escrito o que vai ser feito, o prazo e o preço, e o pagamento é dividido pelos marcos de entrega.',
    fatores: [
      'Quantas telas e funções a primeira versão tem.',
      'Login e cadastro de clientes.',
      'Pagamento dentro do app.',
      'Avisos no celular do cliente.',
      'Um painel para você gerenciar pedidos, agenda e clientes.',
      'Ligação com outros sistemas, como agenda, nota fiscal ou entrega.',
    ],
    fecho:
      'Na conversa, a gente separa o que precisa estar na primeira versão do que pode esperar. Começar pelo essencial é o que faz o primeiro app caber no seu momento.',
  },

  condicoes: [
    {
      nome: 'Primeira versão em 4 a 6 semanas.',
      texto:
        'Para a maioria dos projetos, é o tempo até o app rodar no seu celular. O prazo exato vem escrito na proposta.',
    },
    {
      nome: 'As contas das lojas são suas.',
      texto:
        'O app é publicado na sua conta da App Store e do Google Play. A Apple cobra uma anuidade e o Google, uma taxa única, pagas direto a eles.',
    },
    {
      nome: 'O código é seu.',
      texto:
        'Repositório, domínio e contas ficam no seu nome desde o primeiro dia. Se um dia quiser seguir com outra pessoa, leva tudo.',
    },
  ],

  perguntas: {
    titulo: 'Perguntas sobre aplicativos.',
    itens: [
      {
        pergunta: 'Preciso de um app ou um site resolve?',
        resposta:
          'Se o seu cliente usa uma vez só, um site resolve e custa menos. O app vale a pena quando ele volta sempre: agenda toda semana, pede todo mês, quer receber aviso no celular. Na conversa, a gente diz com franqueza qual dos dois faz sentido para você.',
      },
      {
        pergunta: 'O app funciona no iPhone e no Android?',
        resposta:
          'Sim. A gente constrói um código só, que roda nos dois. Cada mudança chega aos dois aparelhos de uma vez.',
      },
      {
        pergunta: 'Quem publica o app nas lojas?',
        resposta:
          'A Kovex. A gente prepara o que a Apple e o Google pedem (textos, imagens e política de privacidade) e acompanha a análise até o app aparecer na loja, sempre na conta que fica no seu nome.',
      },
      {
        pergunta: 'Quanto tempo a loja leva para aprovar?',
        resposta:
          'O prazo é da Apple e do Google, não nosso. Uma conta nova no Google Play pode precisar de um período de testes com pessoas de verdade antes da primeira publicação. A proposta já conta com isso, para não virar surpresa.',
      },
      {
        pergunta: 'E depois que o app estiver nas lojas?',
        resposta:
          'Correções de defeitos estão incluídas por 30 dias. O iPhone e o Android mudam todo ano, e de tempos em tempos as lojas pedem uma atualização do app. Essas atualizações e as novas funções são planejadas e orçadas no mesmo modelo.',
      },
      {
        pergunta: 'Minha ideia fica protegida?',
        resposta:
          'Sim. Sempre que você pedir, assinamos um acordo de confidencialidade antes de entrar nos detalhes.',
      },
    ],
  },
}

/**
 * Decisões de 2026-10-22: termo "sistemas web sob medida"; exemplos de sair da planilha, portal
 * do cliente e painéis (plataforma por assinatura ficou de fora); preço como o de aplicativos.
 */
export const SISTEMAS: ConteudoServico = {
  caminho: '/desenvolvimento-de-sistemas',
  title: 'Desenvolvimento de sistemas web sob medida · Kovex',
  description:
    'Sistema web sob medida para organizar pedidos, estoque, agenda e financeiro, com acesso para a equipe e os clientes. Primeira versão em 4 a 6 semanas.',
  whatsapp:
    'Olá, Kovex! Vim pela página de sistemas. Tenho uma ideia de sistema e quero entender por onde começar.',
  trilha: 'Sistemas web',
  rotulo: 'Desenvolvimento de sistemas web sob medida',
  frase: 'Um sistema do jeito que o seu negócio funciona.',
  abertura:
    'A Kovex desenvolve sistemas sob medida para empreendedores que cansaram da planilha. Você acessa pelo navegador, no computador ou no celular, e a primeira versão começa pelo que mais pesa no seu dia a dia.',

  paraQuem: {
    titulo: 'Do caderno e da planilha para um lugar só.',
    exemplos: [
      'Pedidos, estoque, agenda e financeiro num sistema só.',
      'Cada pessoa da equipe com o próprio acesso, vendo só o que precisa.',
      'Uma área para o cliente acompanhar o pedido e baixar documentos sem precisar perguntar.',
      'Painéis que mostram como o negócio está, sem montar relatório à mão todo mês.',
    ],
    texto: [
      'Sistema pronto resolve o caso comum. Quando o seu negócio tem um jeito próprio de trabalhar, o sob medida segue esse jeito, em vez de você se adaptar a ele.',
      'Funciona no navegador, sem instalar nada. Se a equipe precisar de um app para celular, ele pode vir junto, ligado ao mesmo sistema.',
    ],
  },

  etapas: {
    titulo: 'Como a gente desenvolve o seu sistema.',
    texto: 'O mesmo caminho de todo projeto da Kovex: primeiro o essencial, depois camada por camada.',
    nota: 'Num sistema, "no ar" quer dizer funcionando no seu endereço, com você e a equipe usando de verdade. Se os dados estão numa planilha, eles podem entrar no sistema já na primeira versão.',
  },

  prova: {
    tela: 'painel',
    titulo: 'Um sistema que a gente construiu e opera todo dia.',
    texto: [
      'O MakerDesk é o sistema de gestão da Kovex para negócios de impressão 3D. Ele calcula o custo de cada peça, controla os materiais, transforma orçamentos em pedidos e mostra em relatórios como está o negócio.',
      'Cada pessoa da equipe entra com o próprio login e vê o que o papel dela permite. Funciona no navegador e tem app para celular, ligado ao mesmo sistema.',
    ],
    nota: 'A tela é de uma conta de demonstração, com dados fictícios.',
  },

  preco: {
    titulo: 'Quanto custa um sistema?',
    texto:
      'Depende do que entra na primeira versão. O valor é fechado por escopo: depois da conversa gratuita, você recebe por escrito o que vai ser feito, o prazo e o preço, e o pagamento é dividido pelos marcos de entrega.',
    fatores: [
      'Quantas telas e funções a primeira versão tem.',
      'Quantos tipos de usuário e o que cada um pode ver e fazer.',
      'Relatórios e painéis.',
      'Ligação com outros sistemas, como nota fiscal, pagamento ou WhatsApp.',
      'Trazer os dados que hoje estão nas planilhas.',
      'Um app para celular junto com o sistema.',
    ],
    fecho:
      'Na conversa, a gente separa o que precisa estar na primeira versão do que pode esperar. Começar pelo essencial é o que faz o primeiro sistema caber no seu momento.',
  },

  condicoes: [
    {
      nome: 'Primeira versão em 4 a 6 semanas.',
      texto:
        'Para a maioria dos projetos, é o tempo até o sistema estar no ar, com você e a equipe usando. O prazo exato vem escrito na proposta.',
    },
    {
      nome: 'A hospedagem é sua.',
      texto:
        'O sistema roda em contas de hospedagem no seu nome. Quando a hospedagem tem custo, ele é pago direto ao provedor, sem intermediário.',
    },
    {
      nome: 'O código é seu.',
      texto:
        'Repositório, domínio e contas ficam no seu nome desde o primeiro dia. Se um dia quiser seguir com outra pessoa, leva tudo.',
    },
  ],

  perguntas: {
    titulo: 'Perguntas sobre sistemas.',
    itens: [
      {
        pergunta: 'Sistema sob medida ou sistema pronto: qual é melhor?',
        resposta:
          'Se existe um sistema pronto que resolve o seu caso, ele costuma sair mais barato, e a gente diz isso na conversa. O sob medida vale a pena quando o seu jeito de trabalhar é o que diferencia o negócio, ou quando você já tentou os prontos e acabou voltando para a planilha.',
      },
      {
        pergunta: 'Preciso instalar alguma coisa?',
        resposta:
          'Não. O sistema abre no navegador, no computador ou no celular. Se a equipe precisar de um app, ele pode ser construído junto, ligado ao mesmo sistema.',
      },
      {
        pergunta: 'Dá para trazer os dados da minha planilha?',
        resposta:
          'Sim. Clientes, produtos, estoque e o histórico que estão nas planilhas podem ser levados para o sistema. Isso entra no escopo da proposta.',
      },
      {
        pergunta: 'O sistema conversa com o que eu já uso?',
        resposta:
          'Na maioria dos casos, sim: emissão de nota fiscal, meios de pagamento, WhatsApp e outros sistemas que ofereçam uma forma de integração. A gente confere cada um na conversa, antes da proposta.',
      },
      {
        pergunta: 'E depois que o sistema estiver no ar?',
        resposta:
          'Correções de defeitos estão incluídas por 30 dias. Novas funções são planejadas e orçadas no mesmo modelo, quando fizerem sentido para o seu negócio.',
      },
      {
        pergunta: 'Minha ideia fica protegida?',
        resposta:
          'Sim. Sempre que você pedir, assinamos um acordo de confidencialidade antes de entrar nos detalhes.',
      },
    ],
  },
}

/**
 * Decisões de 2026-10-22: termo "sites e landing pages"; exemplos de landing de lançamento, site da
 * empresa e página de venda ("site que aparece no Google" ficou de fora: nada de prometer posição);
 * landing do MakerDesk como prova; landing page em até 1 semana e site da empresa em até 2; landing
 * page de uma página, com o texto do cliente, a partir de R$ 200, e o resto sem número.
 */
export const SITES: ConteudoServico = {
  caminho: '/criacao-de-sites',
  title: 'Criação de sites e landing pages sob medida · Kovex',
  description:
    'Criação de sites e landing pages sob medida. Landing page a partir de R$ 200, no ar em até 1 semana; site da empresa em até 2 semanas.',
  whatsapp:
    'Olá, Kovex! Vim pela página de sites. Preciso de um site ou uma landing page e quero entender por onde começar.',
  trilha: 'Sites e landing pages',
  rotulo: 'Criação de sites e landing pages sob medida',
  frase: 'A página que apresenta o seu negócio e traz contatos.',
  abertura:
    'A Kovex cria sites e landing pages para quem precisa se apresentar bem e começar a receber contatos. Landing page no ar em até 1 semana e site da empresa em até 2.',
  destaques: ['Landing page em até 1 semana', 'A partir de R$ 200', 'Domínio e código no seu nome'],

  paraQuem: {
    titulo: 'A página certa para o que você precisa agora.',
    exemplos: [
      'Uma landing page para apresentar a ideia e juntar os primeiros interessados.',
      'O site da empresa: quem você é, o que faz e como contratar.',
      'Uma página para vender um produto ou serviço, com preço, perguntas e o botão de compra ou de conversa.',
    ],
    texto: [
      'Quem chega por uma busca, um anúncio ou uma indicação decide em segundos se fica. A página precisa dizer logo o que você faz e levar a pessoa a um próximo passo claro: o WhatsApp, um cadastro ou a compra.',
      'O site abre rápido no celular, onde está a maior parte de quem vai visitar, e fica no seu nome desde o primeiro dia.',
    ],
  },

  etapas: {
    titulo: 'Como a gente cria o seu site.',
    texto: 'O mesmo caminho de todo projeto da Kovex, num prazo mais curto: primeiro o essencial, depois o que vier.',
    nota: 'Os prazos contam da proposta aprovada, com os textos e as imagens em mãos. Se precisar que a gente escreva os textos, isso entra na proposta e no prazo.',
    lista: [
      {
        nome: 'Conversa gratuita',
        texto:
          'Você conta a ideia. A gente faz as perguntas certas e mostra o caminho mais curto até algo funcionando.',
      },
      {
        nome: 'Escopo e proposta',
        texto:
          'O que entra no site, o prazo e o valor fechado, por escrito. Sem surpresa no meio do caminho.',
      },
      {
        nome: 'Site no ar',
        texto:
          'Landing page em até 1 semana e site da empresa em até 2, para a maioria dos projetos. Você revisa cada página antes de publicar.',
      },
      {
        nome: 'Evolução',
        texto:
          'Com o site no ar, fica claro o que ajustar ou acrescentar. Novas páginas e mudanças são orçadas do mesmo jeito.',
      },
    ],
  },

  prova: {
    tela: 'site',
    titulo: 'Um site que a gente fez para o nosso produto.',
    texto: [
      'O site do MakerDesk, sistema de gestão da Kovex para negócios de impressão 3D, foi feito pela Kovex: apresenta o produto, mostra os planos e leva ao cadastro. Ele tem também uma calculadora de preço de impressão 3D, aberta a qualquer pessoa.',
      'No PageSpeed, a ferramenta do Google que mede velocidade, acessibilidade e boas práticas, a página da calculadora tirou 100 nas quatro notas, no celular e no computador.',
    ],
    nota: 'Medição do PageSpeed Insights de 22 de outubro de 2026. A nota varia um pouco a cada medição.',
  },

  preco: {
    titulo: 'Quanto custa um site?',
    destaque: 'Landing page a partir de R$ 200.',
    texto:
      'Esse é o valor de uma landing page de uma página, com o seu texto. Site da empresa e páginas com mais recursos têm valor fechado por escopo: depois da conversa gratuita, você recebe por escrito o que vai ser feito, o prazo e o preço.',
    fatores: [
      'Quantas páginas o site tem.',
      'Textos e imagens: prontos, ou escritos e produzidos por nós.',
      'Formulários e ligação com WhatsApp, e-mail ou outro sistema.',
      'Uma área de notícias ou artigos.',
      'Mais de um idioma.',
      'Recursos de sistema, como agendamento ou área do cliente.',
    ],
    fecho:
      'Na conversa, a gente separa o que precisa estar no ar agora do que pode esperar. Muita ideia começa bem com uma página só.',
  },

  condicoes: [
    {
      nome: 'No ar em 1 ou 2 semanas.',
      texto:
        'Landing page em até 1 semana e site da empresa em até 2, para a maioria dos projetos. O prazo exato vem escrito na proposta.',
    },
    {
      nome: 'Domínio e hospedagem no seu nome.',
      texto:
        'O endereço do site é registrado no seu nome, e a hospedagem fica numa conta sua. Quando há custo, ele é pago direto a quem presta o serviço.',
    },
    {
      nome: 'O código é seu.',
      texto:
        'Repositório, domínio e contas ficam no seu nome desde o primeiro dia. Se um dia quiser seguir com outra pessoa, leva tudo.',
    },
  ],

  perguntas: {
    titulo: 'Perguntas sobre sites.',
    itens: [
      {
        pergunta: 'O que entra na landing page de R$ 200?',
        resposta:
          'Uma página só, com o seu texto e as suas imagens, e o botão do WhatsApp. Textos escritos por nós, mais páginas ou recursos extras entram na proposta, com valor fechado.',
      },
      {
        pergunta: 'Landing page ou site completo: qual eu preciso?',
        resposta:
          'Se você quer testar uma ideia ou vender uma coisa só, uma landing page resolve e fica pronta em até 1 semana. O site completo vale quando há vários serviços para explicar, ou quando a empresa precisa de mais de uma página para ser conhecida e comparada.',
      },
      {
        pergunta: 'Vocês escrevem os textos?',
        resposta:
          'Podemos escrever, e isso entra na proposta. Na landing page a partir de R$ 200, o texto é seu.',
      },
      {
        pergunta: 'O site aparece no Google?',
        resposta:
          'O site sai pronto para o Google ler: título, descrição e endereço certos, e páginas rápidas. Aparecer no topo de uma busca depende de tempo e de conteúdo, e não é algo que dê para prometer.',
      },
      {
        pergunta: 'E depois que o site estiver no ar?',
        resposta:
          'Correções de defeitos estão incluídas por 30 dias. Novas páginas e mudanças são orçadas no mesmo modelo, quando fizerem sentido para o seu negócio.',
      },
      {
        pergunta: 'Minha ideia fica protegida?',
        resposta:
          'Sim. Sempre que você pedir, assinamos um acordo de confidencialidade antes de entrar nos detalhes.',
      },
    ],
  },
}

/**
 * A imagem de compartilhamento da home. Uma página que define o próprio `openGraph`
 * perde a imagem que vem do `app/opengraph-image.png`, então ela é declarada aqui,
 * com o texto de `app/opengraph-image.alt.txt`.
 */
const IMAGEM = {
  width: 1200,
  height: 630,
  alt: 'Sua ideia vira produto, camada por camada. Kovex Tecnologia: sistemas, apps e sites.',
}

/** Title, description, canonical e compartilhamento da página. */
export function metadataDoServico(pagina: ConteudoServico): Metadata {
  return {
    title: pagina.title,
    description: pagina.description,
    alternates: { canonical: pagina.caminho },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: `${SITE_URL}${pagina.caminho}`,
      siteName: SITE_NAME,
      title: pagina.title,
      description: pagina.description,
      images: [{ url: '/opengraph-image.png', ...IMAGEM }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pagina.title,
      description: pagina.description,
      images: [{ url: '/twitter-image.png', ...IMAGEM }],
    },
  }
}
