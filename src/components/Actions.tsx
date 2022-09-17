import { useState } from 'react';
import { useBoard } from '../hooks';

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
      {!gameOn && <button onClick={() => startGame()}>Start the game</button>}
      {gameOn && 
        <button disabled={animationOn} onClick={() => onActionClick('left')}>Left</button>
      }
    </div>
  );
}

export default Actions;
