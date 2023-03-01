import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { GenreCountOrderByAggregateInputObjectSchema } from "./GenreCountOrderByAggregateInput.schema";
import { GenreMaxOrderByAggregateInputObjectSchema } from "./GenreMaxOrderByAggregateInput.schema";
import { GenreMinOrderByAggregateInputObjectSchema } from "./GenreMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GenreOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => GenreCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => GenreMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => GenreMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const GenreOrderByWithAggregationInputObjectSchema = Schema;
