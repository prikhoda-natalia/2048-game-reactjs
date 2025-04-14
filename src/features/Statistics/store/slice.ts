import { createSlice } from "@reduxjs/toolkit";
import { GameStatus } from "~/features/Game/types";
import type { UpdateStatisticsAction } from "~/features/Statistics/types";
import { statisticsAdapter, statisticsInitialState } from "./entityAdapter";

const statisticsSlice = createSlice({
  name: "statistics",
  initialState: statisticsInitialState,
  reducers: {
    updateStatistics(state, { payload }: UpdateStatisticsAction) {
      statisticsAdapter.addOne(state, payload);

      if (payload.status === GameStatus.WON) {
        state.wonGameIds.push(payload.id);
      } else if (payload.status === GameStatus.LOST) {
        state.lostGameIds.push(payload.id);
      } else if (payload.status === GameStatus.GIVEN_UP) {
        state.givenUpGameIds.push(payload.id);
      }
    }
  }
});

export const { updateStatistics } = statisticsSlice.actions;

export default statisticsSlice.reducer;
