import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TrackUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    duration: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    albumId: z.string().optional().nullable(),
  })
  .strict();

export const TrackUncheckedCreateInputObjectSchema = Schema;
