import { createEntityAdapter } from "@reduxjs/toolkit";
import { FinishedGameState } from "~/features/Game/types";

export const statisticsAdapter = createEntityAdapter<FinishedGameState>();

export const statisticsInitialState = statisticsAdapter.getInitialState<{
  wonGameIds: FinishedGameState["id"][];
  lostGameIds: FinishedGameState["id"][];
  givenUpGameIds: FinishedGameState["id"][];
}>({
  wonGameIds: [],
  lostGameIds: [],
  givenUpGameIds: [],
});
