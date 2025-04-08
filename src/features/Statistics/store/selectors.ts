import { RootState } from "~/features/App/types";
import { statisticsAdapter } from "./entityAdapter";
import { createSelector } from "@reduxjs/toolkit";

export const selectStatisticsState = (state: RootState) => state.statistics;

export const statisticsSelectors = statisticsAdapter.getSelectors(
  selectStatisticsState
);

export const selectFinishedGamesTotal = (state: RootState) =>
  statisticsSelectors.selectTotal(state);

export const selectWonGamesTotal = createSelector(
  selectStatisticsState,
  (statisticsState) => statisticsState.wonGameIds.length
);

export const selectLostGamesTotal = createSelector(
  selectStatisticsState,
  (statisticsState) => statisticsState.lostGameIds.length
);

export const selectGivenUpGamesTotal = createSelector(
  selectStatisticsState,
  (statisticsState) => statisticsState.givenUpGameIds.length
);
