import type { BoardType } from '../types';

function getBoardWithZeroValues(board:BoardType):BoardType {
  const boardWithZeroValues = board.map(row => {
    const rowWithZeroValue = row.map(cell => {
      return {...cell, value: 0}
    });
    return rowWithZeroValue;
  }
)
return boardWithZeroValues;
}

export default getBoardWithZeroValues;
