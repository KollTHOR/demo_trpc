import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { AlbumOrderByRelationAggregateInputObjectSchema } from "./AlbumOrderByRelationAggregateInput.schema";
import { GenreOrderByWithRelationInputObjectSchema } from "./GenreOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ArtistOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    album: z
      .lazy(() => AlbumOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Genre: z.lazy(() => GenreOrderByWithRelationInputObjectSchema).optional(),
    genreId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ArtistOrderByWithRelationInputObjectSchema = Schema;
