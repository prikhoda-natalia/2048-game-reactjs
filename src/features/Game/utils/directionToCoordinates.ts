import { DirectionOptions } from "~/features/Game/types";
import { COLUMNS, ROWS } from "./constants";

export const directionToCoordinates: Record<
  DirectionOptions,
  {
    diffX: number;
    diffY: number;
    xLoopContinue: (x: number) => boolean;
    xLoopStep: number;
    xLoopStart: number;
    yLoopContinue: (y: number) => boolean;
    yLoopStart: number;
    yLoopStep: number;
  }
> = {
  [DirectionOptions.LEFT]: {
    diffX: -1,
    diffY: 0,
    xLoopContinue: (x) => x >= 1 && x < COLUMNS,
    xLoopStart: 1,
    xLoopStep: 1,
    yLoopContinue: (y) => y >= 0 && y < ROWS,
    yLoopStart: 0,
    yLoopStep: 1
  },
  [DirectionOptions.RIGHT]: {
    diffX: 1,
    diffY: 0,
    xLoopContinue: (x) => x >= 0 && x <= COLUMNS - 2,
    xLoopStart: COLUMNS - 2,
    xLoopStep: -1,
    yLoopContinue: (y) => y >= 0 && y < ROWS,
    yLoopStart: 0,
    yLoopStep: 1
  },
  [DirectionOptions.UP]: {
    diffX: 0,
    diffY: -1,
    xLoopContinue: (x) => x >= 0 && x < COLUMNS,
    xLoopStart: 0,
    xLoopStep: 1,
    yLoopContinue: (y) => y >= 1 && y < ROWS,
    yLoopStart: 1,
    yLoopStep: 1
  },
  [DirectionOptions.DOWN]: {
    diffX: 0,
    diffY: 1,
    xLoopContinue: (x) => x >= 0 && x < COLUMNS,
    xLoopStart: 0,
    xLoopStep: 1,
    yLoopContinue: (y) => y >= 0 && y <= ROWS - 2,
    yLoopStart: ROWS - 2,
    yLoopStep: -1
  }
};
