import { createSlice } from "@reduxjs/toolkit";
import { tilesAdapter, tilesInitialState } from "./entityAdapter";
import { startGame } from "~/features/Game/store/slice";

const tilesSlice = createSlice({
  name: "tiles",
  initialState: tilesInitialState,
  reducers: {
    addTile: tilesAdapter.addOne,
    addFirstTile: tilesAdapter.addOne,
    updateTiles: tilesAdapter.updateMany,
  },
  extraReducers: (builder) => {
    builder.addCase(startGame, (state) => {
      tilesAdapter.removeAll(state);
    });
  },
});

export const { addFirstTile, addTile, updateTiles } = tilesSlice.actions;

export default tilesSlice.reducer;
