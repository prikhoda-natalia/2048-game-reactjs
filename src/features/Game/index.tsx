import Board from "~/components/Board";
import Tile from "~/components/Tile";
import { useAppSelector } from "~/features/App/hooks/useAppSelector";
import { selectAllTileIds } from "~/features/Tiles/store/selectors";
import { useAppDispatch } from "~/features/App/hooks/useAppDispatch";
import { DirectionOptions } from "~/features/Game/types";
import Controls from "~/components/Controls";
import { resetGame, startGame } from "~/features/Game/store/slice";
import { addFirstTile, processUserMove } from "~/features/Game/store/thunks";
import {
  selectIsGameActive,
  selectIsGameIdle,
  selectIsGameLost,
  selectIsGameStarted,
  selectIsGameWon,
} from "~/features/Game/store/selectors";
import GameStatus from "~/components/GameStatus";
import Page from "~/components/Page";

function Game() {
  const dispatch = useAppDispatch();

  const tileIds = useAppSelector(selectAllTileIds);
  const isGameStarted = useAppSelector(selectIsGameStarted);
  const isGameIdle = useAppSelector(selectIsGameIdle);
  const isGameActive = useAppSelector(selectIsGameActive);
  const isGameWon = useAppSelector(selectIsGameWon);
  const isGameLost = useAppSelector(selectIsGameLost);

  const handleReset = () => {
    dispatch(resetGame());
  };

  const handleStart = async () => {
    const startedAt = new Date();

    await dispatch(startGame({ startedAt: startedAt.toString() }));
    dispatch(addFirstTile());
  };

  const handleUserMove = (direction: DirectionOptions) => {
    dispatch(processUserMove({ direction }));
  };

  return (
    <Page>
      <Page.Section hasPadding>
        <button onClick={handleReset} disabled={!isGameIdle}>
          Reset
        </button>
      </Page.Section>
      <Page.Column>
        <Board>
          {isGameStarted ? (
            tileIds.map((tileId) => <Tile key={tileId} id={tileId} />)
          ) : (
            <GameStatus
              title="Welcome to the Game!"
              subtitle="Press Start to begin."
              actions={
                <button onClick={handleStart} disabled={isGameActive}>
                  Start
                </button>
              }
            />
          )}
          {isGameWon && (
            <GameStatus
              title="Congratulations!"
              subtitle="You won!"
              actions={<button onClick={handleStart}>Play Again</button>}
            />
          )}
          {isGameLost && (
            <GameStatus
              title="Game Over"
              subtitle="You lost! Try again."
              actions={<button onClick={handleStart}>Play Again</button>}
            />
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
