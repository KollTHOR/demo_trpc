import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TrackAvgAggregateInputType> = z
  .object({
    duration: z.literal(true).optional(),
  })
  .strict();

export const TrackAvgAggregateInputObjectSchema = Schema;
