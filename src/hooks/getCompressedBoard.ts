import type { BoardType } from '../types';
import getEmptyBoard from './getEmptyBoard';

function getCompressedBoard(oldBoard:BoardType): BoardType {
  let newBoard = getEmptyBoard();
  for (let i = 0; i < oldBoard.length; i++) {
    let colIndex = 0;
    for (let j = 0; j < oldBoard[i].length; j++) {
      if (oldBoard[i][j] !== 0) {
        newBoard[i][colIndex] = oldBoard[i][j];
        colIndex++;
      }
    }
  }
  return newBoard
}

export default getCompressedBoard;
