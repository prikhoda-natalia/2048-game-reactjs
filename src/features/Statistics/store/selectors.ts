import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "~/features/App/types";
import type { StatisticsState } from "~/features/Statistics/types";
import { statisticsAdapter } from "./entityAdapter";

export const selectStatisticsState = (state: RootState): StatisticsState =>
  state.statistics;

export const statisticsSelectors = statisticsAdapter.getSelectors(
  selectStatisticsState
);

export const selectFinishedGamesTotal = (state: RootState): number =>
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
