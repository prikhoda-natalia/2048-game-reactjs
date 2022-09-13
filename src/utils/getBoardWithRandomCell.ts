import type { BoardType } from '../types';
import getRandomCellXY from './getRandomCellXY';

function getBoardWithRandomCell(board: BoardType):BoardType {
  let [x, y] = getRandomCellXY();
  while (board[x][y].value !== 0) {
    [x, y] = getRandomCellXY();
  }
  board[x][y].value = 2;

  // get highest ID
  const flatBoard = board.flat(1);
  const highestId = Math.max(...flatBoard.map(o => o.id));
  board[x][y].id = highestId+1;

  return board;
}

export default getBoardWithRandomCell;
