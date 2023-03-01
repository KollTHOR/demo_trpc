import { z } from "zod";
import { TrackCreateNestedManyWithoutAlbumInputObjectSchema } from "./TrackCreateNestedManyWithoutAlbumInput.schema";
import { ArtistCreateNestedOneWithoutAlbumInputObjectSchema } from "./ArtistCreateNestedOneWithoutAlbumInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AlbumCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    tracks: z
      .lazy(() => TrackCreateNestedManyWithoutAlbumInputObjectSchema)
      .optional(),
    Artist: z
      .lazy(() => ArtistCreateNestedOneWithoutAlbumInputObjectSchema)
      .optional(),
  })
  .strict();

export const AlbumCreateInputObjectSchema = Schema;
