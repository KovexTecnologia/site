"use server";

import { z } from "zod";

import { contact } from "@/content/site-content";
import type { ContactField, ContactState } from "@/lib/contact-state";
import { siteConfig } from "@/lib/site-config";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome.").max(120),
  email: z
    .string()
    .trim()
    .min(1, "Informe um e-mail.")
    .email("E-mail inválido.")
    .max(160),
  empresa: z.string().trim().max(160),
  telefone: z
    .string()
    .trim()
    .max(40)
    .refine(
      (value) => !value || value.replace(/\D/g, "").length >= 10,
      "Telefone incompleto. Inclua o DDD.",
    ),
  assunto: z.enum(contact.subjects as [string, ...string[]], {
    errorMap: () => ({ message: "Escolha um assunto." }),
  }),
  mensagem: z
    .string()
    .trim()
    .min(20, "Conte um pouco mais — pelo menos 20 caracteres.")
    .max(4000),
  consentimento: z.literal("on", {
    errorMap: () => ({ message: "É preciso autorizar o uso dos dados para respondermos." }),
  }),
  // honeypot: campo escondido que so um robo preenche
  site: z.string().max(0).optional(),
});

const text = (formData: FormData, key: string) => {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const values = {
    nome: text(formData, "nome"),
    email: text(formData, "email"),
    empresa: text(formData, "empresa"),
    telefone: text(formData, "telefone"),
    assunto: text(formData, "assunto"),
    mensagem: text(formData, "mensagem"),
  };

  const parsed = schema.safeParse({
    ...values,
    consentimento: text(formData, "consentimento"),
    site: text(formData, "site"),
  });

  if (!parsed.success) {
    const errors: ContactState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as ContactField;
      if (key && !errors[key]) errors[key] = issue.message;
    }
    return { status: "error", message: "Confira os campos destacados.", errors, values };
  }

  const data = parsed.data;

  // Robo caiu no honeypot: responde sucesso e descarta.
  if (data.site) return { status: "success" };

  const subject = `[Site Kovex] ${data.assunto} — ${data.nome}${data.empresa ? ` (${data.empresa})` : ""}`;
  const body = [
    `Assunto: ${data.assunto}`,
    `Nome: ${data.nome}`,
    `E-mail: ${data.email}`,
    `Empresa: ${data.empresa || "não informada"}`,
    `Telefone: ${data.telefone || "não informado"}`,
    "",
    data.mensagem,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Sem provedor configurado o contato nao se perde: fica no log da Vercel.
    console.info("[contato] nova mensagem\n" + body);
    return { status: "success" };
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `Site Kovex <${process.env.CONTACT_FROM_EMAIL ?? `site@${new URL(siteConfig.url).hostname}`}>`,
      to: [process.env.CONTACT_TO_EMAIL ?? siteConfig.email],
      replyTo: data.email,
      subject,
      text: body,
    });

    if (error) throw new Error(error.message);
  } catch (error) {
    console.error("[contato] falha no envio", error);
    return {
      status: "error",
      message: `Não conseguimos enviar agora. Se puder, escreva direto para ${siteConfig.email}.`,
      values,
    };
  }

  return { status: "success" };
}
