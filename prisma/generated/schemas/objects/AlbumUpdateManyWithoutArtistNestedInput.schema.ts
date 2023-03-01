import { z } from "zod";
import { AlbumCreateWithoutArtistInputObjectSchema } from "./AlbumCreateWithoutArtistInput.schema";
import { AlbumUncheckedCreateWithoutArtistInputObjectSchema } from "./AlbumUncheckedCreateWithoutArtistInput.schema";
import { AlbumCreateOrConnectWithoutArtistInputObjectSchema } from "./AlbumCreateOrConnectWithoutArtistInput.schema";
import { AlbumUpsertWithWhereUniqueWithoutArtistInputObjectSchema } from "./AlbumUpsertWithWhereUniqueWithoutArtistInput.schema";
import { AlbumCreateManyArtistInputEnvelopeObjectSchema } from "./AlbumCreateManyArtistInputEnvelope.schema";
import { AlbumWhereUniqueInputObjectSchema } from "./AlbumWhereUniqueInput.schema";
import { AlbumUpdateWithWhereUniqueWithoutArtistInputObjectSchema } from "./AlbumUpdateWithWhereUniqueWithoutArtistInput.schema";
import { AlbumUpdateManyWithWhereWithoutArtistInputObjectSchema } from "./AlbumUpdateManyWithWhereWithoutArtistInput.schema";
import { AlbumScalarWhereInputObjectSchema } from "./AlbumScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AlbumUpdateManyWithoutArtistNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => AlbumUpsertWithWhereUniqueWithoutArtistInputObjectSchema),
        z
          .lazy(() => AlbumUpsertWithWhereUniqueWithoutArtistInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => AlbumCreateManyArtistInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => AlbumWhereUniqueInputObjectSchema),
        z.lazy(() => AlbumWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => AlbumWhereUniqueInputObjectSchema),
        z.lazy(() => AlbumWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => AlbumWhereUniqueInputObjectSchema),
        z.lazy(() => AlbumWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => AlbumWhereUniqueInputObjectSchema),
        z.lazy(() => AlbumWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => AlbumUpdateWithWhereUniqueWithoutArtistInputObjectSchema),
        z
          .lazy(() => AlbumUpdateWithWhereUniqueWithoutArtistInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => AlbumUpdateManyWithWhereWithoutArtistInputObjectSchema),
        z
          .lazy(() => AlbumUpdateManyWithWhereWithoutArtistInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => AlbumScalarWhereInputObjectSchema),
        z.lazy(() => AlbumScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const AlbumUpdateManyWithoutArtistNestedInputObjectSchema = Schema;
