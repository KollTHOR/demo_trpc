import { z } from "zod";
import { ArtistCreateWithoutGenreInputObjectSchema } from "./ArtistCreateWithoutGenreInput.schema";
import { ArtistUncheckedCreateWithoutGenreInputObjectSchema } from "./ArtistUncheckedCreateWithoutGenreInput.schema";
import { ArtistCreateOrConnectWithoutGenreInputObjectSchema } from "./ArtistCreateOrConnectWithoutGenreInput.schema";
import { ArtistUpsertWithWhereUniqueWithoutGenreInputObjectSchema } from "./ArtistUpsertWithWhereUniqueWithoutGenreInput.schema";
import { ArtistCreateManyGenreInputEnvelopeObjectSchema } from "./ArtistCreateManyGenreInputEnvelope.schema";
import { ArtistWhereUniqueInputObjectSchema } from "./ArtistWhereUniqueInput.schema";
import { ArtistUpdateWithWhereUniqueWithoutGenreInputObjectSchema } from "./ArtistUpdateWithWhereUniqueWithoutGenreInput.schema";
import { ArtistUpdateManyWithWhereWithoutGenreInputObjectSchema } from "./ArtistUpdateManyWithWhereWithoutGenreInput.schema";
import { ArtistScalarWhereInputObjectSchema } from "./ArtistScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ArtistUpdateManyWithoutGenreNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtistCreateWithoutGenreInputObjectSchema),
        z.lazy(() => ArtistCreateWithoutGenreInputObjectSchema).array(),
        z.lazy(() => ArtistUncheckedCreateWithoutGenreInputObjectSchema),
        z
          .lazy(() => ArtistUncheckedCreateWithoutGenreInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ArtistCreateOrConnectWithoutGenreInputObjectSchema),
        z
          .lazy(() => ArtistCreateOrConnectWithoutGenreInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ArtistUpsertWithWhereUniqueWithoutGenreInputObjectSchema),
        z
          .lazy(() => ArtistUpsertWithWhereUniqueWithoutGenreInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ArtistCreateManyGenreInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ArtistWhereUniqueInputObjectSchema),
        z.lazy(() => ArtistWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ArtistWhereUniqueInputObjectSchema),
        z.lazy(() => ArtistWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ArtistWhereUniqueInputObjectSchema),
        z.lazy(() => ArtistWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ArtistWhereUniqueInputObjectSchema),
        z.lazy(() => ArtistWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ArtistUpdateWithWhereUniqueWithoutGenreInputObjectSchema),
        z
          .lazy(() => ArtistUpdateWithWhereUniqueWithoutGenreInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ArtistUpdateManyWithWhereWithoutGenreInputObjectSchema),
        z
          .lazy(() => ArtistUpdateManyWithWhereWithoutGenreInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ArtistScalarWhereInputObjectSchema),
        z.lazy(() => ArtistScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtistUpdateManyWithoutGenreNestedInputObjectSchema = Schema;
