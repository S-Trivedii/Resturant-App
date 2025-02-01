import { z } from "zod";

export const userSignSchema = z.object({
  fullname: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be atleast 6 characters"),
  contact: z
    .string()
    .min(10, "Contact number atleast 10 digit")
    .max(10, "Contact number atmost 10 digit"),
});

// zod provide type also
export type RegisterInputState = z.infer<typeof userSignSchema>;

export const userLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be atleast 6 characters"),
});

export type LoginInputState = z.infer<typeof userLoginSchema>;
