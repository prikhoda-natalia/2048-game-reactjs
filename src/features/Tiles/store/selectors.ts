import { RootState } from "~/features/App/types";
import { tilesAdapter } from "./entityAdapter";
import { Tile } from "../types";

const tilesSelectors = tilesAdapter.getSelectors((state: RootState) => state.tiles)

export const selectAllTileIds = (state: RootState) => tilesSelectors.selectIds(state)

export const selectTileById = (state: RootState, id: Tile['id']) => tilesSelectors.selectById(state, id)
