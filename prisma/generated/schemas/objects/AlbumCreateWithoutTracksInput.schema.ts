import { z } from "zod";
import { ArtistCreateNestedOneWithoutAlbumInputObjectSchema } from "./ArtistCreateNestedOneWithoutAlbumInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AlbumCreateWithoutTracksInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    Artist: z
      .lazy(() => ArtistCreateNestedOneWithoutAlbumInputObjectSchema)
      .optional(),
  })
  .strict();

export const AlbumCreateWithoutTracksInputObjectSchema = Schema;
