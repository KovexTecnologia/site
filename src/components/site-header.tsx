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
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-paper/10 bg-ink-950/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-kx flex h-18 items-center justify-between gap-8">
        <Link
          href="/"
          className="shrink-0 py-2"
          aria-label="Kovex Tecnologia — início"
          onClick={() => setOpen(false)}
        >
          <KovexLockup className="h-5 w-auto sm:h-6" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-mute transition-colors hover:text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contato"
            className="hidden rounded-xs border border-paper/20 px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:border-cobalt-500 hover:bg-cobalt-600 sm:inline-block"
          >
            Falar com a Kovex
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex h-10 w-10 items-center justify-center rounded-xs border border-paper/15 lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-4 bg-paper transition-transform duration-200 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-4 bg-paper transition-transform duration-200 ${
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
        className="border-t border-paper/10 bg-ink-950 lg:hidden"
      >
        <nav aria-label="Menu" className="container-kx py-6">
          <ul className="flex flex-col">
            {nav.map((item, index) => (
              <li key={item.href} className="border-b border-paper/10">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4 text-lg"
                >
                  <span className="eyebrow">{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-xs bg-cobalt-600 px-5 py-3.5 text-center text-sm font-medium"
          >
            Falar com a Kovex
          </Link>
        </nav>
      </div>
    </header>
  );
}
