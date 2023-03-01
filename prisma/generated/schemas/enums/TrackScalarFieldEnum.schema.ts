import { z } from "zod";

export const TrackScalarFieldEnumSchema = z.enum([
  "id",
  "title",
  "duration",
  "createdAt",
  "updatedAt",
  "albumId",
]);
