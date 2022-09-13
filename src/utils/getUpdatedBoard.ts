import type { BoardType } from '../types';
import getCompressedBoard from './getCompressedBoard';
import getMergedBoard from './getMergedBoard';

function getUpdatedBoard(board: BoardType):BoardType {
  const compressedBoard = getCompressedBoard(board);
  const mergedBoard = getMergedBoard(compressedBoard);

  return getCompressedBoard(mergedBoard);
}

export default getUpdatedBoard;
