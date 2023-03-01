import { z } from "zod";
import { ArtistCreateManyGenreInputObjectSchema } from "./ArtistCreateManyGenreInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ArtistCreateManyGenreInputEnvelope> = z
  .object({
    data: z.lazy(() => ArtistCreateManyGenreInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ArtistCreateManyGenreInputEnvelopeObjectSchema = Schema;
