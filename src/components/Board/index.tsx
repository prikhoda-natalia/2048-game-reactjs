import React from "react";
import s from "./Board.module.scss";

type BoardProps = {
  children: React.ReactNode;
};

const Board = ({ children }: BoardProps): React.JSX.Element => {
  const cells = Array.from({ length: 36 }, (_, index) => index);

  return (
    <div className={s.board}>
      {cells.map((cell) => (
        <div key={cell} className={s.cell} />
      ))}
      {children}
    </div>
  );
};

export default Board;
