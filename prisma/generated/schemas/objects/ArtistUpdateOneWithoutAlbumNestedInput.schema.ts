import { z } from "zod";
import { ArtistCreateWithoutAlbumInputObjectSchema } from "./ArtistCreateWithoutAlbumInput.schema";
import { ArtistUncheckedCreateWithoutAlbumInputObjectSchema } from "./ArtistUncheckedCreateWithoutAlbumInput.schema";
import { ArtistCreateOrConnectWithoutAlbumInputObjectSchema } from "./ArtistCreateOrConnectWithoutAlbumInput.schema";
import { ArtistUpsertWithoutAlbumInputObjectSchema } from "./ArtistUpsertWithoutAlbumInput.schema";
import { ArtistWhereUniqueInputObjectSchema } from "./ArtistWhereUniqueInput.schema";
import { ArtistUpdateWithoutAlbumInputObjectSchema } from "./ArtistUpdateWithoutAlbumInput.schema";
import { ArtistUncheckedUpdateWithoutAlbumInputObjectSchema } from "./ArtistUncheckedUpdateWithoutAlbumInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ArtistUpdateOneWithoutAlbumNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtistCreateWithoutAlbumInputObjectSchema),
        z.lazy(() => ArtistUncheckedCreateWithoutAlbumInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ArtistCreateOrConnectWithoutAlbumInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => ArtistUpsertWithoutAlbumInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ArtistUpdateWithoutAlbumInputObjectSchema),
        z.lazy(() => ArtistUncheckedUpdateWithoutAlbumInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ArtistUpdateOneWithoutAlbumNestedInputObjectSchema = Schema;
