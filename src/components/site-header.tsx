"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { KovexLockup } from "@/components/logo";
import { nav } from "@/lib/site-config";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-rule bg-canvas/90 backdrop-blur-md"
          : "border-transparent bg-canvas/0"
      }`}
    >
      <div className="container-kx flex h-18 items-center justify-between gap-8">
        <Link href="/" className="shrink-0 py-2" aria-label="Kovex Tecnologia — início" onClick={close}>
          <KovexLockup className="h-6 w-auto sm:h-7" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.95rem] text-ink-soft transition-colors hover:text-cobalt"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#contato"
            className="hidden rounded-sm bg-ink px-4.5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-cobalt sm:inline-block"
          >
            Fale conosco
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-rule-strong bg-surface lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-4 bg-ink transition-transform duration-200 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-4 bg-ink transition-transform duration-200 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-rule bg-canvas lg:hidden"
      >
        <nav aria-label="Menu" className="container-kx py-6">
          <ul className="flex flex-col">
            {nav.map((item, index) => (
              <li key={item.href} className="border-b border-rule">
                <Link
                  href={item.href}
                  onClick={close}
                  className="flex items-baseline gap-4 py-4 font-display text-2xl font-semibold text-ink"
                >
                  <span className="label tabular text-cobalt">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contato"
            onClick={close}
            className="mt-8 block rounded-sm bg-ink px-5 py-4 text-center font-medium text-paper"
          >
            Fale conosco
          </Link>
        </nav>
      </div>
    </header>
  );
}
