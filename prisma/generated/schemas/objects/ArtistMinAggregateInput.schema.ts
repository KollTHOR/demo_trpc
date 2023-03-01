import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ArtistMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    genreId: z.literal(true).optional(),
  })
  .strict();

export const ArtistMinAggregateInputObjectSchema = Schema;
