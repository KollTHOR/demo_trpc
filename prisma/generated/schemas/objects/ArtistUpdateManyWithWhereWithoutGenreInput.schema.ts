import { z } from "zod";
import { ArtistScalarWhereInputObjectSchema } from "./ArtistScalarWhereInput.schema";
import { ArtistUpdateManyMutationInputObjectSchema } from "./ArtistUpdateManyMutationInput.schema";
import { ArtistUncheckedUpdateManyWithoutArtistInputObjectSchema } from "./ArtistUncheckedUpdateManyWithoutArtistInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ArtistUpdateManyWithWhereWithoutGenreInput> = z
  .object({
    where: z.lazy(() => ArtistScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => ArtistUpdateManyMutationInputObjectSchema),
      z.lazy(() => ArtistUncheckedUpdateManyWithoutArtistInputObjectSchema),
    ]),
  })
  .strict();

export const ArtistUpdateManyWithWhereWithoutGenreInputObjectSchema = Schema;
