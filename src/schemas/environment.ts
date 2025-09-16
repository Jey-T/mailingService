import { z } from "zod/v4";

export const environmentSchema = z
    .object({
        EMAIL_USER: z.string(),
        EMAIL_PASS: z.string(),
        RECEIVER_EMAIL: z.string(),
    })
    .required();
