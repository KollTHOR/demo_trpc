import { z } from "zod";
import { AlbumWhereUniqueInputObjectSchema } from "./AlbumWhereUniqueInput.schema";
import { AlbumUpdateWithoutArtistInputObjectSchema } from "./AlbumUpdateWithoutArtistInput.schema";
import { AlbumUncheckedUpdateWithoutArtistInputObjectSchema } from "./AlbumUncheckedUpdateWithoutArtistInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AlbumUpdateWithWhereUniqueWithoutArtistInput> = z
  .object({
    where: z.lazy(() => AlbumWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => AlbumUpdateWithoutArtistInputObjectSchema),
      z.lazy(() => AlbumUncheckedUpdateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict();

export const AlbumUpdateWithWhereUniqueWithoutArtistInputObjectSchema = Schema;
