import { z } from "zod";
import { ArtistWhereUniqueInputObjectSchema } from "./ArtistWhereUniqueInput.schema";
import { ArtistCreateWithoutGenreInputObjectSchema } from "./ArtistCreateWithoutGenreInput.schema";
import { ArtistUncheckedCreateWithoutGenreInputObjectSchema } from "./ArtistUncheckedCreateWithoutGenreInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ArtistCreateOrConnectWithoutGenreInput> = z
  .object({
    where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutGenreInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutGenreInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistCreateOrConnectWithoutGenreInputObjectSchema = Schema;
