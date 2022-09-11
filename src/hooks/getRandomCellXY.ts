import type { CellXYType } from '../types';

function getRandomCellXY():CellXYType {
  const randomX = Math.floor(Math.random() * 4);
  const randomY = Math.floor(Math.random() * 4);
  return [randomX, randomY];
}

export default getRandomCellXY;
