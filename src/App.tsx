import { Actions, Board, Wrapper } from './components';
import { BoardProvider } from './contexts';

function App() {

  return (
    <Wrapper>
      <BoardProvider>
        <Board />
        <Actions />
      </BoardProvider>
    </Wrapper>
  );
}

export default App;
