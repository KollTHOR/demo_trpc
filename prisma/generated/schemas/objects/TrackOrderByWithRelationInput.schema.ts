import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { AlbumOrderByWithRelationInputObjectSchema } from "./AlbumOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TrackOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    duration: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    Album: z.lazy(() => AlbumOrderByWithRelationInputObjectSchema).optional(),
    albumId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TrackOrderByWithRelationInputObjectSchema = Schema;
