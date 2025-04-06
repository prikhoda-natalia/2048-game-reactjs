import classNames from "classnames";
import { RootState } from "~/features/App/types";
import s from "./Tile.module.scss";
import { useAppSelector } from "~/features/App/hooks/useAppSelector";
import { selectTileById } from "~/features/Tiles/store/selectors";

type TileProps = {
  id: string;
};

const Tile = ({ id }: TileProps) => {
  const { x, y, value, isActive } = useAppSelector((state: RootState) =>
    selectTileById(state, id)
  );

  const style = {
    "--y": y,
    "--x": x,
    opacity: isActive ? 1 : 0,
  };

  const className = classNames({
    [s.tile]: true,
    [s[`tile-${value}`]]: true,
  });

  return (
    <div className={className} style={style}>
      {value}
    </div>
  );
};

export default Tile;
