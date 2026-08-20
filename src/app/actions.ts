"use server";

import { z } from "zod";

import type { ContactField, ContactState } from "@/lib/contact-state";
import { siteConfig } from "@/lib/site-config";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome.").max(120),
  empresa: z.string().trim().min(2, "Informe a empresa.").max(160),
  email: z
    .string()
    .trim()
    .min(1, "Informe um e-mail.")
    .email("E-mail inválido.")
    .max(160),
  telefone: z
    .string()
    .trim()
    .max(40)
    .optional()
    .or(z.literal(""))
    .refine(
      (value) => !value || value.replace(/\D/g, "").length >= 10,
      "Telefone incompleto.",
    ),
  mensagem: z
    .string()
    .trim()
    .min(20, "Descreva em pelo menos 20 caracteres o que precisa resolver.")
    .max(4000),
  consentimento: z.literal("on", {
    errorMap: () => ({ message: "É preciso aceitar o uso dos dados." }),
  }),
  // honeypot: campo escondido que so um robo preenche
  site: z.string().max(0).optional(),
});

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = schema.safeParse({
    nome: formData.get("nome") ?? "",
    empresa: formData.get("empresa") ?? "",
    email: formData.get("email") ?? "",
    telefone: formData.get("telefone") ?? "",
    mensagem: formData.get("mensagem") ?? "",
    consentimento: formData.get("consentimento") ?? "",
    site: formData.get("site") ?? "",
  });

  if (!parsed.success) {
    const errors: ContactState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as ContactField;
      if (key && !errors[key]) errors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Confira os campos destacados.",
      errors,
    };
  }

  const data = parsed.data;

  // Robo caiu no honeypot: responde sucesso e descarta.
  if (data.site) return { status: "success" };

  const subject = `[Site] ${data.empresa} — ${data.nome}`;
  const body = [
    `Nome: ${data.nome}`,
    `Empresa: ${data.empresa}`,
    `E-mail: ${data.email}`,
    `Telefone: ${data.telefone || "não informado"}`,
    "",
    data.mensagem,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Sem provedor configurado o lead nao se perde: fica no log da Vercel.
    console.info("[contato] novo lead\n" + body);
    return {
      status: "success",
      message: "Recebemos sua mensagem. Retornamos em até um dia útil.",
    };
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
    };
  }

  return {
    status: "success",
    message: "Recebemos sua mensagem. Retornamos em até um dia útil.",
  };
}
