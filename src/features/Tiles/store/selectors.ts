import type { RootState } from "~/features/App/types";
import type { Tile } from "~/features/Tiles/types";
import { tilesAdapter } from "./entityAdapter";

const tilesSelectors = tilesAdapter.getSelectors(
  (state: RootState) => state.tiles
);

export const selectAllTileIds = (state: RootState): Tile["id"][] =>
  tilesSelectors.selectIds(state);

export const selectTileById = (state: RootState, id: Tile["id"]): Tile =>
  tilesSelectors.selectById(state, id);
