import { z } from "zod";

export const GenreScalarFieldEnumSchema = z.enum([
  "id",
  "createdAt",
  "updatedAt",
]);
