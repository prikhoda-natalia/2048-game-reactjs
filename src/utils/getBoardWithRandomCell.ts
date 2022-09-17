import type { BoardType } from '../types';
import getRandomCellXY from './getRandomCellXY';

function getBoardWithRandomCell(board: BoardType, gridSize: number):BoardType {
  let [x, y] = getRandomCellXY(gridSize);
  while (board[x][y].value !== 0) {
    [x, y] = getRandomCellXY(gridSize);
  }
  board[x][y].value = 2;

  // get highest ID
  const flatBoard = board.flat(1);
  const highestId = Math.max(...flatBoard.map(o => o.id));
  board[x][y].id = highestId+1;

  return board;
}

export default getBoardWithRandomCell;
