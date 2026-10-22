import Image from 'next/image'
import Link from 'next/link'
import { SERVICOS } from '@/lib/conteudo'
import {
  COMPANY_CITY,
  COMPANY_CNPJ,
  COMPANY_NAME,
  CONTACT_EMAIL,
  MAKERDESK_SUPPORT_EMAIL,
  MENU,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from '@/lib/site'

/**
 * `base` é "/" fora da página inicial, para os links de seção voltarem a ela.
 * "Serviços" lista só os serviços que já têm página. `whatsapp` troca a mensagem
 * nas páginas de serviço.
 */
export function Rodape({ base = '', whatsapp = WHATSAPP_URL }: { base?: '' | '/'; whatsapp?: string }) {
  return (
    <footer className="border-t border-fio pt-16 pb-12">
      <div className="moldura grid gap-12 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-4">
          <Image
            src="/brand/kovex-lockup-horizontal-tagline-dark.svg"
            alt="Kovex Tecnologia"
            width={155}
            height={40}
            unoptimized
            className="h-10 w-auto"
          />
          <p className="mt-6 max-w-[24ch] text-apoio">Sistemas, apps e sites para quem tem uma ideia.</p>
        </div>

        <nav aria-label="Serviços" className="lg:col-span-3">
          <p className="rotulo text-discreto">Serviços</p>
          <ul className="mt-4 grid gap-1">
            {SERVICOS.map(
              (servico) =>
                servico.pagina && (
                  <li key={servico.pagina}>
                    <Link
                      href={servico.pagina}
                      className="menu-link inline-flex min-h-11 items-center text-apoio hover:text-branco"
                    >
                      {servico.nome}
                    </Link>
                  </li>
                ),
            )}
          </ul>
        </nav>

        <nav aria-label="Rodapé" className="lg:col-span-2">
          <p className="rotulo text-discreto">Página</p>
          <ul className="mt-4 grid gap-1">
            {MENU.map((item) => (
              <li key={item.href}>
                <a
                  href={`${base}${item.href}`}
                  className="menu-link inline-flex min-h-11 items-center text-apoio hover:text-branco"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <p className="rotulo text-discreto">Contato</p>
          <ul className="mt-4 grid gap-1">
            <li>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener"
                className="menu-link inline-flex min-h-11 items-center text-apoio hover:text-branco"
              >
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="menu-link inline-flex min-h-11 items-center text-apoio hover:text-branco"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
          <p className="mt-4 max-w-[28ch] text-rotulo text-discreto">
            Já usa o MakerDesk? O suporte do produto é pelo{' '}
            <a href={`mailto:${MAKERDESK_SUPPORT_EMAIL}`} className="underline underline-offset-4 hover:text-branco">
              {MAKERDESK_SUPPORT_EMAIL}
            </a>
            .
          </p>
        </div>
      </div>

      <div className="moldura mt-16 flex flex-col gap-2 border-t border-fio pt-8 text-rotulo text-discreto sm:flex-row sm:justify-between">
        <p>
          {COMPANY_NAME} · CNPJ {COMPANY_CNPJ} · {COMPANY_CITY}
        </p>
        <p className="flex gap-6">
          <Link href="/privacidade" className="underline-offset-4 hover:text-branco hover:underline">
            Privacidade
          </Link>
          <span>© {new Date().getFullYear()} Kovex</span>
        </p>
      </div>
    </footer>
  )
}
