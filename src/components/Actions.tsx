import { useState } from 'react';
import { useBoard } from '../hooks';
import styles from './Actions.module.scss';

const Actions = () => {
  const [animationOn, setAnimationOn] = useState(false);
  const { animationDuration, gameOn, slideLeft, startGame } = useBoard();

  const onActionClick = (direction: string) => {
    setAnimationOn(true);
    switch (direction) {
      case 'left': {
        slideLeft();
        break;
      }
      default: {
        return null
      }
    }
    setTimeout(() => {
      setAnimationOn(false);
    }, animationDuration);
  }

  return (
    <div>
      {!gameOn && <button className={styles.start} onClick={() => startGame()}>Start</button>}
      {gameOn && 
        <button className={styles.actionButton} disabled={animationOn} onClick={() => onActionClick('left')}>Left</button>
      }
    </div>
  );
}

export default Actions;
