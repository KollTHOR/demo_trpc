import { z } from "zod";
import { ArtistCreateWithoutAlbumInputObjectSchema } from "./ArtistCreateWithoutAlbumInput.schema";
import { ArtistUncheckedCreateWithoutAlbumInputObjectSchema } from "./ArtistUncheckedCreateWithoutAlbumInput.schema";
import { ArtistCreateOrConnectWithoutAlbumInputObjectSchema } from "./ArtistCreateOrConnectWithoutAlbumInput.schema";
import { ArtistWhereUniqueInputObjectSchema } from "./ArtistWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ArtistCreateNestedOneWithoutAlbumInput> = z
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
    connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ArtistCreateNestedOneWithoutAlbumInputObjectSchema = Schema;
