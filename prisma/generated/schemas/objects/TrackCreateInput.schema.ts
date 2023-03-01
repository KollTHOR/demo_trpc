import { z } from "zod";
import { AlbumCreateNestedOneWithoutTracksInputObjectSchema } from "./AlbumCreateNestedOneWithoutTracksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TrackCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    duration: z.number(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    Album: z
      .lazy(() => AlbumCreateNestedOneWithoutTracksInputObjectSchema)
      .optional(),
  })
  .strict();

export const TrackCreateInputObjectSchema = Schema;
