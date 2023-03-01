import { z } from "zod";
import { ArtistWhereUniqueInputObjectSchema } from "./ArtistWhereUniqueInput.schema";
import { ArtistCreateWithoutAlbumInputObjectSchema } from "./ArtistCreateWithoutAlbumInput.schema";
import { ArtistUncheckedCreateWithoutAlbumInputObjectSchema } from "./ArtistUncheckedCreateWithoutAlbumInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ArtistCreateOrConnectWithoutAlbumInput> = z
  .object({
    where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutAlbumInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutAlbumInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistCreateOrConnectWithoutAlbumInputObjectSchema = Schema;
