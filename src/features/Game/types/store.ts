import { PayloadAction, Update } from "@reduxjs/toolkit";
import { DirectionOptions } from "./DirectionOptions";
import { Tile } from "~/features/Tiles/types";
import { ActiveGameStatus, FinishedGameStatus } from "../utils/checkGameStatus";

export type GameState =
  | NotStartedGameState
  | ActiveGameState
  | FinishedGameState;

export type NotStartedGameState = {
  status: GameStatus.NOT_STARTED;
};

export type ActiveGameState = {
  id: string;
  startedAt: string;
  status: ActiveGameStatus;
  highestValue: number;
  userMoves: DirectionOptions[];
  availableMoves: {
    [Direction in DirectionOptions]?: {
      changedTiles?: Update<Tile, Tile["id"]>[];
      newTile: Tile;
    };
  };
};

export type FinishedGameState = {
  id: string;
  startedAt: string;
  finishedAt: string;
  status: FinishedGameStatus;
  highestValue: number;
  totalSteps: number;
};

export enum GameStatus {
  NOT_STARTED = "NOT_STARTED",
  IDLE = "IDLE",
  LOADING = "LOADING",
  WON = "WON",
  LOST = "LOST",
  GIVEN_UP = "GIVEN_UP",
}

export type StartGameAction = PayloadAction<{
  id: string;
  startedAt: string;
}>;

export type LogUserMoveAction = PayloadAction<{
  direction: DirectionOptions;
}>;

export type ProcessUserMoveThunkArgs = {
  direction: DirectionOptions;
};

export type UpdateGameStatusAction = PayloadAction<{
  status: ActiveGameStatus;
  availableMoves?: ActiveGameState["availableMoves"];
}>;

export type FinishGameAction = PayloadAction<{
  status: FinishedGameStatus;
  finishedAt: string;
  totalSteps: number;
}>;
