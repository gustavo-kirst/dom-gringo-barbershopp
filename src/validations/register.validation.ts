import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, "Informe seu nome."),

    email: z
      .string()
      .min(1, "Informe seu e-mail.")
      .email("Informe um e-mail válido."),

    password: z
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres."),

    confirmPassword: z.string(),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      message: "As senhas não coincidem.",
      path: ["confirmPassword"],
    }
  );

export type RegisterFormData = z.infer<typeof registerSchema>;