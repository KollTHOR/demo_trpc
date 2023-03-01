import { z } from "zod";
import { TrackUncheckedCreateNestedManyWithoutAlbumInputObjectSchema } from "./TrackUncheckedCreateNestedManyWithoutAlbumInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AlbumUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    tracks: z
      .lazy(() => TrackUncheckedCreateNestedManyWithoutAlbumInputObjectSchema)
      .optional(),
    artistId: z.string().optional().nullable(),
  })
  .strict();

export const AlbumUncheckedCreateInputObjectSchema = Schema;
