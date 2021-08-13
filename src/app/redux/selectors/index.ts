// types
import { OfficesData } from "../../services/BD/type/OfficesData";
import { Floors } from "../../services/BD/type/Floors";

// selectors
export const getAuthUser = (state: { auth: { user: string } }) =>
  state.auth.user;

export const getOfficesData = (state: { officesData: OfficesData }) =>
  state.officesData;

export const getFloorsData = (state: { workspaces: { floors: Floors } }) =>
  state.workspaces.floors;

export const getSelectedFloor = (state: {
  workspaces: { selectedFloor: number };
}) => state.workspaces.selectedFloor;
