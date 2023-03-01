import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { AlbumUpdateManyWithoutArtistNestedInputObjectSchema } from "./AlbumUpdateManyWithoutArtistNestedInput.schema";
import { GenreUpdateOneWithoutArtistNestedInputObjectSchema } from "./GenreUpdateOneWithoutArtistNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ArtistUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    album: z
      .lazy(() => AlbumUpdateManyWithoutArtistNestedInputObjectSchema)
      .optional(),
    Genre: z
      .lazy(() => GenreUpdateOneWithoutArtistNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ArtistUpdateInputObjectSchema = Schema;
