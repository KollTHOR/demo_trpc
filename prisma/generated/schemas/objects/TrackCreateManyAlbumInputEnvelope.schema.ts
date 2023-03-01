import { z } from "zod";
import { TrackCreateManyAlbumInputObjectSchema } from "./TrackCreateManyAlbumInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.TrackCreateManyAlbumInputEnvelope> = z
  .object({
    data: z.lazy(() => TrackCreateManyAlbumInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TrackCreateManyAlbumInputEnvelopeObjectSchema = Schema;
