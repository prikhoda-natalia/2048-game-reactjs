import type { BoardType } from '../types';

function getMergedBoard(oldBoard:BoardType): BoardType {
  for (let i = 0; i < oldBoard.length; i++) {
    for (let j = 0; j < oldBoard[i].length; j++) {
      if (oldBoard[i][j] !== 0 && oldBoard[i][j] === oldBoard[i][j + 1]) {
        oldBoard[i][j] = oldBoard[i][j]*2;
        oldBoard[i][j + 1] = 0;
      }
    }
  }
  return oldBoard
}

export default getMergedBoard;
