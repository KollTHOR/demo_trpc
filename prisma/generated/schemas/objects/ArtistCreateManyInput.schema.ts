import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ArtistCreateManyInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    genreId: z.string().optional().nullable(),
  })
  .strict();

export const ArtistCreateManyInputObjectSchema = Schema;
