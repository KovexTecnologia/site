/**
 * Geometria oficial do K (brand/svg/kovex-mark-*.svg).
 * Nao alterar proporcoes: os angulos 4:3 e o recorte da barra sao fixos.
 */
export const CHEVRON_PATH = "M62.75 0 H104.75 L56 65 L104.75 130 H62.75 L14 65 Z";
const BAR_PATH = "M0 0 H35 V27 L6.5 65 L35 103 V130 H0 Z";

export function KovexMark({
  className = "h-8 w-auto",
  gradientId = "kx-mark",
  barFill = "#0A121D",
}: {
  className?: string;
  gradientId?: string;
  barFill?: string;
}) {
  return (
    <svg
      viewBox="0 0 104.75 130"
      className={className}
      role="img"
      aria-label="Símbolo Kovex"
      focusable="false"
    >
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="80"
          y1="0"
          x2="80"
          y2="130"
        >
          <stop offset="0" stopColor="#3E70E4" />
          <stop offset="1" stopColor="#2247D2" />
        </linearGradient>
      </defs>
      <path fill={barFill} d={BAR_PATH} />
      <path fill={`url(#${gradientId})`} d={CHEVRON_PATH} />
    </svg>
  );
}

/** Lockup horizontal. `tone="light"` para fundo claro, `"dark"` para o navy. */
export function KovexLockup({
  className = "h-6 w-auto",
  tone = "light",
  title = "Kovex Tecnologia",
}: {
  className?: string;
  tone?: "light" | "dark";
  title?: string;
}) {
  const src =
    tone === "light"
      ? "/brand/kovex-lockup-horizontal.svg"
      : "/brand/kovex-lockup-horizontal-dark.svg";

  return (
    // eslint-disable-next-line @next/next/no-img-element -- SVG de marca, servido estatico sem otimizacao.
    <img
      src={src}
      alt={title}
      width={525}
      height={130}
      className={className}
      decoding="async"
    />
  );
}
