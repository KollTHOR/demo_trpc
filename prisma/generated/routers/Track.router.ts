import { t, protectedProcedure } from "./helpers/createRouter";
import { TrackFindUniqueSchema } from "../schemas/findUniqueTrack.schema";
import { TrackFindFirstSchema } from "../schemas/findFirstTrack.schema";
import { TrackFindManySchema } from "../schemas/findManyTrack.schema";
import { TrackCreateOneSchema } from "../schemas/createOneTrack.schema";
import { TrackCreateManySchema } from "../schemas/createManyTrack.schema";
import { TrackDeleteOneSchema } from "../schemas/deleteOneTrack.schema";
import { TrackUpdateOneSchema } from "../schemas/updateOneTrack.schema";
import { TrackDeleteManySchema } from "../schemas/deleteManyTrack.schema";
import { TrackUpdateManySchema } from "../schemas/updateManyTrack.schema";
import { TrackUpsertSchema } from "../schemas/upsertOneTrack.schema";
import { TrackAggregateSchema } from "../schemas/aggregateTrack.schema";
import { TrackGroupBySchema } from "../schemas/groupByTrack.schema";

export const tracksRouter = t.router({
  aggregateTrack: protectedProcedure
    .input(TrackAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateTrack = await ctx.prisma.track.aggregate(input);
      return aggregateTrack;
    }),
  createManyTrack: protectedProcedure
    .input(TrackCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyTrack = await ctx.prisma.track.createMany(input);
      return createManyTrack;
    }),
  createOneTrack: protectedProcedure
    .input(TrackCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneTrack = await ctx.prisma.track.create(input);
      return createOneTrack;
    }),
  deleteManyTrack: protectedProcedure
    .input(TrackDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyTrack = await ctx.prisma.track.deleteMany(input);
      return deleteManyTrack;
    }),
  deleteOneTrack: protectedProcedure
    .input(TrackDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneTrack = await ctx.prisma.track.delete(input);
      return deleteOneTrack;
    }),
  findFirstTrack: protectedProcedure
    .input(TrackFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstTrack = await ctx.prisma.track.findFirst(input);
      return findFirstTrack;
    }),
  findFirstTrackOrThrow: protectedProcedure
    .input(TrackFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstTrackOrThrow = await ctx.prisma.track.findFirstOrThrow(input);
      return findFirstTrackOrThrow;
    }),
  findManyTrack: protectedProcedure
    .input(TrackFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyTrack = await ctx.prisma.track.findMany(input);
      return findManyTrack;
    }),
  findUniqueTrack: protectedProcedure
    .input(TrackFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueTrack = await ctx.prisma.track.findUnique(input);
      return findUniqueTrack;
    }),
  findUniqueTrackOrThrow: protectedProcedure
    .input(TrackFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueTrackOrThrow = await ctx.prisma.track.findUniqueOrThrow(input);
      return findUniqueTrackOrThrow;
    }),
  groupByTrack: protectedProcedure
    .input(TrackGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByTrack = await ctx.prisma.track.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTrack;
    }),
  updateManyTrack: protectedProcedure
    .input(TrackUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyTrack = await ctx.prisma.track.updateMany(input);
      return updateManyTrack;
    }),
  updateOneTrack: protectedProcedure
    .input(TrackUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneTrack = await ctx.prisma.track.update(input);
      return updateOneTrack;
    }),
  upsertOneTrack: protectedProcedure
    .input(TrackUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneTrack = await ctx.prisma.track.upsert(input);
      return upsertOneTrack;
    }),

})
