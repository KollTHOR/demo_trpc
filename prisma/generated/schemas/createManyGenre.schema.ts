import { z } from "zod";
import { GenreCreateManyInputObjectSchema } from "./objects/GenreCreateManyInput.schema";

export const GenreCreateManySchema = z.object({
  data: z.union([
    GenreCreateManyInputObjectSchema,
    z.array(GenreCreateManyInputObjectSchema),
  ]),
});
