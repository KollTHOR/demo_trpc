import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { TrackOrderByRelationAggregateInputObjectSchema } from "./TrackOrderByRelationAggregateInput.schema";
import { ArtistOrderByWithRelationInputObjectSchema } from "./ArtistOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AlbumOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    tracks: z
      .lazy(() => TrackOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Artist: z.lazy(() => ArtistOrderByWithRelationInputObjectSchema).optional(),
    artistId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const AlbumOrderByWithRelationInputObjectSchema = Schema;
