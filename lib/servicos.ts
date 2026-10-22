import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/site'

/**
 * Textos das páginas de serviço (fase 4 do plano de SEO). Como em `conteudo.ts`,
 * mudança de texto passa por aprovação antes de entrar aqui. Os únicos números são
 * os compromissos que o site já faz: 4 a 6 semanas e 30 dias de correções.
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
  paraQuem: { titulo: string; exemplos: readonly string[]; texto: readonly string[] }
  etapas: { titulo: string; texto: string; nota: string }
  /** o MakerDesk como prova do serviço */
  prova: { titulo: string; texto: readonly string[]; nota: string }
  preco: { titulo: string; texto: string; fatores: readonly string[]; fecho: string }
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
