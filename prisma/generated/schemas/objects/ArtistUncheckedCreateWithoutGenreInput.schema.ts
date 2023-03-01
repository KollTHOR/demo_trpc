import { z } from "zod";
import { AlbumUncheckedCreateNestedManyWithoutArtistInputObjectSchema } from "./AlbumUncheckedCreateNestedManyWithoutArtistInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ArtistUncheckedCreateWithoutGenreInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    album: z
      .lazy(() => AlbumUncheckedCreateNestedManyWithoutArtistInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArtistUncheckedCreateWithoutGenreInputObjectSchema = Schema;
