import styles from './Actions.module.scss';

type ActionsProps = {
  onLeft: () => void
}

const Actions = ({onLeft}: ActionsProps) => {
  return (
    <div>
      <button onClick={() => onLeft()}>Left</button>
    </div>
  );
}

export default Actions;
