import { z } from "zod";
import { TrackCreateNestedManyWithoutAlbumInputObjectSchema } from "./TrackCreateNestedManyWithoutAlbumInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AlbumCreateWithoutArtistInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    tracks: z
      .lazy(() => TrackCreateNestedManyWithoutAlbumInputObjectSchema)
      .optional(),
  })
  .strict();

export const AlbumCreateWithoutArtistInputObjectSchema = Schema;
