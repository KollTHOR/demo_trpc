import { t } from "./helpers/createRouter";
import { tracksRouter } from "./Track.router";
import { albumsRouter } from "./Album.router";
import { artistsRouter } from "./Artist.router";
import { genresRouter } from "./Genre.router";

export const appRouter = t.router({
  track: tracksRouter,
  album: albumsRouter,
  artist: artistsRouter,
  genre: genresRouter
})

