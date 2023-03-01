import { z } from "zod";
import { AlbumCreateManyArtistInputObjectSchema } from "./AlbumCreateManyArtistInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AlbumCreateManyArtistInputEnvelope> = z
  .object({
    data: z.lazy(() => AlbumCreateManyArtistInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const AlbumCreateManyArtistInputEnvelopeObjectSchema = Schema;
