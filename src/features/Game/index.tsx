import React from "react";
import Actions from "~/components/Actions";
import Board from "~/components/Board";
import Controls from "~/components/Controls";
import GameMessage from "~/components/GameMessage";
import Page from "~/components/Page";
import Tile from "~/components/Tile";
import { useAppDispatch } from "~/features/App/hooks/useAppDispatch";
import { useAppSelector } from "~/features/App/hooks/useAppSelector";
import {
  selectGameStatus,
  selectIsGameIdle,
  selectIsGameStarted
} from "~/features/Game/store/selectors";
import {
  giveUpGame,
  processUserMove,
  startGameAndAddFirstTile
} from "~/features/Game/store/thunks";
import type { DirectionOptions } from "~/features/Game/types";
import { selectAllTileIds } from "~/features/Tiles/store/selectors";
import { isGameStatusDisabled } from "./utils/checkGameStatus";

const Game = (): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const tileIds = useAppSelector(selectAllTileIds);
  const status = useAppSelector(selectGameStatus);
  const isGameStarted = useAppSelector(selectIsGameStarted);
  const isGameIdle = useAppSelector(selectIsGameIdle);

  const handleGiveUp = async (): Promise<void> => {
    await dispatch(giveUpGame());
  };

  const handleStart = async (): Promise<void> => {
    await dispatch(startGameAndAddFirstTile());
  };

  const handleUserMove = async (direction: DirectionOptions): Promise<void> => {
    await dispatch(processUserMove({ direction }));
  };

  return (
    <Page>
      <Page.Section hasPadding>
        <Actions>
          <button onClick={handleGiveUp} disabled={!isGameIdle}>
            Give Up
          </button>
        </Actions>
      </Page.Section>
      <Page.Column>
        <Board>
          {isGameStarted &&
            tileIds.map((tileId) => <Tile key={tileId} id={tileId} />)}
          {isGameStatusDisabled(status) && (
            <GameMessage status={status} onClick={handleStart} />
          )}
        </Board>
      </Page.Column>
      <Page.Column>
        <Controls onUserMove={handleUserMove} isDisabled={!isGameIdle} />
      </Page.Column>
    </Page>
  );
};

export default Game;
