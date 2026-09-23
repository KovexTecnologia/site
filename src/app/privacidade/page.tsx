import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { BreadcrumbJsonLd } from "@/components/json-ld";
import { products } from "@/content/site-content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Kovex Tecnologia trata os dados pessoais enviados por este site, conforme a Lei Geral de Proteção de Dados (LGPD).",
  alternates: { canonical: "/privacidade" },
  openGraph: {
    title: `Política de Privacidade · ${siteConfig.name}`,
    description: "Tratamento de dados pessoais no site da Kovex Tecnologia, conforme a LGPD.",
    url: `${siteConfig.url}/privacidade`,
    type: "article",
  },
};

const updatedAt = "23 de setembro de 2026";

function Clause({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <section className="grid gap-3 border-t border-rule pt-8 sm:grid-cols-12 sm:gap-x-8">
      <p className="label tabular text-cobalt sm:col-span-2">{number}</p>
      <div className="sm:col-span-10">
        <h2 className="text-2xl leading-tight">{title}</h2>
        <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">{children}</div>
      </div>
    </section>
  );
}

const Email = () => (
  <a href={`mailto:${siteConfig.email}`} className="text-ink underline underline-offset-4 hover:text-cobalt">
    {siteConfig.email}
  </a>
);

export default function PrivacyPage() {
  const { address } = siteConfig;

  return (
    <>
      <article className="container-kx pt-32 pb-24 sm:pt-40 lg:pb-32">
        <nav aria-label="Trilha" className="label text-xs">
          <Link href="/" className="transition-colors hover:text-cobalt">
            Início
          </Link>
          <span className="px-2 text-faint" aria-hidden>
            /
          </span>
          <span className="text-ink">Política de Privacidade</span>
        </nav>

        <h1 className="mt-8 max-w-3xl text-[clamp(2.4rem,5vw,4rem)] leading-none tracking-[-0.02em]">
          Política de Privacidade
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Como tratamos os dados pessoais que chegam até nós por este site. Última atualização em{" "}
          {updatedAt}.
        </p>

        <div className="mt-16 max-w-4xl space-y-12">
          <Clause number="01" title="Quem trata os seus dados">
            <p>
              O controlador dos dados pessoais coletados neste site é a {siteConfig.legalName}, inscrita no
              CNPJ {siteConfig.cnpj}, com sede na {address.street},{" "}
              {address.complement}, {address.district}, {address.city}/{address.state}, CEP{" "}
              {address.postalCode}.
            </p>
            <p>
              Para qualquer assunto de privacidade, escreva para <Email />.
            </p>
          </Clause>

          <Clause number="02" title="O que esta política cobre">
            <p>
              Esta política vale para o site institucional da Kovex. Cada produto da Kovex tem política de
              privacidade própria, publicada no site do produto
              {products.length > 0 ? (
                <>
                  {" "}
                  (
                  {products.map((product, index) => (
                    <span key={product.id}>
                      {index > 0 ? ", " : null}
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener"
                        className="text-ink underline underline-offset-4 hover:text-cobalt"
                      >
                        {product.name}
                      </a>
                    </span>
                  ))}
                  )
                </>
              ) : null}
              .
            </p>
          </Clause>

          <Clause number="03" title="Quais dados coletamos">
            <p>
              Apenas o que você preenche no formulário de contato: nome, e-mail, empresa e WhatsApp (os dois
              últimos são opcionais), o assunto escolhido e a mensagem. Não pedimos dados sensíveis e não
              compramos listas de contatos.
            </p>
            <p>
              Como em qualquer site, o provedor de hospedagem registra dados técnicos de acesso (endereço IP,
              data e hora, navegador) para manter o site seguro e funcionando.
            </p>
          </Clause>

          <Clause number="04" title="Para que usamos">
            <p>
              Para responder ao seu contato e, se for o caso, preparar uma proposta. A base legal é o seu
              consentimento, dado no envio do formulário, e os procedimentos preliminares a um contrato que
              você solicitou (art. 7º, incisos I e V, da Lei nº 13.709/2018 — LGPD). Os dados técnicos de
              acesso são tratados com base no legítimo interesse de manter o site seguro (art. 7º, IX).
            </p>
          </Clause>

          <Clause number="05" title="Com quem compartilhamos">
            <p>
              Não vendemos nem cedemos dados. Usamos apenas os fornecedores necessários para o site funcionar:
              a hospedagem (Vercel) e o envio da mensagem do formulário para a nossa caixa de e-mail (Resend).
              Eles tratam os dados em nosso nome e podem armazená-los fora do Brasil, com as garantias
              previstas no art. 33 da LGPD. Fora disso, só compartilhamos por obrigação legal ou ordem judicial.
            </p>
          </Clause>

          <Clause number="06" title="Por quanto tempo guardamos">
            <p>
              Mensagens de contato ficam guardadas por até 24 meses depois da última conversa, para podermos
              retomar o assunto. Depois disso são apagadas, salvo quando a lei exigir que sejam mantidas.
            </p>
          </Clause>

          <Clause number="07" title="Cookies">
            <p>
              Este site não usa cookies de publicidade, de rastreamento nem ferramentas de medição de
              audiência. Se isso mudar, esta política será atualizada antes, dizendo qual ferramenta e com
              qual base legal.
            </p>
          </Clause>

          <Clause number="08" title="Seus direitos">
            <p>
              Você pode pedir a confirmação de que tratamos seus dados, acesso, correção, anonimização,
              portabilidade, eliminação e a revogação do consentimento, entre os demais direitos do art. 18 da
              LGPD. Basta escrever para <Email />. Respondemos nos prazos da lei.
            </p>
            <p>
              Se entender que seus direitos não foram atendidos, você também pode recorrer à Autoridade
              Nacional de Proteção de Dados (ANPD).
            </p>
          </Clause>

          <Clause number="09" title="Segurança">
            <p>
              O site funciona apenas por HTTPS, e as mensagens recebidas só são acessadas por quem cuida do
              atendimento. Em caso de incidente que possa trazer risco relevante, avisamos os titulares
              afetados e a ANPD, como manda a lei.
            </p>
          </Clause>

          <Clause number="10" title="Mudanças nesta política">
            <p>
              Esta política pode ser revisada. A data no topo da página indica a versão em vigor.
            </p>
          </Clause>
        </div>

        <Link
          href="/"
          className="mt-16 inline-flex items-center gap-3 rounded-sm border border-rule-strong bg-surface px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
        >
          <span aria-hidden>←</span> Voltar para o início
        </Link>
      </article>

      <BreadcrumbJsonLd
        trail={[
          { name: "Início", path: "/" },
          { name: "Política de Privacidade", path: "/privacidade" },
        ]}
      />
    </>
  );
}
