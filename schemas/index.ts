import * as z from "zod";

import React from "react";

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    {
      message: "New Password is required!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    {
      message: "Password is required!",
      path: ["password"],
    }
  );

export const SigninSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: "Password is required ",
  }),
});

export const SignupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});
export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum 6 characters required",
  }),
});

export const InvoiceSchema = z.object({
  name: z.string().min(2).max(50),
  address: z.string(),
  date: z.date(),
  receiptType: z.string(),
  number: z.number(),
  customerName: z.string().min(2).max(50),
  customerAddress: z.string(),
  products: z.array(
    z.object({
      name: z.string().min(2).max(50),
      price: z.number(),
      quantity: z.number(),
    })
  ),
  discount: z.number(),
  tax: z.number(),
  note: z.string(),
});
