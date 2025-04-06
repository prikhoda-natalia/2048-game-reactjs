import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "~/features/App/types";
import { setGameLost, updateAvailableMoves } from "./slice";
import { Tile } from "~/features/Tiles/types";
import { COLUMNS, ROWS } from "../utils/constants";
import { addTile } from "~/features/Tiles/store/slice";
import { logUserMove } from "~/features/Game/store/slice";
import { LogUserMoveAction } from "~/features/Game/types";
import { updateTiles } from "~/features/Tiles/store/slice";
import { calculateAvailableMoves } from "~/features/Tiles/utils/helpers/calculateAvailableMoves";

export const addFirstTile = createAsyncThunk<void, void, { state: RootState }>(
  "game/addFirstTile",
  async (_, { dispatch, getState }) => {
    const x = Math.floor(Math.random() * COLUMNS);
    const y = Math.floor(Math.random() * ROWS);
    const firstTile: Tile = {
      id: "0",
      value: 2,
      x,
      y,
      isActive: true,
    };
    await dispatch(addTile(firstTile));

    const state = getState();
    const {
      game: { userMoves },
      tiles: { entities: tiles },
    } = state;

    const newAvailableMoves = calculateAvailableMoves({
      tiles,
      newTileId: (userMoves.length + 1).toString(),
    });
    await dispatch(updateAvailableMoves({ availableMoves: newAvailableMoves }));
  }
);

export const processUserMove = createAsyncThunk<
  void,
  LogUserMoveAction["payload"],
  { state: RootState }
>("game/processUserMove", async ({ direction }, { dispatch, getState }) => {
  await dispatch(logUserMove({ direction }));

  const state = getState();
  const availableMoves = state.game.availableMoves[direction];

  if (!availableMoves) {
    return;
  }

  const { changedTiles, newTile } = availableMoves;

  if (changedTiles && Object.keys(changedTiles).length > 0) {
    await dispatch(updateTiles(changedTiles));
  }

  await dispatch(addTile(newTile));

  const updatedState = getState();
  const {
    game: { userMoves },
    tiles: { entities: tiles },
  } = updatedState;

  const newAvailableMoves = calculateAvailableMoves({
    tiles,
    newTileId: (userMoves.length + 1).toString(),
  });

  await dispatch(updateAvailableMoves({ availableMoves: newAvailableMoves }));

  if (Object.keys(newAvailableMoves).length === 0) {
    dispatch(setGameLost());
    return;
  }
});
