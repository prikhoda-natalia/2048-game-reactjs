import type { CellXYType } from '../types';

function getRandomCellXY(gridSize: number):CellXYType {
  const randomX = Math.floor(Math.random() * gridSize);
  const randomY = Math.floor(Math.random() * gridSize);
  return [randomX, randomY];
}

export default getRandomCellXY;
