import { z } from "zod";
import { AlbumCreateNestedManyWithoutArtistInputObjectSchema } from "./AlbumCreateNestedManyWithoutArtistInput.schema";
import { GenreCreateNestedOneWithoutArtistInputObjectSchema } from "./GenreCreateNestedOneWithoutArtistInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ArtistCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    album: z
      .lazy(() => AlbumCreateNestedManyWithoutArtistInputObjectSchema)
      .optional(),
    Genre: z
      .lazy(() => GenreCreateNestedOneWithoutArtistInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArtistCreateInputObjectSchema = Schema;
