import { z } from "zod";
import { AlbumCreateWithoutArtistInputObjectSchema } from "./AlbumCreateWithoutArtistInput.schema";
import { AlbumUncheckedCreateWithoutArtistInputObjectSchema } from "./AlbumUncheckedCreateWithoutArtistInput.schema";
import { AlbumCreateOrConnectWithoutArtistInputObjectSchema } from "./AlbumCreateOrConnectWithoutArtistInput.schema";
import { AlbumCreateManyArtistInputEnvelopeObjectSchema } from "./AlbumCreateManyArtistInputEnvelope.schema";
import { AlbumWhereUniqueInputObjectSchema } from "./AlbumWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AlbumUncheckedCreateNestedManyWithoutArtistInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AlbumCreateWithoutArtistInputObjectSchema),
          z.lazy(() => AlbumCreateWithoutArtistInputObjectSchema).array(),
          z.lazy(() => AlbumUncheckedCreateWithoutArtistInputObjectSchema),
          z
            .lazy(() => AlbumUncheckedCreateWithoutArtistInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AlbumCreateOrConnectWithoutArtistInputObjectSchema),
          z
            .lazy(() => AlbumCreateOrConnectWithoutArtistInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => AlbumCreateManyArtistInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => AlbumWhereUniqueInputObjectSchema),
          z.lazy(() => AlbumWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AlbumUncheckedCreateNestedManyWithoutArtistInputObjectSchema =
  Schema;
