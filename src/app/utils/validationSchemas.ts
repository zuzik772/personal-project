import { z } from "zod";

export const SignInFormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

export const userSchema = SignInFormSchema.extend({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must have minimum 6 characters"),
});

export const SignUpFormSchema = userSchema
  .extend({
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const TaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z
    .string()
    .min(1, "Description is required")
    .min(10, "Description must have at least 10 characters"),
  isImportant: z.boolean(),
  status: z.enum(["OPEN", "IN_PROGRESS", "DONE"]),
});
