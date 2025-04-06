import classNames from "classnames";
import { useCallback, useEffect, useMemo, useState } from "react";
import { DirectionOptions } from "~/features/Game/types";
import s from "./Controls.module.scss";
import { throttle } from "~/utils/helpers/throttle";

type ControlsProps = {
  onUserMove: (direction: DirectionOptions) => void;
  isDisabled: boolean;
};

const Controls = ({ onUserMove, isDisabled }: ControlsProps) => {
  const [activeDirection, setActiveDirection] =
    useState<DirectionOptions | null>(null);

  const handleUserMove = useCallback(
    (direction: DirectionOptions) => {
      setActiveDirection(direction);
      onUserMove(direction);

      setTimeout(() => setActiveDirection(null), 200);
    },
    [onUserMove]
  );

  const throttledHandleUserMove = useMemo(() => {
    const throttled = throttle((direction: DirectionOptions) => {
      handleUserMove(direction);
    }, 500);

    return throttled;
  }, [handleUserMove]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();
      event.stopPropagation();

      if (isDisabled) return;

      switch (event.key) {
        case "ArrowLeft":
          throttledHandleUserMove(DirectionOptions.LEFT);
          break;
        case "ArrowRight":
          throttledHandleUserMove(DirectionOptions.RIGHT);
          break;
        case "ArrowUp":
          throttledHandleUserMove(DirectionOptions.UP);
          break;
        case "ArrowDown":
          throttledHandleUserMove(DirectionOptions.DOWN);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      throttledHandleUserMove.cancel();
    };
  }, [throttledHandleUserMove, isDisabled]);

  return (
    <div className={s.controls}>
      <div className={s.buttons}>
        {Object.values(DirectionOptions).map((direction) => {
          const className = classNames({
            [s.button]: true,
            [s[`arrow-${direction}`]]: true,
            [s.active]: activeDirection === direction,
          });

          return (
            <button
              key={direction}
              className={className}
              onClick={() => throttledHandleUserMove(direction)}
              disabled={isDisabled}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Controls;
