import { z } from "zod/v4";

export const messageSchema = z
  .object({
    name: z
      .string()
      .min(4, { message: "Name must be at least 4 characters long" }),
    email: z.email({ message: "Invalid email address" }).or(z.literal("")),
    message: z.string({ message: "You can't send an empty message" }),
  })
  .required();
