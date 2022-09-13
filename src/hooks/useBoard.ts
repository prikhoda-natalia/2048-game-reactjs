import { useContext } from 'react';
import { BoardContext } from '../contexts';

const useBoard = () => {
  return useContext(BoardContext);
};

export default useBoard;
