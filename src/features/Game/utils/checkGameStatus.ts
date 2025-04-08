import {
  ActiveGameState,
  FinishedGameState,
  GameState,
  GameStatus,
} from "../types";

export const startedGameStatuses = [
  GameStatus.IDLE,
  GameStatus.LOADING,
  GameStatus.WON,
  GameStatus.LOST,
  GameStatus.GIVEN_UP,
] as const;

export type StartedGameStatus = (typeof startedGameStatuses)[number];

export function isGameStatusStarted(
  status: GameStatus
): status is StartedGameStatus {
  return startedGameStatuses.some((startedStatus) => status === startedStatus);
}

export const activeGameStatuses = [
  GameStatus.IDLE,
  GameStatus.LOADING,
] as const;

export type ActiveGameStatus = (typeof activeGameStatuses)[number];

export function isGameStatusActive(
  status: GameStatus
): status is ActiveGameStatus {
  return activeGameStatuses.some((activeStatus) => status === activeStatus);
}

export function isGameActive(
  gameState: GameState
): gameState is ActiveGameState {
  return isGameStatusActive(gameState.status);
}

export const finishedGameStatuses = [
  GameStatus.WON,
  GameStatus.LOST,
  GameStatus.GIVEN_UP,
] as const;

export type FinishedGameStatus = (typeof finishedGameStatuses)[number];

export function isGameStatusFinished(
  status: GameStatus
): status is FinishedGameStatus {
  return finishedGameStatuses.some(
    (finishedStatus) => status === finishedStatus
  );
}

export function isGameFinished(
  gameState: GameState
): gameState is FinishedGameState {
  return isGameStatusFinished(gameState.status);
}

export const disabledGameStatuses = [
  GameStatus.NOT_STARTED,
  GameStatus.WON,
  GameStatus.LOST,
  GameStatus.GIVEN_UP,
] as const;

export type DisabledGameStatus = (typeof disabledGameStatuses)[number];

export function isGameStatusDisabled(
  status: GameStatus
): status is DisabledGameStatus {
  return disabledGameStatuses.some(
    (disabledStatus) => status === disabledStatus
  );
}
