import { z } from "zod";
import { ArtistWhereUniqueInputObjectSchema } from "./ArtistWhereUniqueInput.schema";
import { ArtistUpdateWithoutGenreInputObjectSchema } from "./ArtistUpdateWithoutGenreInput.schema";
import { ArtistUncheckedUpdateWithoutGenreInputObjectSchema } from "./ArtistUncheckedUpdateWithoutGenreInput.schema";
import { ArtistCreateWithoutGenreInputObjectSchema } from "./ArtistCreateWithoutGenreInput.schema";
import { ArtistUncheckedCreateWithoutGenreInputObjectSchema } from "./ArtistUncheckedCreateWithoutGenreInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ArtistUpsertWithWhereUniqueWithoutGenreInput> = z
  .object({
    where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => ArtistUpdateWithoutGenreInputObjectSchema),
      z.lazy(() => ArtistUncheckedUpdateWithoutGenreInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutGenreInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutGenreInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistUpsertWithWhereUniqueWithoutGenreInputObjectSchema = Schema;
