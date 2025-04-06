import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "~/features/App/types";
import { GameStatus } from "../types";

export const selectGameState = (state: RootState) => state.game;

export const selectIsGameNotStarted = createSelector(
  selectGameState,
  (gameState) => gameState.status === GameStatus.NOT_STARTED
);

export const selectIsGameStarted = createSelector(
  selectGameState,
  (gameState) => gameState.status !== GameStatus.NOT_STARTED
);

export const selectIsGameActive = createSelector(
  selectGameState,
  (gameState) =>
    gameState.startedAt !== null &&
    (gameState.status === GameStatus.IDLE ||
      gameState.status === GameStatus.LOADING)
);

export const selectIsGameWon = createSelector(
  selectGameState,
  (gameState) => gameState.status === GameStatus.WON
);

export const selectIsGameLost = createSelector(
  selectGameState,
  (gameState) => gameState.status === GameStatus.LOST
);

export const selectIsGameIdle = createSelector(
  selectGameState,
  (gameState) => gameState.status === GameStatus.IDLE
);
