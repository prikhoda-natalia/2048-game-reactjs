import { PayloadAction, Update } from "@reduxjs/toolkit";
import { DirectionOptions } from "./DirectionOptions";
import { Tile } from "~/features/Tiles/types";

export type GameState = {
  startedAt: string | null;
  status: GameStatus;
  highestValue: number;
  userMoves: DirectionOptions[];
  availableMoves: {
    [Direction in DirectionOptions]?: {
      changedTiles?: Update<Tile, Tile['id']>[];
      newTile: Tile;
    };
  }
}

export enum GameStatus {
  NOT_STARTED = 'NOT_STARTED',
  IDLE ='IDLE',
  LOADING = 'LOADING',
  WON = 'WON',
  LOST = 'LOST'
}

export type StartGameAction = PayloadAction<{
  startedAt: string;
}>

export type LogUserMoveAction = PayloadAction<{
  direction: DirectionOptions;
}>

export type UpdateAvailableMovesGameAction = PayloadAction<{
  availableMoves: GameState['availableMoves'];
}>
