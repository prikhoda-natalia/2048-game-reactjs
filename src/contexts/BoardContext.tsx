import React, { createContext, useMemo, useState } from 'react';
import type { BoardType } from '../types';
import { getBoardWithRandomCell, getEmptyBoard, getUpdatedBoard } from '../utils';

export const BoardContext = createContext({} as BoardProviderProps);

type BoardProviderProps = {
  animationDuration: number;
  board: BoardType;
  boardWidthInPixels: number;
  gameOn: boolean;
  gridSize: number;
  slideLeft: () => void;
  startGame: () => void;
};

export const BoardProvider = ({
  children,
}: {children: React.ReactNode}) => {
  const animationDuration= 250;
  const boardWidthInPixels = 500;
  const gridSize= 6;

  const [board, setBoard] = useState<BoardType>(getEmptyBoard(gridSize));
  const [gameOn, setGameOn] = useState(false);

  const startGameMemo = useMemo(() => () => {
    setGameOn(true);
    const boardWithRandomCell = getBoardWithRandomCell(board, gridSize);
    setBoard([...boardWithRandomCell]);
  }, [board]);

  const slideLeftMemo = useMemo(() => () => {
    const updatedBoard = getUpdatedBoard(board);
    const updateBoardWithRandomCell = getBoardWithRandomCell(updatedBoard, gridSize);
    setBoard([...updateBoardWithRandomCell]);
  }, [board]);

  const value = useMemo(
    () => ({
      animationDuration,
      board,
      boardWidthInPixels,
      gameOn,
      gridSize,
      slideLeft: slideLeftMemo,
      startGame: startGameMemo,
    }),
    [
      animationDuration,
      board,
      boardWidthInPixels,
      gameOn,
      gridSize,
      slideLeftMemo,
      startGameMemo,
    ]
  );
  return (
    <BoardContext.Provider value={value}>
      {children}
    </BoardContext.Provider>
  );
};
