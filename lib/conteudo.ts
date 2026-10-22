/**
 * Textos aprovados no anexo do documento de direção (docs/direcao-criativa.html,
 * slides A1 a A3). Mudança de texto passa por aprovação antes de entrar aqui.
 */

/** Os três fatos da faixa embaixo da abertura (aprovados em 2026-10-21). */
export const DESTAQUES = ['Primeira versão em 4 a 6 semanas', 'Valor fechado', 'Código no seu nome'] as const

/**
 * Exemplos de ideias na seção "Para quem". São tipos de projeto, não clientes:
 * sem aspas, sem nomes, para não parecerem depoimentos.
 */
export const IDEIAS = [
  'Um sistema para sair do caderno e da planilha.',
  'Um app para seus clientes agendarem ou pedirem sozinhos.',
  'Uma plataforma para vender seu serviço por assinatura.',
] as const

/**
 * `pagina` é o endereço da página do serviço (fase 4 do plano de SEO), ou `null`
 * enquanto ela não existe: com página, o nome vira link na home e entra no rodapé.
 */
export const SERVICOS = [
  {
    nome: 'Sistemas web e plataformas',
    texto:
      'O sistema que organiza a operação do seu negócio, ou a plataforma que você vende por assinatura.',
    pagina: null,
  },
  {
    nome: 'Apps para celular',
    texto: 'Aplicativo para iPhone e Android, para seus clientes ou para a sua equipe.',
    pagina: '/desenvolvimento-de-aplicativos',
  },
  {
    nome: 'Sites e landing pages',
    texto: 'A página que apresenta sua ideia, explica a oferta e traz os primeiros contatos.',
    pagina: null,
  },
  {
    nome: 'Automação e IA',
    texto:
      'Tarefas repetitivas resolvidas por software, com inteligência artificial onde ela ajuda de verdade.',
    pagina: null,
  },
] as const

export const ETAPAS = [
  {
    nome: 'Conversa gratuita',
    texto:
      'Você conta a ideia. A gente faz as perguntas certas e mostra o caminho mais curto até algo funcionando.',
  },
  {
    nome: 'Escopo e proposta',
    texto:
      'O que entra na primeira versão, o prazo e o valor fechado, por escrito. Sem surpresa no meio do caminho.',
  },
  {
    nome: 'Primeira versão no ar',
    texto:
      'Em 4 a 6 semanas, para a maioria dos projetos. Você acompanha cada entrega e testa antes de lançar.',
  },
  {
    nome: 'Evolução',
    texto:
      'Com gente usando, fica claro o que vem depois. Cada nova camada é planejada e orçada do mesmo jeito.',
  },
] as const

/**
 * Na ordem do título da seção: da conversa ao código. "Ter um produto no ar" saiu
 * daqui porque a seção MakerDesk, logo antes, já diz isso (texto novo, aguardando ok).
 */
export const COMPROMISSOS = [
  {
    nome: 'Você fala com quem constrói.',
    texto: 'Sem vendedor no meio. Quem entende a sua ideia é quem escreve o código.',
  },
  {
    nome: 'Valor fechado.',
    texto:
      'O preço da primeira versão vem na proposta, por escrito, antes de começar. O pagamento é dividido pelos marcos de entrega.',
  },
  {
    nome: 'O código é seu.',
    texto:
      'Repositório, domínio e contas ficam no seu nome desde o primeiro dia. Se um dia quiser seguir com outra pessoa, leva tudo.',
  },
] as const

export const PERGUNTAS = [
  {
    pergunta: 'Quanto custa?',
    resposta:
      'O valor é fechado por escopo. Depois da conversa gratuita, você recebe uma proposta com o que entra na primeira versão, o prazo e o preço. O pagamento é dividido por marcos de entrega.',
  },
  {
    pergunta: 'Preciso entender de tecnologia?',
    resposta:
      'Não. Você explica o seu negócio e a gente traduz em produto, explicando cada decisão em linguagem simples.',
  },
  {
    pergunta: 'Em quanto tempo fica pronto?',
    resposta:
      'A primeira versão costuma ir ao ar em 4 a 6 semanas. O prazo exato do seu projeto vem escrito na proposta.',
  },
  {
    pergunta: 'O código fica comigo?',
    resposta: 'Sim. Repositório, domínio e contas ficam no seu nome desde o início.',
  },
  {
    pergunta: 'Minha ideia fica protegida?',
    resposta:
      'Sim. Sempre que você pedir, assinamos um acordo de confidencialidade antes de entrar nos detalhes.',
  },
  {
    pergunta: 'E depois do lançamento?',
    resposta:
      'Correções de defeitos estão incluídas por 30 dias. Novas funções são planejadas e orçadas no mesmo modelo, quando fizerem sentido para o seu negócio.',
  },
  {
    pergunta: 'Vocês atendem a minha cidade?',
    resposta: 'Atendemos empreendedores de todo o Brasil, com tudo feito a distância.',
  },
] as const
