"use client";

import { useActionState, useId } from "react";
import { useFormStatus } from "react-dom";

import { submitContact } from "@/app/actions";
import { initialContactState } from "@/lib/contact-state";

const fieldBase =
  "w-full rounded-xs border bg-ink-950 px-4 py-3.5 text-[0.95rem] text-paper placeholder:text-mute-dim/70 transition-colors focus:border-cobalt-500 focus:outline-none";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex w-full items-center justify-center gap-3 rounded-xs bg-cobalt-600 px-7 py-4 text-sm font-medium tracking-wide transition-colors hover:bg-cobalt-500 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
    >
      {pending ? "Enviando…" : "Enviar mensagem"}
      <span
        aria-hidden
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        →
      </span>
    </button>
  );
}

export function ContactForm() {
  const [state, action] = useActionState(submitContact, initialContactState);
  const uid = useId();

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="border border-cobalt-500/40 bg-ink-900/60 p-10"
      >
        <p className="eyebrow text-cobalt-400">Mensagem recebida</p>
        <p className="mt-6 font-display text-2xl leading-snug">
          Obrigado. Já está na caixa de entrada do time técnico.
        </p>
        <p className="mt-4 leading-relaxed text-mute">
          {state.message ??
            "Retornamos em até um dia útil com uma primeira leitura do problema."}
        </p>
      </div>
    );
  }

  const err = state.errors ?? {};
  const line = (hasError: boolean) =>
    `${fieldBase} ${hasError ? "border-red-400/70" : "border-paper/15 hover:border-paper/30"}`;

  return (
    <form
      action={action}
      noValidate
      className="relative border border-paper/12 p-8 lg:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-nome`} className="eyebrow block">
            Nome
          </label>
          <input
            id={`${uid}-nome`}
            name="nome"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(err.nome)}
            aria-describedby={err.nome ? `${uid}-nome-erro` : undefined}
            className={`mt-3 ${line(Boolean(err.nome))}`}
            placeholder="Como podemos te chamar"
          />
          {err.nome ? (
            <p id={`${uid}-nome-erro`} className="mt-2 text-xs text-red-300">
              {err.nome}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${uid}-empresa`} className="eyebrow block">
            Empresa
          </label>
          <input
            id={`${uid}-empresa`}
            name="empresa"
            type="text"
            autoComplete="organization"
            required
            aria-invalid={Boolean(err.empresa)}
            aria-describedby={err.empresa ? `${uid}-empresa-erro` : undefined}
            className={`mt-3 ${line(Boolean(err.empresa))}`}
            placeholder="Razão social ou nome fantasia"
          />
          {err.empresa ? (
            <p id={`${uid}-empresa-erro`} className="mt-2 text-xs text-red-300">
              {err.empresa}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${uid}-email`} className="eyebrow block">
            E-mail corporativo
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(err.email)}
            aria-describedby={err.email ? `${uid}-email-erro` : undefined}
            className={`mt-3 ${line(Boolean(err.email))}`}
            placeholder="voce@empresa.com.br"
          />
          {err.email ? (
            <p id={`${uid}-email-erro`} className="mt-2 text-xs text-red-300">
              {err.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={`${uid}-telefone`} className="eyebrow block">
            Telefone <span className="normal-case">(opcional)</span>
          </label>
          <input
            id={`${uid}-telefone`}
            name="telefone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(err.telefone)}
            aria-describedby={err.telefone ? `${uid}-telefone-erro` : undefined}
            className={`mt-3 ${line(Boolean(err.telefone))}`}
            placeholder="(11) 90000-0000"
          />
          {err.telefone ? (
            <p id={`${uid}-telefone-erro`} className="mt-2 text-xs text-red-300">
              {err.telefone}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-mensagem`} className="eyebrow block">
            O que precisa ser resolvido
          </label>
          <textarea
            id={`${uid}-mensagem`}
            name="mensagem"
            rows={5}
            required
            aria-invalid={Boolean(err.mensagem)}
            aria-describedby={err.mensagem ? `${uid}-mensagem-erro` : undefined}
            className={`mt-3 resize-y ${line(Boolean(err.mensagem))}`}
            placeholder="Qual processo trava hoje, quantas pessoas dependem dele e o que já existe de sistema."
          />
          {err.mensagem ? (
            <p id={`${uid}-mensagem-erro`} className="mt-2 text-xs text-red-300">
              {err.mensagem}
            </p>
          ) : null}
        </div>
      </div>

      {/* honeypot: invisivel para pessoas, irresistivel para robo */}
      <div aria-hidden className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label htmlFor={`${uid}-site`}>Não preencha este campo</label>
        <input id={`${uid}-site`} name="site" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8 flex items-start gap-3">
        <input
          id={`${uid}-consentimento`}
          name="consentimento"
          type="checkbox"
          required
          aria-invalid={Boolean(err.consentimento)}
          className="mt-1 h-4 w-4 shrink-0 accent-cobalt-600"
        />
        <label
          htmlFor={`${uid}-consentimento`}
          className="text-sm leading-relaxed text-mute"
        >
          Autorizo a Kovex a usar estes dados para responder a este contato,
          conforme a{" "}
          <a
            href="/politica-de-privacidade"
            className="text-paper underline underline-offset-4 hover:text-cobalt-400"
          >
            Política de Privacidade
          </a>
          .
          {err.consentimento ? (
            <span className="mt-1 block text-xs text-red-300">
              {err.consentimento}
            </span>
          ) : null}
        </label>
      </div>

      {state.status === "error" && state.message ? (
        <p
          role="alert"
          className="mt-6 border-l-2 border-red-400 pl-4 text-sm text-red-300"
        >
          {state.message}
        </p>
      ) : null}

      <div className="mt-8">
        <Submit />
      </div>
    </form>
  );
}
