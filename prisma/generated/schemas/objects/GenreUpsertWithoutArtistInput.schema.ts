import { z } from "zod";
import { GenreUpdateWithoutArtistInputObjectSchema } from "./GenreUpdateWithoutArtistInput.schema";
import { GenreUncheckedUpdateWithoutArtistInputObjectSchema } from "./GenreUncheckedUpdateWithoutArtistInput.schema";
import { GenreCreateWithoutArtistInputObjectSchema } from "./GenreCreateWithoutArtistInput.schema";
import { GenreUncheckedCreateWithoutArtistInputObjectSchema } from "./GenreUncheckedCreateWithoutArtistInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GenreUpsertWithoutArtistInput> = z
  .object({
    update: z.union([
      z.lazy(() => GenreUpdateWithoutArtistInputObjectSchema),
      z.lazy(() => GenreUncheckedUpdateWithoutArtistInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => GenreCreateWithoutArtistInputObjectSchema),
      z.lazy(() => GenreUncheckedCreateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict();

export const GenreUpsertWithoutArtistInputObjectSchema = Schema;
