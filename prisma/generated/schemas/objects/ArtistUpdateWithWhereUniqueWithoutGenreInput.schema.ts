import { z } from "zod";
import { ArtistWhereUniqueInputObjectSchema } from "./ArtistWhereUniqueInput.schema";
import { ArtistUpdateWithoutGenreInputObjectSchema } from "./ArtistUpdateWithoutGenreInput.schema";
import { ArtistUncheckedUpdateWithoutGenreInputObjectSchema } from "./ArtistUncheckedUpdateWithoutGenreInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ArtistUpdateWithWhereUniqueWithoutGenreInput> = z
  .object({
    where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtistUpdateWithoutGenreInputObjectSchema),
      z.lazy(() => ArtistUncheckedUpdateWithoutGenreInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistUpdateWithWhereUniqueWithoutGenreInputObjectSchema = Schema;
