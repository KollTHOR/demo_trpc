import { z } from "zod";
import { GenreCreateWithoutArtistInputObjectSchema } from "./GenreCreateWithoutArtistInput.schema";
import { GenreUncheckedCreateWithoutArtistInputObjectSchema } from "./GenreUncheckedCreateWithoutArtistInput.schema";
import { GenreCreateOrConnectWithoutArtistInputObjectSchema } from "./GenreCreateOrConnectWithoutArtistInput.schema";
import { GenreUpsertWithoutArtistInputObjectSchema } from "./GenreUpsertWithoutArtistInput.schema";
import { GenreWhereUniqueInputObjectSchema } from "./GenreWhereUniqueInput.schema";
import { GenreUpdateWithoutArtistInputObjectSchema } from "./GenreUpdateWithoutArtistInput.schema";
import { GenreUncheckedUpdateWithoutArtistInputObjectSchema } from "./GenreUncheckedUpdateWithoutArtistInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GenreUpdateOneWithoutArtistNestedInput> = z
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
    upsert: z.lazy(() => GenreUpsertWithoutArtistInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => GenreWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => GenreUpdateWithoutArtistInputObjectSchema),
        z.lazy(() => GenreUncheckedUpdateWithoutArtistInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const GenreUpdateOneWithoutArtistNestedInputObjectSchema = Schema;
