import coreWebVitals from 'eslint-config-next/core-web-vitals'
import typescript from 'eslint-config-next/typescript'

/**
 * ESLint fica no 9.x, como no portfólio: o eslint-plugin-react embarcado no
 * eslint-config-next 16 ainda quebra no ESLint 10.
 */
const config = [
  {
    ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts', 'docs/**'],
  },
  ...coreWebVitals,
  ...typescript,
]

export default config
