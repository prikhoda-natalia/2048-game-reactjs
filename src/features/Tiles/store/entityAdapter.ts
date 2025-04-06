import { createEntityAdapter } from "@reduxjs/toolkit";
import { Tile } from "../types";

export const tilesAdapter = createEntityAdapter<Tile>();

export const tilesInitialState = tilesAdapter.getInitialState();
