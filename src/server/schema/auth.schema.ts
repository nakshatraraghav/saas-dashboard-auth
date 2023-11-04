import { z } from "zod";

import { name, email, username, password } from "./auth.error";

export const registerSchema = z.object({
  name: z
    .string({
      invalid_type_error: name.invalid_type,
      required_error: name.required_error,
    })
    .min(3, name.min_length)
    .max(48, name.max_length),
  email: z
    .string({
      invalid_type_error: email.invalid_type,
      required_error: email.required_error,
    })
    .email(email.invalid_email)
    .min(5, email.min_length)
    .max(30, email.max_length),
  username: z.string({
    invalid_type_error: username.invalid_type,
    required_error: username.required_error,
  }).min(6).max(30),
  password: z
    .string({
      invalid_type_error: password.invalid_type,
      required_error: password.required_error,
    })
    .min(8, password.min_length)
    .max(30, password.max_length),
  agree: z.boolean(),
}).refine((data) => data.agree === true, {
  message: "You need to agree to the terms and conditions to create an account",
});

  
const body = z.object({
  name: z.string({
    required_error: "Name is required",
  }),
  password: z.string({
    required_error: "Password is required",
  }).min(6, "Password too short - should be 6 chars minimum"),
  passwordConfirmation: z.string({
    required_error: "passwordConfirmation is required",
  }),
  email: z.string({
    required_error: "Email is required",
  }).email("Not a valid email"),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: "Passwords do not match",
  path: ["passwordConfirmation"],
})



export const loginSchema = z.object({
  email: z
    .string({
      invalid_type_error: email.invalid_type,
      required_error: email.required_error,
    })
    .email(email.invalid_email)
    .min(5, email.min_length)
    .max(30, email.max_length),
  password: z
    .string({
      invalid_type_error: password.invalid_type,
      required_error: password.required_error,
    })
    .min(8, password.min_length)
    .max(30, password.max_length),
});

export type registerBodyType = z.infer<typeof registerSchema>;
export type loginBodyType = z.infer<typeof loginSchema>;
