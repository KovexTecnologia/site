import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-b border-paper/10 py-24 lg:py-32 ${className}`}
    >
      <div className="container-kx">{children}</div>
    </section>
  );
}

export function SectionHead({
  index,
  label,
  title,
  lead,
}: {
  index: string;
  label: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-12">
        <p className="eyebrow flex items-center gap-4">
          <span>{index}</span>
          <span className="h-px w-8 bg-paper/25" aria-hidden />
          <span>{label}</span>
        </p>
      </div>
      <h2 className="text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.05] lg:col-span-6">
        {title}
      </h2>
      {lead ? (
        <p className="text-lg leading-relaxed text-mute lg:col-span-5 lg:col-start-8">
          {lead}
        </p>
      ) : null}
    </header>
  );
}
