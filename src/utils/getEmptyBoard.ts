import type { BoardType } from '../types';

function getEmptyBoard(gridSize: number):BoardType {
  let emptyBoard = [];
  for (let i = 0; i < gridSize; i++) {
    let emptyRow = [];
    for (let j = 0; j < gridSize; j++) {
      emptyRow.push({
        id: Number(`${i+1}${j}`), value: 0
      });
    }
    emptyBoard.push(emptyRow);
  }
  return emptyBoard;
}

export default getEmptyBoard;
