import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { ArtistListRelationFilterObjectSchema } from "./ArtistListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GenreWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GenreWhereInputObjectSchema),
        z.lazy(() => GenreWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GenreWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GenreWhereInputObjectSchema),
        z.lazy(() => GenreWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    artist: z.lazy(() => ArtistListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const GenreWhereInputObjectSchema = Schema;
