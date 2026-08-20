/**
 * Estado do formulario de contato.
 * Fica fora de actions.ts porque um arquivo "use server" so pode exportar funcoes async.
 */
export type ContactField =
  | "nome"
  | "empresa"
  | "email"
  | "telefone"
  | "mensagem"
  | "consentimento";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
};

export const initialContactState: ContactState = { status: "idle" };
