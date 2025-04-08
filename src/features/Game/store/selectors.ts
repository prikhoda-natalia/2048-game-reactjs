import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "~/features/App/types";
import { GameStatus } from "~/features/Game/types";

export const selectGameState = (state: RootState) => state.game;

export const selectGameStatus = createSelector(
  selectGameState,
  (gameState) => gameState.status
);

export const selectIsGameStarted = createSelector(
  selectGameState,
  (gameState) => gameState.status !== GameStatus.NOT_STARTED
);

export const selectIsGameIdle = createSelector(
  selectGameState,
  (gameState) => gameState.status === GameStatus.IDLE
);
