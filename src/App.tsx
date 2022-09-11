import { useState } from 'react';
import { Actions, Board } from './components';
import { getBoardWithRandomCell, getEmptyBoard, getUpdatedBoard } from './hooks';
import type { BoardType } from './types';
import styles from './App.module.scss';

function App() {
  const [board, setBoard] = useState<BoardType>(getEmptyBoard());
  const [gameOn, setGameOn] = useState(false);

  const slideLeft = () => {
    const updatedBoard = getUpdatedBoard(board);
    const updateBoardWithRandomCell = getBoardWithRandomCell(updatedBoard);
    setBoard([...updateBoardWithRandomCell]);
  }
  const startGame = () => {
    setGameOn(true);
    const boardWithRandomCell = getBoardWithRandomCell(board);
    setBoard([...boardWithRandomCell]);
  }

  return (
    <div className={styles.App}>
      {!gameOn && <button onClick={() => startGame()}>Start the game</button>}
      {gameOn && board && (
        <div>
          <Board board={board}/>
          <Actions onLeft={slideLeft} />
        </div>
      )}
    </div>
  );
}

export default App;
