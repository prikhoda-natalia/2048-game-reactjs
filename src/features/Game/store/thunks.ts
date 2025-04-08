import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "~/features/App/types";
import { finishGame, startGame, updateGameStatus } from "./slice";
import { Tile } from "~/features/Tiles/types";
import { COLUMNS, ROWS } from "../utils/constants";
import { addFirstTile, addTile } from "~/features/Tiles/store/slice";
import { logUserMove } from "~/features/Game/store/slice";
import { GameStatus, ProcessUserMoveThunkArgs } from "~/features/Game/types";
import { updateTiles } from "~/features/Tiles/store/slice";
import { calculateAvailableMoves } from "~/features/Tiles/utils/helpers/calculateAvailableMoves";
import { updateStatistics } from "~/features/Statistics/store/slice";
import { isGameActive, isGameFinished } from "../utils/checkGameStatus";

export const startGameAndAddFirstTile = createAsyncThunk<
  void,
  void,
  { state: RootState }
>("game/startGameAndAddFirstTile", async (_, { dispatch, getState }) => {
  const { statistics } = getState();

  const startedAt = new Date();
  const id = (statistics.ids.length + 1).toString();

  await dispatch(startGame({ id, startedAt: startedAt.toString() }));
  await dispatch(updateGameStatus({ status: GameStatus.LOADING }));

  const x = Math.floor(Math.random() * COLUMNS);
  const y = Math.floor(Math.random() * ROWS);
  const firstTile: Tile = {
    id: "0",
    value: 2,
    x,
    y,
    isActive: true,
  };
  await dispatch(addFirstTile(firstTile));

  const {
    game,
    tiles: { entities: tiles },
  } = getState();

  if (isGameActive(game)) {
    const { userMoves } = game;

    const newAvailableMoves = calculateAvailableMoves({
      tiles,
      newTileId: (userMoves.length + 1).toString(),
    });

    await dispatch(
      updateGameStatus({
        availableMoves: newAvailableMoves,
        status: GameStatus.IDLE,
      })
    );
  }
});

export const processUserMove = createAsyncThunk<
  void,
  ProcessUserMoveThunkArgs,
  { state: RootState }
>("game/processUserMove", async ({ direction }, { dispatch, getState }) => {
  await dispatch(logUserMove({ direction }));
  await dispatch(updateGameStatus({ status: GameStatus.LOADING }));

  const { game } = getState();

  if (isGameActive(game)) {
    const availableMoves = game.availableMoves[direction];

    if (!availableMoves) {
      await dispatch(
        finishGame({
          status: GameStatus.LOST,
          finishedAt: new Date().toString(),
          totalSteps: game.userMoves.length,
        })
      );
    } else {
      const { changedTiles, newTile } = availableMoves;

      if (changedTiles && Object.keys(changedTiles).length > 0) {
        await dispatch(updateTiles(changedTiles));
      }

      await dispatch(addTile(newTile));

      const {
        game: updatedGame,
        tiles: { entities: tiles },
      } = getState();

      if (isGameActive(updatedGame)) {
        const { highestValue, userMoves } = updatedGame;

        if (highestValue === 2048) {
          await dispatch(
            finishGame({
              status: GameStatus.WON,
              finishedAt: new Date().toString(),
              totalSteps: updatedGame.userMoves.length,
            })
          );
        } else {
          const newAvailableMoves = calculateAvailableMoves({
            tiles,
            newTileId: (userMoves.length + 1).toString(),
          });

          if (Object.keys(newAvailableMoves).length === 0) {
            await dispatch(
              finishGame({
                status: GameStatus.LOST,
                finishedAt: new Date().toString(),
                totalSteps: updatedGame.userMoves.length,
              })
            );
          } else {
            await dispatch(
              updateGameStatus({
                availableMoves: newAvailableMoves,
                status: GameStatus.IDLE,
              })
            );
          }
        }
      }
    }
  }

  const { game: processedGame } = getState();

  if (isGameFinished(processedGame)) {
    await dispatch(updateStatistics(processedGame));
  }
});

export const giveUpGame = createAsyncThunk<void, void, { state: RootState }>(
  "game/giveUpGame",
  async (_, { dispatch, getState }) => {
    const { game } = getState();

    if (isGameActive(game)) {
      await dispatch(
        finishGame({
          status: GameStatus.GIVEN_UP,
          finishedAt: new Date().toString(),
          totalSteps: game.userMoves.length,
        })
      );

      const { game: processedGame } = getState();

      if (isGameFinished(processedGame)) {
        await dispatch(updateStatistics(processedGame));
      }
    }
  }
);
