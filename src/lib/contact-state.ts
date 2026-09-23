/**
 * Estado do formulario de contato.
 * Fica fora de actions.ts porque um arquivo "use server" so pode exportar funcoes async.
 */
export type ContactField =
  | "nome"
  | "email"
  | "empresa"
  | "telefone"
  | "assunto"
  | "mensagem"
  | "consentimento";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  /** Devolve o que foi digitado quando da erro, para o formulario nao zerar. */
  values?: Partial<Record<Exclude<ContactField, "consentimento">, string>>;
};

export const initialContactState: ContactState = { status: "idle" };
