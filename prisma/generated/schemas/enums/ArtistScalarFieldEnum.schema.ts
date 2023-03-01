import { z } from "zod";

export const ArtistScalarFieldEnumSchema = z.enum([
  "id",
  "createdAt",
  "updatedAt",
  "genreId",
]);
