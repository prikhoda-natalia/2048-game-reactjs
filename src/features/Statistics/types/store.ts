import { PayloadAction } from "@reduxjs/toolkit";
import { FinishedGameState } from "~/features/Game/types";

export type UpdateStatisticsAction = PayloadAction<FinishedGameState>;
