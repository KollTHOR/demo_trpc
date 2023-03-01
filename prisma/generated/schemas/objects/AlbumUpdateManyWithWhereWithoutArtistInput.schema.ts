import { z } from "zod";
import { AlbumScalarWhereInputObjectSchema } from "./AlbumScalarWhereInput.schema";
import { AlbumUpdateManyMutationInputObjectSchema } from "./AlbumUpdateManyMutationInput.schema";
import { AlbumUncheckedUpdateManyWithoutAlbumInputObjectSchema } from "./AlbumUncheckedUpdateManyWithoutAlbumInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.AlbumUpdateManyWithWhereWithoutArtistInput> = z
  .object({
    where: z.lazy(() => AlbumScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => AlbumUpdateManyMutationInputObjectSchema),
      z.lazy(() => AlbumUncheckedUpdateManyWithoutAlbumInputObjectSchema),
    ]),
  })
  .strict();

export const AlbumUpdateManyWithWhereWithoutArtistInputObjectSchema = Schema;
