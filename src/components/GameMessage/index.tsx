import React from "react";
import Confetti from "~/components/Confetti";
import { GameStatus } from "~/features/Game/types";
import type { DisabledGameStatus } from "~/features/Game/utils/checkGameStatus";
import s from "./GameMessage.module.scss";

type GameMessageProps = {
  status: DisabledGameStatus;
  onClick: () => void;
};

const GameMessage = ({
  onClick,
  status
}: GameMessageProps): React.JSX.Element => {
  const statusToMessagesMap: {
    [key in GameMessageProps["status"]]: {
      title: string;
      subtitle: string;
      buttonLabel: string;
    };
  } = {
    [GameStatus.NOT_STARTED]: {
      buttonLabel: "Start",
      title: "Welcome to the Game!",
      subtitle: "Press Start to begin."
    },
    [GameStatus.WON]: {
      buttonLabel: "Play again",
      title: "Congratulations!",
      subtitle: "You won the game!"
    },
    [GameStatus.LOST]: {
      buttonLabel: "Play again",
      title: "Game Over",
      subtitle: "Better luck next time!"
    },
    [GameStatus.GIVEN_UP]: {
      buttonLabel: "Play again",
      title: "Game Given Up",
      subtitle: "You can always try again."
    }
  };

  const handleCtaClick = (): void => {
    onClick();
  };

  return (
    <div className={s.gameMessage}>
      <h2 className={s.title}>{statusToMessagesMap[status].title}</h2>
      <p className={s.subtitle}>{statusToMessagesMap[status].subtitle}</p>
      <button onClick={handleCtaClick}>
        {statusToMessagesMap[status].buttonLabel}
      </button>
      {status === GameStatus.WON && <Confetti running />}
    </div>
  );
};

export default GameMessage;
