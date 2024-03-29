import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { AlbumCountOrderByAggregateInputObjectSchema } from "./AlbumCountOrderByAggregateInput.schema";
import { AlbumMaxOrderByAggregateInputObjectSchema } from "./AlbumMaxOrderByAggregateInput.schema";
import { AlbumMinOrderByAggregateInputObjectSchema } from "./AlbumMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AlbumOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    artistId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AlbumCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => AlbumMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => AlbumMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const AlbumOrderByWithAggregationInputObjectSchema = Schema;
