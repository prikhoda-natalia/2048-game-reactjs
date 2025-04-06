import { configureStore } from "@reduxjs/toolkit"
import gameSlice from "~/features/Game/store/slice"
import tilesReducer from "~/features/Tiles/store/slice"

export const store = configureStore({
  reducer: {
    game: gameSlice,
    tiles: tilesReducer,
  },
})
