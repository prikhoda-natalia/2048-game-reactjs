import React from "react";
import s from "./GameStatus.module.scss";

type GameStatusProps = {
  title: string;
  subtitle: string;
  actions: React.ReactNode;
};

const GameStatus = ({ actions, subtitle, title }: GameStatusProps) => {
  return (
    <div className={s.gameStatus}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.subtitle}>{subtitle}</p>
      {actions}
    </div>
  );
};

export default GameStatus;
