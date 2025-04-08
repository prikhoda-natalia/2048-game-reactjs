import Board from "~/components/Board";
import Tile from "~/components/Tile";
import { useAppSelector } from "~/features/App/hooks/useAppSelector";
import { selectAllTileIds } from "~/features/Tiles/store/selectors";
import { useAppDispatch } from "~/features/App/hooks/useAppDispatch";
import { DirectionOptions } from "~/features/Game/types";
import Controls from "~/components/Controls";
import {
  giveUpGame,
  processUserMove,
  startGameAndAddFirstTile,
} from "~/features/Game/store/thunks";
import {
  selectGameStatus,
  selectIsGameIdle,
  selectIsGameStarted,
} from "~/features/Game/store/selectors";
import GameMessage from "~/components/GameMessage";
import Page from "~/components/Page";
import Actions from "~/components/Actions";
import { isGameStatusDisabled } from "./utils/checkGameStatus";

function Game() {
  const dispatch = useAppDispatch();

  const tileIds = useAppSelector(selectAllTileIds);
  const status = useAppSelector(selectGameStatus);
  const isGameStarted = useAppSelector(selectIsGameStarted);
  const isGameIdle = useAppSelector(selectIsGameIdle);

  const handleGiveUp = async () => {
    await dispatch(giveUpGame());
  };

  const handleStart = async () => {
    await dispatch(startGameAndAddFirstTile());
  };

  const handleUserMove = async (direction: DirectionOptions) => {
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
}

export default Game;
