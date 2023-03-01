import { z } from "zod";

export const AlbumScalarFieldEnumSchema = z.enum([
  "id",
  "createdAt",
  "updatedAt",
  "artistId",
]);
