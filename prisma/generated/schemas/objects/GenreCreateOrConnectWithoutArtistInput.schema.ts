import { z } from "zod";
import { GenreWhereUniqueInputObjectSchema } from "./GenreWhereUniqueInput.schema";
import { GenreCreateWithoutArtistInputObjectSchema } from "./GenreCreateWithoutArtistInput.schema";
import { GenreUncheckedCreateWithoutArtistInputObjectSchema } from "./GenreUncheckedCreateWithoutArtistInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GenreCreateOrConnectWithoutArtistInput> = z
  .object({
    where: z.lazy(() => GenreWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => GenreCreateWithoutArtistInputObjectSchema),
      z.lazy(() => GenreUncheckedCreateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict();

export const GenreCreateOrConnectWithoutArtistInputObjectSchema = Schema;
