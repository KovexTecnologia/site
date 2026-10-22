import type { MetadataRoute } from 'next'
import { SERVICOS } from '@/lib/conteudo'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: 'monthly', priority: 1 },
    // as páginas de serviço entram sozinhas quando ganham `pagina` em SERVICOS
    ...SERVICOS.flatMap((servico) =>
      servico.pagina
        ? [{ url: `${SITE_URL}${servico.pagina}`, changeFrequency: 'monthly' as const, priority: 0.8 }]
        : [],
    ),
    { url: `${SITE_URL}/privacidade`, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
