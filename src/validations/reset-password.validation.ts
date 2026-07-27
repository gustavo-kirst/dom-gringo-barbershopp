import { z } from "zod";

export const resetPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Informe seu e-mail.")
    .email("Informe um e-mail válido."),
});

export type ResetPasswordFormData = z.infer<
  typeof resetPasswordSchema
>;