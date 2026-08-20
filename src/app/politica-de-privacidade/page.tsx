import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como a Kovex Tecnologia coleta, usa e protege dados pessoais enviados pelo site, conforme a Lei Geral de Proteção de Dados (LGPD).",
  alternates: { canonical: "/politica-de-privacidade" },
  openGraph: {
    title: `Política de Privacidade · ${siteConfig.name}`,
    description:
      "Tratamento de dados pessoais no site da Kovex Tecnologia, conforme a LGPD.",
    url: `${siteConfig.url}/politica-de-privacidade`,
    type: "article",
  },
};

/**
 * Documento base. Revise com o jurídico antes de publicar:
 * prazos de retenção e bases legais precisam refletir a prática real da empresa.
 */
export default function PrivacyPage() {
  const updatedAt = "19 de agosto de 2026";

  return (
    <>
      <article className="container-kx py-32 lg:py-40">
        <nav aria-label="Trilha" className="eyebrow">
          <Link href="/" className="transition-colors hover:text-paper">
            Início
          </Link>
          <span className="px-2" aria-hidden>
            /
          </span>
          <span>Política de Privacidade</span>
        </nav>

        <h1 className="mt-8 max-w-3xl text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.06]">
          Política de Privacidade
        </h1>
        <p className="mt-6 font-mono text-xs tracking-wider text-mute-dim">
          Última atualização: {updatedAt}
        </p>

        <div className="mt-14 max-w-3xl space-y-12">
          <section>
            <h2 className="text-xl lg:text-2xl">1. Quem trata os seus dados</h2>
            <p className="mt-4 leading-relaxed text-mute">
              O controlador dos dados pessoais coletados neste site é a{" "}
              {siteConfig.legalName}, inscrita no CNPJ {siteConfig.cnpj}, com
              sede em {siteConfig.address.street}, {siteConfig.address.district},{" "}
              {siteConfig.address.city}/{siteConfig.address.state}. Contato para
              assuntos de privacidade:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-paper underline underline-offset-4"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl">2. Quais dados coletamos</h2>
            <p className="mt-4 leading-relaxed text-mute">
              Coletamos apenas o que você digita no formulário de contato: nome,
              empresa, e-mail, telefone (opcional) e a descrição da necessidade.
              Não usamos formulários de rastreamento, não compramos listas e não
              coletamos dados sensíveis.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl">3. Por que tratamos esses dados</h2>
            <p className="mt-4 leading-relaxed text-mute">
              A finalidade é responder ao contato e conduzir a tratativa
              comercial ou técnica dele decorrente. A base legal é o
              consentimento manifestado no envio do formulário e, quando
              aplicável, os procedimentos preliminares de contrato, nos termos
              do art. 7º da Lei nº 13.709/2018 (LGPD).
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl">4. Com quem compartilhamos</h2>
            <p className="mt-4 leading-relaxed text-mute">
              Não vendemos nem cedemos dados a terceiros. Utilizamos operadores
              estritamente necessários para a hospedagem do site e o envio de
              e-mail transacional, que tratam os dados em nosso nome e sob
              contrato. Compartilhamentos adicionais só ocorrem por obrigação
              legal ou ordem judicial.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl">5. Por quanto tempo guardamos</h2>
            <p className="mt-4 leading-relaxed text-mute">
              Mensagens de contato ficam armazenadas por até 24 meses após o
              último contato, prazo em que a tratativa comercial pode ser
              retomada. Depois disso são eliminadas, salvo obrigação legal de
              guarda.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl">6. Cookies e medição</h2>
            <p className="mt-4 leading-relaxed text-mute">
              Este site não usa cookies de publicidade nem de perfilamento. Caso
              alguma ferramenta de medição de audiência seja adotada, esta
              política será atualizada antes da ativação, com a indicação da
              ferramenta e da base legal.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl">7. Seus direitos</h2>
            <p className="mt-4 leading-relaxed text-mute">
              Você pode solicitar confirmação de tratamento, acesso, correção,
              anonimização, portabilidade, eliminação dos dados e revogação do
              consentimento. Basta escrever para{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-paper underline underline-offset-4"
              >
                {siteConfig.email}
              </a>
              . Respondemos em até 15 dias.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl">8. Segurança</h2>
            <p className="mt-4 leading-relaxed text-mute">
              O site trafega exclusivamente por HTTPS e o acesso às mensagens
              recebidas é restrito às pessoas envolvidas no atendimento. Em caso
              de incidente com risco relevante, comunicamos os titulares e a
              ANPD conforme a legislação.
            </p>
          </section>

          <section>
            <h2 className="text-xl lg:text-2xl">9. Alterações</h2>
            <p className="mt-4 leading-relaxed text-mute">
              Esta política pode ser revisada. A data de última atualização no
              topo indica a versão vigente.
            </p>
          </section>
        </div>

        <Link
          href="/"
          className="mt-16 inline-flex items-center gap-3 rounded-xs border border-paper/20 px-6 py-3.5 text-sm transition-colors hover:border-paper/50"
        >
          <span aria-hidden>←</span> Voltar para o início
        </Link>
      </article>

      <BreadcrumbJsonLd
        trail={[
          { name: "Início", path: "/" },
          { name: "Política de Privacidade", path: "/politica-de-privacidade" },
        ]}
      />
    </>
  );
}
