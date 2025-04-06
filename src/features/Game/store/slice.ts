import { createSlice } from "@reduxjs/toolkit";
import {
  GameState,
  GameStatus,
  LogUserMoveAction,
  StartGameAction,
  UpdateAvailableMovesGameAction,
} from "../types";
import { addFirstTile, processUserMove } from "~/features/Game/store/thunks";
import { addTile, updateTiles } from "~/features/Tiles/store/slice";

const initialState: GameState = {
  startedAt: null,
  status: GameStatus.NOT_STARTED,
  highestValue: 0,
  userMoves: [],
  availableMoves: {},
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame(_, { payload }: StartGameAction) {
      return {
        ...initialState,
        startedAt: payload.startedAt,
        status: GameStatus.IDLE,
      };
    },
    resetGame() {
      return initialState;
    },
    setGameLost(state) {
      state.status = GameStatus.LOST;
    },
    logUserMove(state, { payload }: LogUserMoveAction) {
      state.userMoves.push(payload.direction);
    },
    updateAvailableMoves(state, { payload }: UpdateAvailableMovesGameAction) {
      state.availableMoves = payload.availableMoves;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addFirstTile.pending, (state) => {
        state.status = GameStatus.LOADING;
      })
      .addCase(addFirstTile.fulfilled, (state) => {
        state.status = GameStatus.IDLE;
      })
      .addCase(processUserMove.pending, (state) => {
        state.status = GameStatus.LOADING;
      })
      .addCase(processUserMove.fulfilled, (state) => {
        state.status = GameStatus.IDLE;
      })
      .addCase(addTile, (state, { payload }) => {
        if (payload.value > state.highestValue) {
          state.highestValue = payload.value;
        }
      })
      .addCase(updateTiles, (state, { payload }) => {
        const highestVlue = payload.reduce<number>((max, tile) => {
          if (!!tile.changes.value && tile.changes.value > max) {
            max = tile.changes.value;
          }

          return max;
        }, state.highestValue);

        state.highestValue = highestVlue;

        if (highestVlue === 2048) {
          state.status = GameStatus.WON;
        }
      });
  },
});

export const {
  logUserMove,
  resetGame,
  setGameLost,
  startGame,
  updateAvailableMoves,
} = gameSlice.actions;

export default gameSlice.reducer;
