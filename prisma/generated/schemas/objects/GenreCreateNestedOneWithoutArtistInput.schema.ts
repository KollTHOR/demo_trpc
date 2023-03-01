import { z } from "zod";
import { GenreCreateWithoutArtistInputObjectSchema } from "./GenreCreateWithoutArtistInput.schema";
import { GenreUncheckedCreateWithoutArtistInputObjectSchema } from "./GenreUncheckedCreateWithoutArtistInput.schema";
import { GenreCreateOrConnectWithoutArtistInputObjectSchema } from "./GenreCreateOrConnectWithoutArtistInput.schema";
import { GenreWhereUniqueInputObjectSchema } from "./GenreWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GenreCreateNestedOneWithoutArtistInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => GenreCreateWithoutArtistInputObjectSchema),
        z.lazy(() => GenreUncheckedCreateWithoutArtistInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => GenreCreateOrConnectWithoutArtistInputObjectSchema)
      .optional(),
    connect: z.lazy(() => GenreWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const GenreCreateNestedOneWithoutArtistInputObjectSchema = Schema;
