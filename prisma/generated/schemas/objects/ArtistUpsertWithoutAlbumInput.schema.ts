import { z } from "zod";
import { ArtistUpdateWithoutAlbumInputObjectSchema } from "./ArtistUpdateWithoutAlbumInput.schema";
import { ArtistUncheckedUpdateWithoutAlbumInputObjectSchema } from "./ArtistUncheckedUpdateWithoutAlbumInput.schema";
import { ArtistCreateWithoutAlbumInputObjectSchema } from "./ArtistCreateWithoutAlbumInput.schema";
import { ArtistUncheckedCreateWithoutAlbumInputObjectSchema } from "./ArtistUncheckedCreateWithoutAlbumInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ArtistUpsertWithoutAlbumInput> = z
  .object({
    update: z.union([
      z.lazy(() => ArtistUpdateWithoutAlbumInputObjectSchema),
      z.lazy(() => ArtistUncheckedUpdateWithoutAlbumInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutAlbumInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutAlbumInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistUpsertWithoutAlbumInputObjectSchema = Schema;
