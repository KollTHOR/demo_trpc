import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { TrackCountOrderByAggregateInputObjectSchema } from "./TrackCountOrderByAggregateInput.schema";
import { TrackAvgOrderByAggregateInputObjectSchema } from "./TrackAvgOrderByAggregateInput.schema";
import { TrackMaxOrderByAggregateInputObjectSchema } from "./TrackMaxOrderByAggregateInput.schema";
import { TrackMinOrderByAggregateInputObjectSchema } from "./TrackMinOrderByAggregateInput.schema";
import { TrackSumOrderByAggregateInputObjectSchema } from "./TrackSumOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TrackOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    duration: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    albumId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TrackCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => TrackAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => TrackMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => TrackMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => TrackSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const TrackOrderByWithAggregationInputObjectSchema = Schema;
