import type { BoardType } from '../types';
import getBoardWithZeroValues from './getBoardWithZeroValues';

function getCompressedBoard(oldBoard:BoardType): BoardType {
  let newBoard = getBoardWithZeroValues(oldBoard);
  for (let i = 0; i < oldBoard.length; i++) {
    let colIndex = 0;
    for (let j = 0; j < oldBoard[i].length; j++) {
      const currentCell = oldBoard[i][j];
      if (currentCell.value !== 0) {
        newBoard[i][colIndex] = currentCell;
        const flatBoard = oldBoard.flat(1);
        const highestId = Math.max(...flatBoard.map(o => o.id));
        newBoard[i][j].id = highestId+1;
        colIndex++;
      }
    }
  }
  return newBoard
}

export default getCompressedBoard;
