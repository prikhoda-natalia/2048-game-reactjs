import classNames from "classnames";
import React from "react";
import { useAppSelector } from "~/features/App/hooks/useAppSelector";
import type { RootState } from "~/features/App/types";
import { selectTileById } from "~/features/Tiles/store/selectors";
import s from "./Tile.module.scss";

type TileProps = {
  id: string;
};

const Tile = ({ id }: TileProps): React.JSX.Element => {
  const { x, y, value, isActive } = useAppSelector((state: RootState) =>
    selectTileById(state, id)
  );

  const style = {
    "--y": y,
    "--x": x,
    opacity: isActive ? 1 : 0
  };

  const className = classNames({
    [s.tile]: true,
    [s[`tile-${value}`]]: true
  });

  return (
    <div className={className} style={style}>
      {value}
    </div>
  );
};

export default Tile;
