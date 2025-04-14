import type { EntityState, PayloadAction } from "@reduxjs/toolkit";
import type { FinishedGameState } from "~/features/Game/types";

export type StatisticsState = EntityState<FinishedGameState, string> & {
  wonGameIds: FinishedGameState["id"][];
  lostGameIds: FinishedGameState["id"][];
  givenUpGameIds: FinishedGameState["id"][];
};

export type UpdateStatisticsAction = PayloadAction<FinishedGameState>;
