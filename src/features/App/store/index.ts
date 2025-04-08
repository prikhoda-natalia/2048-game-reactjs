import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "~/features/Game/store/slice";
import statisticsSlice from "~/features/Statistics/store/slice";
import tilesSlice from "~/features/Tiles/store/slice";

export const store = configureStore({
  reducer: {
    game: gameSlice,
    statistics: statisticsSlice,
    tiles: tilesSlice,
  },
});
