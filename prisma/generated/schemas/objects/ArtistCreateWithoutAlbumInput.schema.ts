import { z } from "zod";
import { GenreCreateNestedOneWithoutArtistInputObjectSchema } from "./GenreCreateNestedOneWithoutArtistInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ArtistCreateWithoutAlbumInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    Genre: z
      .lazy(() => GenreCreateNestedOneWithoutArtistInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArtistCreateWithoutAlbumInputObjectSchema = Schema;
