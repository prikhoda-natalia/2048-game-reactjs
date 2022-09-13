import { useBoard } from '../hooks';

const Actions = () => {
  const { gameOn, slideLeft, startGame } = useBoard();
  return (
    <div>
      {!gameOn && <button onClick={() => startGame()}>Start the game</button>}
      {gameOn && 
        <button onClick={() => slideLeft()}>Left</button>
      }
    </div>
  );
}

export default Actions;
