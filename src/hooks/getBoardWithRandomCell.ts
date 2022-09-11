import type { BoardType } from '../types';
import getRandomCellXY from './getRandomCellXY';

function getBoardWithRandomCell(board: BoardType):BoardType {
  let [x, y] = getRandomCellXY();
  while (board[x][y] !== 0) {
    [x, y] = getRandomCellXY();
  }
  board[x][y] = 2;

  return board;
}

export default getBoardWithRandomCell;
