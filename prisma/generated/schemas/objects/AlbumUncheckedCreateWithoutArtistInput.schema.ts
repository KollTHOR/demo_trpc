import { z } from "zod";
import { TrackUncheckedCreateNestedManyWithoutAlbumInputObjectSchema } from "./TrackUncheckedCreateNestedManyWithoutAlbumInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AlbumUncheckedCreateWithoutArtistInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    tracks: z
      .lazy(() => TrackUncheckedCreateNestedManyWithoutAlbumInputObjectSchema)
      .optional(),
  })
  .strict();

export const AlbumUncheckedCreateWithoutArtistInputObjectSchema = Schema;
