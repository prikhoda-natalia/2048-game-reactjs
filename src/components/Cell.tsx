import { useBoard } from '../hooks';
import type { CellType } from '../types';
import styles from './Cell.module.scss';

const Cell = ({position, value}: CellType & {position: Array<number>}) => {
  const { boardWidthInPixels, gridSize } = useBoard();

  const positionToPixels = (position: number) => {
    return (position / gridSize) * (boardWidthInPixels as number);
  };

  const style = {
    top: positionToPixels(position[1]),
    left: positionToPixels(position[0]),
    width: `${boardWidthInPixels/gridSize}px`,
    height: `${boardWidthInPixels/gridSize}px`,
  };

  return <div className={styles.cell} style={style}>{value > 0 && value}</div>;
}

export default Cell;
 