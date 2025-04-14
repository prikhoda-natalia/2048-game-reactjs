import { createEntityAdapter } from "@reduxjs/toolkit";
import type { Tile } from "~/features/Tiles/types";

export const tilesAdapter = createEntityAdapter<Tile>();

export const tilesInitialState = tilesAdapter.getInitialState();
