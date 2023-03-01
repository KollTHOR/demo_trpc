import { z } from "zod";
import { AlbumCreateNestedManyWithoutArtistInputObjectSchema } from "./AlbumCreateNestedManyWithoutArtistInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ArtistCreateWithoutGenreInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    album: z
      .lazy(() => AlbumCreateNestedManyWithoutArtistInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArtistCreateWithoutGenreInputObjectSchema = Schema;
