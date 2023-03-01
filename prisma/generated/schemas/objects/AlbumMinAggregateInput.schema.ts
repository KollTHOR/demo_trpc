import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AlbumMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    artistId: z.literal(true).optional(),
  })
  .strict();

export const AlbumMinAggregateInputObjectSchema = Schema;
