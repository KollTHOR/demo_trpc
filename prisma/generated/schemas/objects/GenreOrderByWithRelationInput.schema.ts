import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { ArtistOrderByRelationAggregateInputObjectSchema } from "./ArtistOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GenreOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    artist: z
      .lazy(() => ArtistOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const GenreOrderByWithRelationInputObjectSchema = Schema;
