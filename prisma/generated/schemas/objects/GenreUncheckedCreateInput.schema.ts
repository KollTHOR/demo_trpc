import { z } from "zod";
import { ArtistUncheckedCreateNestedManyWithoutGenreInputObjectSchema } from "./ArtistUncheckedCreateNestedManyWithoutGenreInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GenreUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    artist: z
      .lazy(() => ArtistUncheckedCreateNestedManyWithoutGenreInputObjectSchema)
      .optional(),
  })
  .strict();

export const GenreUncheckedCreateInputObjectSchema = Schema;
