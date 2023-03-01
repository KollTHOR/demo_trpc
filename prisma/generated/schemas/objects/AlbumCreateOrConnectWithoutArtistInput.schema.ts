import { z } from "zod";
import { AlbumWhereUniqueInputObjectSchema } from "./AlbumWhereUniqueInput.schema";
import { AlbumCreateWithoutArtistInputObjectSchema } from "./AlbumCreateWithoutArtistInput.schema";
import { AlbumUncheckedCreateWithoutArtistInputObjectSchema } from "./AlbumUncheckedCreateWithoutArtistInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AlbumCreateOrConnectWithoutArtistInput> = z
  .object({
    where: z.lazy(() => AlbumWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AlbumCreateWithoutArtistInputObjectSchema),
      z.lazy(() => AlbumUncheckedCreateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict();

export const AlbumCreateOrConnectWithoutArtistInputObjectSchema = Schema;
