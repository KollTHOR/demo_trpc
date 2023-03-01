import { z } from "zod";
import { ArtistCreateNestedManyWithoutGenreInputObjectSchema } from "./ArtistCreateNestedManyWithoutGenreInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GenreCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    artist: z
      .lazy(() => ArtistCreateNestedManyWithoutGenreInputObjectSchema)
      .optional(),
  })
  .strict();

export const GenreCreateInputObjectSchema = Schema;
