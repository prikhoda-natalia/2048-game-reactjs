import styles from './Board.module.scss';

type CellProps = {
  value: number;
}

const Cell = ({value}: CellProps) => {
  return <div className={styles.boardCell}>{value > 0 && value}</div>;
}

export default Cell;
