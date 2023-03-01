import { z } from "zod";
import { AlbumWhereUniqueInputObjectSchema } from "./AlbumWhereUniqueInput.schema";
import { AlbumUpdateWithoutArtistInputObjectSchema } from "./AlbumUpdateWithoutArtistInput.schema";
import { AlbumUncheckedUpdateWithoutArtistInputObjectSchema } from "./AlbumUncheckedUpdateWithoutArtistInput.schema";
import { AlbumCreateWithoutArtistInputObjectSchema } from "./AlbumCreateWithoutArtistInput.schema";
import { AlbumUncheckedCreateWithoutArtistInputObjectSchema } from "./AlbumUncheckedCreateWithoutArtistInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AlbumUpsertWithWhereUniqueWithoutArtistInput> = z
  .object({
    where: z.lazy(() => AlbumWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => AlbumUpdateWithoutArtistInputObjectSchema),
      z.lazy(() => AlbumUncheckedUpdateWithoutArtistInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AlbumCreateWithoutArtistInputObjectSchema),
      z.lazy(() => AlbumUncheckedCreateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict();

export const AlbumUpsertWithWhereUniqueWithoutArtistInputObjectSchema = Schema;
