import { Update } from "@reduxjs/toolkit";
import { RootState } from "~/features/App/types";
import { DirectionOptions, GameState } from "~/features/Game/types";
import { COLUMNS, ROWS } from "~/features/Game/utils/constants";
import { directionToCoordinates } from "~/features/Game/utils/directionToCoordinates";
import { Tile } from "../../types";

type CalculateAvailableMovesProps = {
  tiles: RootState["tiles"]["entities"];
  newTileId: string;
};

export function calculateAvailableMoves({
  tiles,
  newTileId,
}: CalculateAvailableMovesProps): GameState["availableMoves"] {
  const directions = Object.values(DirectionOptions);

  const availableMoves: GameState["availableMoves"] = {};

  for (const direction of directions) {
    const {
      diffX,
      diffY,
      xLoopContinue,
      xLoopStep,
      xLoopStart,
      yLoopContinue,
      yLoopStart,
      yLoopStep,
    } = directionToCoordinates[direction];

    const cellsMatrix: (string | null)[][] = Array.from({ length: ROWS }, () =>
      Array(COLUMNS).fill(null)
    );

    Object.values(tiles).forEach((tile) => {
      if (tile.isActive) {
        const { x, y } = tile;
        cellsMatrix[y][x] = tile.id;
      }
    });

    const changedTiles: Record<string, Update<Tile, Tile["id"]>> = {};

    // Move
    for (let y = yLoopStart; yLoopContinue(y); y += yLoopStep) {
      for (let x = xLoopStart; xLoopContinue(x); x += xLoopStep) {
        let [currentX, currentY] = [x, y];

        while (xLoopContinue(currentX) && yLoopContinue(currentY)) {
          const [targetX, targetY] = [currentX + diffX, currentY + diffY];
          const currentTileId = cellsMatrix[currentY][currentX];
          const targetTileId = cellsMatrix[targetY][targetX];

          if (currentTileId === null || targetTileId !== null) {
            break;
          }

          cellsMatrix[currentY][currentX] = null;
          cellsMatrix[targetY][targetX] = currentTileId;

          changedTiles[currentTileId] = {
            id: currentTileId,
            changes: {
              x: targetX,
              y: targetY,
            },
          };

          currentX = targetX;
          currentY = targetY;
        }
      }
    }

    // Collapse
    for (let y = yLoopStart; yLoopContinue(y); y += yLoopStep) {
      for (let x = xLoopStart; xLoopContinue(x); x += xLoopStep) {
        const [currentX, currentY] = [x, y];
        const [targetX, targetY] = [currentX + diffX, currentY + diffY];
        const currentTileId = cellsMatrix[currentY][currentX];
        const targetTileId = cellsMatrix[targetY][targetX];

        const currentTile = currentTileId ? tiles[currentTileId] : undefined;
        const targetTile = targetTileId ? tiles[targetTileId] : undefined;

        if (
          !!currentTile &&
          !!targetTile &&
          currentTile.value === targetTile.value
        ) {
          const targetTileChanges = changedTiles[targetTile.id]?.changes || {};

          changedTiles[targetTile.id] = {
            id: targetTile.id,
            changes: {
              ...targetTileChanges,
              value: currentTile.value + targetTile.value,
            },
          };

          cellsMatrix[currentY][currentX] = null;
          changedTiles[currentTile.id] = {
            id: currentTile.id,
            changes: {
              x: targetX,
              y: targetY,
              isActive: false,
            },
          };
        }
      }
    }

    // Add new tile
    const emptyCells = cellsMatrix.reduce((acc: string[], row, y) => {
      row.forEach((tileId, x) => {
        if (tileId === null) {
          acc.push(`${x}-${y}`);
        }
      });
      return acc;
    }, []);

    if (emptyCells.length > 0) {
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const randomCell = emptyCells[randomIndex];
      const [x, y] = randomCell.split("-").map(Number);

      const nextNewTile: Tile = {
        id: newTileId,
        value: 2,
        x,
        y,
        isActive: true,
      };

      cellsMatrix[y][x] = nextNewTile.id;

      availableMoves[direction] = {
        newTile: nextNewTile,
      };
      if (Object.values(changedTiles).length > 0) {
        availableMoves[direction].changedTiles = Object.values(changedTiles);
      }
    }
  }

  return availableMoves;
}
