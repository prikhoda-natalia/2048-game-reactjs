import { createSlice } from "@reduxjs/toolkit";
import { tilesAdapter, tilesInitialState } from "./entityAdapter";
import { resetGame } from "~/features/Game/store/slice";

const tilesSlice = createSlice({
  name: 'tiles',
  initialState: tilesInitialState,
  reducers: {
    addTile: tilesAdapter.addOne,
    addFirstTile: tilesAdapter.addOne,
    updateTile: tilesAdapter.updateOne,
    updateTiles: tilesAdapter.updateMany
  },
  extraReducers: (builder) => {
    builder.addCase(resetGame, (state) => {
      tilesAdapter.removeAll(state)
    })
  }
})

export const { addFirstTile, addTile, updateTile, updateTiles } = tilesSlice.actions

export default tilesSlice.reducer
