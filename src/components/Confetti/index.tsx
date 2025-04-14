import React, { useEffect, useState, useRef } from "react";
import s from "./Confetti.module.scss";

const colors = ["#FFC700", "#FF0000", "#2E3192", "#41BBC7", "#7FFF00"];

const generateBurst = (count = 20): React.JSX.Element[] => {
  return Array.from({ length: count }, () => {
    const style = {
      left: `${Math.random() * 100}%`,
      animationDuration: `${3 + Math.random()}s`,
      animationDelay: `${Math.random() * 0.3}s`,
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      width: `${8 + Math.random() * 4}px`,
      height: `${8 + Math.random() * 4}px`
    };
    return <div key={Math.random()} className={s.piece} style={style} />;
  });
};

type ConfettiProps = {
  running: boolean;
};

const Confetti = ({ running }: ConfettiProps): React.JSX.Element => {
  const [confetti, setConfetti] = useState<React.JSX.Element[]>([]);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (running) {
      const end = Date.now() + 10000;

      intervalRef.current = setInterval(() => {
        if (Date.now() > end) {
          clearInterval(intervalRef.current!);
        } else {
          setConfetti((prev) => [...prev, ...generateBurst()]);
        }
      }, 500);
    }

    return (): void => {
      clearInterval(intervalRef.current!);
      setConfetti([]);
    };
  }, [running]);

  return <div className={s.confetti}>{confetti}</div>;
};

export default Confetti;
