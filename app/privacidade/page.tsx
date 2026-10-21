import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { CabecalhoSimples } from '@/components/CabecalhoSimples'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { Rodape } from '@/components/Rodape'
import { COMPANY_ADDRESS, COMPANY_CNPJ, COMPANY_NAME, CONTACT_EMAIL, MAKERDESK_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de Privacidade · Kovex Tecnologia',
  description: 'Como a Kovex Tecnologia trata os dados pessoais que chegam por este site, conforme a LGPD.',
  alternates: { canonical: '/privacidade' },
}

const ATUALIZADA_EM = '20 de outubro de 2026'

/**
 * Estrutura e base legal vieram da política da versão anterior do site (cláusulas
 * da LGPD, retenção, ANPD). O conteúdo descreve o site de agora: contato por
 * WhatsApp ou e-mail, sem formulário, e medição de audiência sem cookies.
 */
function Clausula({ numero, titulo, children }: { numero: string; titulo: string; children: ReactNode }) {
  return (
    <section className="grid gap-3 border-t border-fio pt-8 sm:grid-cols-[4rem_1fr]">
      <p className="rotulo pt-2 text-azul-claro">{numero}</p>
      <div>
        <h2 className="font-display text-subtitulo font-bold">{titulo}</h2>
        <div className="mt-4 grid gap-4 text-apoio">{children}</div>
      </div>
    </section>
  )
}

const Email = () => (
  <a href={`mailto:${CONTACT_EMAIL}`} className="link">
    {CONTACT_EMAIL}
  </a>
)

export default function Privacidade() {
  const a = COMPANY_ADDRESS

  return (
    <>
      <CabecalhoSimples />

      <main id="conteudo" className="py-secao">
        <article className="moldura">
          <h1 className="font-display text-titulo font-bold">Política de Privacidade</h1>
          <p className="mt-8 max-w-texto text-abertura text-apoio">
            Este site existe para você conhecer a Kovex e conversar com a gente. Ele não usa cookies, não pede
            cadastro e mede pouco. Abaixo, o que acontece com os dados que chegam até nós. Atualizada em{' '}
            {ATUALIZADA_EM}.
          </p>

          <div className="mt-16 grid max-w-192 gap-12">
            <Clausula numero="01" titulo="Quem trata os seus dados">
              <p>
                O controlador dos dados pessoais é a {COMPANY_NAME}, CNPJ {COMPANY_CNPJ}, com sede na {a.street},{' '}
                {a.complement}, {a.district}, {a.city}/{a.state}, CEP {a.postalCode}.
              </p>
              <p>
                Para qualquer assunto de privacidade, escreva para <Email />.
              </p>
            </Clausula>

            <Clausula numero="02" titulo="O que esta política cobre">
              <p>
                Ela vale para o site institucional da Kovex. Cada produto da Kovex tem a própria política, publicada
                no site do produto, como o{' '}
                <a href={MAKERDESK_URL} target="_blank" rel="noopener" className="link">
                  MakerDesk
                </a>
                .
              </p>
            </Clausula>

            <Clausula numero="03" titulo="Quais dados chegam até nós">
              <p>
                O site não tem formulário. Os dados pessoais chegam quando você nos procura pelo WhatsApp ou por
                e-mail: seu nome, seu contato e o que você contar sobre a sua ideia ou o seu negócio. Não pedimos
                dados sensíveis e não compramos listas de contatos.
              </p>
              <p>
                Para saber se o site está sendo útil, contamos visitas com o Vercel Web Analytics, que não usa
                cookies e não identifica quem você é: vemos só números somados, como quantas visitas a página teve,
                de que site elas vieram e de que tipo de aparelho. Como em qualquer site, a hospedagem também
                registra dados técnicos de acesso (endereço IP, data e hora, navegador) para manter tudo seguro e
                funcionando.
              </p>
            </Clausula>

            <Clausula numero="04" titulo="Para que usamos">
              <p>
                Para responder ao seu contato e, se for o caso, preparar uma proposta. A base legal é o seu
                consentimento, ao nos procurar, e os procedimentos preliminares a um contrato que você pediu (art.
                7º, incisos I e V, da Lei nº 13.709/2018, a LGPD). A contagem de visitas e os dados técnicos de
                acesso se apoiam no legítimo interesse de manter o site seguro e entender como ele é usado (art. 7º,
                IX).
              </p>
            </Clausula>

            <Clausula numero="05" titulo="A sua ideia">
              <p>
                O que você conta sobre a sua ideia fica entre nós. Se preferir, assinamos um acordo de
                confidencialidade antes de entrar nos detalhes.
              </p>
            </Clausula>

            <Clausula numero="06" titulo="Com quem compartilhamos">
              <p>
                Não vendemos nem cedemos dados. Usamos só os fornecedores necessários: a hospedagem e a contagem de
                visitas (Vercel), o WhatsApp, para as conversas que você inicia por lá, e o nosso provedor de e-mail
                (Hostinger). Eles tratam os dados em nosso nome e podem armazená-los fora do Brasil, com as garantias
                do art. 33 da LGPD. Fora isso, só compartilhamos por obrigação legal ou ordem judicial.
              </p>
            </Clausula>

            <Clausula numero="07" titulo="Por quanto tempo guardamos">
              <p>
                As conversas ficam guardadas por até 24 meses depois do último contato, para podermos retomar o
                assunto. Depois disso são apagadas, salvo quando a lei exigir que sejam mantidas.
              </p>
            </Clausula>

            <Clausula numero="08" titulo="Cookies">
              <p>
                Este site não usa cookies, nem de publicidade nem de rastreamento. A contagem de visitas descrita na
                cláusula 03 funciona sem eles. Se isso mudar, esta política será atualizada antes, dizendo qual
                ferramenta e com qual base legal.
              </p>
            </Clausula>

            <Clausula numero="09" titulo="Seus direitos">
              <p>
                Você pode pedir a confirmação de que tratamos seus dados, acesso, correção, anonimização,
                portabilidade, eliminação e a revogação do consentimento, entre os demais direitos do art. 18 da
                LGPD. Basta escrever para <Email />. Respondemos nos prazos da lei.
              </p>
              <p>
                Se entender que seus direitos não foram atendidos, você também pode recorrer à Autoridade Nacional de
                Proteção de Dados (ANPD).
              </p>
            </Clausula>

            <Clausula numero="10" titulo="Segurança">
              <p>
                O site funciona apenas por HTTPS, e as mensagens recebidas só são acessadas por quem cuida do
                atendimento. Em caso de incidente que possa trazer risco relevante, avisamos os titulares afetados e
                a ANPD, como manda a lei.
              </p>
            </Clausula>

            <Clausula numero="11" titulo="Mudanças nesta política">
              <p>Esta política pode ser revisada. A data no topo da página indica a versão em vigor.</p>
            </Clausula>
          </div>
        </article>
      </main>

      <Rodape base="/" />
      <BreadcrumbJsonLd
        trilha={[
          { nome: 'Início', caminho: '/' },
          { nome: 'Política de Privacidade', caminho: '/privacidade' },
        ]}
      />
    </>
  )
}
