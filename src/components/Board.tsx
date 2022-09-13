import { useBoard } from '../hooks';
import styles from './Board.module.scss';
import Cell from './Cell';

const Board = () => {
  const { board, gameOn } = useBoard();
  return (
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
  );
}

export default Board;
