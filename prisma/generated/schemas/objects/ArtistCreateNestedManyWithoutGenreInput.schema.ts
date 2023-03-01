import { z } from "zod";
import { ArtistCreateWithoutGenreInputObjectSchema } from "./ArtistCreateWithoutGenreInput.schema";
import { ArtistUncheckedCreateWithoutGenreInputObjectSchema } from "./ArtistUncheckedCreateWithoutGenreInput.schema";
import { ArtistCreateOrConnectWithoutGenreInputObjectSchema } from "./ArtistCreateOrConnectWithoutGenreInput.schema";
import { ArtistCreateManyGenreInputEnvelopeObjectSchema } from "./ArtistCreateManyGenreInputEnvelope.schema";
import { ArtistWhereUniqueInputObjectSchema } from "./ArtistWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ArtistCreateNestedManyWithoutGenreInput> = z
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
    createMany: z
      .lazy(() => ArtistCreateManyGenreInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ArtistWhereUniqueInputObjectSchema),
        z.lazy(() => ArtistWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ArtistCreateNestedManyWithoutGenreInputObjectSchema = Schema;
