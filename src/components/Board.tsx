import type { BoardType } from '../types';
import styles from './Board.module.scss';
import Cell from './Cell';

type BoardProps = {
  board: BoardType;
}

const Board = ({board}: BoardProps) => {
  return (
    <div>
      {board.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className={styles.boardRow}>
              {row.map((cell, cellIndex) => {
                return <Cell key={`${rowIndex}${cellIndex}`} value={cell} />
              })}
            </div>
          )
        })}
    </div>
  );
}

export default Board;
