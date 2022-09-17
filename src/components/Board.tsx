import { useBoard } from '../hooks';
import styles from './Board.module.scss';
import Cell from './Cell';

const Board = () => {
  const { board, gameOn } = useBoard();

  if (!gameOn) {
    return null;
  }

  return (
    <div className={styles.boardWrapper}>
      <div className={styles.board}>
        {gameOn && board.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className={styles.boardRow}>
              {row.map((cell, cellIndex) => {
                return <Cell key={cell.id} {...cell} position={[cellIndex, rowIndex]} />
              })}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Board;
