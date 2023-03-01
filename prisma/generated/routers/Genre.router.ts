import { t, protectedProcedure } from "./helpers/createRouter";
import { GenreFindUniqueSchema } from "../schemas/findUniqueGenre.schema";
import { GenreFindFirstSchema } from "../schemas/findFirstGenre.schema";
import { GenreFindManySchema } from "../schemas/findManyGenre.schema";
import { GenreCreateOneSchema } from "../schemas/createOneGenre.schema";
import { GenreCreateManySchema } from "../schemas/createManyGenre.schema";
import { GenreDeleteOneSchema } from "../schemas/deleteOneGenre.schema";
import { GenreUpdateOneSchema } from "../schemas/updateOneGenre.schema";
import { GenreDeleteManySchema } from "../schemas/deleteManyGenre.schema";
import { GenreUpdateManySchema } from "../schemas/updateManyGenre.schema";
import { GenreUpsertSchema } from "../schemas/upsertOneGenre.schema";
import { GenreAggregateSchema } from "../schemas/aggregateGenre.schema";
import { GenreGroupBySchema } from "../schemas/groupByGenre.schema";

export const genresRouter = t.router({
  aggregateGenre: protectedProcedure
    .input(GenreAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateGenre = await ctx.prisma.genre.aggregate(input);
      return aggregateGenre;
    }),
  createManyGenre: protectedProcedure
    .input(GenreCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyGenre = await ctx.prisma.genre.createMany(input);
      return createManyGenre;
    }),
  createOneGenre: protectedProcedure
    .input(GenreCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneGenre = await ctx.prisma.genre.create(input);
      return createOneGenre;
    }),
  deleteManyGenre: protectedProcedure
    .input(GenreDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyGenre = await ctx.prisma.genre.deleteMany(input);
      return deleteManyGenre;
    }),
  deleteOneGenre: protectedProcedure
    .input(GenreDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneGenre = await ctx.prisma.genre.delete(input);
      return deleteOneGenre;
    }),
  findFirstGenre: protectedProcedure
    .input(GenreFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstGenre = await ctx.prisma.genre.findFirst(input);
      return findFirstGenre;
    }),
  findFirstGenreOrThrow: protectedProcedure
    .input(GenreFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstGenreOrThrow = await ctx.prisma.genre.findFirstOrThrow(input);
      return findFirstGenreOrThrow;
    }),
  findManyGenre: protectedProcedure
    .input(GenreFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyGenre = await ctx.prisma.genre.findMany(input);
      return findManyGenre;
    }),
  findUniqueGenre: protectedProcedure
    .input(GenreFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueGenre = await ctx.prisma.genre.findUnique(input);
      return findUniqueGenre;
    }),
  findUniqueGenreOrThrow: protectedProcedure
    .input(GenreFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueGenreOrThrow = await ctx.prisma.genre.findUniqueOrThrow(input);
      return findUniqueGenreOrThrow;
    }),
  groupByGenre: protectedProcedure
    .input(GenreGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByGenre = await ctx.prisma.genre.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByGenre;
    }),
  updateManyGenre: protectedProcedure
    .input(GenreUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyGenre = await ctx.prisma.genre.updateMany(input);
      return updateManyGenre;
    }),
  updateOneGenre: protectedProcedure
    .input(GenreUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneGenre = await ctx.prisma.genre.update(input);
      return updateOneGenre;
    }),
  upsertOneGenre: protectedProcedure
    .input(GenreUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneGenre = await ctx.prisma.genre.upsert(input);
      return upsertOneGenre;
    }),

})
