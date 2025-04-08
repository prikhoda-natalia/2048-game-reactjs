import { createSlice } from "@reduxjs/toolkit";
import {
  NotStartedGameState,
  GameStatus,
  StartGameAction,
  GameState,
  UpdateGameStatusAction,
  ActiveGameState,
  LogUserMoveAction,
  FinishGameAction,
} from "../types";
import {
  addFirstTile,
  addTile,
  updateTiles,
} from "~/features/Tiles/store/slice";
import { isGameActive } from "../utils/checkGameStatus";
import { pick } from "~/utils/helpers/pick";

const initialNotStartedGameState: NotStartedGameState = {
  status: GameStatus.NOT_STARTED,
};

const initialStartedGameState = ({
  id,
  startedAt,
}: {
  id: string;
  startedAt: string;
}): ActiveGameState => ({
  id,
  highestValue: 0,
  userMoves: [],
  availableMoves: {},
  startedAt,
  status: GameStatus.IDLE,
});

const gameSlice = createSlice({
  name: "game",
  initialState: initialNotStartedGameState satisfies GameState as GameState,
  reducers: {
    startGame(_, { payload }: StartGameAction) {
      return initialStartedGameState(payload);
    },
    logUserMove(state, { payload }: LogUserMoveAction) {
      if (isGameActive(state)) {
        state.userMoves.push(payload.direction);
      }
    },
    finishGame(
      state,
      { payload: { status, finishedAt, totalSteps } }: FinishGameAction
    ) {
      if (isGameActive(state)) {
        return {
          ...pick(state, ["id", "startedAt", "highestValue"]),
          status,
          finishedAt,
          totalSteps,
        };
      }
    },
    updateGameStatus(
      state,
      { payload: { status, availableMoves } }: UpdateGameStatusAction
    ) {
      if (isGameActive(state)) {
        state.status = status;

        if (availableMoves) {
          state.availableMoves = availableMoves;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addFirstTile, (state, { payload }) => {
        if (isGameActive(state)) {
          state.highestValue = payload.value;
        }
      })
      .addCase(addTile, (state, { payload }) => {
        if (isGameActive(state) && payload.value > state.highestValue) {
          state.highestValue = payload.value;
        }
      })
      .addCase(updateTiles, (state, { payload }) => {
        if (isGameActive(state)) {
          const highestVlue = payload.reduce<number>((max, tile) => {
            if (!!tile.changes.value && tile.changes.value > max) {
              max = tile.changes.value;
            }

            return max;
          }, state.highestValue);

          state.highestValue = highestVlue;
        }
      });
  },
});

export const { finishGame, logUserMove, startGame, updateGameStatus } =
  gameSlice.actions;

export default gameSlice.reducer;
