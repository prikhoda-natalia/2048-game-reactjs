import type { BoardType } from '../types';

function getMergedBoard(board:BoardType): BoardType {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const currentValue = board[i][j].value;
      const nextValue = board[i][j + 1] && board[i][j + 1].value;
      if (currentValue !== 0 && currentValue === nextValue) {
        board[i][j].value = currentValue*2;
        board[i][j + 1].value = 0;
      }
    }
  }
  return board
}

export default getMergedBoard;
