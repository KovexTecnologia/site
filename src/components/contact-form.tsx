"use client";

import { useActionState, useId } from "react";
import { useFormStatus } from "react-dom";

import { submitContact } from "@/app/actions";
import { contact } from "@/content/site-content";
import { initialContactState, type ContactField } from "@/lib/contact-state";

const fieldBase =
  "mt-2 w-full rounded-sm border bg-surface px-4 py-3 text-base text-ink placeholder:text-faint transition-colors focus:border-cobalt focus:ring-2 focus:ring-cobalt/15 focus:outline-none";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex w-full items-center justify-center gap-3 rounded-sm bg-ink px-7 py-4 text-[0.95rem] font-medium text-paper transition-colors hover:bg-cobalt disabled:cursor-wait disabled:opacity-60 sm:w-auto"
    >
      {pending ? "Enviando…" : "Enviar mensagem"}
      <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
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
      <div role="status" className="rounded-lg border border-rule bg-surface p-8 sm:p-10">
        <span
          aria-hidden
          className="flex h-10 w-10 items-center justify-center rounded-full bg-cobalt-wash text-lg text-cobalt"
        >
          ✓
        </span>
        <p className="mt-6 font-display text-2xl font-semibold text-ink">Mensagem enviada.</p>
        <p className="mt-3 leading-relaxed text-muted">
          Obrigado pelo contato. Vamos responder no e-mail que você informou.
        </p>
      </div>
    );
  }

  const err = state.errors ?? {};
  const values = state.values ?? {};
  const border = (field: ContactField) =>
    err[field] ? "border-danger" : "border-rule-strong hover:border-faint";
  const describedBy = (field: ContactField) => (err[field] ? `${uid}-${field}-erro` : undefined);
  const errorText = (field: ContactField) =>
    err[field] ? (
      <p id={`${uid}-${field}-erro`} className="mt-2 text-sm text-danger">
        {err[field]}
      </p>
    ) : null;

  return (
    <form
      action={action}
      noValidate
      className="relative rounded-lg border border-rule bg-surface p-6 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-nome`} className="text-sm font-medium text-ink">
            Nome
          </label>
          <input
            id={`${uid}-nome`}
            name="nome"
            type="text"
            autoComplete="name"
            required
            defaultValue={values.nome}
            aria-invalid={Boolean(err.nome)}
            aria-describedby={describedBy("nome")}
            className={`${fieldBase} ${border("nome")}`}
          />
          {errorText("nome")}
        </div>

        <div>
          <label htmlFor={`${uid}-email`} className="text-sm font-medium text-ink">
            E-mail
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={values.email}
            aria-invalid={Boolean(err.email)}
            aria-describedby={describedBy("email")}
            className={`${fieldBase} ${border("email")}`}
            placeholder="voce@empresa.com.br"
          />
          {errorText("email")}
        </div>

        <div>
          <label htmlFor={`${uid}-empresa`} className="text-sm font-medium text-ink">
            Empresa <span className="font-normal text-muted">(opcional)</span>
          </label>
          <input
            id={`${uid}-empresa`}
            name="empresa"
            type="text"
            autoComplete="organization"
            defaultValue={values.empresa}
            aria-invalid={Boolean(err.empresa)}
            aria-describedby={describedBy("empresa")}
            className={`${fieldBase} ${border("empresa")}`}
          />
          {errorText("empresa")}
        </div>

        <div>
          <label htmlFor={`${uid}-telefone`} className="text-sm font-medium text-ink">
            WhatsApp <span className="font-normal text-muted">(opcional)</span>
          </label>
          <input
            id={`${uid}-telefone`}
            name="telefone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            defaultValue={values.telefone}
            aria-invalid={Boolean(err.telefone)}
            aria-describedby={describedBy("telefone")}
            className={`${fieldBase} ${border("telefone")}`}
            placeholder="(00) 00000-0000"
          />
          {errorText("telefone")}
        </div>

        <fieldset className="sm:col-span-2" aria-describedby={describedBy("assunto")}>
          <legend className="text-sm font-medium text-ink">Assunto</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {contact.subjects.map((subject) => (
              <label key={subject} className="cursor-pointer">
                <input
                  type="radio"
                  name="assunto"
                  value={subject}
                  required
                  defaultChecked={values.assunto === subject}
                  className="peer sr-only"
                />
                <span
                  className={`inline-block rounded-full border px-4 py-2 text-sm transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-cobalt ${
                    err.assunto
                      ? "border-danger text-ink-soft"
                      : "border-rule-strong text-ink-soft hover:border-ink"
                  }`}
                >
                  {subject}
                </span>
              </label>
            ))}
          </div>
          {errorText("assunto")}
        </fieldset>

        <div className="sm:col-span-2">
          <label htmlFor={`${uid}-mensagem`} className="text-sm font-medium text-ink">
            Mensagem
          </label>
          <textarea
            id={`${uid}-mensagem`}
            name="mensagem"
            rows={5}
            required
            defaultValue={values.mensagem}
            aria-invalid={Boolean(err.mensagem)}
            aria-describedby={describedBy("mensagem")}
            className={`${fieldBase} resize-y ${border("mensagem")}`}
            placeholder="O que você precisa resolver, o que já existe hoje e qual o prazo que você tem em mente."
          />
          {errorText("mensagem")}
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
          defaultChecked={Boolean(state.values) && !err.consentimento}
          aria-invalid={Boolean(err.consentimento)}
          aria-describedby={describedBy("consentimento")}
          className="mt-1 h-4 w-4 shrink-0 accent-cobalt"
        />
        <div>
          <label htmlFor={`${uid}-consentimento`} className="text-sm leading-relaxed text-muted">
            Autorizo a Kovex a usar estes dados para responder a este contato, conforme a{" "}
            <a
              href="/privacidade"
              className="text-ink underline underline-offset-4 hover:text-cobalt"
            >
              Política de Privacidade
            </a>
            .
          </label>
          {errorText("consentimento")}
        </div>
      </div>

      {state.status === "error" && state.message ? (
        <p role="alert" className="mt-6 border-l-2 border-danger pl-4 text-sm text-danger">
          {state.message}
        </p>
      ) : null}

      <div className="mt-8">
        <Submit />
      </div>
    </form>
  );
}
